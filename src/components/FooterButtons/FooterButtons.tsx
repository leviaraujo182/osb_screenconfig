import React from "react";
import { Box } from "@material-ui/core";
import { KeyboardArrowLeft } from "@material-ui/icons";
import { Button } from "components/Button";
import { useStyles } from "./FooterButtons.style";
import ArrowLeft from '_assets/imgs/ArrowRight.svg'

interface ProcessPageFooterProps {
  primaryButton?: React.ReactNode;
}

export const FooterButtons: React.FC<ProcessPageFooterProps> = ({
  primaryButton,
}) => {
  const styles = useStyles();
  return (
    <Box className={styles.buttonsWrapper}>
      <Button
        palette="secondary"
        startIcon={<img src={ArrowLeft} className={styles.arrowleft}/>}
        onClick={() => console.log("Voltar")}
      >
        Voltar
      </Button>
      {primaryButton}
    </Box>
  );
};