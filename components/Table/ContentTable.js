import { Table } from "antd";

const ContentTable = ({ data }) => {
  const dataSource = data.map(a => {
    return {
      key: a.id,
      id: a.id,
      firstName: a.name,
      email: a.email,
      companyName: a.company.name
    };
  });
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Imię",
      dataIndex: "firstName",
      key: "firstName"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Nazwa firmy",
      dataIndex: "companyName",
      key: "companyName"
    }
  ];
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={{ pageSize: 5 }}
    />
  );
};

export default ContentTable;
