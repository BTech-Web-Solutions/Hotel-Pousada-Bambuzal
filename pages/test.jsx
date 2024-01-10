import Image from "next/image";
import React, { useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_API_AUTH_KEY;
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const Test = () => {
  const [files, setFiles] = useState([]);
  const [eventId, setEventId] = useState("c02a9433a93b4b1793460d2ecd9d96b5");
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles(Array.from(selectedFiles));
  };

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      files.forEach((file, index) => {
        formData.append("image", file); // Use the same field name "image" for all files
      });
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
        console.log("Images uploaded successfully:", data);
        fetchImages(); // Update the image list after upload
      } else {
        console.error("Failed to upload images:", data.error);
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

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        {images.map((image) => (
          <Image
            key={image.id}
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
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Test;
