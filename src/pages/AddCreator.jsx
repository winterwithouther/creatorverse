import React, { useState } from 'react'
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
                </div>
            </form>
        </div>
    )
}
