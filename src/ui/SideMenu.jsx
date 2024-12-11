import React from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListSubheader,
} from "@mui/material";
import {
  Store,
  AccountBox,
  Man2Outlined,
  ExpandLess,
  ExpandMore,
  Menu as MenuIcon,
  Inbox,
  Mail,
} from "@mui/icons-material";
import { useNavigate } from "react-router";

export default function SideMenu() {
  const [open, setOpen] = React.useState(false);
  const [isMenCategoryOpen, setIsMenCategoryOpen] = React.useState(false);
  const [isWomenCategoryOpen, setIsWomenCategoryOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    setIsMenCategoryOpen(false);
    setIsWomenCategoryOpen(false);
  };

  const handleNavigation = (route) => {
    toggleDrawer(false)(); // Close the drawer
    navigate(route); // Navigate to the selected route
  };

  const handleClickMen = () => {
    setIsMenCategoryOpen(!isMenCategoryOpen);
    setIsWomenCategoryOpen(false);
  };

  const handleClickWomen = () => {
    setIsWomenCategoryOpen(!isWomenCategoryOpen);
    setIsMenCategoryOpen(false);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List
        component="nav"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Sorena React Store
          </ListSubheader>
        }
      >
        {/* Main Navigation */}
        <ListItem disablePadding onClick={() => handleNavigation("/")}>
          <ListItemButton>
            <ListItemIcon>
              <Store />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => handleNavigation("dashboard")}>
          <ListItemButton>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        {/* Men Category */}
        <ListItemButton onClick={handleClickMen}>
          <ListItemIcon>
            <Man2Outlined />
          </ListItemIcon>
          <ListItemText primary="Men" />
          {isMenCategoryOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={isMenCategoryOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleNavigation("/men-shirts")}
            >
              <ListItemText primary="Men's Shirts" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleNavigation("/men-shoes")}
            >
              <ListItemText primary="Men's Shoes" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleNavigation("/men-watches")}
            >
              <ListItemText primary="Men's Watches" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Women Category */}
        <ListItemButton onClick={handleClickWomen}>
          <ListItemIcon>
            <Man2Outlined />
          </ListItemIcon>
          <ListItemText primary="Women" />
          {isWomenCategoryOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={isWomenCategoryOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleNavigation("/women-shirts")}
            >
              <ListItemText primary="Women's Shirts" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleNavigation("/women-shoes")}
            >
              <ListItemText primary="Women's Shoes" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleNavigation("/women-watches")}
            >
              <ListItemText primary="Women's Watches" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      {/* Divider and Additional Items */}
      <Divider />
      <List>
        {["Help Center", "Contact Us", "Track Order"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() =>
              handleNavigation(`/${text.toLowerCase().replace(" ", "-")}`)
            }
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} sx={{ color: "white" }}>
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
