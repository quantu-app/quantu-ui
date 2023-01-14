import { type IDBPDatabase, type DBSchema, openDB, type OpenDBCallbacks } from 'idb';
import EventEmitter from 'eventemitter3';
import type { Quiz } from '../api/quizzes';

const DATABASE_NAME = 'quantu';
const DATABASE_VERSION = 1;
const DATABASE_OPTIONS: OpenDBCallbacks<IndexedDBSchema> = {
	upgrade(db) {
		const quizStore = db.createObjectStore('quizzes', {
			keyPath: 'local_id',
			autoIncrement: true
		});
		quizStore.createIndex('id', 'id');
		quizStore.createIndex('local_id', 'local_id');
		quizStore.createIndex('local_deleted', 'local_deleted');
	}
};

export type LocalSchema<T> = T & { local_deleted: number; local_id: number };

export interface IndexedDBSchema extends DBSchema {
	quizzes: {
		value: LocalSchema<Quiz>;
		key: number;
		indexes: { id: number; local_id: number; local_deleted: number };
	};
}

export function getIndexedDB() {
	return openIndexedDB(DATABASE_NAME, DATABASE_VERSION, DATABASE_OPTIONS);
}

let INDEXED_DB: IDBPDatabase<IndexedDBSchema> | undefined;
let INDEXED_DB_OPENING = false;
const INDEXED_DB_EMITTER = new EventEmitter<{ db: IDBPDatabase<IndexedDBSchema> }>();

function openIndexedDB(
	name: string,
	version: number,
	options: OpenDBCallbacks<IndexedDBSchema> = {}
): Promise<IDBPDatabase<IndexedDBSchema>> {
	if (INDEXED_DB) {
		return Promise.resolve(INDEXED_DB as IDBPDatabase<IndexedDBSchema>);
	} else if (INDEXED_DB_OPENING) {
		return new Promise((resolve) => INDEXED_DB_EMITTER.once('db', resolve));
	} else {
		INDEXED_DB_OPENING = true;
		return openDB<IndexedDBSchema>(name, version, options)
			.then((db) => {
				db.addEventListener('close', () => {
					INDEXED_DB = undefined;
				});
				INDEXED_DB = db;
				INDEXED_DB_EMITTER.emit('db', db);
				return db;
			})
			.finally(() => {
				INDEXED_DB_OPENING = false;
			});
	}
}
