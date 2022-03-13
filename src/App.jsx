import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContextTutorial from "./pages/ContextTutorial";
import FetchData from "./pages/FetchData";
import Home from "./pages/Home";
import ImperativeHandle from "./pages/ImperativeHandle";
import LayoutEffect from "./pages/LayoutEffect";
import NativeForm from "./pages/NativeForm";
import RefExample from "./pages/RefExample";

function App() {
  return (
    <Router>
      <Navbar bgColor="wheat">
        <Link to={`/native_form`}>Native Form</Link>
        <Link to={`/fetch_data`}>Fetch Data</Link>
        <Link to={`/ref_example`}>Ref Example</Link>
        <Link to={`/layoutEffect`}>Layout Effect</Link>
        <Link to={`/imperative_handle`}>Imperative Handle</Link>
        <Link to={`/context_tutorial`}>Context Tutorial</Link>
      </Navbar>
      <div style={{ paddingTop: '4.5rem' }}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/native_form" element={<NativeForm />}/>
          <Route path="/fetch_data" element={<FetchData />}/>
          <Route path="/ref_example" element={<RefExample />}/>
          <Route path="/layoutEffect" element={<LayoutEffect />}/>
          <Route path="/imperative_handle" element={<ImperativeHandle />}/>
          <Route path="/context_tutorial" element={<ContextTutorial />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
