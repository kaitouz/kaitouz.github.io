import React from 'react';
import './navbar.css';
import {
    FaGithub,
    FaFacebookF,
    FaLinkedin,
    FaYoutube,
    FaTelegramPlane
} from 'react-icons/fa';

export const Navbar = () => {
  return (
    <div className="stick_follow_icon">
        <ul>
        <li><a href="https://github.com/kaitouz"><FaGithub /></a></li>

        <li><a href="https://www.linkedin.com/in/thienkaitouz/"><FaLinkedin /></a></li>

        <li><a href="https://t.me/thienkaitouz"><FaTelegramPlane /></a></li>

        <li><a href="https://www.youtube.com/@thienkaitouz"><FaYoutube /></a></li>

        <li><a href="https://www.facebook.com/thienkaitouz"><FaFacebookF /></a></li>

        </ul>
        <p>Hi, there !</p>
    </div>
  )
}
