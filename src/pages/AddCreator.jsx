import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import Header from '../components/Header';
import "../css/AddCreator.css"

export default function AddCreators() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        imageURL: "",
        description: "",
        url: "",
    })

    function handleChange(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const toastId = toast.loading("Adding creator...");

        try {
            const res = await fetch("http://localhost:8000/api/creators", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(formData)
            })

            const data = await res.json();

            if (!res.ok) {
                toast.error("Failed to add creator", { id: toastId })
                console.error("Error adding creator: ", data.error);
            } else {
                console.log("Successfully added creator: ", data);
                toast.success("Creator added!", { id: toastId })
                navigate("/creators");
            }
        } catch(err) {
            console.log("Error: ", err);
        }
    }

    return (
        <>
            <Header/>
            <div className='add-creator-container'>
                <div className='secondary-add-creator-container'>
                    <h1 className='add-h1'>Add a New Creator</h1>
                    <form className='add-form' onSubmit={handleSubmit}>
                        <div className='input-field'>
                            <label>Name</label>
                            <input name="name" type="text" placeholder="name" onChange={handleChange} required/>
                        </div>
                        <div className='input-field'>
                            <label>Image</label>
                            <input name="imageURL" type="text" placeholder="image.png" onChange={handleChange} required/>
                        </div>
                        <div className='input-field'>
                            <label>Description</label>
                            <input name="description" type="text" placeholder="description" onChange={handleChange} required/>
                        </div>
                        <div className='input-field'>
                            <label>Channel URL</label>
                            <input name="url" type="text" placeholder="www.test.com" onChange={handleChange} required/>
                        </div>
                        <button className='add-submit-button' type="submit">Add Creator</button>  
                    </form>
                </div>
            </div>
        </>
    )
}
