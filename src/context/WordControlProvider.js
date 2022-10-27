import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import initialValues from "./store";
import reducers from "./reducer";

const WordControlProvider = ({ children }) => {
  const store = createStore(reducers, initialValues);
  return <Provider store={store}>{children}</Provider>;
};

export default WordControlProvider;
