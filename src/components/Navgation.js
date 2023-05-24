import React from 'react';
import { useNavigate } from 'react-router';
import { IoChevronBackSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logo from '../media/logo.svg';
import '../styles/Navigation.css';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="myflex darker-bg">
        <div className="myflex navBox">
          <div
            className="myflex back"
            aria-hidden="true"
            onClick={() => navigate('/')}
          >
            <IoChevronBackSharp />
          </div>
          <div className="myflex navTitle">
            <Link to="/">
              <img src={logo} alt="Logo" className="navLogo" />
              (MCT)
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
