import React, { useEffect, useState } from 'react'
import { supabase } from '../client'
import CreatorCard from '../components/CreatorCard';
import "../css/ViewCreators.css"
import "../App.css"

export default function ViewCreators() {
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
    <div className='main-container'>
        <div className='screen-container'>
            <h1>CreatorVerse</h1>
        </div>
        <div className='view-creators-container'>     
            {creators.map((creator) => {
                return <CreatorCard key={creator} creator={creator}/>
            })}
        </div>
    </div>)
}
