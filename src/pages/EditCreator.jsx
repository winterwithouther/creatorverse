import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function EditCreators() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: ""
  })

  // Fetch creator data on mount
  useEffect(() => {
    async function fetchCreator() {
      try {
        const res = await fetch(`http://localhost:8000/api/creators/${id}`);
        const data = await res.json();

        if (!res.ok) {
          console.error("Failed to fetch creator: ", data.error);
          toast.error("Could not load creator");
        } else {
          setFormData({
            name: data.name || "",
            url: data.url || "",
            description: data.description || "",
            imageURL: data.imageURL || "",
          })
        }
      } catch (err) {
        console.error("Error fetching creator: ", err);
        toast.error("Network error loading creator");
      }
    }

    fetchCreator();
  }, [])

  function handleChange(e) {
    const { name, value } = e.target;
    console.log("Field changed:", name, "New value:", value);
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  async function handleUpdate(e) {
    e.preventDefault();

    const toastId = toast.loading("Updating creator...");

    try {
      const res = await fetch(`http://localhost:8000/api/creators/${id}`, {
        method: "PATCH",
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify(formData)
      })

      const data = await res.json();

      if (!res.ok) {
        console.error("Update error:", data.error);
        toast.error("Failed to update creator", { id: toastId });
      } else {
        toast.success("Creator updated!", { id : toastId});
        navigate("/creators");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Edit Creator</h1>
      <form onSubmit={handleUpdate}>
        <input onChange={handleChange} type="text" name="name" placeholder="name" value={formData.name} required/>
        <input onChange={handleChange} type="text" name="imageURL" placeholder="imageURL" value={formData.imageURL}/>
        <input onChange={handleChange} type="text" name="url" placeholder="URL" value={formData.url} required/>
        <textarea onChange={handleChange} name="description" placeholder="description" value={formData.description}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}