import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client';
import "../css/ViewCreator.css"

export default function ViewCreator() {
    const { id } = useParams();
    const [creator, setCreator] = useState(null);
    
    useEffect(() => {
        async function fetchCreator() {
            const { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
            if (error) {
                console.log(`Error fetching cerator: ${error}`);
            } else {
                console.log("Successfully fetched creator data");
                setCreator(data);
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
