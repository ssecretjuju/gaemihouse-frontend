import { NavLink, useNavigate } from "react-router-dom";
import style from "./css/join.module.css";

function Join() {
  const navigate = useNavigate();

  const agreetext = `개인정보를 보호하겠습니다. 개인정보를 보호하겠습니다.
                    개인정보를 보호하겠습니다. 개인정보를 보호하겠습니다. 
                    개인정보를 보호하겠습니다. 개인정보를 보호하겠습니다.
                    개인정보를 보호하겠습니다. 개인정보를 보호하겠습니다.
                    개인정보를 보호하겠습니다. 개인정보를 보호하겠습니다.
                    개인정보를 보호하겠습니다. 개인정보를 보호하겠습니다. 
                    개인정보를 보호하겠습니다. 개인정보를 보호하겠습니다.
                    개인정보를 보호하겠습니다. 개인정보를 보호하겠습니다.
                    개인정보를 보호하겠습니다. 개인정보를 보호하겠습니다.
                    개인정보를 보호하겠습니다. 개인정보를 보호하겠습니다. 
                    개인정보를 보호하겠습니다. 개인정보를 보호하겠습니다.
                    개인정보를 보호하겠습니다. 개인정보를 보호하겠습니다.`;

  return (
    <div className={style.layout}>
      <div className={style.joinbox}>
        {/* <NavLink to="/">로그인화면 돌아가기</NavLink> */}
        회원가입
        <div className={style.infocontainer}>
          <div className={style.infobox}>
            <label>아이디</label>
            <input
              className={style.idpwd}
              type="text"
              placeholder="아이디 2자~8자 입력"
            />
          </div>
          <div className={style.infobox}>
            <label>비밀번호</label>
            <input
              className={style.idpwd}
              type="password"
              placeholder="비밀번호 입력"
            />
          </div>
          <div className={style.infobox}>
            <label>이름</label>
            <input className={style.name} type="text" placeholder="이름 입력" />
            {/* <label>성별</label> */}
            <label>
              <input className={style.gender} type="radio" name="gender" />
              <span>남</span>
            </label>
            <label>
              <input className={style.gender} type="radio" name="gender" />
              <span>여</span>
            </label>
          </div>
          <div className={style.infobox}>
            <label>생년월일</label>
            <input className={style.birth} type="date" />
          </div>
          <div className={style.infobox}>
            <label>계좌번호</label>
            <select className={style.company}>
              <option>한국투자증권</option>
            </select>
            <input
              className={style.account}
              type="text"
              placeholder="계좌번호입력(-제외)"
            />
          </div>
          <div className={style.infobox}>
            <label>Appkey</label>
            <input
              className={style.appkey}
              type="text"
              placeholder="Appkey 입력"
            />
            <label>Appsecret</label>
            <input
              className={style.appsecret}
              type="text"
              placeholder="Appsecret 입력"
            />
          </div>
          {/* <div>Appkey가 없으신가요? 발급받기</div> */}
          <div className={style.infobox}>
            <div>개인정보 이용 동의서 박스</div>
            <div className={style.agreebox}>
              {agreetext}

              <div>
                <label>동의</label>
                <input className={style.agree} type="radio" name="agree" />
                <label>비동의</label>
                <input className={style.agree} type="radio" name="agree" />
              </div>
            </div>
          </div>
          <div className={style.infobox}>
            <button
              className={style.join}
              onClick={() => {
                alert("회원가입이 완료 되었습니다.");
                navigate("/");
              }}
            >
              가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
