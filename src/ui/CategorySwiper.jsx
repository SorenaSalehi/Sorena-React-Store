import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Box, Typography } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductImageSwiper({ images, onClick }) {
  return (
    <Box
      sx={{
        width: "90%",
        height: "20vh",
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
          borderRadius: "50%",
        },
        "& .swiper-slide p": {
          textWrap: "nowrap",
          fontSize: "0.8rem",
          //   marginX: "1rem",
        },
        // Custom navigation button styles
        "& .swiper-button-prev, & .swiper-button-next": {
          color: "rgba(235, 225, 225, 0.5)",

          "&:hover": {
            color: "rgba(0,0,0,0.8)",
          },
        },
      }}
    >
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        scrollbar={{ draggable: true }}
        loop={true}
      >
        {images?.map((img) => (
          <SwiperSlide>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                component="img"
                loading="lazy"
                alt={img.src}
                src={img.src}
                onClick={() => onClick(img.value)}
              />
              <Typography variant="caption" component="p">
                {img.value.replace("-", " ").toUpperCase()}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
