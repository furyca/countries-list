import { useContext } from "react";
import { Context } from "../Context";
import { Alert, Snackbar } from "@mui/material";

const AlertBar = () => {
  const context = useContext(Context);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    context.setAlert(false);
  };

  return (
    <Snackbar
      open={context.alert}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
        No result could be found
      </Alert>
    </Snackbar>
  );
};

export default AlertBar;
