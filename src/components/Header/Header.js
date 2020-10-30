import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link class="nav-link" to="/home">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/projects">Projects</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/resume">Resume</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/contact">Contact Me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;