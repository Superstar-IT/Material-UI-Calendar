import React from "react";
import { SvgIcon, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    fill: "none !important"
  }
}));

const PrevIcon = ({ color = "#333", className, ...rest }) => {
  const classes = useStyles();

  return (
    <SvgIcon {...rest} className={clsx(classes.root, className)}>
      <path d="M9 1L1 7.66667L9 15" stroke={color} strokeLinejoin="round" />
    </SvgIcon>
  );
};

export default PrevIcon;
