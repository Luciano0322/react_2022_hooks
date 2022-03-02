import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NativeForm from "./pages/NativeForm";

function App() {
  return (
    <Router>
      <Navbar bgColor="wheat">
        <Link to={`/native_form`}>Native Form</Link>
      </Navbar>
      <div style={{ paddingTop: '4.5rem' }}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/native_form" element={<NativeForm />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
