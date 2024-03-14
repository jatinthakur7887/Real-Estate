import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import SignUp from "./pages/SignUp";
export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Sign-in" element={<SignIn/>} />
    <Route path="/Sign-out" element={<SignOut/>} />
    <Route path="/Profile" element={<Profile/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/SignUp" element={<SignUp/>} />
  </Routes>
  </BrowserRouter>;
}
