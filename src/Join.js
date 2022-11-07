import style from "./css/join.module.css";
import { agreetext } from "./AgreeText";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { SET_JOIN } from "./modules/memberModules/joinModule";
import axios from "axios";
import Swal from "sweetalert2";

function Join() {
  const joinInfo = useSelector((state) => state.joinReducer);
  const memberInfo = useSelector((state) => state.memberReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputMemberInfo = (e) => {
    dispatch({ type: [SET_JOIN], payload: e.target });
  };

  const requestJoinMember = async (e) => {
    /**
     * [회원가입 로직]
     * 1. 아이디 중복 여부 등 유효성 검사(후순위)
     * 2. axios를 통해 서버에 POST 요청
     * 3. appkey 와 appsecret 으로 accessToken을 발급 받아 appkey 유효성 검사
     * 4. accessToken 성공적으로 발급 시 DB에 회원 정보 insert 후 서버에서 OK로 응답
     * 5. 응답 시 회원가입이 성공적으로 완료되었다는 alert 메시지 후 로그인 화면 이동
     */

    await axios({
      method: "POST",
      url: `http://${process.env.REACT_APP_RESTAPI_IP}:8080/auth/signup`,
      data: {
        memberId: joinInfo.memberId,
        memberPassword: joinInfo.memberPwd,
        memberName: joinInfo.memberName,
        memberSex: joinInfo.memberGender,
        memberBirth: joinInfo.memberBirth,
        stockFirm: joinInfo.accountCompany,
        accountNum: joinInfo.accountNumber,
        appKey: joinInfo.appkey,
        appSecret: joinInfo.appsecret,
        termsAgreementYn: joinInfo.agreeYn,
      },
    })
      .then((res) => {
        Swal.fire({
          title: "회원가입 성공",
          text: `회원가입이 완료 되었습니다.`,
          icon: "success",
          confirmButtonColor: "#154a13",
          confirmButtonText: "확인",
        }).then(() => {
          navigate("/");
        });
        // alert("회원가입이 완료 되었습니다.");
        // navigate("/");
      })
      .catch((res) => {
        console.log(res);
        switch (res.response.status) {
          case 400:
            Swal.fire({
              title: "회원가입 실패",
              text: `${res.response.data.message}`,
              icon: "error",
              confirmButtonColor: "#154a13",
              confirmButtonText: "확인",
            });
            // alert(res.response.data.message);
            break;
          case 500:
            Swal.fire({
              title: "회원가입 실패",
              text: `모든 정보를 입력해주세요.`,
              icon: "error",
              confirmButtonColor: "#154a13",
              confirmButtonText: "확인",
            });
            // alert("모든 정보를 입력해주세요.");
            break;
          default:
            alert("예상치 못한 에러 발생");
            break;
        }
      });
  };

  return (
    <div className={style.layout}>
      <div className={style.joinbox}>
        회원가입
        <div className={style.infocontainer}>
          <div className={style.infobox}>
            <label>아이디</label>
            <input
              id="memberId"
              className={style.id}
              type="text"
              placeholder="아이디 2자~8자 입력"
              maxLength="8"
              onChange={inputMemberInfo}
            />
          </div>
          <div className={style.infobox}>
            <label>비밀번호</label>
            <input
              id="memberPwd"
              className={style.pwd}
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
                <a
                  className={style.applink}
                  onClick={() => {
                    window.open(
                      "https://securities.koreainvestment.com/main/member/login/login.jsp?returnUrl=%2Fmain%2Fcustomer%2Fsystemdown%2FRestAPIService.jsp&isXecurePass=Y"
                    );
                  }}
                >
                  Appkey 발급받기
                </a>
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
          <div className={style.infobox}>
            <div>개인정보 이용 동의서</div>
            <div className={style.agreebox}>
              <div className={style.agreetext}>{agreetext}</div>
              <div>
                <label>동의</label>
                <input
                  id="agree"
                  className={style.agree}
                  type="radio"
                  name="agree"
                  onChange={inputMemberInfo}
                />
                <label>{"  "}비동의</label>
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
