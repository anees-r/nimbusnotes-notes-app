import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NoteState from "./context/notes/NoteState";

function App() {
  document.body.style.backgroundColor = "#212529";
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />

            <Route exact path="/login" element={<Login />} />

            <Route exact path="/register" element={<Register />} />

            <Route exact path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
