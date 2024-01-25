import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

function ProductDetails() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box display={"flex"}>
        <img width={300} src="src\Images\1.jpg" alt="" />
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">Women Fashiton</Typography>
        <Typography
          variant="h6"
          sx={{ my: 0.4, fontSize: "22px" }}
          color={"crimson"}
        >
          12.99$
        </Typography>
        <Typography variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>

        <Stack
          direction={"row"}
          gap={1}
          my={2}
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
        >
          {["src/Images/1.jpg", "src/Images/2.png"].map((item) => {
            return (
              <img
                key={item}
                style={{ borderRadius: 3 }}
                width={90}
                height={100}
                src={item}
                alt=""
              />
            );
          })}
        </Stack>
        <Button
          sx={{ textTransform: "capitalize", mb: { xs: 1, sm: 0 } }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          byu now
        </Button>
      </Box>
    </Box>
  );
}
export default ProductDetails;
