// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import StyleSheet Css
import "./Swiper.css";
import { useTheme } from "@emotion/react";
import { Box, Button, Stack, Typography } from "@mui/material";
// Make Data For Doing Loop By Using Map
const mySlider = [
  { id: 1, link: "./Images/banner-15.jpg", title: "men" },
  { id: 2, link: "./Images/banner-25.jpg", title: "women" },
];

function SwiperSliderOne() {
  const theme = useTheme();
  return (
    <>
      {/* Start Box Slider */}
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {mySlider.map((item) => {
          return (
            <SwiperSlide className="slider-parent" key={item.id}>
              <img src={item.link} alt={item.title} />
              <Box
                sx={{
                  // @ts-ignore
                  [theme.breakpoints.up("sm")]: {
                    position: "absolute",
                    left: "10%",
                    textAlign: "left",
                  },
                  // @ts-ignore
                  [theme.breakpoints.down("sm")]: {
                    pt: 4,
                    pb: 6,
                  },
                }}
              >
                <Typography
                  sx={{ color: "#222", textTransform: "uppercase" }}
                  variant="h6"
                >
                  life style collection
                </Typography>
                <Typography
                  sx={{
                    color: "#222",
                    fontWeight: 400,
                    my: 1,
                    textTransform: "uppercase",
                  }}
                  variant="h4"
                >
                  {item.title}
                </Typography>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  sx={{ justifyContent: { xs: "center", sm: "left" } }}
                >
                  <Typography
                    sx={{ color: "#333", mr: 1, textTransform: "uppercase" }}
                    variant="h4"
                  >
                    sale up to
                  </Typography>
                  <Typography
                    sx={{ color: "#d23f57", textTransform: "uppercase" }}
                    variant="h4"
                  >
                    30% off
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 300,
                    my: 1,
                    textTransform: "capitalize",
                  }}
                  variant="body1"
                >
                  get free shipping on order over 99.9$
                </Typography>
                <Button
                  sx={{
                    textTransform: "uppercase",
                    px: 5,
                    py: 1,
                    mt: 2,
                    backgroundColor: "#222",
                    boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                    color: "#fff",
                    borderRadius: "4px",
                    "&:hover": { backgroundColor: "#151515" },
                  }}
                  variant="contained"
                >
                  shop now
                </Button>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* End Box Slider */}
    </>
  );
}

export default SwiperSliderOne;
