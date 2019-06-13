export enum IdentityTypes {
    AUTH_REQUEST = '@identity/AUTH_REQUEST',
    AUTH_SUCCESS = '@identity/AUTH_SUCCESS',
    AUTH_FAILURE = '@identity/AUTH_FAILURE',
    AUTH_CLEAR = '@identity/AUTH_CLEAR',
}

export interface Identity {
    token: string;
    user: IdentityUser;
}

export interface IdentityUser {
    id: string;
    email: string;
}

export interface IdentityState {
    readonly data: Identity;
    readonly loading: boolean;
    readonly hasError: boolean;
}