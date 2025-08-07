import React, { useEffect, useState } from 'react'
import { supabase } from '../client'
import CreatorCard from '../components/CreatorCard';
import "../App.css"
import "../css/ShowCreators.css"

import { Link } from 'react-router-dom';

export default function ShowCreators({ creators }) {

    return (
        <div className='show-creators-container'> 
            {creators.map((creator) => {
                return <CreatorCard key={creator.id} creator={creator}/>
            })}
        </div>
    )
}

