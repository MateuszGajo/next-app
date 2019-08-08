import { PageHeader } from "antd";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import "antd/dist/antd.css";
import Sidebar from "../components/Sidebar/Sidebar";
import ContentTable from "../components/Table/ContentTable";
import { logOut } from "../store/action/authAction";
const dashboard = props => {
  return (
    <section className="wrapper">
      <PageHeader
        onBack={() => history.back()}
        title="Admin"
        className="page-header"
        extra={
          <h3
            className="logout-title"
            onClick={() => {
              props.logout();
              Router.push("/");
            }}
          >
            Wyloguj się
          </h3>
        }
      />
      <Row>
        <Col span={5}>
          <Sidebar />
        </Col>
        <Col span={18}>
          <ContentTable data={props.data} />
        </Col>
      </Row>
    </section>
  );
};

dashboard.getInitialProps = async function({ res, store }) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const auth = store.getState().auth;
  if (res && !auth) {
    res.writeHead(302, {
      Location: "/"
    });
    res.end();
  } else if (!auth) {
    Router.push("/");
  }
  return {
    data
  };
};
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(dashboard);
