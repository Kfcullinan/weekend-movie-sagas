import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieDetails() {
    const movie = useSelector(store => store.selectedMovie);
    return(
        <div>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.description}</p>
        </div>
    )
}

export default MovieDetails;