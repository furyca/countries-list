import { Box, Typography } from "@mui/material";
import { Styles } from "../types/styleTypes";

const styles: Styles = {
  footer: { display: "flex", alignItems: "center", justifyContent: "center", height: 160, padding: 2, marginTop: 8 },
};

const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Typography variant="body1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, dolorum.
      </Typography>
    </Box>
  );
};

export default Footer;
