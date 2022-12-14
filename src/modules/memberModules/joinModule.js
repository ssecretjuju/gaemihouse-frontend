import { handleActions } from "redux-actions";

const initialState = [
  {
    memberId: "",
    memberPwd: "",
    memberName: "",
    memberGender: "",
    memberBirth: "",
    accountCompany: "",
    accountNumber: "",
    appkey: "",
    appsecret: "",
    agreeYn: "",
  },
];

export const INIT_JOIN = "member/INIT_JOIN";
export const SET_JOIN = "member/SET_JOIN";

export const joinReducer = handleActions(
  {
    [INIT_JOIN]: (state, { payload }) => {
      state = initialState[0];

      return { ...state };
    },
    [SET_JOIN]: (state, { payload }) => {
      if (payload.id == "male" || payload.id == "female") {
        state["memberGender"] = payload.id;
      } else if (payload.name == "agree") {
        payload.id == "agree"
          ? (state["agreeYn"] = "Y")
          : (state["agreeYn"] = "N");
      } else {
        state[payload.id] = payload.value;
      }

      console.log(state);
      return { ...state };
    },
  },
  initialState[0]
);
