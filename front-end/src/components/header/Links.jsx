import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

function Links({ title }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        ":hover .show-when-hover": { display: "block" },
        ":hover": { cursor: "pointer" },
      }}
    >
      <Typography variant="body1">{title}</Typography>
      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

      <Box
        className="show-when-hover"
        sx={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          minWidth: "170px",
          display: "none",
        }}
      >
        <Paper sx={{ mt: 2 }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary="Dashboard"
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem
                disablePadding
                sx={{
                  ":hover .sub-link": { display: "block" },
                  position: "relative",
                }}
              >
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    primary="Products"
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                  />
                  <Box flexGrow={1} />
                  <KeyboardArrowRightOutlined fontSize="small" />
                </ListItemButton>

                <Box
                  className="sub-link"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "100%",
                    display: "none",
                  }}
                >
                  <Paper sx={{ minWidth: "150px", ml: 1 }}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              primary="Add Product"
                              sx={{
                                ".MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: 300,
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Edit Product" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary="Order"
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary="Profile"
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
}

export default Links;

// react-e-commerce\src\Images\banner-15.jpg
// react-e-commerce\src\Images\banner-16.jpg
// react-e-commerce\src\Images\banner-17.jpg
// react-e-commerce\src\Images\banner-25.jpg