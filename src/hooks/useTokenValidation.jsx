// useTokenValidation.jsx

import { useEffect } from "react";

const useTokenValidation = (token, router, setIsValidToken) => {
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
  }, [token]);

  return handleRedirect;
};

export default useTokenValidation;
