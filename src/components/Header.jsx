import '../assets/style/HeaderStyles/Header.css'
import Logotype from '../atoms/HeaderAtoms/Logotype'
import NavButtons from '../atoms/HeaderAtoms/NavButtons'

function Header() {
    return (
        <header className="HeaderDark">
            <Logotype/>
            
            <div>
                <NavButtons/>
            </div>
        </header>


    );
}

export default Header;