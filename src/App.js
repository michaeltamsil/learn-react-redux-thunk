import React from "react";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
// 2.
import Guru from "./components/Guru";
import Navbar from "./components/Navbar";
import Siswa from "./components/Siswa";

// yang ini menjadikan reducers ke store dan menggunakan plugin namanya applyMiddleware
// thunk digunakan utk melakukan fetch yang berhubungan dengan async
const store = createStore(reducers, applyMiddleware(thunk));

store.subscribe(() => {
  console.log("store.getState()", store.getState());
});

function App() {
  // 1. provider selalu di taruh di awal awal app bermula
  // dan diberikan props dengan nama store dimana valuenya adalah dari combineReducers
  // ke siswa
  return (
    <Provider store={store}>
      <Router>
        <h1>Aplikasi Sekolah</h1>
        <Navbar />

        <Switch>
          <Route path="/siswa">
            <Siswa />
          </Route>
          <Route path="/guru">
            <Guru />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
