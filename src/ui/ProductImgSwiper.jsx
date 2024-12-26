import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Box } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductImageSwiper({
  images,
  container = "90%",
  containerHeight = "400px",
  autoplay = 10000,
}) {
  return (
    <Box
      sx={{
        width: { container },
        height: { containerHeight },
        margin: "0 auto",
        zIndex: "500",

        "& .swiper": {
          width: "100%",
          height: "100%",
        },
        "& .swiper-slide": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        "& .swiper-slide img": {
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        },
        // Custom navigation button styles
        "& .swiper-button-prev, & .swiper-button-next": {
          color: "rgba(0,0,0,0.5)",

          "&:hover": {
            color: "rgba(0,0,0,0.8)",
          },
        },
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: false }}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{
          delay: autoplay,
          disableOnInteraction: false,
        }}
      >
        {images?.map((img) => (
          <SwiperSlide>
            <Box
              component="img"
              loading="lazy"
              alt={`product-img-${img}`}
              src={img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
