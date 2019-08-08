import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import rootReducer from "../store/reducer/rootReducer";

const reducer = rootReducer;
const makeStore = (initialState, options) => {
  return createStore(reducer, initialState);
};

const MyApp = props => {
  const { Component, pageProps, store } = props;
  return (
    <Container>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Container>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  return {
    pageProps: Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}
  };
};
export default withRedux(makeStore)(MyApp);
