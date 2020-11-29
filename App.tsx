import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import HomeNavigation from "./src/navigation/HomeNavigation";

import MyTabs from "./src/navigation/tab/TabNavigation";
import { store, persistor } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeNavigation />
      </PersistGate>
    </Provider>
  );
}

/**
 var firebaseConfig = {
    apiKey: "AIzaSyBjOS6oBipUnSW2vl-o1WfLyIWFipWD1nY",
    authDomain: "project0-bdcd2.firebaseapp.com",
    databaseURL: "https://project0-bdcd2.firebaseio.com",
    projectId: "project0-bdcd2",
    storageBucket: "project0-bdcd2.appspot.com",
    messagingSenderId: "739469829190",
    appId: "1:739469829190:web:9f7a541799142e728ad647"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 */
