import Main from "./components/Main"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
    <Router> {/* Wrap the app in BrowserRouter */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Announcement" element={<Announcement />} />
          <Route path="/Breakfast" element={<Breakfast />} />
          <Route path="/Lunch" element={<Lunch />} />
          <Route path="/Dinner" element={<Dinner />} />
          <Route path="/Dessert" element={<Dessert />} />
          <Route path="/Beverages" element={<Beverages />} />
          
        </Routes>
        {/* <Main /> Render Main component outside of routes */}
      </div>
    </Router>

  )
}

export default App
