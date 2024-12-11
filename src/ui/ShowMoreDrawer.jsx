import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Divider, Fab, Rating } from "@mui/material";
import { Close } from "@mui/icons-material";
import Reviews from "../Features/reviews/Reviews";
import MoreDetails from "../Features/moreDetails/MoreDetails";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: grey[100],
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.background.default,
  }),
}));

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.applyStyles("dark", {
    backgroundColor: grey[800],
  }),
}));

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: grey[300],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
  ...theme.applyStyles("dark", {
    backgroundColor: grey[900],
  }),
}));

function ShowMoreDrawer({ section }) {
  //   const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  //   const container =
  // window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          [`${Root} .MuiDrawer-root > .MuiPaper-root`]: {
            height: `calc(80% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <Box sx={{ textAlign: "center", pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>{section}</Button>
      </Box>
      <SwipeableDrawer
        // container={container}
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
        {/* <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        > */}
        {/* <Puller /> */}
        {/* <Typography sx={{ p: 2, color: "text.secondary" }}>
            {section === "reviews" ? "5 reviews" : "more details"}
          </Typography> */}
        {/* </StyledBox> */}

        <StyledBox
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
        </StyledBox>
        <Fab
          onClick={toggleDrawer(false)}
          sx={{ position: "fixed", bottom: "1rem", right: "1rem" }}
        >
          <Close />
        </Fab>
      </SwipeableDrawer>
    </Root>
  );
}

export default ShowMoreDrawer;
