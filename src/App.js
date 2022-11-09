import React from 'react';
import Navbar from "./Components/Navbar";
import Redux from "./Pages/Redux"
import Shop from "./Pages/Shop"
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import './App.css'

function App() {
  
	return (
    <>
     <BrowserRouter>
     <Navbar />
    <Routes>
      <Route path="/" element={<Redux />} />
      <Route path="/Redux" element={<Redux />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  </BrowserRouter>


    </>
	);
}

export default App;