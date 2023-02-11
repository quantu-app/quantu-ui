/* tslint:disable */
/* eslint-disable */
/**
 * QuantU Services API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Update a Question
 * @export
 * @interface PatchApiQuestionsId
 */
export interface PatchApiQuestionsId {
	/**
	 *
	 * @type {string}
	 * @memberof PatchApiQuestionsId
	 */
	name?: string;
	/**
	 *
	 * @type {number}
	 * @memberof PatchApiQuestionsId
	 */
	item_order_position?: number;
	/**
	 *
	 * @type {object}
	 * @memberof PatchApiQuestionsId
	 */
	data?: object;
	/**
	 *
	 * @type {string}
	 * @memberof PatchApiQuestionsId
	 */
	question_type?: PatchApiQuestionsIdQuestionTypeEnum;
}

/**
 * @export
 */
export const PatchApiQuestionsIdQuestionTypeEnum = {
	FlashCard: 'flash_card'
} as const;
export type PatchApiQuestionsIdQuestionTypeEnum =
	(typeof PatchApiQuestionsIdQuestionTypeEnum)[keyof typeof PatchApiQuestionsIdQuestionTypeEnum];

/**
 * Check if a given object implements the PatchApiQuestionsId interface.
 */
export function instanceOfPatchApiQuestionsId(value: object): boolean {
	let isInstance = true;

	return isInstance;
}

export function PatchApiQuestionsIdFromJSON(json: any): PatchApiQuestionsId {
	return PatchApiQuestionsIdFromJSONTyped(json, false);
}

export function PatchApiQuestionsIdFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): PatchApiQuestionsId {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		name: !exists(json, 'name') ? undefined : json['name'],
		item_order_position: !exists(json, 'item_order_position')
			? undefined
			: json['item_order_position'],
		data: !exists(json, 'data') ? undefined : json['data'],
		question_type: !exists(json, 'question_type') ? undefined : json['question_type']
	};
}

export function PatchApiQuestionsIdToJSON(value?: PatchApiQuestionsId | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		name: value.name,
		item_order_position: value.item_order_position,
		data: value.data,
		question_type: value.question_type
	};
}
