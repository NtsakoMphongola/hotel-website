import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
