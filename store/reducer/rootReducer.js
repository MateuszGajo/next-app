const initState = {
  auth: false
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNIN_SUCCESS":
      return { ...state, auth: true, emailError: "", passwordError: "" };
    case "SIGNIN_EMAIL_ERROR":
      return {
        ...state,
        passwordError: "",
        emailError: action.msg
      };
    case "SIGNIN_PASSWORD_ERROR":
      return { ...state, emailError: "", passwordError: action.msg };
    case "LOGOUT":
      return { ...state, auth: false };
    default:
      return state;
  }
};
export default rootReducer;
