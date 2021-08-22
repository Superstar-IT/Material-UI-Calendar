import React from "react";
import { SvgIcon } from "@material-ui/core";

const CancelIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M12.2495 6.25L6.24951 12.25"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M12.2495 12.25L6.24951 6.25"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M9.25 17.5C13.8063 17.5 17.5 13.8063 17.5 9.25C17.5 4.69365 13.8063 1 9.25 1C4.69365 1 1 4.69365 1 9.25C1 13.8063 4.69365 17.5 9.25 17.5Z"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </SvgIcon>
  );
};

export default CancelIcon;
