import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <div>
            Welcome to the AboutPage!
            <br />
            <Link to="/">Go to Home Page</Link>
        </div>
    );
}

export default AboutPage;
