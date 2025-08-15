import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../css/ViewCreator.css"

export default function ViewCreator() {
    const { id } = useParams();
    const [creator, setCreator] = useState(null);
    
    useEffect(() => {
        async function fetchCreator() {
            try {
                const res = await fetch(`http://localhost:8000/api/creators/${id}`);
                if (!res.ok) throw new Error("Failed to fetch character");
                const data = await res.json();
                setCreator(data);
            } catch (err) {
                console.error(err);
            }
        }

        fetchCreator();
    }, [id])

    if (creator == null) return;

    return (
        <div className='view-creator-container'>
            <div className='creator-info-container'>
                <div className='creator-img-container'>
                    <img className='creator-img' src={creator.imageURL} alt="image" />
                </div>
                <div className='creator-details'>
                    <div className='creator-name-container'>
                        <h1 className='creator-name'>{creator.name}</h1>
                    </div>
                    <div className='creator-desc-container'>
                        <p className='creator-desc'>{creator.description}</p>
                    </div>
                    <div className='creator-link-container'>
                        <a className='creator-link' href={creator.url}>Visit Website</a>
                    </div>
                </div>
            </div>
            <div className='buttons-container'>
                <button className='button-1'>EDIT</button>
                <button className='button-2'>DELETE</button>
            </div>
        </div>
    )
}
