import React, { useState } from "react";
import { Button, Alert } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

import st from "./LoginForm.module.scss";
import Field from "../../UI/Field/Field";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { validationMessages } from "../../../utils/validationHelpers";
import { fetchLoginUser } from "../../../redux/thunks/authThunks";

interface IForm {
  login: string;
  password: string;
}

const LoginForm = () => {
  const [error, setError] = useState<string>("");
  const dispatch = useAppDispatch();

  const correct = "admin";

  const initialValues: IForm = {
    login: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    login: Yup.string().required(validationMessages.REQUIRED),
    password: Yup.string().required(validationMessages.REQUIRED),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values, { setSubmitting }) => {
      if (values.login !== correct || values.password !== correct) {
        setError("Неправильный логин или пароль");
      } else {
        setError("");
        dispatch(fetchLoginUser(values));
      }
      setSubmitting(false);
    },
  });
  return (
    <form className={st.form} autoComplete="off" onSubmit={formik.handleSubmit}>
      <Field
        type="text"
        label="Логин"
        placeholder="Логин"
        name="login"
        onChange={formik.handleChange}
        helperText={formik.errors.login}
        error={!!formik.errors.login || !!error}
        value={formik.values.login}
        required
      />
      <Field
        type="password"
        label="Пароль"
        placeholder="Пароль"
        name="password"
        onChange={formik.handleChange}
        helperText={formik.errors.password}
        error={!!formik.errors.password || !!error}
        value={formik.values.password}
        required
      />
      {error ? <Alert severity="error">{error}</Alert> : null}
      <Button variant="contained" type="submit" disabled={formik.isSubmitting}>
        Войти
      </Button>
    </form>
  );
};

export default LoginForm;
