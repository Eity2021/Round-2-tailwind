import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import partners1 from "../../image/slider/image 116.png";
import partners2 from "../../image/slider/image 117.png";
import partners3 from "../../image/slider/image 118.png";
import partners4 from "../../image/slider/image 119.png";
import partners5 from "../../image/slider/image 120.png";
import partners6 from "../../image/slider/image 116.png";
import partners7 from "../../image/slider/image 117.png";
import partners8 from "../../image/slider/image 118.png";
import partners9 from "../../image/slider/image 119.png";

const partners = [
  partners1,
  partners2,
  partners3,
  partners5,
  partners4,
  partners6,
  partners7,
  partners8,
  partners9,
];

export default function Partners() {
  return (
    <div className="bg-gradient-to-b from-white to-white dark:from-darkColorMode dark:to-darkColorMode ">
      <div className="container mx-auto py-80 lg:px-0 px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
          }}
          loop={true}
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={partner}
                alt={`partner-${index}`}
                className="object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
