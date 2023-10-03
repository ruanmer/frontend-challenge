import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUp";
import MoreInfoPage from "./pages/MoreInfo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/more-info" element={<MoreInfoPage />} />
      <Route path="/confirmation" element="Confirmation" />
      <Route path="/success" element="Success" />
      <Route path="/error" element="Error" />
      <Route path="*" element="Not found" />
    </Routes>
  );
};

export default App;
