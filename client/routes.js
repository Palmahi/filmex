import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './components/App';

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={App} />
                {/* <Route path="/:id" component={} /> */}
            </Switch>
        </Router>
    )
}

export default Routes;