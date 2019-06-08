import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import Constants from '../Constants';
import AsyncStorage from '@react-native-community/async-storage';

let odontAuthorization: string;

const axiosInstance = axios.create({
    baseURL: Constants.config.API_URL
});

axiosInstance.interceptors.response.use((response: AxiosResponse<{ headers: { authorization: string } }>) => {
    if (response.headers.authorization) {
        setAuth(response.headers.authorization);
    }

    return response;
});

axiosInstance.interceptors.request.use(async (requestConfig: AxiosRequestConfig) => {
    const token: string = (await getAuth()) || '';
    if (token) {
        requestConfig.headers.authorization = token;
    }
    return requestConfig;
});

const setAuth = (authorization: string) => {
    odontAuthorization = authorization;
    AsyncStorage.setItem('odontAuthorization', authorization);
};

const getAuth = (): string | Promise<string | null> => odontAuthorization || AsyncStorage.getItem('odontAuthorization');

export default axiosInstance;