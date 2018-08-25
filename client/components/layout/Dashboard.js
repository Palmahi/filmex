import React, { Component } from 'react';
import AllMovies from '../content/AllMovies';
import Sidebar from './Sidebar';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="menu col-md-2">
            <Sidebar/>
        </div>
        <div className="col-md-10">
          {/* <h1>React Boilerplate 1 2 </h1> */}
          <AllMovies/>
        </div>
      </div>
    )
  }
}