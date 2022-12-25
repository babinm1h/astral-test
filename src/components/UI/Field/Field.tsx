// @ts-nocheck
// ts-nocheck из-за react-input-mask, в текущей версии выдает ошибку с children
import { TextField, TextFieldProps } from "@mui/material";
import React, { FC } from "react";
import InputMask, { Props } from "react-input-mask";

const Field: FC<TextFieldProps & { mask?: string }> = ({ type = "text", ...props }) => {
  const { className, mask, value, onChange, name, onBlur, error, helperText } = props;
  return mask ? (
    <InputMask
      mask={mask}
      className={className}
      value={value}
      onChange={onChange}
      name={name}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
    >
      {(inputProps: TextFieldProps & Props) => (
        <TextField
          inputProps={{
            autoComplete: "new-password",
            form: {
              autoComplete: "off",
            },
          }}
          {...inputProps}
          {...props}
          type={type}
        />
      )}
    </InputMask>
  ) : (
    <TextField
      inputProps={{
        autoComplete: "new-password",
        form: {
          autoComplete: "off",
        },
      }}
      {...props}
      type={type}
    />
  );
};

export default Field;
