import React from 'react'
import { Link } from 'react-router-dom';
import "../css/CreatorCard.css"

export default function CreatorCard({ creator }) {
    if (!creator) return null; // don't render if data is missing

    const { id, name, imageURL, description, url } = creator

    return (
        <div className='creator-container'>
            <div className='image-container'>
                <img className='creator-image' src={imageURL} alt="image" />
            </div>
            <div className='creator-info'>
                <h2 className='creator-name'>{name}</h2>
                <p className='creator-description'>{description}</p>
                <a className='creator-url' href={url} target="_blank">{url}</a>
                <div className='links-container'>
                    <Link to={`/creators/${id}`}>View</Link>{" "}
                    <Link to={`/edit/${id}`}>Edit</Link>
                </div>
            </div>
        </div>
    )
}
