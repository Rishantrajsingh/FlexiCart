import { useEffect, useState } from "react";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Banners = () => {
  const banners = [image1, image2, image3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // const nextSlide = () => {
  //   setCurrent((prev) => (prev + 1) % banners.length);
  // };
  // const prevSlide = () => {
  //   setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  // };

  return (
    <div className="relative overflow-hidden w-full mt-20 h-61 md:h-105 lg:h-fit flex flex-col justify-baseline">
      {/* <ChevronLeft
        color="black"
        className="absolute left-4 top-25 z-10 bg-white rounded-full"
        onClick={prevSlide}
      /> */}
      {/* slider */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((img, index) => (
          <div key={index} className="w-full shrink-0 p-3">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img src={img} alt={`Banner ${index + 1}`} className="w-full" />
            </div>
          </div>
        ))}
      </div>
      {/* <ChevronRight
        color="black"
        className="absolute right-4 top-25 z-10 bg-white rounded-full"
        onClick={nextSlide}
      /> */}
      {/* dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full border border-[#656941] ${current === index ? "bg-[#656941]" : "bg-white"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banners;
