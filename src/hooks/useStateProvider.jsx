import { useContext, useState } from "react";
import { useLocalStorage } from "react-use";
import { MainContext } from "../context/MainContext";

export function useStateProvider() {
  const [getOne, setGetOne] = useState();

  return {
    getOne,
    setGetOne,
  };
}

export function useMainContext() {
  return useContext(MainContext);
}
