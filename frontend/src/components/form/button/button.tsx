import { FC } from "react";

import MuiButton, { ButtonProps } from "@mui/material/Button";

export const Button: FC<ButtonProps> = ({ variant = "outlined", ...props }) => {
  return <MuiButton variant={variant} {...props} />;
};
