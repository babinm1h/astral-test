import { Button } from "@mui/material";
import { Formik } from "formik";
import { FC } from "react";
import { useEditViewForm } from "../../../hooks/components/useEditViewForm";
import { IUser } from "../../../types/entities";
import AboutFormBlock from "./AboutFormBlock/AboutFormBlock";

import st from "./EditViewForm.module.scss";
import LivingPlaceFormBlock from "./LivingPlaceFormBlock/LivingPlaceFormBlock";

interface IProps {
  user: IUser;
}

const EditViewForm: FC<IProps> = ({ user }) => {
  const { initialValues, validationSchema, onSubmit } = useEditViewForm(user);
  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {(formik) => {
        return (
          <form className={st.form} onSubmit={formik.handleSubmit}>
            <div className={st.formBlock}>
              <AboutFormBlock />
            </div>

            <div className={st.formBlock}>
              <LivingPlaceFormBlock />
            </div>

            <Button type="submit" variant="contained" disabled={formik.isSubmitting} className={st.btn}>
              Сохранить
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default EditViewForm;
