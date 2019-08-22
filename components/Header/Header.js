import { PageHeader } from "antd";
import { useDispatch } from "react-redux";
import Router from "next/router";
import { logOut } from "../../store/action/authAction";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <PageHeader
      onBack={() => history.back()}
      title="Admin"
      className="page-header"
      extra={
        <h3
          className="logout-title"
          onClick={() => {
            dispatch(logOut());
            Router.push("/");
          }}
        >
          Wyloguj się
        </h3>
      }
    />
  );
};

export default Header;
