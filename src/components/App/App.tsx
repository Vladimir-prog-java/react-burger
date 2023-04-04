import React, {FC, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getData } from "../../services/actions/app-actions";
import ModalSwitch from "./ModalSwitch"
import Header from "../AppHeader/AppHeader"

const App:FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <ModalSwitch />
    </BrowserRouter>
  );
}

export default App;
