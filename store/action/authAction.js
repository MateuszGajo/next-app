export const signIn = credentials => {
  const { email, password } = credentials;
  const validateEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  if (!validateEmail.test(email))
    return {
      type: "SIGNIN_EMAIL_ERROR",
      msg: "Zły format email"
    };
  else if (email !== "admin@admin.pl")
    return {
      type: "SIGNIN_EMAIL_ERROR",
      msg: "Nie mamy użytkownika o podanym adresie email"
    };
  else if (password.length < 1)
    return {
      type: "SIGNIN_PASSWORD_ERROR",
      msg: "Nie wpisałeś hasła"
    };
  else if (password !== "admin")
    return {
      type: "SIGNIN_PASSWORD_ERROR",
      msg: "Hasło błędne"
    };
  else
    return {
      type: "SIGNIN_SUCCESS"
    };
};

export const logOut = () => {
  return {
    type: "LOGOUT"
  };
};
