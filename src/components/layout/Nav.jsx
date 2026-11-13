import { NavLink } from 'react-router';
import { posts } from '../../data/posts';

function Nav() {
  return (
    <nav>
      <ul className="nav-list">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to={`/posts/${posts[0].id}`}>Individual Post</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;