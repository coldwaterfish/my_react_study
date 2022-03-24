import { Dispatch } from "react";
import { rootState } from "store";
import { userType } from "store/reducers/user.r";
import { USER_UPDATE } from "../actionTypes/user.at";

export const userUpdate = (value: userType) => ({
  type: USER_UPDATE,
  payload: value,
});

// store-user
export const userStateToProps = (state: rootState) => {
  return {
    user: state.userReducer,
  };
};
export const userDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    userUpdate: (user: userType) => {
      dispatch(userUpdate(user));
    },
  };
};
