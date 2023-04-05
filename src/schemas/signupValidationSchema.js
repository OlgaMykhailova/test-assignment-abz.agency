import * as yup from 'yup';

const FILE_SIZE = 5;
const SUPPORTED_FORMATS = ['image/jpeg', 'image/jpg'];

const nameRegexp = /^[^\s].+(?!.*[ЫыЭэЪъ])([a-zA-Zа-яА-ЯІіЇїЄє\s']+)[^\s]$/;
const emailRegexp =
  /^([a-zA-Z0-9_.]+){1}([a-zA-Z0-9_\-.]+){1}@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,3})$/;
const phoneRegexp = /^(\+){0,1}380([0-9]{9})$/;

export const signupSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegexp, 'Name must contain only letters')
    .min(2, 'Name should be 2 characters minimum.')
    .max(60, 'Name should be 60 characters maximum.')
    .required('Name is required'),
  email: yup
    .string()
    .matches(emailRegexp, 'Email must be in format mail@mail.com')
    .min(2, 'Email should be 2 characters minimum.')
    .max(100, 'Email should be 100 characters maximum.')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(phoneRegexp, 'Mobile phone must be in format +38 (XXX)XXX-XX-XX')
    .required('Phone is required'),
  position: yup.string().min(1).required('Position required'),
  photo: yup
    .mixed()
    .test(
      'fileSize',
      'File size must be less than 5Mb',
      value => value.size <= FILE_SIZE
    )
    .test('fileType', 'Supported only jpeg and jpg formats', value =>
      SUPPORTED_FORMATS.includes(value.type)
    )
    .required('Photo is required'),
});
