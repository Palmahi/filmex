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
                </div>
            </nav>
        )
    }
}

export default Navbar;