import axios from 'axios';

//ACTION TYPES
export const GET_ALL_MOVIES = 'GET_ALL_MOVIES';

//ACTION CREATORS
export function getAllMovies(movies) {
    return {type: GET_ALL_MOVIES, movies}
}

//THUNKS
export const fetchAllMovies = () => {
    return dispatch => {
      axios.get('/api/movies')
        .then(res => res.data)
        .then(movies => {
        //     movies.map(trip => trip.categories.map(category => category.name))
          return  dispatch(getAllMovies(movies));
        })
        .catch(console.error);
    }
}

const initialState = {
    movies: []
}

//REDUCER(S)

export default function (state = initialState, action) {
    switch (action.type) {
      case GET_ALL_MOVIES:
        return action.movies;
      default:
        return state;
    }
}
  