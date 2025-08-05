import React from 'react'
import ShowCreators from './ShowCreators'
import { Link } from 'react-router-dom'
import "../css/Homepage.css"

export default function Main() {
    return (
        <div className='homepage-container'>
            <h1>CreatorVerse</h1>
            <div className='links-container'>
                <Link to="/creators">View Creators</Link>
                <Link to="/add">Add Creator</Link>
            </div>
        </div>
    )
}
