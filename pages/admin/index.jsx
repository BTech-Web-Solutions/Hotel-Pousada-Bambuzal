import React, { useState, useEffect } from "react";
import Navbar from "../../src/components/Navbar";
import { useRouter } from "next/router";
import { setCookie, getCookie, deleteCookie } from "../../src/hooks/useCookies";
import Loading from "../../src/components/Loading";
import moment from "moment";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectLogin, setIncorrectLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  console.log(moment().format("YYYY-MM-DD HH:mm:ss"));

  const router = useRouter();

  const apiKey = process.env.NEXT_PUBLIC_API_AUTH_KEY;
  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await fetch(`${apiURL}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await result.json();

    if (data.message === "Invalid credentials") {
      setIncorrectLogin(true);
    }

    if (
      data.message ===
      "Can't add new command when connection is in closed state"
    ) {
      alert("Há algo errado com a API!");
    }

    if (data.message === "User logged in!") {
      setCookie("admEmail", email);
      router.push("/admin/dashboard");
    }
  };

  useEffect(() => {
    const fetchApi = async () => {
      const cookie = getCookie("admEmail");

      if (cookie !== undefined && cookie !== "") {
        const result = await fetch(`${apiURL}/admin/token-validate`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: apiKey,
          },
          body: JSON.stringify({
            admEmail: cookie,
          }),
        });

        const data = await result.json();
        setIsLoading(false);
        console.log(data.message);

        if (data.message === "Invalid credentials") {
          deleteCookie("admEmail");
          alert("Sua sessão expirou!");
        }
        if (data.message === "Token is valid!") {
          router.push("/admin/dashboard");
        }
      }
    };

    fetchApi();
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <div>
        <Navbar />
        <div className="login-container">
          <form className="form-login">
            <ul className="login-nav">
              <li className="login-nav__item active">
                <a href="#">LogIn</a>
              </li>
            </ul>
            <label htmlFor="login-input-user" className="login__label">
              Email
            </label>
            <input
              id="login-input-user"
              className="login__input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="login-input-password" className="login__label">
              Senha
            </label>
            <input
              id="login-input-password"
              className="login__input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <label htmlFor="login-sign-up" className="login__label--checkbox">
            <input
            id="login-sign-up"
            type="checkbox"
            className="login__input--checkbox"
            />
            Mantenha conectado
          </label> */}
            <button className="login__submit" onClick={handleLogin}>
              Entrar
            </button>
          </form>
          {incorrectLogin && (
            <p className="login__incorrect">Email ou senha incorretos.</p>
          )}
          {/* <a href="#" className="login__forgot">
          Forgot Password?
        </a> */}
        </div>
      </div>
    </>
  );
}
