import { Reducer } from "redux";
import { ConsultationState, ConsultationTypes } from "./types";
import { ConsultationMarked } from "../../../models/ConsultationMarked";

const INITIAL_STATE: ConsultationState = {
  data: [] as ConsultationMarked[],
  loading: false,
  hasError: false
};

const reducer: Reducer<ConsultationState> = (
  state: ConsultationState = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case ConsultationTypes.CONSULTATION_REQUEST:
      return { ...state, loading: true };
    case ConsultationTypes.CONSULTATION_SUCCESS:
      return {
        ...state,
        loading: false,
        hasError: false,
        data: [...action.payload.data]
      };
    case ConsultationTypes.CONSULTATION_FAILURE:
      return { ...state, hasError: true };

    default:
      return state;
  }
};

export default reducer;
