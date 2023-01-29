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
  PatchApiStudySessionsId,
  PostApiStudySessions,
  StudySession,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    PatchApiStudySessionsIdFromJSON,
    PatchApiStudySessionsIdToJSON,
    PostApiStudySessionsFromJSON,
    PostApiStudySessionsToJSON,
    StudySessionFromJSON,
    StudySessionToJSON,
} from '../models';

export interface DeleteApiStudySessionsIdRequest {
    id: number;
}

export interface GetApiStudySessionsIdRequest {
    id: number;
}

export interface PatchApiStudySessionsIdRequest {
    id: number;
    patchApiStudySessionsId: PatchApiStudySessionsId;
}

export interface PostApiStudySessionsRequest {
    postApiStudySessions: PostApiStudySessions;
}

/**
 * StudySessionsApi - interface
 * 
 * @export
 * @interface StudySessionsApiInterface
 */
export interface StudySessionsApiInterface {
    /**
     * Delete a study session
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudySessionsApiInterface
     */
    deleteApiStudySessionsIdRaw(requestParameters: DeleteApiStudySessionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete a study session
     */
    deleteApiStudySessionsId(requestParameters: DeleteApiStudySessionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * List all study sessions for a given user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudySessionsApiInterface
     */
    getApiStudySessionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<StudySession>>>;

    /**
     * List all study sessions for a given user
     */
    getApiStudySessions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<StudySession>>;

    /**
     * Show a single study session
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudySessionsApiInterface
     */
    getApiStudySessionsIdRaw(requestParameters: GetApiStudySessionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StudySession>>;

    /**
     * Show a single study session
     */
    getApiStudySessionsId(requestParameters: GetApiStudySessionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StudySession>;

    /**
     * Update a Study Session
     * @param {number} id 
     * @param {PatchApiStudySessionsId} patchApiStudySessionsId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudySessionsApiInterface
     */
    patchApiStudySessionsIdRaw(requestParameters: PatchApiStudySessionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StudySession>>;

    /**
     * Update a Study Session
     */
    patchApiStudySessionsId(requestParameters: PatchApiStudySessionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StudySession>;

    /**
     * Create a new study session
     * @param {PostApiStudySessions} postApiStudySessions 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudySessionsApiInterface
     */
    postApiStudySessionsRaw(requestParameters: PostApiStudySessionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StudySession>>;

    /**
     * Create a new study session
     */
    postApiStudySessions(requestParameters: PostApiStudySessionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StudySession>;

}

/**
 * 
 */
export class StudySessionsApi extends runtime.BaseAPI implements StudySessionsApiInterface {

    /**
     * Delete a study session
     */
    async deleteApiStudySessionsIdRaw(requestParameters: DeleteApiStudySessionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteApiStudySessionsId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer_auth authentication
        }

        const response = await this.request({
            path: `/api/study_sessions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a study session
     */
    async deleteApiStudySessionsId(requestParameters: DeleteApiStudySessionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteApiStudySessionsIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all study sessions for a given user
     */
    async getApiStudySessionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<StudySession>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer_auth authentication
        }

        const response = await this.request({
            path: `/api/study_sessions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StudySessionFromJSON));
    }

    /**
     * List all study sessions for a given user
     */
    async getApiStudySessions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<StudySession>> {
        const response = await this.getApiStudySessionsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Show a single study session
     */
    async getApiStudySessionsIdRaw(requestParameters: GetApiStudySessionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StudySession>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getApiStudySessionsId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer_auth authentication
        }

        const response = await this.request({
            path: `/api/study_sessions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StudySessionFromJSON(jsonValue));
    }

    /**
     * Show a single study session
     */
    async getApiStudySessionsId(requestParameters: GetApiStudySessionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StudySession> {
        const response = await this.getApiStudySessionsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a Study Session
     */
    async patchApiStudySessionsIdRaw(requestParameters: PatchApiStudySessionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StudySession>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchApiStudySessionsId.');
        }

        if (requestParameters.patchApiStudySessionsId === null || requestParameters.patchApiStudySessionsId === undefined) {
            throw new runtime.RequiredError('patchApiStudySessionsId','Required parameter requestParameters.patchApiStudySessionsId was null or undefined when calling patchApiStudySessionsId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer_auth authentication
        }

        const response = await this.request({
            path: `/api/study_sessions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchApiStudySessionsIdToJSON(requestParameters.patchApiStudySessionsId),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StudySessionFromJSON(jsonValue));
    }

    /**
     * Update a Study Session
     */
    async patchApiStudySessionsId(requestParameters: PatchApiStudySessionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StudySession> {
        const response = await this.patchApiStudySessionsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new study session
     */
    async postApiStudySessionsRaw(requestParameters: PostApiStudySessionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StudySession>> {
        if (requestParameters.postApiStudySessions === null || requestParameters.postApiStudySessions === undefined) {
            throw new runtime.RequiredError('postApiStudySessions','Required parameter requestParameters.postApiStudySessions was null or undefined when calling postApiStudySessions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer_auth authentication
        }

        const response = await this.request({
            path: `/api/study_sessions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostApiStudySessionsToJSON(requestParameters.postApiStudySessions),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StudySessionFromJSON(jsonValue));
    }

    /**
     * Create a new study session
     */
    async postApiStudySessions(requestParameters: PostApiStudySessionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StudySession> {
        const response = await this.postApiStudySessionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
