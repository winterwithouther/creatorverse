import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion';

import Header from '../components/Header';
import Loading from '../components/Loading';
import toast from 'react-hot-toast';

import "../css/ViewCreator.css"

export default function ViewCreator() {
    const { id } = useParams();

    const navigate = useNavigate();
    const [creator, setCreator] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchCreator() {
            try {
                const res = await fetch(`http://localhost:8000/api/creators/${id}`);
                if (!res.ok) throw new Error("Failed to fetch character");
                const data = await res.json();
                setCreator(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchCreator();
    }, [id])

    async function handleDelete() {
        
        const toastId = toast.loading("Deleting creator...");

        try {
            const res = await fetch(`http://localhost:8000/api/creators/${id}`, {
                method: "DELETE"
            })

            const data = await res.json();

            if (!res.ok) {
                toast.error("Failed to delete creator", { id : toastId });
                console.error("Delete error:", data.error);
            } else {
                toast.success("Creator deleted", { id : toastId });
                // Remove deleted creator from state
                console.log("bruh")
                navigate("/creators");
            }
        } catch (err) {
            console.error("Network error:", err);
            toast.error("Network error", { id : toastId })
        }
    }

    if (creator == null) return;

    if (loading) {
        return <Loading/>
    }

    return (
        <>
            <Header/>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className='view-creator-container'>
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
                    <Link to={`/creators/${id}/edit`} className='link button-1'>EDIT</Link>
                    <button onClick={handleDelete} className='link button-2'>DELETE</button>
                </div>
            </motion.div>
        </>
    )
}
