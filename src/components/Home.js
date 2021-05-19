import React from 'react'
import { Link } from 'react-router-dom';
import Input from './Input';
import './Home.css'

import Items from './Items';

function Home() {
    return (
        <div className='main-container'>
            <div className='header'>
                <h2>Create your First Poll !</h2>
                <h1>Use Qonway to make polls and share them with your friends on any platform.</h1>
                <Link to='#'><h3>Learn More</h3></Link>
            </div>
            <Items />
        </div>
    )
}

export default Home
