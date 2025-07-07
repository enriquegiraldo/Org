import "./Footer.css";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
            <div className='redes'>
                <a href='https://www.facebook.com/enrique.giraldo.954285/' target="_blank" rel="noopener noreferrer">
                    <img src="/img/facebook.png" alt='Facebook' />
                </a>
                <a href='https://x.com/Giraldo_enriqu' target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="icono-red-social" size={30} color="white" />
                </a>
                {/* <a href='https://www.instagram.com/aluralatam/' target="_blank" rel="noopener noreferrer">
                    <img src="/img/instagram.png" alt='Instagram' />
                </a> */}
                <a href='https://www.linkedin.com/in/enrique-giraldo-puentes-80123548g/' target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icono-red-social" size={30} color="white" />
                </a>
                  <a href='https://www.linkedin.com/in/enrique-giraldo-puentes-cc80123548/' target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icono-red-social" size={30} color="white" />
                </a>
                <a href='https://github.com/enriquegiraldo' target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icono-red-social" size={30} color="white" />
                </a>
            </div>
            <img src='/img/Logo.png' alt='Logo de la organización' className="logo-footer" />
            <strong>
                Desarrollado por 
                <a href="https://github.com/enriquegiraldo" target="_blank" rel="noopener noreferrer"> Enrique Giraldo Puentes</a>
            </strong>
        </footer>
    );
};

export default Footer;