import "./App.css";
import PersonGrid from "./components/PersonGrid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<PersonGrid />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
