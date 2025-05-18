import React, { useState } from "react";

function ImageSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <button onClick={prevImage}>Previous</button>
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                style={{ width: "300px", height: "200px", margin: "10px" }}
            />
            <button onClick={nextImage}>Next</button>
            <br />
            {/* Click-on option circles */}
            {images.map((_, index) => (
                <span
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    style={{
                        display: "inline-block",
                        width: "12px",
                        height: "12px",
                        margin: "5px",
                        backgroundColor: index === currentIndex ? "blue" : "gray",
                        borderRadius: "50%",
                        cursor: "pointer",
                    }}
                ></span>
            ))}
        </div>
    );
}

function App() {
    const imageList = [
        "https://via.placeholder.com/300x200/FF5733/FFF?text=Image+1",
        "https://via.placeholder.com/300x200/33FF57/FFF?text=Image+2",
        "https://via.placeholder.com/300x200/5733FF/FFF?text=Image+3",
    ];

    return <ImageSlider images={imageList} />;
}

export default App;