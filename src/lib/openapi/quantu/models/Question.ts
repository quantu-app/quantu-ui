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
 * Question model
 * @export
 * @interface Question
 */
export interface Question {
    /**
     * ID
     * @type {number}
     * @memberof Question
     */
    id: number;
    /**
     * User Id
     * @type {number}
     * @memberof Question
     */
    user_id: number;
    /**
     * Name
     * @type {string}
     * @memberof Question
     */
    name?: string;
    /**
     * URI
     * @type {string}
     * @memberof Question
     */
    uri?: string;
    /**
     * Type of learnable resource the Question belongs to
     * @type {string}
     * @memberof Question
     */
    learnable_resource_type: QuestionLearnableResourceTypeEnum;
    /**
     * Learnable Resource Id
     * @type {number}
     * @memberof Question
     */
    learnable_resource_id: number;
    /**
     * Type of Question
     * @type {string}
     * @memberof Question
     */
    question_type: QuestionQuestionTypeEnum;
    /**
     * Item Order
     * @type {number}
     * @memberof Question
     */
    item_order: number;
    /**
     * Data
     * @type {object}
     * @memberof Question
     */
    data: object;
    /**
     * 
     * @type {Date}
     * @memberof Question
     */
    created_at: Date;
    /**
     * 
     * @type {Date}
     * @memberof Question
     */
    updated_at: Date;
}


/**
 * @export
 */
export const QuestionLearnableResourceTypeEnum = {
    Quiz: 'Quiz'
} as const;
export type QuestionLearnableResourceTypeEnum = typeof QuestionLearnableResourceTypeEnum[keyof typeof QuestionLearnableResourceTypeEnum];

/**
 * @export
 */
export const QuestionQuestionTypeEnum = {
    FlashCard: 'flash_card'
} as const;
export type QuestionQuestionTypeEnum = typeof QuestionQuestionTypeEnum[keyof typeof QuestionQuestionTypeEnum];


/**
 * Check if a given object implements the Question interface.
 */
export function instanceOfQuestion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "user_id" in value;
    isInstance = isInstance && "learnable_resource_type" in value;
    isInstance = isInstance && "learnable_resource_id" in value;
    isInstance = isInstance && "question_type" in value;
    isInstance = isInstance && "item_order" in value;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "created_at" in value;
    isInstance = isInstance && "updated_at" in value;

    return isInstance;
}

export function QuestionFromJSON(json: any): Question {
    return QuestionFromJSONTyped(json, false);
}

export function QuestionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Question {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'user_id': json['user_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'uri': !exists(json, 'uri') ? undefined : json['uri'],
        'learnable_resource_type': json['learnable_resource_type'],
        'learnable_resource_id': json['learnable_resource_id'],
        'question_type': json['question_type'],
        'item_order': json['item_order'],
        'data': json['data'],
        'created_at': (new Date(json['created_at'])),
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function QuestionToJSON(value?: Question | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'user_id': value.user_id,
        'name': value.name,
        'uri': value.uri,
        'learnable_resource_type': value.learnable_resource_type,
        'learnable_resource_id': value.learnable_resource_id,
        'question_type': value.question_type,
        'item_order': value.item_order,
        'data': value.data,
        'created_at': (value.created_at.toISOString()),
        'updated_at': (value.updated_at.toISOString()),
    };
}

