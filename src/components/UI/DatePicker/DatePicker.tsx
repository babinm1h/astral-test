import React, { FC } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Field from "../Field/Field";
import { DatePickerProps } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

const DatePicker: FC<Omit<DatePickerProps<Date, Dayjs>, "renderInput">> = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker {...props} renderInput={(props) => <Field {...props} />} />
    </LocalizationProvider>
  );
};

export default DatePicker;
