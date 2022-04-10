import { Link } from 'react-router-dom';
import React from 'react';

function Socials() {
    return (
        <div className="col text-md-center pl-0 pl-md-3">
            <Link to="/" className="logo">
                <img src="img/logo-white.png" className="default" alt="Pofo" />
            </Link>
        </div>
    );
}
export default Socials;