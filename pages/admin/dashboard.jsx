import { useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "../../src/hooks/useCookies";
import useTokenValidation from "../../src/hooks/useTokenValidation";

const Dashboard = () => {
  const [isValidToken, setIsValidToken] = useState(false);
  const token = getCookie("token");
  const router = useRouter();

  useTokenValidation(token, router, setIsValidToken);

  if (!isValidToken) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        fontSize: "3rem",
        color: "red",
      }}
    >
      dashboard
    </div>
  );
};

export default Dashboard;
