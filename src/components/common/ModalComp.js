import React from "react";
import { Box, IconButton, Typography, Modal } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { modalData } from "../../dataUiPart.js/modalData";

const ModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  background: "#fff",
  border: "1px solid #000",
  boxShadow: 24,
  padding: "32px",
  borderRadius: "4px",

  [theme.breakpoints.up("sm")]: {
    width: 600,
    height: 450,
    overflow: "auto",
  },
}));

export const ModalComp = ({ open, handleClose, type }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalBox>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {modalData[type]?.title}
        </Typography>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Typography>
      </ModalBox>
    </Modal>
  );
};
