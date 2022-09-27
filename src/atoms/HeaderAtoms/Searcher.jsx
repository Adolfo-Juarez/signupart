import '../../assets/style/HeaderStyles/Searcher.css'

function Searcher() {
    return (
        <div className="boxSearcher">
            <form action="search">
                <input type="text" name="searcher" className="search-input"/>
            </form>
        </div>
    );
}

export default Searcher;