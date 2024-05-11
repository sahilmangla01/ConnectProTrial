import * as yup from 'yup';

const loginValidate = yup.object().shape({
  email: yup.string().email().required('Email must be required'),
  password: yup.string().min(8).required('Password must be required'),
});

export {loginValidate};
