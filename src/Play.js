import { Unity, useUnityContext } from "react-unity-webgl";

function Play() {
  // login -> 성공 시 유니티앱 실행, 유니티 측으로 회원 토큰 보내기(아이디, 비밀번호)
  const { unityProvider } = new useUnityContext({
    loaderUrl: "Build/webgl_app.loader.js",
    dataUrl: "Build/webgl_app.data",
    frameworkUrl: "Build/webgl_app.framework.js",
    codeUrl: "Build/webgl_app.wasm",
  });

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
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
