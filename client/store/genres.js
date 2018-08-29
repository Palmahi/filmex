import axios from 'axios';

//ACTION TYPES
export const GET_ALL_GENRES = 'GET_ALL_GENRES';


//ACTION CREATORS
export function getAllGenres(genres) {
    return {type: GET_ALL_GENRES, genres}
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

// const initialState = {
//     genres: []
// }

//REDUCER(S)
export default function (state = [], action) {
    switch (action.type) {
      case GET_ALL_GENRES:
        return action.genres
      default:
        return state
    }
}