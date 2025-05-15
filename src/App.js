import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import './css/App.css'; // CSS importu

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div className="app-container">
                  <h2>Ana Sayfa</h2>
                  <Link to="/home"><button>Home'a Git</button></Link>
                  <Link to="/navbar"><button>Navbar'a Git</button></Link>
                </div>
              }
            />
            <Route path="/home" element={<Home />} />
            <Route path="/navbar" element={<Navbar />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
