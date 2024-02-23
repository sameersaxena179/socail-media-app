

import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';
// it's nav link,

// a special link in the end which also can analyze the URL and allows us to for example color the link

// differently if we are on the page the link leads to, to show the user that

// this is the currently active link for example and then here, I return an unordered list where I'll add
import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
           {/* exact as a prop,

this tells the nav link that it should only mark this link as active and apply the styling

I will give you in navlink.css later when we are exactly on slash nothing and not on any route that

starts with slash

because that would be every route and then this would always be marked as the active link. */}
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;

