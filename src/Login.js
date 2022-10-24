import axios from "axios";
import style from "./css/login.module.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SET_LOGIN } from "./modules/memberModules/loginModule";

function Login() {
  const memberInfo = useSelector((state) => state.memberReducer);
  const dispatch = useDispatch();

  const inputMemberInfo = (e) => {
    dispatch({ type: [SET_LOGIN], payload: e.target });
  };

  const requestLoginMember = () => {
    /**
     *
     */
    alert("OOO님 환영합니다");
    axios({
      method: "GET",
      url: "http://localhost:8080",
      data: memberInfo.memberId,
    });
  };

  return (
    <div className={style.layout}>
      <div className={style.loginbox}>
        <img className={style.logo} src={require("./images/sample.png")} />
        <div className={style.idpwdbox}>
          <input
            name="memberId"
            className={style.id}
            type="text"
            placeholder="아이디 2자~8자 입력"
            onChange={inputMemberInfo}
          />
          <input
            name="memberPwd"
            className={style.pwd}
            type="password"
            placeholder="비밀번호 입력"
            onChange={inputMemberInfo}
          />
        </div>
        <div className={style.link}>
          <NavLink
            className={style.join}
            to="/play"
            onClick={requestLoginMember}
          >
            로그인
          </NavLink>
          <NavLink className={style.join} to="/join">
            회원가입
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
