import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './components/layout/Dashboard';
import Navbar from './components/layout/Navbar';

const Routes = (props) => {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="container">
                    <Switch>
                        <Route path="/" component={Dashboard} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default Routes;