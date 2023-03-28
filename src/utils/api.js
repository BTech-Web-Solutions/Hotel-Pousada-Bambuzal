export const sendEmail = async (data) => {
  const response = await fetch("../../pages/api/send-email.js", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao enviar e-mail");
  }
};
