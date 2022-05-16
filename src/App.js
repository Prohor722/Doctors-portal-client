import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Reviews from "./Pages/Reviews/Reviews";
import Appointment from "./Pages/Appointment/Appointment";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from './Pages/Login/Login'
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import Loading from "./Pages/Shared/Loading";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/reviews" element={ <Reviews/>}/>
        <Route path="/appointment" element={ 
        <RequireAuth>
          <Appointment/>
        </RequireAuth>
        }/>
        <Route path="/contact" element={ <ContactUs/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/signup" element={ <SignUp/>}/>
        <Route path="/loading" element={ <Loading/>}/>
      </Routes>
    </div>
  );
}

export default App;
