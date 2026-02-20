import * as yup from 'yup';

export const basicSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  password: yup
    .string()
    .required('Please provide a valid password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
      'Password must contain at least one letter and one number',
    ),
});
