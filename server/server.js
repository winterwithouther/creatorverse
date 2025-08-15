import express from "express";
import cors from "cors";
import { supabase } from "./client.js";

const app = express();
const PORT = 8000

app.use(cors()); 
app.use(express.json())

// test route
app.get("/", (req, res) => {
    res.send("Express server running");
})

// GET all creators
app.get("/api/creators", async (req, res) => {
    const { data, err } = await supabase.from("creators").select("*");
    if (err) {
        console.error("Supabase error: ", err.message);
        return res.status(500).json({ error : err.message })
    }
    res.json(data);
})

// POST
app.post("/api/creators", async (req, res) => {
    const { name, imageURL, description, url } = req.body;

    const {data, err} = await supabase.from("creators").insert(
        [{
            name,
            description,
            imageURL,
            url
        }]
    )

    if (err) {
        console.error("Error adding a creator: ", err.message);
        return res.status(500).json({error: err.message});
    }

    res.status(201).json(data);
})


// GET creator by id
app.get("/api/creators/:id", async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase.from("creators").select("*").eq("id", id).single();

    if (error) {
        console.error("failed to fetch creator", error )
    }

    return res.json(data);
})

app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
});

app.listen(PORT || 8001, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})