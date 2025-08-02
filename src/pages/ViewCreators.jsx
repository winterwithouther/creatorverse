import React, { useEffect, useState } from 'react'
import { supabase } from '../client'

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


    return (<div>
    </div>)
}
