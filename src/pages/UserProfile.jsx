import React, { useState } from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  Typography,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { ArrowForwardIosOutlined, ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router";

export default function UserProfile() {
  const [open, setOpen] = useState(false);
  const [selectedField, setSelectedField] = useState(null);
  const [formValue, setFormValue] = useState("");
  const navigate = useNavigate();

  const fields = [
    { label: "Name | Last Name", value: "Sorena Salehi" },
    {
      label: "Address",
      value: "bahçelievler 1849/1 sk,no,6, 35600 karşiyaka, izmir,türkey",
    },
    { label: "Phone Number", value: "0539 697 6995" },
    { label: "National ID", value: "55 55 515 115" },
    { label: "Birthday", value: "1997/08/18" },
    { label: "Email", value: "Sorena@Sorena.com" },
    { label: "Your Password", value: "****************" },
  ];

  const handleClickOpen = (field) => {
    setSelectedField(field);
    setFormValue(field.value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedField(null);
  };

  const handleSave = () => {
    // Save logic here, for now we just close the dialog
    handleClose();
  };

  function handleBackBtn() {
    navigate(-1);
  }

  return (
    <Box sx={{ padding: "1rem" }}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <IconButton
          color="primary"
          aria-label="back"
          sx={{ marginRight: "1rem" }}
          onClick={handleBackBtn}
        >
          <ArrowBack />
        </IconButton>
        <Typography variant="h5" fontWeight="bold">
          Your Details
        </Typography>
      </Box>

      <List
        sx={{ width: "100%", bgcolor: "background.paper", borderRadius: "8px" }}
      >
        {fields.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              onClick={() => handleClickOpen(item)}
              secondaryAction={<ArrowForwardIosOutlined color="action" />}
              sx={{
                paddingY: "0.75rem",
                "&:hover": { bgcolor: "action.hover" },
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body2" color="text.secondary">
                  {item.label}
                </Typography>
                <Typography variant="body1">{item.value}</Typography>
              </Box>
            </ListItem>
            {index < fields.length - 1 && (
              <Divider variant="fullWidth" component="li" />
            )}
          </React.Fragment>
        ))}
      </List>

      {/* Edit Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Edit {selectedField?.label}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label={selectedField?.label}
            type="text"
            fullWidth
            variant="outlined"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
