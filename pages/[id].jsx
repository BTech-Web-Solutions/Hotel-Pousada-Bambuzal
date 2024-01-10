import { useRouter } from "next/router";
import React from "react";

const rendersixfour = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <img src={`data:image/png;base64,${id}`} alt="Imagem" />
    </div>
  );
};

export default rendersixfour;
