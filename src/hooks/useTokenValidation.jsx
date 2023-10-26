// useTokenValidation.jsx:

import { useEffect } from "react";

import { getDoc, doc } from "firebase/firestore";
import { database } from "/firebase/firebaseConfig";

const useTokenValidation = (token, router, setIsValidToken, setLoggedUser) => {
  const checkTokenValidity = async (token) => {
    const response = await fetch("http://localhost:3000/api/user/validate", {
      method: "POST",
      body: JSON.stringify({ token }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.ok;
  };

  const handleRedirect = async () => {
    if (!token) {
      router.push("/admin");
    } else {
      const isValid = await checkTokenValidity(token);
      if (!isValid) {
        router.push("/admin");
      } else {
        setIsValidToken(true);
      }
    }
  };

  useEffect(() => {
    handleRedirect();

    const getLoggedUser = async () => {
      if (!token) return;
      const loggedUser = token ? JSON.parse(atob(token.split(".")[1])) : null;
      const docRef = doc(database, "users", loggedUser.id);
      const docSnap = await getDoc(docRef);
      const user = docSnap.data();
      setLoggedUser(user);
    };
    getLoggedUser();
  }, [token]);

  return handleRedirect;
};

export default useTokenValidation;
