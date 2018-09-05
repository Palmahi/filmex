import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchAllGenres } from '../../store';
import Dashboard from '../layout/Dashboard';

class Sidebar extends Component {
    constructor(props){
      super(props);
    }

    componentDidMount(){
        this.props.getAllGenres();
    }

    render() {
        const genresFromProps  = this.props.genres;//object
        const genres = [];
        Object.keys(genresFromProps).map((e,idx) => {
            let item = genresFromProps[e];
            genres.push(item)
        })

        //console.log('props: ', this.props.parentProps)

        return (
          <div>
            <span className="text-white main-text">Movies Genres</span>
            {genres.map(genre => {
                        return (
                          <div className="text-white" >
                                <Link to={`/movies/genre/${genre.id}`} key={genre.id}  
                                    onClick={(event) => 
                                        this.props.idFilter(event, genre.id, genre.genre)} 
                                        // genreId={this.props.genreId === genre.id}
                                        // genreName={this.props.genreName === genre.genre}
                                >
                                    <ul>{genre.genre}</ul>
                                </Link>
                        </div>
                        )
            })}
          </div>
        )
    }
}
const mapState = state => {
    return {
        genres: state.genres,
    }
}

const mapDispatch = dispatch => {
    return {
        getAllGenres: () => {
            dispatch(fetchAllGenres());
        }
    }
}

export default connect(mapState, mapDispatch)(Sidebar);