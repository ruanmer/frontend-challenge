import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element="Sign up" />
      <Route path="/more-info" element="More info" />
      <Route path="/confirmation" element="Confirmation" />
      <Route path="/success" element="Success" />
      <Route path="/error" element="Error" />
      <Route path="*" element="Not found" />
    </Routes>
  );
};

export default App;
