import Image from "next/image";
import React, { useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_API_AUTH_KEY;
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const Test = () => {
  const [file, setFile] = useState(null);
  const [eventId, setEventId] = useState("c02a9433a93b4b1793460d2ecd9d96b5");
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("eventId", eventId);

      const result = await fetch(`${apiURL}/images/create`, {
        method: "POST",
        headers: {
          Authorization: apiKey,
        },
        body: formData,
      });

      const data = await result.json();

      if (result.ok) {
        console.log("Image uploaded successfully:", data);
        fetchImages(); // Atualiza a lista de imagens após o upload
      } else {
        console.error("Failed to upload image:", data.error);
      }
    } catch (error) {
      console.error("Unexpected error during image upload:", error);
    }
  };

  const fetchImages = async () => {
    try {
      const result = await fetch(`${apiURL}/images/${eventId}`, {
        method: "GET",
        headers: {
          Authorization: apiKey,
        },
      });

      const data = await result.json();

      if (result.ok) {
        console.log("Images fetched successfully:", data);
        setImages(data);
      }
    } catch (error) {
      console.error("Unexpected error during image fetch:", error);
    }
  };

  return (
    <div style={{ color: "#fff" }}>
      <h1>TEST</h1>

      <input
        type="file"
        name="image"
        onChange={handleFileChange}
        multiple={true}
        accept="image/*"
      />

      <button onClick={uploadImage}>Enviar</button>

      <button onClick={fetchImages}>Ver imagens</button>

      {images.map((image) => (
        <div key={image.image}>
          <Image
            src={`data:image/png;base64,${image.image}`}
            alt="Imagem"
            width="200"
            height="200"
            style={{
              border: "1px solid #fff",
              borderRadius: "5px",
              margin: "5px",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Test;
