import { Route, Routes } from "react-router-dom"
import Tablero from "./components/Tablero/Tablero"
import Login from "./views/Login/Login"
import './App.css'

function App() {
 

  return (
    <Routes>
      
      <Route path="/" element={<Login/>}/>
      <Route path="/game" element={<Tablero/>}/>
      
    </Routes>
  )
}

export default App
