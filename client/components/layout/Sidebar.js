import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllGenres } from '../../store';
import Dashboard from '../layout/Dashboard';

class Sidebar extends Component {
    constructor(){
      super();
      this.state = {
        id: null
      }
    }

    componentDidMount(){
        this.props.getAllGenres();
    }

    setIdOnClick(id) {
      //this.props.parentProps(id)
      this.setState({
        id : id
      })
    }

    render() {
        const genresFromProps  = this.props.genres;//object
        const genres = [];
        Object.keys(genresFromProps).map((e,idx) => {
            let item = genresFromProps[e];
            genres.push(item)
        })

        console.log('props state', this.props)
        return (
          <div>
            <span className="text-white main-text">Movies Genres</span>
            {genres.map(genre => {
                        return (
                          <div className="text-white" key={genre.id}>
                              <a href="#" onClick={this.setIdOnClick.bind(this, genre.id)} >
                                  <span>{genre.genre}</span>
                              </a>  
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