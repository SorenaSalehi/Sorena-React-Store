import React, { useState } from "react";
import { Button, Box, SwipeableDrawer, Fab } from "@mui/material";
import { Close } from "@mui/icons-material";
import Reviews from "../Features/reviews/Reviews";
import MoreDetails from "../Features/moreDetails/MoreDetails";

const drawerBleeding = 56;

function ShowMoreDrawer({ section, reviews }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ zIndex: 50 }}>
      <Box sx={{ textAlign: "center", pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>{section}</Button>
      </Box>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          ".MuiPaper-root": {
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
            maxHeight: "80%",
            overflow: "hidden",
          },
        }}
      >
        <Box
          sx={{
            px: 2,
            py: 2,
            height: "100%",
            overflow: "auto",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
          }}
        >
          {section === "reviews" ? (
            <Reviews />
          ) : (
            <MoreDetails detailOf="mens-shoes" />
          )}
        </Box>
        <Fab
          onClick={toggleDrawer(false)}
          sx={{ position: "fixed", bottom: "1rem", right: "1rem" }}
        >
          <Close />
        </Fab>
      </SwipeableDrawer>
    </Box>
  );
}

export default ShowMoreDrawer;
