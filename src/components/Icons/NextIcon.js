import React from "react";
import { SvgIcon, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    fill: "none !important"
  }
}));

const NextIcon = ({ color = "#333", className, ...rest }) => {
  const classes = useStyles();

  return (
    <SvgIcon {...rest} className={clsx(classes.root, className)}>
      <path d="M1 1L9 7.66667L1 15" stroke={color} strokeLinejoin="round" />
    </SvgIcon>
  );
};

export default NextIcon;
