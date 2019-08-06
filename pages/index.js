import { Row, Col } from "antd";
import SignIn from "../components/Auth/SignIn";
import "antd/dist/antd.css";
import "../scss/style.scss";
const index = () => {
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

export default index;
