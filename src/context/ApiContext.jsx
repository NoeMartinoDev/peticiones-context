import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext();

const ApiContextProvider = ( {children} ) => {

    const [ data, setData ] = useState([])

    useEffect(() => {
        const axiosData = async () => {
          try {
            const response = await axios("https://jsonplaceholder.typicode.com/users")
            console.log(response)
            setData(response.data)
          } catch (error) {
            console.log(error)
          }
        }
        axiosData();
      }, []);

      return (
        <ApiContext.Provider value={data}>{children}</ApiContext.Provider>
      )
}

export { ApiContext, ApiContextProvider };