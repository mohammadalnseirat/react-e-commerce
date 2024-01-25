import { Box, Button, Typography } from "@mui/material";

function Footer() {
return (
    <Box
        sx={{
        bgcolor: "#2b3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        }}
    >
        <Typography
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{ fontSize: 18, textTransform: "capitalize" }}
        >
        designed and developed by
        <Button
            sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
            }}
        >
            mohammad alnseirat
        </Button>
        @2024
        </Typography>
    </Box>
);
}
export default Footer;
