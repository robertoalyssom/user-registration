export function validateForm(formData, inputName) {
  const { name, age, email } = formData;
  let message = "";

  if (inputName === "name") message = validateName(name);
  else if (inputName === "age") message = validateAge(age);
  else if (inputName === "email") message = validateEmail(email);

  return message;
}

function validateName(name) {
  if (name === "") return "This field is required.";
  else if (name.length < 3) return "Name must be at least 3 characters.";
  else return "";
}

function validateAge(age) {
  if (age === "") return "This field is required.";
  else return "";
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") return "This field is required.";
  else if (!emailRegex.test(email)) return "Invalid email address.";
  else return "";
}
