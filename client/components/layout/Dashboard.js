import React, { Component } from 'react';
import AllMovies from '../content/AllMovies';
import Sidebar from './Sidebar';

class Dashboard extends Component {
    constructor(props){
        super(props);
    }

    propsFromChild(){
    }

    render() {
        //console.log('Dashboard Props ', this.props)
        return (
            <div className="row">
                <div className="menu col-md-2">
                    <Sidebar parentProps={this.propsFromChild.bind(this)}/>
                </div>
                <div className="col-md-10">
                  {/* <h1>React Boilerplate 1 2 </h1> */}
                  <AllMovies/>
                </div>
            </div>
        )
    }
}
export default Dashboard;