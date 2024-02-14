import Search from "./Search";
import { Box } from "@mui/material";
import { Styles } from "../types/styleTypes";

const styles: Styles = {
  header: {
    height: 400,
    background: `url(/assets/header-background.jpg) top no-repeat`,
    backgroundSize: 'cover',
    backgroundColor: '#0000009e',
    backgroundBlendMode: 'darken',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const Header = () => {
  return (
    <Box component='header' sx={styles.header}>
      <Search />
    </Box>
  );
};

export default Header;
