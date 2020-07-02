import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light p-3 justify-content-center shadow">
            <form class="form-inline">
                <Link className="btn btn-outline-secondary mx-3" type="button" to="/">Home</Link>
                <Link className="btn btn-sm btn-outline-secondary mx-3" type="button" to="/films">Films</Link>
                <Link className="btn btn-sm btn-outline-secondary mx-3" type="button" to="/characters">Characters</Link>
                </form>
            </nav>
            <img style={{ width: "100%", height: "300px", objectFit: "contain" }} src="https://live.staticflickr.com/7107/6925593220_0063772aed_b.jpg" alt="Logo" />

        </>
    );
}

export default Navbar;