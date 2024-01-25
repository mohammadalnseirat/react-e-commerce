import { Box, Container } from "@mui/material";
import SwiperSliderOne from "./ParHeroSection/Swiper";
import BoxImage from "./ParHeroSection/Boximage";
import IconSection from "./ParHeroSection/IconSection";

function Hero() {
  return (
    <Container>
      <Box
        sx={{ pt: 2, mt: 2.5, display: "flex", gap: 2, alignItems: "center" }}
      >
        <SwiperSliderOne />
        {/* ///////// */}
        <BoxImage />
      </Box>

      <IconSection />
    </Container>
  );
}
export default Hero;
