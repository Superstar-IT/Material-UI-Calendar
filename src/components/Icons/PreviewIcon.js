import React from "react";
import { SvgIcon } from "@material-ui/core";

const PreviewIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M1 6C1 6 4.16 1 9 1C13.8 1 17 6 17 6C17 6 13.76 11 9 11C4.2 11 1 6 1 6Z"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M8.9998 7.66667C10.7671 7.66667 12.1998 6.17428 12.1998 4.33333C12.1998 2.49238 10.7671 1 8.9998 1C7.23249 1 5.7998 2.49238 5.7998 4.33333C5.7998 6.17428 7.23249 7.66667 8.9998 7.66667Z"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </SvgIcon>
  );
};

export default PreviewIcon;
