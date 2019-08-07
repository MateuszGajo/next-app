import { PageHeader } from "antd";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import Sidebar from "../components/Sidebar/Sidebar";
import ContentTable from "../components/Table/ContentTable";
const dashboard = () => {
  return (
    <section className="container">
      <PageHeader onBack={() => null} title="Admin" />
      <Row>
        <Col span={5}>
          <Sidebar />
        </Col>
        <Col span={18}>
          <ContentTable />
        </Col>
      </Row>
    </section>
  );
};

export default dashboard;
