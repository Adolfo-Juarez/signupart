import ArtMain from "../atoms/LandingAtoms/ArtMain";
import Introdcution from "../atoms/LandingAtoms/IntroductionText";
import '../assets/style/LandingStyles/Main.css'

function Landing() {
    return ( 
        <main>
            <Introdcution/>
            <ArtMain/>
        </main>
     );
}

export default Landing;