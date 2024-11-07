// import { useState } from 'react'
import './App.css'
import SelectAccount from "./assets/components/Select/selectAccount"
import Phone from "./assets/components/Phone/phone"
import Information from './assets/components/Information/information';
import Otp from './assets/components/Otp/otp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectAccount />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/information" element={<Information />} /> 
      </Routes>
    </Router>
  );
};

export default App;

