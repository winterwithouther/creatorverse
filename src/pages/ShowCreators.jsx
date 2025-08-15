
import { useEffect, useState } from 'react';
import CreatorCard from '../components/CreatorCard';
import "../App.css"
import "../css/ShowCreators.css"
import { useNavigate } from 'react-router-dom';

export default function ShowCreators() {
    const navigate = useNavigate();

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
            }
        };

        fetchCreators();
    }, [])

    function handleClick() {
        navigate("/")
    }

    return (
        <div>
            <h1 onClick={handleClick}>CreatorVerse</h1>
            <div className='show-creators-container'>
                {creators.map((creator) => {
                    return <CreatorCard key={creator.id} creator={creator}/>
                })}
            </div>
        </div>
    )
}

