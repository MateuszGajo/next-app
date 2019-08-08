const initState = {
  auth: false
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNIN_SUCCESS":
      return { ...state, auth: true };
    case "SIGNIN_ERROR":
      return state;
    case "LOGOUT":
      console.log("logout");
      return { ...state, auth: false };
    default:
      return state;
  }
};
export default rootReducer;
