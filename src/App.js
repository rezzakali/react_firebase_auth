import { Route, Routes } from "react-router-dom";
import "./App.css";
import Facebook from "./Compoents/Facebook";
import Github from "./Compoents/Github";
import Home from "./Compoents/Home";
import Login from "./Compoents/Login";
import Navbar from "./Compoents/Navbar";
import Phone from "./Compoents/Phone";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/git" element={<Github />} />
      </Routes>
    </div>
  );
}

export default App;
