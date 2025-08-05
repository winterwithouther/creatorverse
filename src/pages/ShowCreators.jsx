import React, { useEffect, useState } from 'react'
import { supabase } from '../client'
import CreatorCard from '../components/CreatorCard';
import "../App.css"
import "../css/ShowCreators.css"

import { Link } from 'react-router-dom';

export default function ShowCreators() {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        const fetchCreators = async () => {
            const { data, error } = await supabase.from('creators').select('*');
            if (error) {
                console.error('fetching creators error:', error);
            } else {
                console.log('successfully fetched creators', data);
                setCreators(data);
            }
        };

        fetchCreators();
    }, [])

    return (
        <div className='show-creators-container'> 
            {creators.map((creator) => {
                return <CreatorCard key={creator.id} creator={creator}/>
            })}
        </div>
    )
}

