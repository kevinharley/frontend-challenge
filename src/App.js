import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Confirmation from "./steps/Confirmation";
import ErrorState from "./steps/Error";
import MoreInfo from "./steps/MoreInfo";
import Root from "./steps/Root";
import Success from "./steps/Success";
import FormCard from "./components/Form/FormCard"

const App = () => {
  return (
    <FormCard>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/more-info" element={<MoreInfo />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/success" element={<Success />} />
          <Route path="/error" element={<ErrorState />} />
        </Routes>
      </Router>
    </FormCard>
  );
}

export default App;
