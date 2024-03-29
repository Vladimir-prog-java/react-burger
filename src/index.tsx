import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware } from "redux";
import {legacy_createStore as createStore} from "redux"
import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { orderTapeSocketMiddleware } from "./services/actions/order-tape-actions";
import { orderHistorySocketMiddleware } from "./services/actions/order-history-actions";


export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, 
    orderTapeSocketMiddleware(),
    orderHistorySocketMiddleware())
  )
);

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
