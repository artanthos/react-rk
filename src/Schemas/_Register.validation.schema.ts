import * as yup from 'yup';

// eslint-disable-next-line max-len
const emailRules = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;

const RegisterValidationSchema = yup.object({
  firstName: yup.string()
    .required('Type in your first name')
    .trim('No empty values allowed')
    .matches(/^[aA-zZ\s]+$/, 'Only letters are allowed for this field ')
    .min(2, 'Must be minimum 2 characters')
    .max(255, 'Must be max 255 characters'),
  lastName: yup.string()
    .required('Type in your last name')
    .trim('No empty values allowed')
    .matches(/^[aA-zZ\s]+$/, 'Only letters are allowed for this field ')
    .min(2, 'Must be minimum 2 characters')
    .max(255, 'Must be max 255 characters'),
  email: yup
    .string()
    .matches(emailRules, {message: 'We need a valid email address'})
    .email('We need a valid email address')
    .required('We need a valid email address')
    .min(5, 'We need a valid email address')
    .max(255, 'Must be max 255 characters'),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      'Must Contain at least 8 Characters, One Uppercase, One Lowercase, One Number',
    )
    .max(256, 'Must be max 256 characters'),
  repeatPassword: yup
    .string()
    .test('passwords-match', 'Passwords must match', (value, context) => context.parent.password === value)
    .max(256, 'Must be max 256 characters'),
});

export default RegisterValidationSchema;
