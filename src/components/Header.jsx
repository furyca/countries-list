import Search from "./Search";
import { Box } from "@mui/material";
import image from './assets/header-background.jpg'

const styles = {
  header: {
    height: 400,
    background: `url(${image}) top no-repeat`,
    backgroundSize: 'cover',
    backgroundColor: '#0000009e',
    backgroundBlendMode: 'darken',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const Header = ({countryList}) => {
  return (
    <Box component='header' sx={styles.header}>
      <Search countryList={countryList} />
    </Box>
  );
};

export default Header;
