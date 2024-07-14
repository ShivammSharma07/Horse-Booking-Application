import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sliderr from "./component/Slider";
import Form from "./component/Form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sliderr />} />
        <Route path="/book" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
