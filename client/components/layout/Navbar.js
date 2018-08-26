import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark" id="nav">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        Filmex
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto nav-link">
                            <li className="nav-item">
                                <button class="btn btn-default navbar-btn nav-btn">Popular Movies</button>
                            </li>
                            <li className="nav-item">
                                <button class="btn btn-default navbar-btn nav-btn">Recently Added</button>
                            </li>
                           
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link"> Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;