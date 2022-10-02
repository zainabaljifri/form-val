import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

// signup fields: firstname, lastname, email, password, confirmPasswordconfirmPassword
export const signupSchema = yup.object().shape({
    firstname: yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastname: yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

// login fields: email, password
export const loginSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Required"),
});