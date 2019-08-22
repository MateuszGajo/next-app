const initState = {
  auth: false,
  errors: {
    email: "",
    password: ""
  }
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNIN_SUCCESS":
      return { ...state, auth: true, errors: { email: "", password: "" } };
    case "SIGNIN_EMAIL_ERROR":
      return {
        ...state,
        errors: {
          email: action.msg,
          password: ""
        }
      };
    case "SIGNIN_PASSWORD_ERROR":
      return {
        ...state,
        errors: {
          email: "",
          password: action.msg
        }
      };
    case "LOGOUT":
      return { ...state, auth: false };
    default:
      return state;
  }
};
export default rootReducer;
