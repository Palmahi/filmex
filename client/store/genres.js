import axios from 'axios';

//ACTION TYPES
export const GET_ALL_GENRES = 'GET_ALL_GENRES';

export const GET_GENRE_ID = 'GET_GENRE_ID';


//ACTION CREATORS
export function getAllGenres(genres) {
    return {type: GET_ALL_GENRES, genres}
}
export function getGenreId(genreId){
  return {type: GET_GENRE_ID, genreId}
}

//THUNKS
export const fetchAllGenres = () => {
    return dispatch => {
      axios.get('/api/genres')
        .then(res => res.data)
        .then(genres => {
          return  dispatch(getAllGenres(genres));
        })
        .catch(console.error);
    }
}

const initialState = {
    genres: [],
    genreId: ''
}

//REDUCER(S)
export default function (state = initialState, action) {
    switch (action.type) {
      case GET_ALL_GENRES:
        return action.genres;
      case GET_GENRE_ID:
        return action.genreId;
      default:
        return state
    }
}