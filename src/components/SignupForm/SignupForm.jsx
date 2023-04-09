import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import MaskedInput from 'react-text-mask';
import { addUser, getUsers } from 'services/api';
import { loadUsers } from 'services/loadUsers';
import { Button } from 'components/Button/Button';
import { signupSchema } from 'schemas/signupValidationSchema';
import { RadioGroup } from 'components/RadioGroup/RadioGroup';
import { TextInput } from 'components/TextInput/TextInput';
import { FileInput } from 'components/FileInput/FileInput';
import './SignupForm.scss';

export const SignupForm = ({ setUsers, setNextUrl, setIsLoading }) => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    position: '',
    photo: '',
    imageurl: '',
  };

  const phoneNumberMask = [
    '+',
    '3',
    '8',
    ' ',
    '(',
    '0',
    /[0-9]/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ];

  const handleSubmit = async (values, { resetForm }) => {
    const newUser = {
      name: values.name,
      email: values.email,
      phone: values.phone.replaceAll(/[-()\s]/g, ''),
      position_id: Number(values.position),
      photo: values.photo,
    };

    toast.success('User successfully registered', {
      icon: false,
    });
    try {
      const response = await addUser(newUser);
      console.log(response);
      resetForm();
      await loadUsers(setIsLoading, setUsers, setNextUrl, getUsers);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Form className="form__wrapper">
          <TextInput
            name="name"
            label="Your name"
            placeholder="Your name"
            formTextInput="form__textinput"
            errors={formik.errors}
            touched={formik.touched}
          />
          <TextInput
            name="email"
            label="Email"
            placeholder="Email"
            formTextInput="form__textinput"
            errors={formik.errors}
            touched={formik.touched}
          />
          <TextInput
            maskedInput={MaskedInput}
            mask={phoneNumberMask}
            name="phone"
            label="Phone"
            placeholder="Phone"
            errors={formik.errors}
            touched={formik.touched}
          />
          <RadioGroup name="position" />
          <FileInput
            name="photo"
            accept="image/jpeg, image/jpg"
            formik={formik}
            errors={formik.errors}
            touched={formik.touched}
          />
          <Button
            type="submit"
            formButton="form__button"
            disabled={!(formik.dirty && formik.isValid)}
          >
            Sign up
          </Button>
        </Form>
      )}
    </Formik>
  );
};
