import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email('Please enter a valid email').required('Required'),

  password: yup
    .string()
    .required('Please provide a valid password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
      'Password must contain at least one letter and one number',
    ),
});

export const registrationSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .required('Full name is required')
    .matches(/^[\p{L}]+(?:\s+[\p{L}]+)+$/u, 'Enter first and last name'),

  email: yup.string().email('Please enter a valid email').required('Required'),

  password: yup
    .string()
    .required('Please provide a valid password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
      'Password must contain at least one letter and one number',
    ),
});
