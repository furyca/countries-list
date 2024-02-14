import { CSSProperties } from "react";

export type ResponsiveWidth = {
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
} | undefined;

export type Styles = {
  [key: string]: CSSProperties | {} | ResponsiveWidth;
};
