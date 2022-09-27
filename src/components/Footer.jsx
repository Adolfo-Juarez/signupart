import '../assets/style/FooterStyles/Footer.css'
import Logotype from '../atoms/HeaderAtoms/Logotype'
import Github from '../assets/images/github.png'

function Footer() {
    return (
        <footer>
            <div className="center-section-footer">
                <Logotype />
                <h1 className='footer-bold'>Contáctanos</h1>
                <span className='legal'>Por: Adolfo Juárez</span>
                <span className='legal'>Universidad Politécnica de Chiapas</span>
            </div>
            <div className="center-section-footer">
                <h2 className='footer-bold'>Menú</h2>
                <a href="#" className="linkFooter">Inicio</a>
                <a href="#" className="linkFooter">Contacto</a>
                <a href="#" className="linkFooter">Unirse</a>
                <a href="#" className="linkFooter">Ayuda</a>
            </div>
            <div className="center-section-footer">
                <h2 className="footer-bold">Soporte</h2>
                <a href="#" className="linkFooter">FAQ</a>
                <a href="#" className="linkFooter">API</a>
                <a href="https://github.com/Adolfo-Juarez/WorldArt" target="__blank" className='linkFooter'>
                    <span className='code'> <img src={Github} alt="Github" className='git'/></span>
                </a>
            </div>
        </footer>
    );
}

export default Footer;