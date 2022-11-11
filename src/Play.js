import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";
import loadingImage from "./earth.gif";

function Play() {
  const [loading, setLoading] = useState(false);
  const loation = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3400);
  }, []);

  // login -> 성공 시 유니티앱 실행, 유니티 측으로 회원 토큰 보내기(아이디, 비밀번호)
  const { unityProvider } = new useUnityContext({
    loaderUrl: "Build/GaemihouseBuild.loader.js",
    dataUrl: "Build/GaemihouseBuild.data",
    frameworkUrl: "Build/GaemihouseBuild.framework.js",
    codeUrl: "Build/GaemihouseBuild.wasm",
  });

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "black",
      }}
    >
      <img
        style={{
          width: "100vw",
          height: "100vh",
          margin: "0px",
          padding: "0px",
        }}
        src={loadingImage}
        hidden={loading}
      />
      <a
        // href="/"
        onClick={async() => {
          console.log(loation.state.accessToken)
    await axios({
      method: "GET",
      url: "http://localhost:8080/member/aa",
      headers:{
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Authorization": "Bearer " + loation.state.accessToken
      }
      
    })
      .then((res) => {
        console.log(res)

      })
      .catch((res) => {
        // console.log(res);
        alert(res.response.data.message);
      });
          // alert("프로그램을 종료합니다. 로그인 화면으로 이동합니다.");
        }}
      >
        종료
      </a>
      <Unity
        unityProvider={unityProvider}
        style={{
          height: "100vh",
          width: "100vw",
          background: "grey",
        }}
      />
    </div>
  );
}

export default Play;
