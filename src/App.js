import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";

function App() {
  document.body.style.backgroundColor = "#212529";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
