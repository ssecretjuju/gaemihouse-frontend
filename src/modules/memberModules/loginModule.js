import { handleActions } from "redux-actions";

const initialState = [
  {
    memberId: "",
    memberPwd: "",
  },
];

export const INIT_LOGIN = "member/INIT_LOGIN";
export const SET_LOGIN = "member/SET_LOGIN";

export const loginReducer = handleActions(
  {
    [INIT_LOGIN]: (state, { payload }) => {
      state = initialState[0];

      return { ...state };
    },
    [SET_LOGIN]: (state, { payload }) => {
      state[payload.name] = payload.value;

      console.log(state);
      return { ...state };
    },
  },
  initialState[0]
);
