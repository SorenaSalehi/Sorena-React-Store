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

export default function ProductImageSwiper({ autoplay = 10000 }) {
  return (
    <Box
      sx={{
        width: "90%",
        height: "400px",
        margin: "0 auto",

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
        <SwiperSlide>
          <img
            src="https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/1.png"
            alt="Brown Leather Belt Watch 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/2.png"
            alt="Brown Leather Belt Watch 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/3.png"
            alt="Brown Leather Belt Watch 3"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
