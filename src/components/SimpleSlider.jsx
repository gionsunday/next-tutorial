"use client";

// SimpleSlider.jsx (with dynamic import for Next.js)
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

const images = [
  "https://picsum.photos/seed/1/800/400",
  "https://picsum.photos/seed/2/800/400",
  "https://picsum.photos/seed/3/800/400",
  "https://picsum.photos/seed/4/800/400",
  "https://picsum.photos/seed/5/800/400",
  "https://picsum.photos/seed/6/800/400",
];

export default function SimpleSlider() {
  return (
    <Slider {...settings}>
      {images.map((src, i) => (
        <div key={i}>
          <img
            src={src}
            alt={`slide-${i}`}
            className="w-full h-auto"
            onError={(e) => {
              e.currentTarget.src = "/fallback.jpg"; // fallback in /public
            }}
          />
        </div>
      ))}
    </Slider>
  );
}
