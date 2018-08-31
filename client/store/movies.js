import axios from 'axios';

//ACTION TYPES
export const GET_ALL_MOVIES = 'GET_ALL_MOVIES';
export const GET_ALL_MOVIES_BY_GENRE = 'GET_ALL_MOVIES_BY_GENRE';


//ACTION CREATORS
export function getAllMovies(movies) {
    return {type: GET_ALL_MOVIES, movies}
}

export function getAllMoviesByGenre(genreId) {
    return {type: GET_ALL_MOVIES_BY_GENRE, genreId}
}

//THUNKS
export const fetchAllMovies = () => {
    return dispatch => {
      axios.get('/api/movies')
        .then(res => res.data)
        .then(movies => {
            movies.map(movie => movie.genres.map(genre => genre.genre))
            return  dispatch(getAllMovies(movies));
        })
        .catch(console.error);
    }
}

export const fetchAllMoviesByGenre = (id) => {
    return dispatch => {
      axios.get(`/api/genres/${id}`)
        .then(res => res.data)
        .then(movies => {
            return  dispatch(getAllMoviesByGenre(id));
        })
        .catch(console.error);
    }
}

const initialState = {
    movies: [],
    moviesByGenre: []
}

//REDUCER(S)

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_MOVIES:
            return action.movies;
        case GET_ALL_MOVIES_BY_GENRE:
            return action.moviesByGenre;
        default:
            return state;
    }
}
  