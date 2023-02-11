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
 * Move a Question to a new position within the ordered questions list
 * @export
 * @interface PatchApiQuestionsIdMove
 */
export interface PatchApiQuestionsIdMove {
	/**
	 *
	 * @type {number}
	 * @memberof PatchApiQuestionsIdMove
	 */
	item_order_position: number;
}

/**
 * Check if a given object implements the PatchApiQuestionsIdMove interface.
 */
export function instanceOfPatchApiQuestionsIdMove(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && 'item_order_position' in value;

	return isInstance;
}

export function PatchApiQuestionsIdMoveFromJSON(json: any): PatchApiQuestionsIdMove {
	return PatchApiQuestionsIdMoveFromJSONTyped(json, false);
}

export function PatchApiQuestionsIdMoveFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean
): PatchApiQuestionsIdMove {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		item_order_position: json['item_order_position']
	};
}

export function PatchApiQuestionsIdMoveToJSON(value?: PatchApiQuestionsIdMove | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		item_order_position: value.item_order_position
	};
}
