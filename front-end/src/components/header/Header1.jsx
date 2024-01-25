import {
  DarkModeOutlined,
  ExpandMore,
  Facebook,
  Instagram,
  LightModeOutlined,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const options = ["AR", "EN"];

function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {    
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        bgcolor: "#2b3445",
        py: "4px",
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
      }}
    >
      <Container>
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#d23f57",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
            HOT
          </Typography>
          <Typography
            sx={{ fontSize: "12px", fontWeight: "300", color: "#fff" }}
            variant="body2"
          >
            Free Express Shipping
          </Typography>
          <Box flexGrow={1} />
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ color: "#fff", fontSize: "16px" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "16px" }} />
              </IconButton>
            )}
          </div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{ p: 0, m: 0 }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "11px", color: "#fff" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
          <Twitter
            sx={{
              fontSize: "16px",
              color: "#fff",
              "&:hover": { color: "#1da1f2" },
              cursor: "pointer",
            }}
          />
          <Instagram
            sx={{
              fontSize: "16px",
              color: "#fff",
              "&:hover": { color: "#fd1d1d" },
              mx: 1,
              cursor: "pointer",
            }}
          />
          <Facebook
            sx={{
              fontSize: "16px",
              cursor: "pointer",
              color: "#fff",
              "&:hover": { color: "#1877f2" },
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
export default Header1;
