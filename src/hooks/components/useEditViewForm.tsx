import * as Yup from "yup";
import { IUpdateUserData } from "../../API/AuthApi";
import { updateAuthUser } from "../../redux/thunks/authThunks";
import { getYupMaxMessage, getYupMinMessage, validationMessages } from "../../utils/validationHelpers";
import { useAppDispatch } from "../reduxHooks";

export interface IEditViewForm {
  // string
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
  address: string;
  organization: string;
  city: string;
  street: string;
  // number
  age: string;
  zip: string;
  pinCode: string;
  fax: string;
  // date
  birthday: Date;
  // select
  country: string;
  // radio
  gender: string;
  // checkbox
  accept1: boolean;
  accept2: boolean;
}

export const useEditViewForm = (defValues: IUpdateUserData) => {
  const dispatch = useAppDispatch();

  const initialValues: IEditViewForm = {
    accept1: (defValues.accept1 as boolean) || false,
    accept2: (defValues.accept2 as boolean) || false,
    address: defValues.address || "",
    age: defValues.age || "",
    birthday: defValues.birthday || new Date(),
    city: defValues.city || "",
    country: defValues.country || "",
    description: defValues.description || "",
    email: defValues.email || "",
    fax: defValues.fax || "",
    firstName: defValues.firstName || "",
    gender: defValues.gender || "",
    lastName: defValues.lastName || "",
    organization: defValues.organization || "",
    phone: defValues.phone || "",
    pinCode: defValues.pinCode || "",
    street: defValues.street || "",
    zip: defValues.zip || "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required(validationMessages.REQUIRED)
      .min(1, getYupMinMessage(1))
      .max(50, getYupMaxMessage(50)),

    lastName: Yup.string()
      .required(validationMessages.REQUIRED)
      .min(1, getYupMinMessage(1))
      .max(50, getYupMaxMessage(50)),

    email: Yup.string().email("Неверный формат email").required(validationMessages.REQUIRED),

    phone: Yup.string()
      .transform((value: string) => value.replace(/[^\d]/g, ""))
      .matches(/^\d+$/, "Телефон должен содержать только числа")
      .min(11, getYupMinMessage(11))
      .max(11, getYupMaxMessage(11)),

    pinCode: Yup.string()
      .transform((value: string) => value.replace(/[^\d]/g, ""))
      .matches(/^\d+$/, "Pincode должен содержать только числа")
      .min(4, getYupMinMessage(4))
      .max(4, getYupMaxMessage(4)),

    zip: Yup.string()
      .transform((value: string) => value.replace(/[^\d]/g, ""))
      .matches(/^\d+$/, "Zip должен содержать только числа")
      .min(5, getYupMinMessage(5))
      .max(5, getYupMaxMessage(5)),

    fax: Yup.string()
      .transform((value: string) => value.replace(/[^\d]/g, ""))
      .matches(/^\d+$/, "Zip должен содержать только числа")
      .min(5, getYupMinMessage(5))
      .max(12, getYupMaxMessage(12)),

    accept1: Yup.bool(),
    accept2: Yup.bool(),
    address: Yup.string().max(100, getYupMaxMessage(100)),
    age: Yup.string().matches(/^\d+$/, "Возраст должен содержать только числа").max(3, getYupMaxMessage(3)),
    birthday: Yup.date(),
    city: Yup.string().max(100, getYupMaxMessage(100)),
    country: Yup.string().max(100, getYupMaxMessage(100)),
    description: Yup.string().max(100, getYupMaxMessage(100)),
    gender: Yup.string(),
    organization: Yup.string().max(100, getYupMaxMessage(100)),
    street: Yup.string().max(100, getYupMaxMessage(100)),
  });

  const onSubmit = (values: IEditViewForm) => {
    dispatch(
      updateAuthUser({
        ...values,
        id: defValues.id,
      })
    );
  };

  return { initialValues, validationSchema, onSubmit };
};
