import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client';

export default function CreatorDetails() {
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
        <div>
            <div>
                <img src={creator.imageURL} alt="image" />
                <h1>{creator.name}</h1>
                <p>{creator.description}</p>
                <a href={creator.url}>link</a>
            </div>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}
