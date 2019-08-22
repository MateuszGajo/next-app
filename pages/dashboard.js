import Router from "next/router";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout/Layout";
import ContentTable from "../components/Table/ContentTable";

const dashboard = props => {
  return (
    <Layout>
      <ContentTable data={props.data} />
    </Layout>
  );
};

dashboard.getInitialProps = async function({ res, store }) {
  const auth = store.getState().auth;
  if (res && !auth) {
    res.writeHead(302, {
      Location: "/"
    });
    res.end();
  } else if (!auth) {
    Router.push("/");
  }
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    data
  };
};

export default dashboard;
