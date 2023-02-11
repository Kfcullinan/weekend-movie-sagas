import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory} from 'react-router-dom';

function MovieList() {

    const history = useHistory ();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const displayMovie = (movieToDisplay) => { 
        console.log(movieToDisplay);
        //using dispatch to send movie data to redux and sagas
        dispatch({ type: 'SET_MOVIE_DETAILS', payload: movieToDisplay })
        //history.push(`/details/${movie.id}`);
    }
    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={(event) => displayMovie(movie)}src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;