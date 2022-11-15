import React, { useState } from 'react'
import "./header.css";
import { Link , useLocation } from "react-router-dom";
import { VscGrabber, VscClose } from "react-icons/vsc";


export const Header = () => {

    const location = useLocation()

    const [isToggleActive, setToggleActive] = useState("true");
    const handleToggle = () => {
        setToggleActive(!isToggleActive);
    };

    return (
        <header className={isToggleActive ? 'header_normal fixed-top' : 'header_show fixed-top'}>
            <div className="d-flex align-items-top justify-content-between pt-3">

                <Link  className="navbar-brand nav_ac" to="/">
                Kaitouz
                </Link>
                
                <div class={isToggleActive ? 'header__links' : 'header__links'}>
                {/* <p>{window.location.pathname}</p> */}
                <Link  className={location.pathname === '/' ? 'header__link_active' : 'header__link'} to="/">Home</Link>
                <Link  className={location.pathname === '/about' ? 'header__link_active' : 'header__link'} to="/about">About</Link>
                <Link  className={location.pathname === '/portfolio' ? 'header__link_active' : 'header__link'} to="/portfolio">Portfolio</Link>
                <Link  className={location.pathname === '/contact' ? 'header__link_active' : 'header__link'} to="/contact">Contact</Link>
                </div>

                <button className="header_content_toggle nav_ac" onClick={handleToggle}>
                    {!isToggleActive ? <VscClose /> : <VscGrabber />}
                </button>
            </div>
        </header>
    )
}
