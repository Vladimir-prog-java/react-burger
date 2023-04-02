import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware } from "redux";
import {legacy_createStore as createStore} from "redux"
import{configureStore} from "@reduxjs/toolkit"
import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
// export const store = configureStore({
//   reducer,
//   composeWithDevTools,
//     applyMiddleware,
// }
// );
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
