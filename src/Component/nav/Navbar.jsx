import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className="header-style-1 navbar-expand-lg fixed-top py-4">
        <div className="container d-flex justify-content-between align-items-center">

          <Link className='navbar-brand text-white text-uppercase fw-bolder fs-2' 
            to={'/home'}>
            Start Framework
          </Link>

          <button 
            className="btn d-lg-none"
            onClick={() => setOpen(!open)}
          >
            <i className="fa-solid fa-bars text-white fs-3"></i>
          </button>

          <div 
            ref={menuRef}
            className={`mobile-menu ${open ? "show" : ""}`}
          >
            <div className="p-relative">
              <ul className='navbar-nav-header navbar-nav ms-auto text-center'>
              <li className='nav-item me-3' onClick={closeMenu}>
                <NavLink className='nav-link text-white fw-bold px-2' to={'/about'}>About</NavLink>
              </li>

              <li className='nav-item me-3' onClick={closeMenu}>
                <NavLink className='nav-link text-white fw-bold px-2' to={'/gallery'}>Portfolio</NavLink>
              </li>

              <li className='nav-item me-3' onClick={closeMenu}>
                <NavLink className='nav-link text-white fw-bold px-2' to={'/contact'}>Contact</NavLink>
              </li>

              <li className='mt-3'>
                <button className="btn btn-light" onClick={closeMenu}>
                  <i className='fa-solid fa-xmark'></i>
                </button>
              </li>
            </ul>
            </div>
            
          </div>

        </div>
      </div>
    </>
  )
}
