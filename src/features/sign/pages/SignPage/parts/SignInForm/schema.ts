import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email is not valid.")
    .required("Email is required."),
  password: yup
    .string()
    .required("Password is required.")
    .min(6, "Password is too short.")
    .max(30, "Password is too long."),
});