import '../../assets/style/CatalogueStyles/CardArt.css'

/* Importaciones de imágenes para que funcione fuera del desarrollo de prueba */
import monaLisa from '../../assets/data/img/mona-lisa.jpg'
import nocheEstrellada from '../../assets/data/img/noche-estrellada.jpg'
import guernica from '../../assets/data/img/guernica.jpg'
import meninas from '../../assets/data/img/las-meninas.jpg'
import venus from '../../assets/data/img/venus.jpg'

const images = [monaLisa,nocheEstrellada,guernica,meninas,venus]

function ArtCard({title,description,year,author,imgRout}) {
    return (
        <div className="artCard">
            <div className="img-card-art">
                <img className='img-art' src={images[imgRout]} alt="title" />
            </div>
            <span className="title-card">{title}</span>
            <span className="author-card">{author}</span>
            <span className="year-card">{year}</span>
            <span className="description-card">{description}</span>
        </div> 
    );
}

export default ArtCard;