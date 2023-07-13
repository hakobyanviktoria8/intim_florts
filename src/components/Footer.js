import React, { useState } from "react";
import { Box, Divider, Typography, styled } from "@mui/material";
import { linksData } from "../dataUiPart.js/linksData";
import { LinkComp } from "./link/LinkComp";
import { Logo } from "./common/Logo";
import { Translate } from "react-translated";
import { ModalComp } from "./common/ModalComp";

const FooterBox = styled(Box)(({ theme }) => ({
  fontSize: "14px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 0 28px",

  [theme.breakpoints.up("sm")]: {
    fontSize: "18px",
  },
}));

export const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleOpenModal = (type) => {
    setModalOpen(true);
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalType("");
  };

  return (
    <FooterBox component="footer">
      <Logo />
      <Box>
        {linksData?.map((link) => (
          <LinkComp
            key={link.id}
            link={link}
            onClick={() => handleOpenModal(link.type)}
          />
        ))}
      </Box>

      <ModalComp
        open={modalOpen}
        handleClose={handleCloseModal}
        type={modalType}
      />

      <Divider sx={{ mb: 3, mt: 5, width: "100%" }} />

      <Typography variant="body3">
        &copy; {new Date().getFullYear()} Intim Florts |{" "}
        <Translate text="rights reserved" />
      </Typography>
    </FooterBox>
  );
};
