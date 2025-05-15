import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { NameContext } from "../contexts/LanguageContext";
import { useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const { theme, setTheme } = useContext(ThemeContext);
    const { name, setName } = useContext(NameContext);

    const changeTema = () => {
      if(theme === "Beyaz") {
        setTheme("Siyah");
      }
      else {
        setTheme("Beyaz");
      }
    }

    const changeDil = () => {
      if(name === "Burak") {
        setName("Nuri")
      }
      else {
        setName("Burak")
      }
    }

    return (
        <div className={`navbar-container ${theme === "Siyah" ? "navbar-theme-dark" : ""}`}>
            <div className="navbar-info">
                <p>Tema: {theme}</p>
                <p>Ad: {name}</p>
            </div>

            <div className="navbar-buttons">
                <button onClick={changeTema}>Temayı Değiştir</button>
                <button onClick={changeDil}>Adı Değiştir</button>
                <button onClick={() => navigate('/')}>Anasayfaya Geri Dön</button>
                <button onClick={() => navigate('/Home')}>Home Sayfasına Git</button>
            </div>
        </div>
    );
};

export default Navbar;
