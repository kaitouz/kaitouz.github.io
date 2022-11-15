import React from 'react'
import "./header.css";
import { Link , useLocation } from "react-router-dom";

export const Header = () => {

    const location = useLocation()

    return (
        <>
            <header className="site__header fixed-top">
                <div className="d-flex align-items-center justify-content-between pt-3">

                    <Link  className="navbar-brand nav_ac" to="/">
                    Kaitouz
                    </Link>
                    
                    <div class="header__links">
                    {/* <p>{window.location.pathname}</p> */}
                    <Link className={location.pathname === '/' ? 'header__link_active' : 'header__link'} to="/">Home</Link>
                    <Link className={location.pathname === '/about' ? 'header__link_active' : 'header__link'} to="/about">About</Link>
                    <Link className={location.pathname === '/portfolio' ? 'header__link_active' : 'header__link'} to="/portfolio">Portfolio</Link>
                    <Link className={location.pathname === '/contact' ? 'header__link_active' : 'header__link'} to="/contact">Contact</Link>
                    </div>

                    <div className="d-flex align-items-center">
                    
                    </div>
                </div>
            </header>
        </>
    )
}
