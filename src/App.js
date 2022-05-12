import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Reviews from "./Pages/Reviews/Reviews";
import Appointment from "./Pages/Appointment/Appointment";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from './Pages/Login/Login'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/reviews" element={ <Reviews/>}/>
        <Route path="/appointment" element={ <Appointment/>}/>
        <Route path="/contact" element={ <ContactUs/>}/>
        <Route path="/login" element={ <Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
