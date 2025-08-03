import React from 'react'
import { Link } from 'react-router-dom';

export default function CreatorCard({ creator }) {
    if (!creator) return null; // don't render if data is missing

    const { id, name, imageURL, description, url } = creator

    return (
        <div>
            <img src={imageURL} alt="image" />
            <h2>{name}</h2>
            <p>{description}</p>
            <a href={url} target="_blank">{url}</a>
        </div>
    )
}
