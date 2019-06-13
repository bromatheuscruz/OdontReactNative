import { action } from 'typesafe-actions';
import { IdentityTypes, Identity } from './types';
import { LoginData } from '../../../models/LoginData';

export const authRequest = (data: LoginData) => action(IdentityTypes.AUTH_REQUEST, data);
export const authSuccess = (data: Identity) => action(IdentityTypes.AUTH_SUCCESS, { data });
export const authFailure = () => action(IdentityTypes.AUTH_FAILURE);
export const authClear = () => action(IdentityTypes.AUTH_CLEAR);