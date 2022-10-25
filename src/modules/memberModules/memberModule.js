import { handleActions } from "redux-actions";

const initialState = [
  {
    memberName: "",
    accessToken: "",
  },
];

export const GET_MEMBER = "member/GET_MEMBER";

export const memberReducer = handleActions(
  {
    [GET_MEMBER]: (state, { payload }) => {
      state.memberName = payload.data.memberName;
      state.accessToken = payload.data.accessToken;

      console.log(state);
      return { ...state };
    },
  },
  initialState[0]
);
