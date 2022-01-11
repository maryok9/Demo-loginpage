const Validation = (email, password, confirmPassword) => {
  let errors = {};

  if (!email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Email is invalid.";
  }

  if (!password) {
    errors.password = "Password is incorrect.";
  } else if (password.length < 5) {
    errors.password = "Password must be more than six characters.";
  }

  if (confirmPassword === password) {
  } else {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
};

export default Validation;
