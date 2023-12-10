import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
// import './path-to-your-tailwind.css'; // Adjust the path accordingly
import './Nav.css';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/HomePage">
        <h2 className="nav-title">Fitness CLUB</h2>
      </Link>
      <div>
        {!user.id && (
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}
        {user.id && (
          <>
            <Link className="navLink" to="/HomePage">
              Home
            </Link>
            <Link className="navLink" to="/UpdateProfilePage">
              Update Profile
            </Link>
            <Link className="navLink" to="/AboutPage">
              About
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
