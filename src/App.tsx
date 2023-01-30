import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./i18n";
import Login from "./pages/login/login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
