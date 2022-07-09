import React, { useState } from "react";
import topoBackground from "../assets/topoBackground.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles.scss";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { BookingForm } from "./BookingForm.jsx";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ParkingSpotTest({ info, isVisible }) {
  const { address, options, price, size, hostName } = info;
  const [open, setOpen] = useState(false);
  const onSpotClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="parkingSpotTile" onClick={onSpotClick}>
        <img className="tileTopo" src={topoBackground} width="100%"></img>
        <span>
          <h1 className="spotAddress">{address}</h1>
        </span>
      </div>
      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          ></BootstrapDialogTitle>
          <DialogContent dividers>
            {address}
            <br></br>
            {options}
            <br></br>
            {price}
            <br></br>
            {size}
            <BookingForm hostName={hostName} address={address}/>
          </DialogContent>
        </BootstrapDialog>
      </div>
    </>
  );
}
