import React from "react";
import Header from "./components/header/Header.jsx";
import Form from "./components/form/Form.jsx";
import "./components/css/index.css";
import '.../index.css'

function App() {
  return (
    <main>
      <div className="container-flex">
        <Header />
        <Form />
      </div>
    </main>
  );
}

export default App;
