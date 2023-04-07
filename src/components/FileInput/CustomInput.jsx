import './CustomInput.scss';

export const CustomInput = ({ name, formik, accept }) => {
  const handleChange = e => {
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
        };
      };
    }
  };

  return (
    <input
      type="file"
      name={name}
      className="custominput"
      onChange={handleChange}
      accept={accept}
    />
  );
};
