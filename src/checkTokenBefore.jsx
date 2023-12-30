import { getCookie, deleteCookie } from "./hooks/useCookies";
import router from "next/router";

const apiKey = process.env.NEXT_PUBLIC_API_AUTH_KEY;
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const apiURLLocal = process.env.NEXT_PUBLIC_API_URL_LOCAL;

const checkTokenBefore = async () => {
  const cookie = getCookie("admEmail");

  if (cookie === "" || cookie === null) {
    router.push("/admin");
    return false;
  } else {
    // Verificação de Token
    try {
      const tokenResult = await fetch(`${apiURL}/admin/token-validate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
        },
        body: JSON.stringify({
          admEmail: getCookie("admEmail"),
        }),
      });

      const tokenData = await tokenResult.json();

      if (tokenData.message === "Invalid credentials") {
        deleteCookie("admEmail"); // Certifique-se de definir ou substituir por sua lógica de remoção de cookie.
        router.push("/admin");
        return false;
      }

      // Verificação de Role
      const roleResult = await fetch(`${apiURLLocal}/admin/check-role`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
        },
        body: JSON.stringify({
          admEmail: getCookie("admEmail"),
        }),
      });

      const roleData = await roleResult.json();

      if (roleData.message === "Authorized!") {
        // Retorna true quando a verificação do token e da role são bem-sucedidas
        return true;
      } else {
        // Trate aqui o caso em que a role não é autorizada
        alert("Você não tem permissão para essa ação!");
        return false;
      }
    } catch (error) {
      console.error("Erro ao validar token ou role:", error);
      router.push("/admin");
      return false;
    }
  }
};

export default checkTokenBefore;
