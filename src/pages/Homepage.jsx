import React from 'react'
import ShowCreators from './ShowCreators'
import { Link } from 'react-router-dom'
import "../css/Homepage.css"

export default function Main() {
    return (
        <div className='main-container'>
            <div className='screen-container'>
                <h1>CreatorVerse</h1>
                <div className='links-container'>
                    <Link>View Creators</Link>
                    <Link>Add Creator</Link>
                </div>
            </div>
            <div className='view-creators-container'>
                <ShowCreators/>
            </div>
        </div>
    )
}
