  
import { makeStyles } from "@material-ui/core";
import { textColors } from "_config/themes";

export const useStyles = makeStyles({
  title: {
    fontWeight: 700,
    fontSize: 20,
    marginBottom: 18,

    "& + #pd-subtitle": {
      marginTop: 24,
    },
    "& + #pd-description": {
      marginTop: 8,
    },
  },
  subtitle: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "16px",

    "& + #pd-description": {
      marginTop: 8,
    },
  },
  description: {
    color: textColors.gray,
    fontWeight: 300,
    fontSize: 12,
    lineHeight: "15.6px",
  },

  boxheader: {
    backgroundColor: '#F9F9F9',

  }
});