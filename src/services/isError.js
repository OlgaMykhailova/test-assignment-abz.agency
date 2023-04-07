export const isError = (errors, touched, fieldName) => {
  if (
    fieldName &&
    touched &&
    touched[fieldName] &&
    errors &&
    errors[fieldName]
  ) {
    return true;
  }
};
