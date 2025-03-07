import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { ReactNode } from "react";

interface SwiperWrapperProps {
  children: ReactNode[];
  slidesPerView?: number;
  loop?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  spaceBetween?: number;
}

const SwiperWrapper = ({ children, pagination = true, slidesPerView = 1, loop = true, spaceBetween = 10, navigation = true }: SwiperWrapperProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      pagination={pagination ? { clickable: true } : undefined} // Chỉ thêm pagination khi cần
      loop={loop}
      navigation={navigation ? true : undefined}
      // className="h-full"
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperWrapper;
