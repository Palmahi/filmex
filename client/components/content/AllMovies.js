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
            <div className="container-fluid">
                <div className="row ml-4">
                <div className="col-md-12 display-4 mb-2 text-white">AllMovies</div>
                    {' '}
                    {movies.map(movie => {
                        return (
                            <div className="col-md-3 text-white" key={movie.id}>
                                <dl>
                                    
                                    <div class="col-sm-4"><img class="img-responsive" src={movie.poster} height="260" width="180" /></div>
                                    <dt className="spacer">{movie.title}</dt>
                                    <dd className="spacer grey">{movie.director}</dd>
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
