import { USER_UPDATE } from "store/actionTypes/user.at";

export type userType = {
  username: string;
  password?: number;
  email?: string;
  tel?: number;
  role: string[];
};
export type ReduxAction = {
  type: string;
  payload: userType;
};

function userReducer(
  // 初始值
  state: userType = { username: "", role: [] },
  action: ReduxAction
): userType {
  const { type, payload } = action;
  switch (type) {
    case USER_UPDATE:
      return payload;
    default:
      return state;
  }
}

export default userReducer;
