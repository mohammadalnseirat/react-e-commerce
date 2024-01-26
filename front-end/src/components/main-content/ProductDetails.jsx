import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function ProductDetails({ clickedProduct }) {
  const [selectedImage, setselectedImage] = useState(0);

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
        <img
          width={360}
          src={
            clickedProduct.attributes.productImage.data[selectedImage]
              .attributes.url
          }
          alt=""
        />
      </Box>

      <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">
          {clickedProduct.attributes.productTitle}
        </Typography>
        <Typography
          variant="h6"
          sx={{ my: 0.4, fontSize: "22px" }}
          color={"crimson"}
        >
          ${clickedProduct.attributes.productPrice}
        </Typography>
        <Typography variant="body1">
          {clickedProduct.attributes.productDescription}
        </Typography>

        <Stack
          direction={"row"}
          gap={1}
          my={2}
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
        >
          <ToggleButtonGroup
            value={selectedImage}
            exclusive
            sx={{
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius: "5px !important",
                opacity: "1",
                backgroundColor: "initial",
              },
            }}
          >
            {clickedProduct.attributes.productImage.data.map((item, index) => {
              return (
                <ToggleButton
                  key={item.id}
                  value={index}
                  sx={{
                    width: "110px",
                    height: "110px",
                    p: "0",
                    mx: "1",
                    opacity: "0.5",
                  }}
                >
                  <img
                    onClick={() => {
                      setselectedImage(index);
                    }}
                    style={{ borderRadius: 3 }}
                    width={"100%"}
                    height={"100%"}
                    src={item.attributes.url}
                    alt=""
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
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
