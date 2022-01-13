import { createContext, useEffect, useState } from "react";

export let ContextApi = createContext();

let ContextProvider = ({ children }) => {
  let [data, setData] = useState([]);
  let [popup, setPopup] = useState(false);
  let handleAddData = props => {
    let newState = data;
    newState.push(props);
    setData(newState);
    setPopup(!popup);
  };

  let handlePopup = () => {
    setPopup(!popup);
  };
  return (
    <ContextApi.Provider value={{ data, handleAddData, handlePopup, popup }}>
      {children}
    </ContextApi.Provider>
  );
};
export default ContextProvider;
