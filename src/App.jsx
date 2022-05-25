import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import { theme } from "./components/theme";
import ContextTutorial from "./pages/ContextTutorial";
import CustomHook from "./pages/CustomHook";
import FetchData from "./pages/FetchData";
import Home from "./pages/Home";
import ImperativeHandle from "./pages/ImperativeHandle";
import LayoutEffect from "./pages/LayoutEffect";
import Memohook from "./pages/Memohook";
import NativeForm from "./pages/NativeForm";
import RefExample from "./pages/RefExample";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar bgColor="wheat">
          <Button p={`.5rem`} link to={`/native_form`}>Form </Button>
          <Button p={`.5rem`} link to={`/fetch_data`}>API串接</Button>
          <Button p={`.5rem`} link to={`/ref_example`}>Ref</Button>
          <Button p={`.5rem`} link to={`/layoutEffect`}>LayoutEffect</Button>
          <Button p={`.5rem`} link to={`/imperative_handle`}>子傳父</Button>
          <Button p={`.5rem`} link to={`/context_tutorial`}>context</Button>
          <Button p={`.5rem`} link to={`/memo_hook`}>Memo</Button>
          <Button p={`.5rem`} link to={`/cust_hook`}>Custhooks1</Button>
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
            <Route path="/memo_hook" element={<Memohook />}/>
            <Route path="/cust_hook" element={<CustomHook />}/>
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
