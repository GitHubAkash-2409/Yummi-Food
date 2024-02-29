import React, { useState } from 'react';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import OurFood from "./Components/OurFood";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import SignIn from './Components/SignIn';


function App() {

  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count+1);
  };

  return (
    <>
      <div>
        <BrowserRouter>
        <Header count = {count}/>
        <Routes>
          <Route path="/" element={<Home handleAdd = {handleAdd}/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/ourfood" element={<OurFood handleAdd = {handleAdd}/>} />
          <Route path="/signin" element={<SignIn/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
