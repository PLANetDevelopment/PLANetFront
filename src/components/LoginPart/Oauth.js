import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Oauth() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  useEffect(() => {
    window.localStorage.setItem("token", code);
    (async () => {
      try {
        console.log("try");
        const res = await axios.get(
          `https://플랜잇.웹.한국:8080/oauth/token?code=${code}`
        );
        const userId = res.data;
        window.localStorage.setItem("userId", userId);
        navigate("/");
      } catch (e) {
        console.error(e);
        window.alert("문제가 발생했습니다. 잠시 후에 다시 시도해주세요.");
        navigate("/login");
      }
    })();
  }, []);

  return <div style={{ color: "white" }}>로그인 중...</div>;
}

export default Oauth;
