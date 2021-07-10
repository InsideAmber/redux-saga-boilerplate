import * as types from "./types";

export const getUsersRequested = () => {
  return {
    type: types.GET_USERS_REQUESTED,
    payload: {},
  };
};

export const getUsersSuccess = (users: any) => {
  return {
    type: types.GET_USERS_SUCCESS,
    payload: users,
  };
};

export const getUsersFailed = (error: string) => {
  return {
    type: types.GET_USERS_FAILED,
    payload: error,
  };
};
