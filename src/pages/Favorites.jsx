import '../css/Favorites.css'
import { useMovieContext } from '../contexts/movieContext';
import MovieCard from '../components/MovieCard';

function Favorites(){
    const {favorites } = useMovieContext();

    if(favorites.length > 0)
    {
        return (
            <div className="favorites">
                <h2>Vos favoris</h2>
            <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id}></MovieCard>
          ))}
        </div>
        </div>
        )
    }
    return(
    <>
        <div className="favorites-empty">
            <h2>Pas de favoris </h2>
            <p>Ajoutez des films à vos favoris</p>
        </div>

    </>
    )
}

export default Favorites;