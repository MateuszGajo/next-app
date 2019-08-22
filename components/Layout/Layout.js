import { Row, Col } from "antd";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
const Layout = props => {
  return (
    <div className="container">
      <Header />
      <Row>
        <Col span={5}>
          <Sidebar />
        </Col>
        <Col span={18}>{props.children}</Col>
      </Row>
    </div>
  );
};
export default Layout;
