import { Formik, Form } from 'formik';
import { Button } from 'components/Button/Button';
import { signupSchema } from 'schemas/signupValidationSchema';
import { addUser, getUsers } from 'services/api';
import { RadioGroup } from 'components/RadioGroup/RadioGroup';
import { TextInput } from 'components/TextInput/TextInput';
import { FileInput } from 'components/FileInput/FileInput';

export const SignupForm = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    position: '',
    photo: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    const newUser = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      position_id: Number(values.position),
      photo: values.photo,
    };

    console.log(newUser);
    try {
      const response = await addUser(newUser);
      console.log(response);
      resetForm();
      await getUsers();
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
        <Form>
          <TextInput name="name" placeholder="Your name" />
          <TextInput name="email" placeholder="Email" />
          <TextInput name="phone" placeholder="Phone" />
          <RadioGroup name="position" />
          <FileInput
            name="photo"
            accept="image/jpeg, image/jpg"
            onChange={e => {
              formik.setFieldValue('photo', e.target.files[0]);
            }}
          />
          <Button type="submit">Sign up</Button>
        </Form>
      )}
    </Formik>
  );
};
