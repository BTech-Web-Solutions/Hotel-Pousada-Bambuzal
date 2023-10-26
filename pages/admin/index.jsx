import React, { useState, useEffect } from "react";
import Navbar from "../../src/components/Navbar";
import { useRouter } from "next/router";
import { database } from "/firebase/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectLogin, setIncorrectLogin] = useState(false);

  const router = useRouter();

  // Caso não tenha feito o primeiro login ainda, essa função é chamada pelo botão de login
  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const { token } = await response.json();
      const decodedToken = token ? JSON.parse(atob(token.split(".")[1])) : null;
      const userDocRef = doc(database, "users", decodedToken.id);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        await setDoc(userDocRef, { token }, { merge: true });
        router.push("/admin/dashboard");
      } else {
        setIncorrectLogin(true);
      }
    }
  };

  // useEffect(() => {
  //   const checkTokenValidity = async (token) => {
  //     const response = await fetch("http://localhost:3000/api/user/validate", {
  //       method: "POST",
  //       body: JSON.stringify({ token }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     return response.ok;
  //   };

  //   const token = getCookie("token");

  //   const checkAndRedirect = async () => {
  //     if (token && (await checkTokenValidity(token))) {
  //       router.push("/admin/dashboard");
  //     }
  //   };

  //   checkAndRedirect();
  // }, []);

  return (
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
  );
}
