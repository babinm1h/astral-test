export const validationMessages = {
  REQUIRED: "Обязательное поле",
};

export const getYupMaxMessage = (max: number) => {
  return `Максимальная длина ${max} символов`;
};

export const getYupMinMessage = (min: number) => {
  return `Минимальная длина ${min} символов`;
};
