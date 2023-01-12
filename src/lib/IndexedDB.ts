import { type IDBPDatabase, type DBSchema, openDB, type OpenDBCallbacks } from 'idb';
import EventEmitter from 'eventemitter3';

export class IndexedDB<T> {
	private name: string;
	private version: number;
	private options: OpenDBCallbacks<IndexedDBSchema<T>>;

	constructor(name: string, version: number, options: OpenDBCallbacks<IndexedDBSchema<T>> = {}) {
		this.name = name;
		this.version = version;
		this.options = options;
	}

	async getDB() {
		return await getIndexedDB(this.name, this.version, this.options);
	}
}

type IndexedDBSchema<K, T> = DBSchema & {
	[table: K]: T;
};

const INDEXED_DBS: { [key: string]: IDBPDatabase<IndexedDBSchema<unknown>> } = {};
const INDEXED_DBS_OPENING = new Set<string>();
const INDEXED_DB_EMITTER = new EventEmitter<{ db: IDBPDatabase<IndexedDBSchema<unknown>> }>();

function getIndexedDB<T>(
	name: string,
	version: number,
	options: OpenDBCallbacks<IndexedDBSchema<T>> = {}
): Promise<IDBPDatabase<IndexedDBSchema<T>>> {
	const dbKey = `${name}:${version}`;
	const db = INDEXED_DBS[dbKey];

	if (db) {
		return Promise.resolve(db as IDBPDatabase<IndexedDBSchema<T>>);
	} else if (INDEXED_DBS_OPENING.has(dbKey)) {
		return new Promise((resolve) => INDEXED_DB_EMITTER.once('db', resolve));
	} else {
		INDEXED_DBS_OPENING.add(dbKey);
		return openDB<IndexedDBSchema<T>>(name, version, options)
			.then((db) => {
				INDEXED_DBS[dbKey] = db as IDBPDatabase<IndexedDBSchema<unknown>>;
				INDEXED_DB_EMITTER.emit('db', db);
				return db;
			})
			.finally(() => {
				INDEXED_DBS_OPENING.delete(dbKey);
			});
	}
}
