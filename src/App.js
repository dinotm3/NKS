import "./App.css";
import PersonGrid from "./components/PersonGrid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Add from "./components/Add";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<PersonGrid />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/add" element={<Add />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
