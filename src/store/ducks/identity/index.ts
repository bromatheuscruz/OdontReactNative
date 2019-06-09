import { IdentityState, Identity, IdentityTypes } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: IdentityState = {
    data: {} as Identity,
    hasError: false,
    loading: false
}

const reducer: Reducer<IdentityState> = (state: IdentityState = INITIAL_STATE, action) => {
    switch (action.type) {
        case IdentityTypes.AUTH_REQUEST:
            return { ...INITIAL_STATE, loading: true };
        case IdentityTypes.AUTH_SUCCESS:
            return { ...INITIAL_STATE, data: { ...action.payload.data } };
        case IdentityTypes.AUTH_FAILURE:
            return { ...INITIAL_STATE, hasError: true };
        case IdentityTypes.AUTH_CLEAR:
            return { ...INITIAL_STATE };
        default:
            return state;
    }
}

export default reducer;