import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Switch} from "react-router-dom";

import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Nav from "./nav/Nav"

function App() {
  
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/LogIn/:Id" element={<LogIn/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
