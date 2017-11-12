import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div className="row" style={{'paddingTop': '1em'}}>
            <div className="three columns">
                <Link to={'/students'} style={navButton} className="button">Students</Link>
            </div>
            <div className="three columns">
                <Link to={'/books'} style={navButton} className="button">Books</Link>
            </div>
            <div className="three columns">
                <Link to={'/loans'} style={navButton} className="button">Loans</Link>
            </div>
            <div className="three columns">
                <Link to={'/historic'} style={navButton} className="button">Historic</Link>
            </div>
        </div>
    );
};

var navButton = {
    width: '100%'
}