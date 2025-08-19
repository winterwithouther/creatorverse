import AddIcon from '@mui/icons-material/Add';
import { Groups } from '@mui/icons-material';

import { Link } from 'react-router-dom';
import "../css/Header.css"

export default function Header() {
    return (
        <header className='header'>
            <h1><Link className='to-home-link' to={"/"}>CreatorVerse</Link></h1>
            <div className='links-icon-container'>
                <div className='icon-container groups-icon-container'>
                    <Link to={"/creators"}><Groups sx={{ fontSize : 50}}/></Link>
                </div>     
                <div className='icon-container add-icon-container'>
                    <Link className='link-add' to={"/add"}><AddIcon sx={{ fontSize : 50 }}/></Link>
                </div>
            </div>
        </header>
    )
}