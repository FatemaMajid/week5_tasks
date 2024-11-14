import { lazy, Suspense } from 'react';
import './App.css';
import SelectAccount from "./assets/components/Select/selectAccount";
import Phone from "./assets/components/Phone/phone";
import Information from './assets/components/Information/information';
import Otp from './assets/components/Otp/otp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./assets/components/HomePage/home'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectAccount />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/information" element={<Information />} />
        <Route
          path="/home"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
