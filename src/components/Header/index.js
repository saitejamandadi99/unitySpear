import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  return (
    <nav className='navbarContainer'>
      <div>
        <Link to="/">
          <img src='logo unityspear.png' alt='UnitySpear Logo' className='logoImage' />
        </Link>
      </div>
      <ul className='listContainer'>
        <li className='listItem'><Link to="/">Home</Link></li>
        <li className='listItem'><Link to="/events">Events</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
