import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  capitalize,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  BookOnlineOutlined,
  Close,
  ElectricBikeOutlined,
  KeyboardArrowRightOutlined,
  LaptopChromebookOutlined,
  MenuOutlined,
  SportsEsportsOutlined,
  WindowRounded,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Links from "./Links";

function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  // Toggle Drawer
  const [state, setState] = useState({
    top: false,
    // left: false,
    // bottom: false,
    // right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 5,
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.secondary,
          }}
        >
          <WindowRounded />
          <Typography sx={{ p: 0, mx: 1, textTransform: "capitalize" }}>
            categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightOutlined />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 220,
              bgcolor: theme.palette.myColor.main,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText sx={{ textTransform: "capitalize" }}>
              bikes
            </ListItemText>
          </MenuItem>
          {/* /////////////////////////////////////////// */}
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText sx={{ textTransform: "capitalize" }}>
              electronics
            </ListItemText>
          </MenuItem>
          {/* /////////////////////////////////////////// */}
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <BookOnlineOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText sx={{ textTransform: "capitalize" }}>
              books
            </ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText sx={{ textTransform: "capitalize" }}>
              games
            </ListItemText>
          </MenuItem>
        </Menu>
        {/* /////////////////////////////////////////// */}
      </Box>

      {useMediaQuery("(min-width:1000px)") && (
        <Stack flexDirection={"row"} alignItems={"center"} zIndex={2} gap={4}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Pages"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}

      {useMediaQuery("(max-width:1000px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuOutlined />
        </IconButton>
      )}
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{ width: 444, mx: "auto", mt: 6, pt: 10, position: "relative" }}
        >
          <IconButton
            onClick={toggleDrawer("top", false)}
            sx={{
              position: "absolute",
              top: 0,
              right: 10,
              "&:hover": { rotate: "360deg", transition: "0.3s", color: "red" },
            }}
          >
            <Close />
          </IconButton>
          {/* Map On Main Link To Prevent Repeat The Same Code And Appear Accordion */}
          {[
            { mainLink: "Home", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "Mega menu", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "pages", subLink: ["Link1", "Link2", "Link3"] },
            {
              mainLink: "Full screen menu",
              subLink: ["Link1", "Link2", "Link3"],
            },
            { mainLink: "User account", subLink: ["Link1", "Link2", "Link3"] },
            {
              mainLink: "Vender account",
              subLink: ["Link1", "Link2", "Link3"],
            },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={0}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {item.mainLink}
                </AccordionSummary>
                <List sx={{ py: 0, my: 0 }}>
                  {/* Map On Link To Appear In Accordion */}
                  {item.subLink.map((Link) => {
                    return (
                      <ListItem key={Link} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={Link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
}
export default Header3;
