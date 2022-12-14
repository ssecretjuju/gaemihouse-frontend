import axios from "axios";
import style from "./css/login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SET_LOGIN } from "./modules/memberModules/loginModule";
import { GET_MEMBER } from "./modules/memberModules/memberModule";
import Swal from "sweetalert2";

function Login() {
  const loginInfo = useSelector((state) => state.loginReducer);
  const memberInfo = useSelector((state) => state.memberReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputMemberInfo = (e) => {
    dispatch({ type: [SET_LOGIN], payload: e.target });
  };

  const requestLoginMember = async () => {
    /*
     * [로그인 로직]
     * 1. axios를 통해 백앤드 서버에 회원 여부 && appkey 유효 여부 확인
     *  1-1. 회원이 아닐 경우 : 아이디 혹은 비밀번호를 잘못 입력했다고 alert 메시지
     *  1-2. 회원이지만 appkey가 유효하지 않은 경우 : appkey가 만료되었다는 메시지와 함께 appkey 발급 링크 alert
     *  1-3. 회원이고 appkey가 유효한 경우 :
     *    1-3-1. 서버에서 accessToken 발급 후, DB에 저장
     *    1-3-2. accessToken 성공적으로 발급 시, OK로 응답
     *    1-3-3. 서버에서 OK 응답 오면 OOO님 환영합니다 alert 메시지 후 Unity App으로 이동
     */

    if (!loginInfo.memberId) {
      Swal.fire({
        title: "로그인 실패",
        text: `아이디를 입력하세요.`,
        icon: "error",
        confirmButtonColor: "#154a13",
        confirmButtonText: "확인",
      });
      // alert("아이디를 입력하세요.");
    } else if (!loginInfo.memberPwd) {
      Swal.fire({
        title: "로그인 실패",
        text: `비밀번호를 입력하세요.`,
        icon: "error",
        confirmButtonColor: "#154a13",
        confirmButtonText: "확인",
      });
      // alert("비밀번호를 입력하세요.");
    } else {
      console.log(loginInfo.memberId);
      await axios({
        method: "POST",
        url: `http://${process.env.REACT_APP_RESTAPI_IP}:8080/auth/login`,
        data: {
          memberId: loginInfo.memberId,
          memberPassword: loginInfo.memberPwd,
        },
      })
        .then((res) => {
          dispatch({ type: [GET_MEMBER], payload: res.data });
          Swal.fire({
            title: "로그인 성공",
            text: `${memberInfo.memberName}님 환영합니다.`,
            icon: "success",
            confirmButtonColor: "#154a13",
            confirmButtonText: "확인",
          }).then(() => {
            navigate("/play");
          });
          // alert(`${memberInfo.memberName}님 환영합니다`);
          // navigate("/play");
        })
        .catch((res) => {
          // console.log(res);
          Swal.fire({
            title: "로그인 실패",
            text: `${res.response.data.message}`,
            icon: "error",
            confirmButtonColor: "#154a13",
            confirmButtonText: "확인",
          });
          // alert(res.response.data.message);
        });
    }
  };

  const onKeyUpHandler = () => {
    if (window.event.keyCode == 13) {
      requestLoginMember();
    }
  };

  return (
    <div className={style.layout}>
      <div className={style.loginbox}>
        <img className={style.logo} src={require("./images/logo.png")} />
        <div className={style.idpwdbox}>
          <input
            name="memberId"
            className={style.id}
            type="text"
            placeholder="아이디"
            maxLength="8"
            autoComplete="off"
            onChange={inputMemberInfo}
          />
          <input
            name="memberPwd"
            className={style.pwd}
            type="password"
            placeholder="비밀번호"
            onChange={inputMemberInfo}
            onKeyUp={onKeyUpHandler}
          />
        </div>
        <div className={style.link}>
          <NavLink className={style.login} onClick={requestLoginMember}>
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
