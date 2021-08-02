import { makeStyles, Theme } from "@material-ui/core";
import { colors, textColors } from "_config/themes";

export interface ButtonStylesProps {
  variant?: "outlined" | "contained";
  size?: "small" | "medium" | "large";
  palette?: "primary" | "secondary";
  radius?: number;
}

export const useStyles = makeStyles<Theme, ButtonStylesProps, "button">({
  button: {
    height: 36,
    width: 136,
    fontSize: 12,
    backgroundColor: ({ palette, variant }) => {
      if (variant === "outlined") return "transparent";

      return palette === "primary" ? colors.primary.main : "white";
    },
    color: ({ palette, variant }) => {
      if (variant === "outlined") return textColors.primary;

      return palette === "primary" ? "white" : textColors.primary;
    },
    borderRadius: 10,

    "&.MuiButton-contained": {
      border: "0.5px solid transparent",
    },

    "&.MuiButton-outlined": {
      border: ({ palette }) =>
        `0.5px solid ${
          palette === "primary" ? colors.primary.main : colors.secondary
        }`,
    },

    "&.MuiButton-sizeSmall": {
      fontSize: 10,
      height: 26,
    },
    "& .MuiButton-iconSizeSmall": {
      "& > *:first-child, & > *:last-child": {
        fontSize: 14,
      },
    },

    "&.MuiButton-sizeLarge": {
      minWidth: 120,
      fontSize: 12,
      height: 40,
    },

    "& .MuiButton-root": {
      minWidth: 136,
      borderRadius: 10,
    },

    "& .MuiButton-label": {
      display: "block",
      position: "relative",
      textTransform: "none",
      textAlign: "center",
    },

    "& .MuiButton-startIcon, & .MuiButton-endIcon": {
      display: "block",
      position: "absolute",
    },
    "& .MuiButton-startIcon": {
      top: 0,
      left: 0,
      marginRight: 8,
    },
    "& .MuiButton-endIcon": {
      marginLeft: 8,
      top: 0,
      right: 0,
    },

    
  },



});