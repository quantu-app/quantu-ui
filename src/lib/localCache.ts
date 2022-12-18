import { debounce } from '@aicacia/debounce';
import { writable, type Updater, type Writable, type Subscriber, get, derived } from 'svelte/store';
import { v4 } from 'uuid';

export type ILocalCacheMeta = {
	updated: number;
	synced: number;
};

const localCacheTasksWritable = writable<number>(0);

export const localCacheTasks = derived(localCacheTasksWritable, (tasks) => tasks);

function addTask() {
	localCacheTasksWritable.update((tasks) => tasks + 1);
}
function removeTask() {
	localCacheTasksWritable.update((tasks) => tasks - 1);
}

export function localCache<T>(
	name: string,
	{ defaultUpdateDebounceMS = 300 }: { defaultUpdateDebounceMS?: number } = {}
) {
	const prefixMeta = `quantu:${name}:meta:`;
	const prefixValue = `quantu:${name}:value:`;
	const localMetasWritable = writable<{ [id: string]: ILocalCacheMeta }>(getLocalMetas());
	const localMetas = derived(localMetasWritable, (localIds) => localIds);

	function createStore(id: string, store: Writable<T>, updateDebounceMS: number): Writable<T> {
		const debounceSetLocalDocument = debounce(
			(value: T) => {
				setLocal(id, value);
			},
			updateDebounceMS,
			{
				before: addTask,
				after: removeTask
			}
		);

		function set(value: T) {
			debounceSetLocalDocument(value);
			return store.set(value);
		}
		function update(updater: Updater<T>) {
			return set(updater(get(store)));
		}
		function subscribe(subscriber: Subscriber<T>, invalidator: (value?: T) => void) {
			return store.subscribe(subscriber, invalidator);
		}

		return {
			set,
			update,
			subscribe
		};
	}

	function create(
		value: T,
		updateDebounceMS = defaultUpdateDebounceMS
	): [id: string, store: Writable<T>] {
		const id = createId();
		setLocal(id, value);
		return [id, createStore(id, writable(value), updateDebounceMS)];
	}

	function fromLocal(id: string, updateDebounceMS = defaultUpdateDebounceMS) {
		return createStore(id, writable(getLocalValue(id)), updateDebounceMS);
	}

	function getLocalMetas() {
		if (typeof localStorage === 'undefined') {
			return {};
		}
		return Object.keys(localStorage).reduce((metas, key) => {
			if (key.startsWith(prefixMeta)) {
				const id = key.substring(prefixMeta.length);
				const meta = getLocalMeta(id);
				if (meta) {
					metas[id] = meta;
				}
			}
			return metas;
		}, {} as { [id: string]: ILocalCacheMeta });
	}

	function hasLocal(id: string) {
		return prefixMeta + id in localStorage;
	}

	function getLocalValue(id: string) {
		const json = localStorage.getItem(prefixValue + id);
		if (json) {
			return JSON.parse(json) as T;
		} else {
			return undefined;
		}
	}
	function setLocalValue(id: string, value: T) {
		localStorage.setItem(prefixValue + id, JSON.stringify(value));
	}

	function getLocalMeta(id: string) {
		const json = localStorage.getItem(prefixMeta + id);
		if (json) {
			return JSON.parse(json) as ILocalCacheMeta;
		} else {
			return undefined;
		}
	}
	function setLocalMeta(id: string, meta: ILocalCacheMeta) {
		localMetasWritable.update((localMetas) => ({ ...localMetas, [id]: meta }));
		localStorage.setItem(prefixMeta + id, JSON.stringify(meta));
	}

	function setLocal(id: string, value: T) {
		const now = Date.now();
		let meta = getLocalMeta(id);
		if (meta) {
			meta.updated = now;
		} else {
			meta = {
				updated: now,
				synced: 0
			};
		}
		setLocalMeta(id, meta);
		setLocalValue(id, value);
	}

	function markLocalSynced(id: string) {
		const now = Date.now();
		const meta = getLocalMeta(id);
		if (meta) {
			meta.synced = now;
			setLocalMeta(id, meta);
			return true;
		} else {
			return false;
		}
	}

	function deleteLocal(id: string) {
		const localMetas = get(localMetasWritable);
		if (id in localMetas) {
			const newLocalMetas = { ...localMetas };
			delete newLocalMetas[id];
			localMetasWritable.set(newLocalMetas);
		}
		localStorage.removeItem(prefixMeta + id);
		localStorage.removeItem(prefixValue + id);
	}

	function createId(): string {
		let id = v4();
		while (hasLocal(id)) {
			id = v4();
		}
		return id;
	}

	return {
		create,
		fromLocal,
		deleteLocal,
		markLocalSynced,
		localMetas
	};
}
