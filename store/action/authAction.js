export const signIn = credentials => {
  const { mail, password } = credentials;
  if (mail === "admin" && password === "admin") {
    return {
      type: "SIGNIN_SUCCESS"
    };
  } else
    return {
      type: "SIGNIN_ERROR"
    };
};

export const logOut = () => {
  return {
    type: "LOGOUT"
  };
};
