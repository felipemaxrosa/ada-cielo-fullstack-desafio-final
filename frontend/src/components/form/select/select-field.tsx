import { FC } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Label } from '../shared';

type SelectFieldProps = {
  items: Array<{ label: string; value: string }>;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  label?: string;
  name: string;
  id?: string;
};
export const SelectField: FC<SelectFieldProps> = ({
  items,
  value,
  onChange,
  name,
  id,
  label = '',
}) => {
  return (
    <FormControl fullWidth size="medium">
      <Label>{label}</Label>
      <Select
        name={name}
        id={id}
        value={value}
        onChange={(event) => onChange(event)}
        placeholder="Select"
      >
        {items.map((item) => (
          <MenuItem value={item.value} key={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
