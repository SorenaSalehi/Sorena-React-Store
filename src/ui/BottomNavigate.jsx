import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AccountCircle, Home, ShoppingBasket } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router";
import { useShopContext } from "../context/ShopContext";

export default function BottomNavigate() {
  const { basket, wishlist } = useShopContext();
  const [value, setValue] = React.useState("/");
  const navigate = useNavigate();

  const handleChange = (_, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        zIndex: 1100,
        position: "fixed",
        bottom: 0,
        backgroundColor: "background.appBar",
        color: "text.primary",

        "& button": {
          color: "text.btnFade",
        },
        "& button.Mui-selected": {
          color: "text.btn",
        },
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="wishlist"
        value="/wishlist"
        icon={
          <Badge
            badgeContent={wishlist?.length}
            color="success"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <FavoriteIcon />
          </Badge>
        }
      />

      <BottomNavigationAction
        label="Basket"
        value="/shoppingBasket"
        icon={
          <Badge
            badgeContent={basket?.length}
            color="success"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <ShoppingBasket />
          </Badge>
        }
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
