import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            Welcome to the HomePage!
            <br/>
            <Link to={"/login"}>Login</Link>
            <br/>
            <Link to="/about">Go to About Page</Link>

        </div>
    );
}

export default HomePage;
