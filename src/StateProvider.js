import React, { createContext, useContext, useReducer } from "react";

//Prepares data layer
export const StateContext = createContext();
//Wrap our app and provide the Data Layer 
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//Pull out information from the data layer
export const useStatevalue = () => useContext(StateContext);
