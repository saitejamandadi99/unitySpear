import {Link, } from 'react-router-dom'
import './index.css'

const Header = () =>{
    return(
        <nav className='navbarContainer'>
            <div>
                <img src='logo unityspear.png' alt='Logo Image' className='logoImage' />
            </div>
            <ul className='listContainer'>
                <li className='listItem'><a>Home</a></li>
                <li className='listItem'><a>Events</a></li>
            </ul>
        </nav>
    )

}

export default (Header)