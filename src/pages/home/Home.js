import React from 'react'
import './home.css'
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section id="home" className="home">
        
        <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div className="hero-image order-lg-1"
                style={{ backgroundImage: `url(${'/hero.png'})` }}>
            </div>

            <div className="content order-lg-2 justify-content-center align-self-center">
              <div className="intro">
                <div>
                  <h2>I'm Thien Le</h2>
                  <h1>
                    <Typewriter
                      options={{
                        strings: [
                          "I'm currently studying at ITMO University",
                          "My specialization is Software Engineering",
                          "I'm digging into Deep Learning and Big Data",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                      }}
                    />
                  </h1>
                </div>
                <p>Welcome to Kaitouz's homepage</p>

                <div className="intro_btn-action pb-5">
                  <Link to="/about">
                    <div id="button_white" className="ac_btn btn ">
                      About me
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_black" className="ac_btn btn">
                      Contact Me
                    </div>
                  </Link>
                  
                </div>
              </div>
          </div>


        </div>
    </section>
  )
}
