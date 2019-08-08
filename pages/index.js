import { Row, Col } from "antd";
import { connect } from "react-redux";
import Router from "next/router";
import SignIn from "../components/Auth/SignIn";
import "antd/dist/antd.css";
import "../scss/style.scss";
const index = ({ auth }) => {
  auth && Router.push("/dashboard");

  return (
    <main>
      <Row
        type="flex"
        justify="center"
        align="middle"
        className="form-container"
      >
        <Col span={5}>
          <SignIn />
        </Col>
      </Row>
    </main>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(index);
