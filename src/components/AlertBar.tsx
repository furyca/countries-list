import { SyntheticEvent, useContext } from "react";
import { Context } from "../Context";
import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";

const AlertBar = () => {
  const { alert, setAlert } = useContext(Context);

  const handleClose = (event: SyntheticEvent<Element, Event> | Event, reason?: SnackbarCloseReason) => {
    if ("preventDefault" in event) {
      event.preventDefault();
    }

    if (reason === "clickaway") {
      return;
    }

    setAlert(false);
  };

  return (
    <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
        No result could be found
      </Alert>
    </Snackbar>
  );
};

export default AlertBar;
