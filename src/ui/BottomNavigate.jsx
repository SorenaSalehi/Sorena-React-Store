import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AccountCircle, Home, ShoppingBasket } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router";
import { AppBar } from "@mui/material";

export default function BottomNavigate() {
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (_, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: 100,
        zIndex: 1100,
        position: "fixed",
        bottom: 0,
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Shopping Basket"
        value="/shoppingBasket"
        icon={<ShoppingBasket />}
      />

      <BottomNavigationAction label="Home" value="/" icon={<Home />} />

      <BottomNavigationAction
        label="Dashboard"
        value="/dashboard"
        icon={<AccountCircle />}
      />
    </BottomNavigation>
  );
}
