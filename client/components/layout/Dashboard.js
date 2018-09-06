import React, { Component } from 'react';
import AllMovies from '../content/AllMovies';
import Sidebar from './Sidebar';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            genreId: null,
            genreName: ''
        }
        // this.filtered = this.filtered.bind(this);
        this.idFilter = this.idFilter.bind(this);
    }

    // filtered(movies) {
    //     movies.filter(movie => {
    //         if (movie.genres && movie.genres.length > 0) {
    //           return movie.genres[0].id === this.state.genreId;
    //         }
    //     });
    // }

    idFilter(event, id, name){
        this.setState({
            genreId: id,
            genreName: name
        });
    }

    render() {
        //console.log('Dashboard Props ', this.state.genreId)
        return (
            <div className="row">
                <div className="menu col-md-2">
                    <Sidebar
                    idFilter={this.idFilter}  
                    idProps={this.state.genreId} nameProps={this.state.genreName} 
                    />
                </div>
                <div className="col-md-10">
                  <AllMovies
                  idProps={this.state.genreId} 
                  nameProps={this.state.genreName}
                //   filtered={this.filtered}
                  />
                </div>
            </div>
        )
    }
}
export default Dashboard;
