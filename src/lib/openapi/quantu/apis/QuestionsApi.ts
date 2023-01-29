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


import * as runtime from '../runtime';
import type {
  ErrorResponse,
  Question,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    QuestionFromJSON,
    QuestionToJSON,
} from '../models';

/**
 * QuestionsApi - interface
 * 
 * @export
 * @interface QuestionsApiInterface
 */
export interface QuestionsApiInterface {
    /**
     * List all questions belonging to a User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuestionsApiInterface
     */
    getApiQuestionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Question>>>;

    /**
     * List all questions belonging to a User
     */
    getApiQuestions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Question>>;

}

/**
 * 
 */
export class QuestionsApi extends runtime.BaseAPI implements QuestionsApiInterface {

    /**
     * List all questions belonging to a User
     */
    async getApiQuestionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Question>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer_auth authentication
        }

        const response = await this.request({
            path: `/api/questions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(QuestionFromJSON));
    }

    /**
     * List all questions belonging to a User
     */
    async getApiQuestions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Question>> {
        const response = await this.getApiQuestionsRaw(initOverrides);
        return await response.value();
    }

}