import React, { useState } from "react";

const images = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "https://picsum.photos/id/1016/1000/600/",
  "https://picsum.photos/id/1021/1000/600/",
];

export default function CircularImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div style={{ position: "relative", width: "600px", height: "360px", margin: "0 auto" }}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
        />
        <button
          onClick={handlePrev}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            background: "white",
            border: "none",
            borderRadius: "50%",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            background: "white",
            border: "none",
            borderRadius: "50%",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          ▶
        </button>
      </div>
      <p style={{ marginTop: "10px", fontWeight: "bold" }}>
        Image {currentIndex + 1} of {images.length}
      </p>
    </div>
  );
}
