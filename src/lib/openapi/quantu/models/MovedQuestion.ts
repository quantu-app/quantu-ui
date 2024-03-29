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
import type { Question } from './Question';
import {
    QuestionFromJSON,
    QuestionFromJSONTyped,
    QuestionToJSON,
} from './Question';

/**
 * MovedQuestion model
 * @export
 * @interface MovedQuestion
 */
export interface MovedQuestion {
    /**
     * 
     * @type {Question}
     * @memberof MovedQuestion
     */
    moved_question: Question;
    /**
     * 
     * @type {Array<Question>}
     * @memberof MovedQuestion
     */
    other_questions: Array<Question>;
}

/**
 * Check if a given object implements the MovedQuestion interface.
 */
export function instanceOfMovedQuestion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "moved_question" in value;
    isInstance = isInstance && "other_questions" in value;

    return isInstance;
}

export function MovedQuestionFromJSON(json: any): MovedQuestion {
    return MovedQuestionFromJSONTyped(json, false);
}

export function MovedQuestionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovedQuestion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'moved_question': QuestionFromJSON(json['moved_question']),
        'other_questions': ((json['other_questions'] as Array<any>).map(QuestionFromJSON)),
    };
}

export function MovedQuestionToJSON(value?: MovedQuestion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'moved_question': QuestionToJSON(value.moved_question),
        'other_questions': ((value.other_questions as Array<any>).map(QuestionToJSON)),
    };
}

