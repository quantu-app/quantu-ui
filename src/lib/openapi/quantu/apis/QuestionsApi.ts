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
  MovedQuestion,
  PatchApiQuestionsId,
  PatchApiQuestionsIdMove,
  PostApiQuestions,
  Question,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    MovedQuestionFromJSON,
    MovedQuestionToJSON,
    PatchApiQuestionsIdFromJSON,
    PatchApiQuestionsIdToJSON,
    PatchApiQuestionsIdMoveFromJSON,
    PatchApiQuestionsIdMoveToJSON,
    PostApiQuestionsFromJSON,
    PostApiQuestionsToJSON,
    QuestionFromJSON,
    QuestionToJSON,
} from '../models';

export interface DeleteApiQuestionsIdRequest {
    quizId: number;
    id: number;
}

export interface GetApiQuestionsRequest {
    quizId: number;
}

export interface GetApiQuestionsIdRequest {
    quizId: number;
    id: number;
}

export interface PatchApiQuestionsIdRequest {
    quizId: number;
    id: number;
    patchApiQuestionsId: PatchApiQuestionsId;
}

export interface PatchApiQuestionsIdMoveRequest {
    quizId: number;
    id: number;
    patchApiQuestionsIdMove: PatchApiQuestionsIdMove;
}

export interface PostApiQuestionsRequest {
    quizId: number;
    postApiQuestions: PostApiQuestions;
}

/**
 * QuestionsApi - interface
 * 
 * @export
 * @interface QuestionsApiInterface
 */
export interface QuestionsApiInterface {
    /**
     * Delete a Question
     * @param {number} quizId Quiz ID
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuestionsApiInterface
     */
    deleteApiQuestionsIdRaw(requestParameters: DeleteApiQuestionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete a Question
     */
    deleteApiQuestionsId(requestParameters: DeleteApiQuestionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * List all questions belonging to a Quiz
     * @param {number} quizId Quiz ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuestionsApiInterface
     */
    getApiQuestionsRaw(requestParameters: GetApiQuestionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Question>>>;

    /**
     * List all questions belonging to a Quiz
     */
    getApiQuestions(requestParameters: GetApiQuestionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Question>>;

    /**
     * Show a Question
     * @param {number} quizId Quiz ID
     * @param {number} id The question ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuestionsApiInterface
     */
    getApiQuestionsIdRaw(requestParameters: GetApiQuestionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Question>>;

    /**
     * Show a Question
     */
    getApiQuestionsId(requestParameters: GetApiQuestionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Question>;

    /**
     * Update a Question
     * @param {number} quizId Quiz ID
     * @param {number} id 
     * @param {PatchApiQuestionsId} patchApiQuestionsId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuestionsApiInterface
     */
    patchApiQuestionsIdRaw(requestParameters: PatchApiQuestionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Question>>;

    /**
     * Update a Question
     */
    patchApiQuestionsId(requestParameters: PatchApiQuestionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Question>;

    /**
     * Move a Question to a new position within the ordered questions list
     * @param {number} quizId Quiz ID
     * @param {number} id 
     * @param {PatchApiQuestionsIdMove} patchApiQuestionsIdMove 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuestionsApiInterface
     */
    patchApiQuestionsIdMoveRaw(requestParameters: PatchApiQuestionsIdMoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MovedQuestion>>;

    /**
     * Move a Question to a new position within the ordered questions list
     */
    patchApiQuestionsIdMove(requestParameters: PatchApiQuestionsIdMoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MovedQuestion>;

    /**
     * Create a new question
     * @param {number} quizId Quiz ID
     * @param {PostApiQuestions} postApiQuestions 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuestionsApiInterface
     */
    postApiQuestionsRaw(requestParameters: PostApiQuestionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Question>>;

    /**
     * Create a new question
     */
    postApiQuestions(requestParameters: PostApiQuestionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Question>;

}

/**
 * 
 */
export class QuestionsApi extends runtime.BaseAPI implements QuestionsApiInterface {

    /**
     * Delete a Question
     */
    async deleteApiQuestionsIdRaw(requestParameters: DeleteApiQuestionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.quizId === null || requestParameters.quizId === undefined) {
            throw new runtime.RequiredError('quizId','Required parameter requestParameters.quizId was null or undefined when calling deleteApiQuestionsId.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteApiQuestionsId.');
        }

        const queryParameters: any = {};

        if (requestParameters.quizId !== undefined) {
            queryParameters['quiz_id'] = requestParameters.quizId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer_auth authentication
        }

        const response = await this.request({
            path: `/api/questions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a Question
     */
    async deleteApiQuestionsId(requestParameters: DeleteApiQuestionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteApiQuestionsIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all questions belonging to a Quiz
     */
    async getApiQuestionsRaw(requestParameters: GetApiQuestionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Question>>> {
        if (requestParameters.quizId === null || requestParameters.quizId === undefined) {
            throw new runtime.RequiredError('quizId','Required parameter requestParameters.quizId was null or undefined when calling getApiQuestions.');
        }

        const queryParameters: any = {};

        if (requestParameters.quizId !== undefined) {
            queryParameters['quiz_id'] = requestParameters.quizId;
        }

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
     * List all questions belonging to a Quiz
     */
    async getApiQuestions(requestParameters: GetApiQuestionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Question>> {
        const response = await this.getApiQuestionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Show a Question
     */
    async getApiQuestionsIdRaw(requestParameters: GetApiQuestionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Question>> {
        if (requestParameters.quizId === null || requestParameters.quizId === undefined) {
            throw new runtime.RequiredError('quizId','Required parameter requestParameters.quizId was null or undefined when calling getApiQuestionsId.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getApiQuestionsId.');
        }

        const queryParameters: any = {};

        if (requestParameters.quizId !== undefined) {
            queryParameters['quiz_id'] = requestParameters.quizId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer_auth authentication
        }

        const response = await this.request({
            path: `/api/questions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QuestionFromJSON(jsonValue));
    }

    /**
     * Show a Question
     */
    async getApiQuestionsId(requestParameters: GetApiQuestionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Question> {
        const response = await this.getApiQuestionsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a Question
     */
    async patchApiQuestionsIdRaw(requestParameters: PatchApiQuestionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Question>> {
        if (requestParameters.quizId === null || requestParameters.quizId === undefined) {
            throw new runtime.RequiredError('quizId','Required parameter requestParameters.quizId was null or undefined when calling patchApiQuestionsId.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchApiQuestionsId.');
        }

        if (requestParameters.patchApiQuestionsId === null || requestParameters.patchApiQuestionsId === undefined) {
            throw new runtime.RequiredError('patchApiQuestionsId','Required parameter requestParameters.patchApiQuestionsId was null or undefined when calling patchApiQuestionsId.');
        }

        const queryParameters: any = {};

        if (requestParameters.quizId !== undefined) {
            queryParameters['quiz_id'] = requestParameters.quizId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer_auth authentication
        }

        const response = await this.request({
            path: `/api/questions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchApiQuestionsIdToJSON(requestParameters.patchApiQuestionsId),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QuestionFromJSON(jsonValue));
    }

    /**
     * Update a Question
     */
    async patchApiQuestionsId(requestParameters: PatchApiQuestionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Question> {
        const response = await this.patchApiQuestionsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Move a Question to a new position within the ordered questions list
     */
    async patchApiQuestionsIdMoveRaw(requestParameters: PatchApiQuestionsIdMoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MovedQuestion>> {
        if (requestParameters.quizId === null || requestParameters.quizId === undefined) {
            throw new runtime.RequiredError('quizId','Required parameter requestParameters.quizId was null or undefined when calling patchApiQuestionsIdMove.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchApiQuestionsIdMove.');
        }

        if (requestParameters.patchApiQuestionsIdMove === null || requestParameters.patchApiQuestionsIdMove === undefined) {
            throw new runtime.RequiredError('patchApiQuestionsIdMove','Required parameter requestParameters.patchApiQuestionsIdMove was null or undefined when calling patchApiQuestionsIdMove.');
        }

        const queryParameters: any = {};

        if (requestParameters.quizId !== undefined) {
            queryParameters['quiz_id'] = requestParameters.quizId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer_auth authentication
        }

        const response = await this.request({
            path: `/api/questions/{id}/move`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchApiQuestionsIdMoveToJSON(requestParameters.patchApiQuestionsIdMove),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MovedQuestionFromJSON(jsonValue));
    }

    /**
     * Move a Question to a new position within the ordered questions list
     */
    async patchApiQuestionsIdMove(requestParameters: PatchApiQuestionsIdMoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MovedQuestion> {
        const response = await this.patchApiQuestionsIdMoveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new question
     */
    async postApiQuestionsRaw(requestParameters: PostApiQuestionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Question>> {
        if (requestParameters.quizId === null || requestParameters.quizId === undefined) {
            throw new runtime.RequiredError('quizId','Required parameter requestParameters.quizId was null or undefined when calling postApiQuestions.');
        }

        if (requestParameters.postApiQuestions === null || requestParameters.postApiQuestions === undefined) {
            throw new runtime.RequiredError('postApiQuestions','Required parameter requestParameters.postApiQuestions was null or undefined when calling postApiQuestions.');
        }

        const queryParameters: any = {};

        if (requestParameters.quizId !== undefined) {
            queryParameters['quiz_id'] = requestParameters.quizId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer_auth authentication
        }

        const response = await this.request({
            path: `/api/questions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostApiQuestionsToJSON(requestParameters.postApiQuestions),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QuestionFromJSON(jsonValue));
    }

    /**
     * Create a new question
     */
    async postApiQuestions(requestParameters: PostApiQuestionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Question> {
        const response = await this.postApiQuestionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
