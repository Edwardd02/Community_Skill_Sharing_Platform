import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <div>
            Welcome to the AboutPage!
            <br />
            <Link to="/">Go to About Page</Link>
        </div>
    );
}

export default AboutPage;
