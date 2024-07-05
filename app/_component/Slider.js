import Image from "next/image";
import { useState, useEffect } from "react";
[
  {
    imageUrl: "/images/illustration1.png",
    headline: "Accessible and Affordable",
    title: "Fast. Reliable. Affordable.",
  },
  {
    imageUrl: "/images/illustration2.png",
    headline: "Tested and Trusted",
    title: "Your trusted delivery partner",
  },
  {
    imageUrl: "/images/illustration1.png",
    headline: "Safe and Secure",
    title: "Swift and safe delivery of packages.",
  },
];

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="slides">
        {data.map((item, index) => (
          <div
            key={index}
            className={index === currentIndex ? "slide active" : "slide"}
          >
            <Image src={item.imageUrl} className="" alt={`Slide ${index}`} />
            <div className="caption">{item.headline}</div>
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
