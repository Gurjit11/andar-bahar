import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GridPage from "./GridPage";
import AndarBaharPage from "./AndarBaharPage";
import Page3 from "./Page3";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GridPage />} /> {/* Home or landing page */}
        <Route path="/andar-bahar" element={<AndarBaharPage />} />
        {/* Andar Bahar game page */}
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
  );
};

export default App;
