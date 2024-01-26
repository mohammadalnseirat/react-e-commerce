import { ArrowForwardIosOutlined } from "@mui/icons-material";
import { Box, Link, Stack, Typography } from "@mui/material";

function BoxImage() {
  return (
    <>
      {/* Start Box For Images */}
      <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
        {/* Start Box Image-1 */}
        <Box sx={{ position: "relative" }}>
          <img width={"100%"} src="./Images/banner-17.jpg" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 31,
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#2b3445", fontSize: "18px" }}
            >
              NEW ARRIVALS
            </Typography>

            <Typography
              variant="h5"
              sx={{ color: "#2b3445", lineHeight: "18px", mt: 1 }}
            >
              SUMMER
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
              }}
            >
              SALE 20% OFF
            </Typography>

            <Link
              sx={{
                color: "#2b3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.3s",
                "&:hover": { color: "#d23f57" },
              }}
              href="#"
              underline="none"
            >
              Shop Now
              <ArrowForwardIosOutlined sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
        {/* End Box Image-1 */}

        {/* Start Box Image-2 */}
        <Box sx={{ position: "relative" }}>
          <img width={"100%"} src="./Images/banner-16.jpg" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 31,
            }}
          >
            <Typography
              variant="caption"
              sx={{ fontSize: "18px", color: "#2b3445", fontWeight: 300 }}
            >
              GAMING 4K
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "#2b3445", lineHeight: "18px", mt: 1 }}
            >
              DESKTOPS &
            </Typography>
            <Typography variant="h6" sx={{ color: "#2b3445" }}>
              LAPTOP
            </Typography>
            <Link
              sx={{
                color: "#2b3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.3s",
                "&:hover": { color: "#d23f57" },
              }}
              href="#"
              underline="none"
            >
              Shop Now
              <ArrowForwardIosOutlined sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
        {/* End Box Image-2 */}
      </Box>
      {/* End Box For Images */}
    </>
  );
}
export default BoxImage;
