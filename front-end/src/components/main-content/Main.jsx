import {
  Box,
  CircularProgress,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
// Imports for cards
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";
import { AnimatePresence, motion } from "framer-motion";

function Main() {
  const [value, setValue] = useState(2);

  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setmyData(newValue);
    }
  };
  const theme = useTheme();

  // Dialog
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // TO Get Data For Men Women Or For All Products
  const allProductsApi = "products?populate=*";
  const menProductApi = "products?populate=*&filters[productCategory][$eq]=men";
  const womenProductApi =
    "products?populate=*&filters[productCategory][$eq]=women";

  // Using useState To Change Toggle Bettwen Category
  const [myData, setmyData] = useState(allProductsApi);

  // To Return Data
  const { data, error, isLoading } = useGetproductByNameQuery(myData);
  const [clickedProduct, setclickedPrdouct] = useState({});

  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center", fontSize: "32px" }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Container
        sx={{ py: 11, textTransform: "capitalize", textAlign: "center" }}
      >
        <Typography variant="h6">
          {
            // @ts-ignore
            error.error
          }
        </Typography>
        <Typography variant="h6">Plase try agin later</Typography>
      </Container>
    );
  }

  if (data) {
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          gap={3}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
              selected products
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 300, textTransform: "capitalize" }}
            >
              all our news arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233,69,96,0.5) !important",
                color: "#e94560 !important",
                backgroundColor: "initial !important",
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={allProductsApi}
              aria-label="left aligned"
            >
              all products
            </ToggleButton>
            <ToggleButton
              sx={{ mx: "16px !important", color: theme.palette.text.primary }}
              className="myButton"
              value={menProductApi}
              aria-label="centered"
            >
              men category
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={womenProductApi}
              aria-label="right aligned"
            >
              women category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <AnimatePresence>
            {data.data.map((item) => {
              return (
                <Card
                  component={motion.section}
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
                  key={item.id}
                  sx={{
                    maxWidth: 333,
                    mt: 6,
                    "&:hover .MuiCardMedia-root": {
                      rotate: "2deg",
                      scale: "1.1",
                      transition: "0.5s",
                    },
                  }}
                >
                  <CardMedia
                    sx={{ height: 277 }}
                    // @ts-ignore
                    image={`${item.attributes.productImage.data[0].attributes.url}`}
                    title="green iguana"
                  />
                  <CardContent>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography
                        gutterBottom
                        variant="h6"
                        component={"div"}
                        sx={{ textTransform: "capitalize" }}
                      >
                        {item.attributes.productTitle}
                      </Typography>
                      <Typography component={"p"} variant="subtitle1">
                        {item.attributes.productPrice}$
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color={"text.secondary"}>
                      {item.attributes.productDescription}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                      onClick={() => {
                        handleClickOpen();
                        setclickedPrdouct(item);
                      }}
                      size="large"
                      sx={{ textTransform: "capitalize" }}
                    >
                      <AddShoppingCartOutlined
                        fontSize="small"
                        sx={{ mr: 1 }}
                      />
                      add to cart
                    </Button>
                    <Button size="small">
                      {/* Controlled Rating */}
                      {/* <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              /> */}
                      {/* /////////////////////////// */}
                      {/* Read Only Rating */}
                      <Rating
                        name="read-only"
                        value={item.attributes.productRating}
                        readOnly
                        precision={0.5}
                      />
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </AnimatePresence>
        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <ProductDetails clickedProduct={clickedProduct} />
        </Dialog>
      </Container>
    );
  }
}

export default Main;
