import { AuthApi, Configuration, QuizzesApi } from './openapi/quantu';

export const defaultConfiguration = {
	basePath: import.meta.env.VITE_QUANTU_API_URL
};
export const configuration = new Configuration(defaultConfiguration);

export const quizApi = new QuizzesApi(configuration);
export const authApi = new AuthApi(configuration);
