import { Typography } from "@mui/material";
import { useFormikContext } from "formik";
import { IEditViewForm } from "../../../../hooks/components/useEditViewForm";
import Field from "../../../UI/Field/Field";

import st from "../EditViewForm.module.scss";

const AboutFormBlock = () => {
  const formik = useFormikContext<IEditViewForm>();
  return (
    <>
      <Typography variant="h6">О себе</Typography>
      <div className={st.doubleFields}>
        <Field
          className={st.field}
          onChange={formik.handleChange}
          name={"firstName"}
          label="Имя"
          error={!!formik.errors.firstName}
          helperText={formik.errors.firstName}
          value={formik.values.firstName}
        />
        <Field
          className={st.field}
          onChange={formik.handleChange}
          name={"lastName"}
          label="Фамилия"
          error={!!formik.errors.lastName}
          helperText={formik.errors.lastName}
          value={formik.values.lastName}
        />
      </div>
      <div className={st.doubleFields}>
        <Field
          className={st.field}
          onChange={formik.handleChange}
          name={"email"}
          label="Email"
          error={!!formik.errors.email}
          helperText={formik.errors.email}
          type="email"
          value={formik.values.email}
        />
        <Field
          className={st.field}
          mask="+9 (999) 999-9999"
          value={formik.values.phone}
          onChange={formik.handleChange}
          name="phone"
          onBlur={formik.handleBlur}
          error={!!formik.errors.phone}
          helperText={formik.errors.phone}
          label="Телефон"
        />
      </div>
      <div className={st.doubleFields}>
        <Field
          className={st.field}
          onChange={formik.handleChange}
          name={"pinCode"}
          label="PIN"
          error={!!formik.errors.pinCode}
          helperText={formik.errors.pinCode}
          mask="9999"
          value={formik.values.pinCode}
        />
        <Field
          className={st.field}
          onChange={formik.handleChange}
          name={"zip"}
          label="ZIP"
          error={!!formik.errors.zip}
          helperText={formik.errors.zip}
          type="number"
          value={formik.values.zip}
        />
      </div>
      <Field
        className={st.field}
        onChange={formik.handleChange}
        label="Описание"
        name={"description"}
        error={!!formik.errors.description}
        helperText={formik.errors.description}
        multiline
        rows={2}
        value={formik.values.description}
      />
    </>
  );
};

export default AboutFormBlock;
