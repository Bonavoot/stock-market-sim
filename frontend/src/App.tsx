import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Stock from "./pages/Stock";
import Portfolio from "./pages/Portfolio";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [balance, setBalance] = useState<string | number>("$" + 10000);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home balance={balance} />} />
        <Route path="/stock" element={<Stock balance={balance} />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
};

export default App;
