import React from "react";
import { Provider } from "react-redux";

import MyTabs from "./src/navigation/tab/TabNavigation";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <MyTabs />
    </Provider>
  );
}
