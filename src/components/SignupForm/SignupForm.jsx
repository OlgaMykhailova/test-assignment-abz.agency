import { Formik, Form } from 'formik';
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

  const handleSubmit = async (values, { resetForm }) => {
    const newUser = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      position_id: Number(values.position),
      photo: values.photo,
    };

    console.log(newUser);
    // try {
    //   const response = await addUser(newUser);
    //   console.log(response);
    //   resetForm();
    //   await loadUsers(setIsLoading, setUsers, setNextUrl, getUsers);
    // } catch (error) {
    //   console.log(error);
    // }
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
            placeholder="Your name"
            formTextInput="form__textinput"
            errors={formik.errors}
            touched={formik.touched}
          />
          <TextInput
            name="email"
            placeholder="Email"
            formTextInput="form__textinput"
            errors={formik.errors}
            touched={formik.touched}
          />
          <TextInput
            name="phone"
            placeholder="Phone"
            errors={formik.errors}
            touched={formik.touched}
          />

          <RadioGroup name="position" />
          <FileInput
            name="photo"
            accept="image/jpeg, image/jpg"
            onChange={e => {
              if (e.target.files?.length > 0) {
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onloadend = event => {
                  const image = new Image();
                  image.src = event.target.result;
                  image.onload = function () {
                    const file = Object.assign(e.target.files[0], {
                      width: image.width,
                      height: image.height,
                    });
                    formik.setFieldValue('photo', file);
                    formik.setFieldValue('imageurl', file.name);
                    formik.setFieldTouched('photo');
                  };
                };
              }
            }}
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
