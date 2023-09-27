import { FC } from "react";
import TextField from "@mui/material/TextField";
import { FormControl, TextFieldProps } from "@mui/material";

import { Label } from "../shared";

export const Input: FC<TextFieldProps> = ({ label, ...props }) => {
  return (
    <FormControl fullWidth>
      <Label>{label}</Label>
      <TextField {...props} />
    </FormControl>
  );
};
