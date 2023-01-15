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
 * Create a new quiz
 * @export
 * @interface PostApiQuizzes
 */
export interface PostApiQuizzes {
    /**
     * Name
     * @type {string}
     * @memberof PostApiQuizzes
     */
    name: string;
}

/**
 * Check if a given object implements the PostApiQuizzes interface.
 */
export function instanceOfPostApiQuizzes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function PostApiQuizzesFromJSON(json: any): PostApiQuizzes {
    return PostApiQuizzesFromJSONTyped(json, false);
}

export function PostApiQuizzesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostApiQuizzes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function PostApiQuizzesToJSON(value?: PostApiQuizzes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

