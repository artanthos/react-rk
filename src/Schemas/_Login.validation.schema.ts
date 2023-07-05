import * as yup from 'yup';

const LoginValidationSchema = yup.object({
  email: yup
    .string('We need a valid email address')
    .email('We need a valid email address')
    .required('This field is mandatory')
    .max(256, 'Must be max 256 characters'),
  password: yup.string()
    .trim('No empty values allowed')
    .required('Please Enter your password')
    .max(256, 'Must be max 256 characters'),
});

export default LoginValidationSchema;
