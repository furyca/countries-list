import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useContext } from "react";
import { Context } from "../Context";

const palette = [
  "#0D1282",
  "#F0DE36",
  "#D71313",
  "#0079FF",
  "#00DFA2",
  "#9376E0",
  "#A6D0DD",
  "#FF55BB",
  "#FF6D60",
  "#3C486B",
];

const style = {
  my: "1rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  '.css-jzcd7z-MuiFormControlLabel-root': {
    margin: 0
  }
}

const Palette = () => {
  const context = useContext(Context);

  const handleChange = (e) => {
    context.setSelectedColor(e.target.value);
  };

  return (
    <>
      <Box my="2rem" textAlign="center">
        <FormLabel>Color Palette For Selected</FormLabel>
        <RadioGroup
          value={context.selectedColor}
          onChange={handleChange}
          sx={style}
        >
          {palette.map((color) => (
            <FormControlLabel
              key={color}
              value={color}
              control={
                <Radio
                  size="large"
                  sx={{
                    color: color,
                    "&.Mui-checked": {
                      color: color,
                    },
                    
                  }}
                />
              }
            />
          ))}
        </RadioGroup>
      </Box>
    </>
  );
};

export default Palette;
