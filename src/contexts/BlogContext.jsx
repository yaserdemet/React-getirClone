import React from 'react'
import { createContext } from "react";
import { useContext, useEffect, useState } from "react";
import { userObserver } from "../helpers/firebase";

export const ValueContext = createContext();
export const useValueContext = () => {
  return useContext(ValueContext)
}

const BlogContext = ({children}) => {
  const [values, setValues] = useState({
    title: "",
    url: "",
    text: "",
    id: "",
    mail: "",
  });
  return (
    <div>
      <ValueContext.Provider value={{ values, setValues }}>
        {children}
      </ValueContext.Provider>
        
    </div>
  )
}

export default BlogContext