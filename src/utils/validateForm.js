export function validateForm(formData, inputName, inputValue) {
  let message = "";
  if (inputValue === "") message = "This field is required.";
  else if (inputName === "name") message = validateName(formData.name);
  else if (inputName === "age") message = validateAge(formData.age);
  else if (inputName === "email") message = validateEmail(formData.email);
  else if (inputName === "password") message = validatePwd(formData.password);
  else if (inputName === "repeatPassword")
    message = validateRepeatPwd(formData);

  return message;
}

function validateName(name) {
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
  if (name.length < 3) return "Name must be at least 3 characters.";
  else if (name.length > 50) return "Name must be less than 50 characters.";
  else if (!nameRegex.test(name)) return "Name must contain only letters.";
  else return "";
}

function validateAge(age) {
  if (age < 16) return "The contact must be at least 16 years old.";
  return "";
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Invalid email address.";
  else return "";
}

function validatePwd(password) {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/;
  if (password.length < 7) return "Password must be at least 7 characters.";
  else if (!regex.test(password))
    return "Password must contain at least one uppercase letter, one number, and one special character.";
  else return "";
}

function validateRepeatPwd(formData) {
  const { repeatPassword, password } = formData;
  if (repeatPassword !== password) return "Passwords do not match.";
  else return "";
}
