import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Paper,
  Button,
  IconButton,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useUserDetails } from "../Features/user/useUserDetails";
import { useUser } from "../Features/user/useUser";
import toast from "react-hot-toast";
import { useUpdateUser } from "../Features/user/useUpdateUser";
import ProfileSkeleton from "../ui/ProfileSkeleton";

export default function UserProfile() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { user } = useUser();
  const { userDetails, isLoading } = useUserDetails(user?.id);
  const { updateUser, isUpdating } = useUpdateUser();
  const navigate = useNavigate();

  if (isLoading) return <ProfileSkeleton />;

  function handleBackBtn() {
    navigate(-1);
  }

  function onSubmit({
    name,
    lastName,
    address,
    phoneNumber,
    nationalID,
    birthday,
  }) {
    updateUser(
      {
        user_id: user?.id,

        name,
        lastName,
        address,
        phoneNumber,
        nationalID,
        birthday,
      },
      {
        onSuccess: () => {
          toast.success("Your Details Updated Successfully 😉", {
            duration: 4000,
          });
          reset();
          navigate(-1);
        },

        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  }

  const { name, lastName, address, phoneNumber, nationalID, birthday } =
    userDetails || {};

  return (
    <Paper elevation={5} sx={{ width: "80%", margin: "auto", padding: "1rem" }}>
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
          sx={{ marginRight: "1rem", color: "text.primary" }}
          onClick={handleBackBtn}
        >
          <ArrowBack />
        </IconButton>

        <Typography variant="h5" fontWeight="bold">
          Your Details
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="name"
          variant="outlined"
          label={name || "Name"}
          type="text"
          {...register("name", { required: "Name is Required" })}
          error={!!errors.name}
          helperText={errors?.name?.message}
          disabled={isLoading}
        />
        <TextField
          id="lastName"
          variant="outlined"
          label={lastName || "Last Name"}
          type="text"
          {...register("lastName", { required: "Last Name is Required" })}
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <TextField
          id="address"
          variant="outlined"
          label={address || "Address"}
          type="text"
          {...register("address", { required: "Address is Required" })}
          error={!!errors.address}
          helperText={errors?.address?.message}
        />
        <TextField
          id="phoneNumber"
          variant="outlined"
          label={phoneNumber || "Phone Number"}
          type="tel"
          {...register("phoneNumber", { required: "Phone Number is Required" })}
          error={!!errors?.phoneNumber}
          helperText={errors?.phoneNumber?.message}
        />
        <TextField
          id="nationalID"
          variant="outlined"
          label={nationalID || "National ID"}
          {...register("nationalID")}
          error={!!errors?.nationalID}
          helperText={errors?.nationalID?.message}
        />
        <TextField
          id="birthday"
          variant="outlined"
          type="date"
          placeholder="Birthday"
          {...register("birthday")}
          error={!!errors?.birthday}
          helperText={errors?.birthday?.message}
          defaultValue={birthday}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={isUpdating}
          sx={{ backgroundColor: "background.appBar" }}
        >
          {isUpdating ? <CircularProgress /> : "Submit"}
        </Button>
      </Box>
    </Paper>
  );
}
