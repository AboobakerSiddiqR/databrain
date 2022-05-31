export function nameValidator(name) {
  if (!name) return "Name can't be empty.";
  if (name.length < 3) return "Name must be atleast 3 letters";
  return "";
}

export function phNumberValidator(number) {
  if (!number) return "Phone Number can't be empty.";
  if (number.length < 10) return "Phone Number incorrect Please Check it";
  if (number.length > 10) return "Phone Number incorrect Please Check it";

  return "";
}

export function passwordValidator(password) {
  if (password.length < 8) return "Password must be atleast 8 characters long";
  if (password.length > 20)
    return "Password characters should not exceed 20 characters long";
  return "";
}

export function confirmValidator(password, confirm) {
  if (password === confirm) return "";
  else return "Password doesn't match";
}

export function emailValidator(mail) {
  const re = /\S+@\S+\.\S+/;
  if (!mail) return "Email can't be empty.";
  if (!re.test(mail)) return "Ooops! We need a valid email address.";
  return "";
}
