import "./App.css";
import PersonGrid from "./components/PersonGrid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<PersonGrid />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
