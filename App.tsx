import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import MyTabs from "./src/navigation/tab/TabNavigation";
import { store, persistor } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MyTabs />
      </PersistGate>
    </Provider>
  );
}
