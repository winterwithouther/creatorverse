import React, { useState } from 'react'
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

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

        const { error } = await supabase.from('creators').insert([formData]);

        if (error) {
            toast.error("Failed to add creator", { id: toastId })
            console.log("Error adding creator", error);
        } else {
            toast.success("Creator added!", { id: toastId })
            navigate("/");
        }
    }

    return (
        <div>
            <h2>Add a New Creator</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input name="name" type="text" onChange={handleChange} required/>
                </div>
                <div>
                    <label>Image:</label>
                    <input name="imageURL" type="text" onChange={handleChange} required/>
                </div>
                <div>
                    <label>Description:</label>
                    <input name="description" type="text" onChange={handleChange} required/>
                </div>
                <div>
                    <label>Channel URL:</label>
                    <input name="url" type="text" onChange={handleChange} required/>
                </div>
                <div>
                    <button type="submit">Add Creator</button>
                    <button>Delete</button>
                </div>
            </form>
        </div>
    )
}
