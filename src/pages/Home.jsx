import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { NameContext} from "../contexts/LanguageContext";
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

function Home() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { name } = useContext(NameContext);

  return (
    <div className={`home-container ${theme === "siyah" ? "home-theme-dark" : ""}`}>
      <div className="home-info">
        <h2>Home Sayfası</h2>
        <p>Aktif Tema: {theme}</p>
        <p>Seçilen Dil: {name}</p>
      </div>

      <div className="home-buttons">
        <button onClick={() => navigate('/')}>Anasayfaya Geri Dön</button>
        <button onClick={() => navigate('/Navbar')}>Tema ve Dili Değiştir</button>
      </div>
    </div>
  );
}

export default Home;
