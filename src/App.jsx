import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUp";
import MoreInfoPage from "./pages/MoreInfo";
import ConfirmationPage from "./pages/Confirmation";
import SuccessPage from "./pages/Success";
import ErrorPage from "./pages/Error";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/more-info" element={<MoreInfoPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element="Not found" />
    </Routes>
  );
};

export default App;
