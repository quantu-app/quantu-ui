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
 * Quiz model
 * @export
 * @interface Quiz
 */
export interface Quiz {
    /**
     * ID
     * @type {number}
     * @memberof Quiz
     */
    id: number;
    /**
     * Name
     * @type {string}
     * @memberof Quiz
     */
    name: string;
    /**
     * URI
     * @type {string}
     * @memberof Quiz
     */
    uri: string;
    /**
     * 
     * @type {Date}
     * @memberof Quiz
     */
    created_at: Date;
    /**
     * 
     * @type {Date}
     * @memberof Quiz
     */
    updated_at: Date;
}

/**
 * Check if a given object implements the Quiz interface.
 */
export function instanceOfQuiz(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "uri" in value;
    isInstance = isInstance && "created_at" in value;
    isInstance = isInstance && "updated_at" in value;

    return isInstance;
}

export function QuizFromJSON(json: any): Quiz {
    return QuizFromJSONTyped(json, false);
}

export function QuizFromJSONTyped(json: any, ignoreDiscriminator: boolean): Quiz {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'uri': json['uri'],
        'created_at': (new Date(json['created_at'])),
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function QuizToJSON(value?: Quiz | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'uri': value.uri,
        'created_at': (value.created_at.toISOString()),
        'updated_at': (value.updated_at.toISOString()),
    };
}
