import {
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import dayjs from "dayjs";
import { useFormikContext } from "formik";
import React from "react";
import { IEditViewForm } from "../../../../hooks/components/useEditViewForm";
import { countries } from "../../../../utils/mockedData";
import DatePicker from "../../../UI/DatePicker/DatePicker";
import Field from "../../../UI/Field/Field";
import SelectField from "../../../UI/Select/Select";

import st from "../EditViewForm.module.scss";

const LivingPlaceFormBlock = () => {
  const formik = useFormikContext<IEditViewForm>();
  const allowToEditLivePlace = !!formik.values.accept1;
  return (
    <>
      <Typography variant="h6">Место жительства</Typography>
      <div className={st.doubleFields}>
        <Field
          className={st.field}
          onChange={formik.handleChange}
          name={"address"}
          label="Адрес"
          error={!!formik.errors.address}
          helperText={formik.errors.address}
          disabled={!allowToEditLivePlace}
          value={formik.values.address}
        />
        <Field
          className={st.field}
          onChange={formik.handleChange}
          name={"organization"}
          label="Организация"
          error={!!formik.errors.organization}
          helperText={formik.errors.organization}
          disabled={!allowToEditLivePlace}
          value={formik.values.organization}
        />
      </div>
      <div className={st.doubleFields}>
        <Field
          className={st.field}
          onChange={formik.handleChange}
          name={"city"}
          label="Город"
          error={!!formik.errors.city}
          helperText={formik.errors.city}
          disabled={!allowToEditLivePlace}
          value={formik.values.city}
        />
        <Field
          className={st.field}
          onChange={formik.handleChange}
          name={"street"}
          label="Улица"
          error={!!formik.errors.street}
          helperText={formik.errors.street}
          disabled={!allowToEditLivePlace}
          value={formik.values.street}
        />
      </div>
      <div className={st.doubleFields}>
        <Field
          className={st.field}
          name={"age"}
          label="Возраст"
          error={!!formik.errors.age}
          helperText={formik.errors.age}
          value={formik.values.age}
          type="number"
          placeholder="Связан с полем Дата Рождения"
          onChange={formik.handleChange}
        />
        <Field
          className={st.field}
          onChange={formik.handleChange}
          name={"fax"}
          label="Fax"
          error={!!formik.errors.fax}
          helperText={formik.errors.fax}
          type="number"
          value={formik.values.fax}
        />
      </div>
      <div className={st.doubleFields}>
        <FormControl className={st.field}>
          <SelectField
            options={countries}
            value={formik.values.country}
            label="Страна"
            name="country"
            onChange={(e) => formik.setFieldValue("country", e.target.value)}
          />
        </FormControl>
        <DatePicker
          className={st.field}
          maxDate={dayjs(new Date())}
          onChange={(date) => {
            formik.setFieldValue("birthday", date?.toDate());
            const years = date?.diff(new Date(), "years");

            if (years !== undefined && years < 1) {
              formik.setFieldValue("age", years.toString().replace("-", ""));
            }
          }}
          value={formik.values.birthday}
          label="Дата рождения"
        />
      </div>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="Включить редактирование места жительства"
          name="accept1"
          onChange={formik.handleChange}
          value={formik.values.accept1}
          checked={formik.values.accept1}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Принять 2"
          name="accept2"
          onChange={formik.handleChange}
          value={formik.values.accept2}
          checked={formik.values.accept2}
        />
      </FormGroup>
      <FormControl>
        <FormLabel>Пол</FormLabel>
        <RadioGroup defaultValue="female" onChange={formik.handleChange} name="gender" value={formik.values.gender}>
          <FormControlLabel value="male" control={<Radio />} label="Мужской" />
          <FormControlLabel value="female" control={<Radio />} label="Женский" />
          <FormControlLabel value="" control={<Radio />} label="Не указывать" />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default LivingPlaceFormBlock;
