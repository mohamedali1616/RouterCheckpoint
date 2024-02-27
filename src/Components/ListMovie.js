import AddMovie from "./AddMovie"
import CardMovie from "./CardMovie"
import FilterMovie from "./FilterMovie"

const ListMovie = ({movies, search, etoile, setMovies, setSearch, setEtoile}) =>{
    var x = movies.filter((el,i,t)=> el.title.toUpperCase().includes(search.toUpperCase()) && el.rating >= etoile)
    return(
        <div>
            <div className="AddFil">
                <FilterMovie setSearch={setSearch} setEtoile={setEtoile} search={search} etoile={etoile}/>
                <AddMovie setMovies={setMovies} movies={movies}/>
            </div>


            <div className="cards">
                {
                    x.length == 0 ? <h1>Pas de Film</h1> : x.map((el,i,t)=> <CardMovie el={el}/> )
                }
            </div>
        </div>

    )
}
export default ListMovie