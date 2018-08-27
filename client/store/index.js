import { createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import movies from './movies';
import genres from './genres';

const reducer = combineReducers({
    movies,
    genres
})

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
      thunkMiddleware,
      createLogger()
    ))
);

export default store;
export * from './movies';
export * from './genres';