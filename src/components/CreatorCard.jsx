import React from 'react'
import { Link } from 'react-router-dom';
import "../css/CreatorCard.css"
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import EditIcon from '@mui/icons-material/Edit';
import LanguageIcon from '@mui/icons-material/Language';

export default function CreatorCard({ creator }) {
    if (!creator) return null; // don't render if data is missing

    const { id, name, imageURL, description, url } = creator

    return (
        <div style={
                {backgroundImage: `url(${imageURL})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',}
            } 
            className='creator-container'>
            <div className='creator-info'>
                <div className='top-row'>
                    <h2 className='creator-name'>{name}</h2>
                    <div className='creator-links-container'>
                        <div>
                             <a className='creator-url creator-link' href={url} target="_blank">{<LanguageIcon/>}</a>
                        </div>
                        <div>
                            <Link className='creator-link' to={`/creators/${id}`}><InfoOutlineIcon/></Link>{" "}
                        </div>
                        <div>
                            <Link className='creator-link' to={`/creators/${id}/edit`}><EditIcon/></Link>
                        </div>
                    </div>
                </div>
                <p className='creator-description'>{description}</p>
            </div>
        </div>
    )
}
