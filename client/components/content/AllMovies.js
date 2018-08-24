// carousel and all movies
//we have it all
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllMovies } from '../../store';

class AllMovies extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount(){
        this.props.getAllMovies();
    }

    render() {
        const moviesFromProps  = this.props.movies;//object
        const movies = [];
        Object.keys(moviesFromProps).map((e,idx) => {
            let item = moviesFromProps[e];
            movies.push(item)
        })
        return (
            <div>
                <div className="row">
                <div className="col-md-12 display-4 mb-2">AllMovies</div>
                    {' '}
                    {movies.map(movie => {
                        return (
                            <div className="col-md-3" key={movie.id}>
                                <dl>
                                    <dt>{movie.title}</dt>
                                    <dd>{movie.director}</dd>
                                </dl>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapState = state => {
    return {
        movies: state.movies,
    }
}
  
const mapDispatch = dispatch => {
    return {
        getAllMovies: () => {
            dispatch(fetchAllMovies());
        }
    }
}

export default connect(mapState, mapDispatch)(AllMovies);
