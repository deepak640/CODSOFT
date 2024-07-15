import React, { useEffect, useRef } from 'react'
import Layout from '../assets/Layout'
import Profile from './images/profile.png'
import Typed from 'typed.js'
import Skills from "../components/Skills";
import Projects from "../components/Projects";
const Home = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Coder", "Developer", "Student"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <Layout>
            <section class="hero-section" data-aos="zoom-in-up">
                <div>
                    <img src={Profile} alt="no image" class="hero-profile" />
                </div>
                <div>
                    <h1>Hi, i am <span ref={el}></span></h1>
                    <summary class="hero-content">
                        I am Deepak Negi, a full-stack developer skilled in HTML, CSS, and
                        React. I have a passion for creating dynamic and visually appealing
                        websites. My expertise in front-end and back-end technologies,
                        combined with my experience, make me a confident and skilled
                        developer. I am eager to continue learning and growing in the field of
                        web development.
                    </summary>
                </div>
            </section>
            <Skills />
            <Projects/>
        </Layout>
    )
}

export default Home