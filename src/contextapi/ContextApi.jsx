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
  let handleDelete = deletedata => {
    let userData = data.filter(d => d.company !== deletedata);
    setData(userData);
  };
  return (
    <ContextApi.Provider
      value={{ data, handleAddData, handlePopup, popup, handleDelete }}
    >
      {children}
    </ContextApi.Provider>
  );
};
export default ContextProvider;
