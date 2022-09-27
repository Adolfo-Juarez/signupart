import artStatue from '../../assets/images/firstArt.png'
import '../../assets/style/LandingStyles/ArtMain.css'

function ArtMain() {
    return ( 
        <div className="image-main-container">
            <img className='image-container' src={artStatue} alt="an master piece" />
        </div>
     );
}

export default ArtMain;