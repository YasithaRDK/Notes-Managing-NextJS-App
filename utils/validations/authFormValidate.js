export const validateRegisterForm = (formData) => {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Username is required";
  } else if (formData.name < 4) {
    errors.password = "Username must be at least 4 characters long";
  } else if (!isValidUsername(formData.name)) {
    errors.name =
      'Username can only contain letters, numbers, and underscores"';
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!isValidEmail(formData.email)) {
    errors.email = "Invalid email address";
  }

  if (!formData.password.trim()) {
    errors.password = "Password is required";
  } else if (formData.password < 8) {
    errors.password = "Password must be at least 8 characters long";
  } else if (!isValidPassword(formData.password)) {
    errors.password =
      "Password must contain at uppercase and lowercase letters, digits, and special character";
  }

  return errors;
};

export const validateLoginForm = (formData) => {
  const errors = {};
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!isValidEmail(formData.email)) {
    errors.email = "Invalid email address";
  }

  if (!formData.password.trim()) {
    errors.password = "Password is required";
  } else if (formData.password < 8) {
    errors.password = "Invalid password";
  } else if (!isValidPassword(formData.password)) {
    errors.password = "Invalid password";
  }

  return errors;
};

const isValidUsername = (username) => {
  const nameRegex = /^[a-zA-Z0-9_]+$/;
  return nameRegex.test(username);
};

const isValidEmail = (email) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
  return emailRegex.test(email);
};

const isValidPassword = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;
  return passwordRegex.test(password);
};
