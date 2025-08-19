
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Header from '../components/Header.jsx';
import CreatorCard from '../components/CreatorCard';
import Loading from '../components/Loading.jsx'; 

import "../App.css"
import "../css/ShowCreators.css"

export default function ShowCreators() {
    const [loading, setLoading] = useState(true);
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        const fetchCreators = async () => {
            try {
                const res = await fetch("http://localhost:8000/api/creators");

                if (!res.ok) {
                    console.error("Error fetching creators: ", res.error)
                } else {
                    const data = await res.json();
                    setCreators(data);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCreators();
    }, [])

    if (loading) {
        return <Loading/>
    }

    return (
        <div>
            <Header/>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className='show-creators-container'>
                {creators.map((creator) => {
                    return <CreatorCard key={creator.id} creator={creator}/>
                })}
            </motion.div>
        </div>
    )
}

