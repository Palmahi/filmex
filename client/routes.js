import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './components/layout/Dashboard';
import Navbar from './components/layout/Navbar';
import AllMovies from './components/content/AllMovies';
import Sidebar from './components/layout/Sidebar'

const Routes = (props) => {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="container-fluid">
                {/* <div className="menu col-md-2">
                    <Sidebar/>
                </div> */}
                    <Switch>
                        <Route path="/" component={Dashboard} />
                        <Route path="/movies/:id" component={AllMovies} />
                       
                        <Route
                            path="/movies/genre/:id" render={({ match }) => {
                            return (<AllMovies where={movie => {
                                return movie.genres.some((genre) => {
                                return genre.id == match.params.id
                                })
                            }} />)
                            }}
                        />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default Routes;