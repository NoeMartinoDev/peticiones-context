import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import DataShow from './components/DataShow';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Detail from './components/Detail';
import NavigationBar from "./components/NavigationBar";

function App() {

  const [ data, setData ] = useState([])
  
  //Petición get con fetch
  // useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const response = await fetch("https://jsonplaceholder.typicode.com/users")
  //         const jsonData = await response.json()
  //         setData(jsonData)
  //       } catch (error) {
  //         console.log("Error al traer la data: ", error)
  //       }
  //     }
  //     fetchData()
  // }, []);

  //Petición get con axios
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

  //Petición post con axios
  const handleClickCreate = async () => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
          title: 'Este es un post de prueba',
          body: 'Aprendiendo React.js',
          userId: 1,
      })
      if(response.status < 299) {
        alert("Post fue creado exitosamente")
        console.log(response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div >
      {/* {console.log(data)}
      <h2>Data from API</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={handleClickCreate}>CREATE</button>
      <DataShow/> */}
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<DataShow/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>

    </div>
  );
}

export default App;
