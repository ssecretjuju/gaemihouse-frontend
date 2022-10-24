import { Unity, useUnityContext } from "react-unity-webgl";

function Play() {
  // login -> 성공 시 유니티앱 실행, 유니티 측으로 회원 토큰 보내기(아이디, 비밀번호)
  const { unityProvider } = new useUnityContext({
    loaderUrl: "Build/GaemihouseBuild.loader.js",
    dataUrl: "Build/GaemihouseBuild.data",
    frameworkUrl: "Build/GaemihouseBuild.framework.js",
    codeUrl: "Build/GaemihouseBuild.wasm",
  });

  WebGLContextEvent.captureAllkeyboarInput = false;
  var recaptureInputAndFocus = function () {
    var canvas = document.getElementById("#canvas");
    if (canvas) {
      canvas.setAttribute("tabindex", "1");
      canvas.focus();
    } else setTimeout(recaptureInputAndFocus, 100);
  };

  recaptureInputAndFocus();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "red",
      }}
    >
      <a
        href="/"
        onClick={() => {
          alert("프로그램을 종료합니다. 로그인 화면으로 이동합니다.");
        }}
      >
        {/* 종료 */}
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
