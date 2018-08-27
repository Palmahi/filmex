import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllGenres } from '../../store';

class Sidebar extends Component {
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
         console.log('Genres ',  typeof genres)
        return (
          <div>
            <span className="text-white main-text">Movies Genres</span>
            {genres.map(genre => {
                        return (
                          <div className="text-white" key={genre.id}>
                            <span>{genre.genre}</span>
                           
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