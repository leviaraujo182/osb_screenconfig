import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  buttonsWrapper: {
    display: "flex",
    justifyContent: "space-between",

    "& .MuiButton-root": {
      minWidth: 136,
      borderRadius: 10,
    },

    "& .MuiButton-label": {
      display: "block",
      position: "relative",
    },

    "& .MuiButton-startIcon, & .MuiButton-endIcon": {
      display: "block",
      position: "absolute",
      width: 14,
      height: 8,

    },
    "& .MuiButton-startIcon": {
      top: 0,
      left: 0,
      marginRight: 8,
      width: 14,
      height: 8,

    },
    "& .MuiButton-endIcon": {
      marginLeft: 8,
      top: 0,
      right: 0,
    },
  },

  arrowleft: {
    marginTop: 2
  }
});