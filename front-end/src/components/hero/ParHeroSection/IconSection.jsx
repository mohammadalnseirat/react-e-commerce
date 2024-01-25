import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBolt,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function IconSection() {
  const theme = useTheme();
  return (
    <Container
      sx={{ mt: 3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}
    >
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" variant="middle" flexItem />
          ) : null
        }
        direction={"row"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <MyBox
          icon={<ElectricBolt fontSize="large" />}
          title={"fast delivery"}
          subtitle={"start from $10"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlined fontSize="large" />}
          title={"money guaratee"}
          subtitle={"7 days back"}
        />
        <MyBox
          icon={<AccessAlarmOutlined fontSize="large" />}
          title={"365 days "}
          subtitle={"for free return"}
        />
        <MyBox
          icon={<CreditScoreOutlined fontSize="large" />}
          title={"payment"}
          subtitle={"secure system"}
        />
      </Stack>
    </Container>
  );
}

export default IconSection;

function MyBox({ icon, title, subtitle }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        gap: 3,
        py: 1.6,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
      }}
    >
      {icon}
      <Box>
        <Typography sx={{ textTransform: "capitalize" }} variant="body1">
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textTransform: "capitalize",
            fontWeight: 300,
            color: theme.palette.text.secondary,
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}
