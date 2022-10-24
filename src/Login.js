import { NavLink } from "react-router-dom";
import style from "./css/login.module.css";

function Login() {
  return (
    <div className={style.layout}>
      <div className={style.loginbox}>
        <img className={style.logo} src={require("./images/sample.png")} />
        <div className={style.idpwdbox}>
          {/* <div className={style.icon}>아이디아이콘</div> */}
          <input
            className={style.id}
            type="text"
            placeholder="아이디 2자~8자 입력"
          />
          {/* <div className={style.icon}>비밀번호아이콘</div> */}
          <input
            className={style.pwd}
            type="password"
            placeholder="비밀번호 입력"
          />
        </div>
        <div className={style.link}>
          <NavLink className={style.join} to="/play">
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
