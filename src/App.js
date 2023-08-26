import "./styles.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
