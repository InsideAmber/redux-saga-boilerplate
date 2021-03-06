import * as types from "../actions/types";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const users = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case types.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
};
