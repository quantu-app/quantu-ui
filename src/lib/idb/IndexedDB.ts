import { type IDBPDatabase, type DBSchema, openDB, type OpenDBCallbacks } from 'idb';
import EventEmitter from 'eventemitter3';
import type { Question, Quiz } from '$lib/openapi/quantu';

const DATABASE_NAME = 'quantu';
const DATABASE_VERSION = 1;
const DATABASE_OPTIONS: OpenDBCallbacks<IndexedDBSchema> = {
	upgrade(db, _oldVersion, newVersion) {
		if (newVersion === 1) {
			const quizStore = db.createObjectStore('quizzes', {
				keyPath: 'local_id',
				autoIncrement: true
			});
			quizStore.createIndex('user_id', 'user_id');

			const questionStore = db.createObjectStore('questions', {
				keyPath: 'local_id',
				autoIncrement: true
			});
			questionStore.createIndex('user_id', 'user_id');
		}
	}
};

export type LocalQuiz = Quiz & { local_deleted: number; local_id: number };
export type LocalQuestion = Question & {
	local_deleted: number;
	local_id: number;
	local_learnable_resource: number;
};

export interface IndexedDBSchema extends DBSchema {
	quizzes: {
		value: LocalQuiz;
		key: number;
		indexes: { id: number; user_id: number; local_id: number; local_deleted: number };
	};
	questions: {
		value: LocalQuestion;
		key: number;
		indexes: {
			id: number;
			user_id: number;
			learnable_resource_id: number;
			local_learnable_resource: number;
			local_id: number;
			local_deleted: number;
		};
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
