import { InputLabel, MenuItem, Select, SelectProps } from "@mui/material";
import React, { FC } from "react";

interface IOption {
  value: string;
  text: string;
}

interface IProps extends SelectProps {
  options: IOption[];
}

const SelectField: FC<IProps> = ({ options, ...props }) => {
  return (
    <>
      <InputLabel>{props.label}</InputLabel>
      <Select {...props}>
        {options.map((o) => (
          <MenuItem value={o.value} key={o.value}>
            {o.text}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default SelectField;
