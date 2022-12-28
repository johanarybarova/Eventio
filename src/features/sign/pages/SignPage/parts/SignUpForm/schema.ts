import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup.string().required("First name is required."),
  lastName: yup.string().required("Last name is required."),
  email: yup
    .string()
    .email("Email is not valid.")
    .required("Email is required."),
  password: yup
    .string()
    .required("Password is required.")
    .min(6, "Password is too short.")
    .max(30, "Password is too long."),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), "Passwords must match."])
    .required("Must confirm password."),
});