export enum IdentityTypes {
    AUTH_REQUEST = '@identity/AUTH_REQUEST',
    AUTH_SUCCESS = '@identity/AUTH_SUCCESS',
    AUTH_FAILURE = '@identity/AUTH_FAILURE',
    AUTH_CLEAR = '@identity/AUTH_CLEAR',
}

export interface Identity {
    id: number;
    email: string;
    name: string;
}

export interface IdentityState {
    readonly data: Identity;
    readonly loading: boolean;
    readonly hasError: boolean;
}