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
 * Create a new question
 * @export
 * @interface PostApiQuizzesQuizIdQuestions
 */
export interface PostApiQuizzesQuizIdQuestions {
    /**
     * 
     * @type {string}
     * @memberof PostApiQuizzesQuizIdQuestions
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof PostApiQuizzesQuizIdQuestions
     */
    item_order_position?: number;
    /**
     * 
     * @type {string}
     * @memberof PostApiQuizzesQuizIdQuestions
     */
    question_type: PostApiQuizzesQuizIdQuestionsQuestionTypeEnum;
}


/**
 * @export
 */
export const PostApiQuizzesQuizIdQuestionsQuestionTypeEnum = {
    FlashCard: 'flash_card'
} as const;
export type PostApiQuizzesQuizIdQuestionsQuestionTypeEnum = typeof PostApiQuizzesQuizIdQuestionsQuestionTypeEnum[keyof typeof PostApiQuizzesQuizIdQuestionsQuestionTypeEnum];


/**
 * Check if a given object implements the PostApiQuizzesQuizIdQuestions interface.
 */
export function instanceOfPostApiQuizzesQuizIdQuestions(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "question_type" in value;

    return isInstance;
}

export function PostApiQuizzesQuizIdQuestionsFromJSON(json: any): PostApiQuizzesQuizIdQuestions {
    return PostApiQuizzesQuizIdQuestionsFromJSONTyped(json, false);
}

export function PostApiQuizzesQuizIdQuestionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostApiQuizzesQuizIdQuestions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'item_order_position': !exists(json, 'item_order_position') ? undefined : json['item_order_position'],
        'question_type': json['question_type'],
    };
}

export function PostApiQuizzesQuizIdQuestionsToJSON(value?: PostApiQuizzesQuizIdQuestions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'item_order_position': value.item_order_position,
        'question_type': value.question_type,
    };
}

