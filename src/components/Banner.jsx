import { bannerData } from "../Utils/bannerSlide";
import "./Banner.css";
import Slider from "./Slider";

const Banner = () => {
  return (
    <section className="mb-16">
      <div className="carousel w-full rounded-md lg:h-[600px]">
        {bannerData.map((slide) => (
          <Slider key={slide.id} slide={slide}></Slider>
        ))}
      </div>
    </section>
  );
};

export default Banner;
