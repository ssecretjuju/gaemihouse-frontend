import style from "./css/join.module.css";
import { agreetext } from "./AgreeText";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { SET_JOIN } from "./modules/memberModules/joinModule";

function Join() {
  const navigate = useNavigate();
  const memberInfo = useSelector((state) => state.joinReducer);
  const dispatch = useDispatch();

  const inputMemberInfo = (e) => {
    dispatch({ type: [SET_JOIN], payload: e.target });
  };

  const requestJoinMember = (e) => {
    alert("회원가입이 완료 되었습니다.");
    navigate("/");
  };

  return (
    <div className={style.layout}>
      <div className={style.joinbox}>
        {/* <NavLink to="/">로그인화면 돌아가기</NavLink> */}
        회원가입
        <div className={style.infocontainer}>
          <div className={style.infobox}>
            <label>아이디</label>
            <input
              id="memberId"
              className={style.idpwd}
              type="text"
              placeholder="아이디 2자~8자 입력"
              onChange={inputMemberInfo}
            />
          </div>
          <div className={style.infobox}>
            <label>비밀번호</label>
            <input
              id="memberPwd"
              className={style.idpwd}
              type="password"
              placeholder="비밀번호 입력"
              onChange={inputMemberInfo}
            />
          </div>
          <div className={style.infobox}>
            <label>이름</label>
            <input
              id="memberName"
              className={style.name}
              type="text"
              placeholder="이름 입력"
              onChange={inputMemberInfo}
            />
            <div>
              <label>
                <input
                  id="male"
                  className={style.gender}
                  type="radio"
                  name="gender"
                  onChange={inputMemberInfo}
                />
                <span>남</span>
              </label>
              <label>
                <input
                  id="female"
                  className={style.gender}
                  type="radio"
                  name="gender"
                  onChange={inputMemberInfo}
                />
                <span>여</span>
              </label>
            </div>
          </div>
          <div className={style.infobox}>
            <label>생년월일</label>
            <input
              id="memberBirth"
              className={style.birth}
              type="date"
              onChange={inputMemberInfo}
            />
          </div>
          <div className={style.infobox}>
            <label>계좌번호</label>
            <select
              id="accountCompany"
              className={style.company}
              onChange={inputMemberInfo}
            >
              <option>증권사 선택</option>
              <option>한국투자증권</option>
            </select>
            <input
              id="accountNumber"
              className={style.account}
              type="text"
              placeholder="계좌번호입력(-제외)"
              onChange={inputMemberInfo}
            />
          </div>
          <div className={style.infobox}>
            <div className={style.appinfo}>
              <div>
                <label>Appkey</label>
                <input
                  id="appkey"
                  className={style.appkey}
                  type="text"
                  placeholder="Appkey 입력"
                  onChange={inputMemberInfo}
                />
              </div>
              <div>
                <label>Appsecret</label>
                <input
                  id="appsecret"
                  className={style.appsecret}
                  type="text"
                  placeholder="Appsecret 입력"
                  onChange={inputMemberInfo}
                />
              </div>
            </div>
          </div>
          {/* <div>Appkey가 없으신가요? 발급받기</div> */}
          <div className={style.infobox}>
            <div>개인정보 이용 동의서</div>
            <div className={style.agreebox}>
              {agreetext}
              <div>
                <label>동의</label>
                <input
                  id="agree"
                  className={style.agree}
                  type="radio"
                  name="agree"
                  onChange={inputMemberInfo}
                />
                <label>비동의</label>
                <input
                  id="disagree"
                  className={style.agree}
                  type="radio"
                  name="agree"
                  onChange={inputMemberInfo}
                />
              </div>
            </div>
          </div>
          <div className={style.infobox}>
            <button
              id="join"
              className={style.join}
              onClick={requestJoinMember}
              disabled={!document.getElementById("agree")?.checked}
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
