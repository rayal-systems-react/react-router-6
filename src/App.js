import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import Home from "./Home";
import About from "./About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
