import '../assets/style/CatalogueStyles/Catalogue.css'
import ArtCard from '../atoms/CatalogueAtoms/ArtCard'
import data from '../assets/data/data.json'

function Catalogue() {
    return (
        <>
            <h1 className="catalogue">Nuestras obras</h1>

            <div className="card-container">
                {
                    data.map((element) => (
                        <ArtCard
                            key={element.title}
                            title={element.title}
                            author={element.author}
                            year={element.year}
                            description={element.description}
                            imgRout={element['img-route']-1}
                        />
                    ))
                }
            </div>

        </>
    );
}

export default Catalogue;