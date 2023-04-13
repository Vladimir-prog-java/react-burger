import React, {FC, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../services/actions/app-actions";
import ModalSwitch from "./ModalSwitch"
import Header from "../AppHeader/AppHeader";
import {RootState} from "../../services/reducers/rootReducer";
import { WS_ORDER_TAPE_CONNECTION_INIT } from "../../services/actions/order-tape-actions";
import { WS_ORDER_HISTORY_CONNECTION_INIT } from "../../services/actions/order-history-actions";

const App:FC = () => {
  const { authorized } = useSelector((store: RootState) => store.authorizationReducer)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: WS_ORDER_TAPE_CONNECTION_INIT })
  }, [dispatch])

  useEffect(() => {
    authorized && dispatch({ type: WS_ORDER_HISTORY_CONNECTION_INIT })
  }, [authorized, dispatch])

  return (
    <BrowserRouter>
      <Header />
      <ModalSwitch />
    </BrowserRouter>
  );
}

export default App;
