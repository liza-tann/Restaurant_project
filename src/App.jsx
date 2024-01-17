import React from "react";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Announcement from "./components/pages/Announcement";
import Breakfast from "./components/pages/Breakfast";
import Lunch from "./components/pages/Lunch";
import Dinner from "./components/pages/Dinner";
import Dessert from "./components/pages/Dessert";
import Beverages from "./components/pages/Beverages";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="breakfast" element={<Breakfast />} />
            <Route path="lunch" element={<Lunch />} />
            <Route path="dinner" element={<Dinner />} />
            <Route path="dessert" element={<Dessert />} />
            <Route path="beverages" element={<Beverages />} />
          </Route>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Announcement" element={<Announcement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
