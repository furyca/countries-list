import { Button } from "@mui/material";
import React, { useRef } from "react";
import ChangeHistoryRoundedIcon from "@mui/icons-material/ChangeHistoryRounded";

const styles = {
  button: {
    display: "none",
    position: "fixed",
    bottom: 20,
    right: 20,
    zIndex: 99,
    backgroundColor: "#00000080",
    borderRadius: 2,
    transition: "ease .2s",

    ":hover": {
      backgroundColor: "black",
      scale: "1.05",
    },
  },
};

const TopButton = () => {
  const topButton = useRef();

  const scroll = () => {
    document.documentElement.scrollTop > 250
      ? (topButton.current.style.display = "block")
      : (topButton.current.style.display = "none");
  };

  const toTop = () => (document.documentElement.scrollTop = 0);

  onscroll = () => scroll();
  return (
    <Button onClick={toTop} ref={topButton} sx={styles.button}>
      <ChangeHistoryRoundedIcon fontSize="large" />
    </Button>
  );
};

export default TopButton;
