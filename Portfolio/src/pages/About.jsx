import React from 'react'
import Layout from "../assets/Layout";
const About = () => {
    return (
        <Layout>
            <div className="about-content">
                <div className="about" data-aos="zoom-in-up">
                    <h1>Introduction</h1>
                    <p>
                        Hi, I'm Deepak Negi, a trained developer with a passion for creating
                        visually appealing and interactive web applications. Over the past few
                        years, I have honed my skills in web development, specifically in
                        HTML, CSS, and JavaScript.
                    </p>
                </div>
                <hr />
                <h1 className="journey" data-aos="zoom-in-up">My Journey</h1>
                <div className="about" data-aos="zoom-in-up">
                    <h3>React Completion</h3>
                    <img src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png" height="40vh" alt="" />
                    <p>
                        Recently, I completed a React course, which has expanded my knowledge
                        and skillset in creating modern and efficient web applications. During
                        the course, I learned about the core concepts of React, such as
                        components, states, and props, and how they can be applied to build
                        complex user interfaces.
                    </p>
                </div>
                <div className="about" data-aos="zoom-in-up">
                    <h3>Front-end and Back-end Development</h3>
                    <p>
                        As part of my back-end journey, I have learned and worked with various
                        programming languages such as Python, Ruby, and Java, and web
                        frameworks such as Django, Ruby on Rails, and Spring Boot. I have also
                        gained experience in database management, REST API design, and server
                        deployment. As for my front-end journey, I have honed my skills in
                        HTML, CSS, and JavaScript, as well as front-end libraries and
                        frameworks such as React and Vue.js. I have learned how to create
                        dynamic and interactive user interfaces, integrate APIs, and optimize
                        website performance.
                    </p>
                </div>
                <div className="about" data-aos="zoom-in-up">
                    <h3>Project Development</h3>
                    <img src="https://cdn-icons-png.flaticon.com/128/1151/1151474.png" height="40vh" alt="" />
                    <p>
                        To apply my skills in both back-end and front-end development, I have
                        worked on various projects that demonstrate my expertise in creating
                        full-stack web applications. These projects have included e-commerce
                        websites, social media platforms, and content management systems.
                    </p>
                </div>
                <div className="about" data-aos="zoom-in-up">
                    <h3>Challenges</h3>
                    <img src="https://cdn-icons-png.flaticon.com/128/1535/1535012.png" height="40vh" alt="" />
                    <p>
                        Throughout my journey, I have faced various challenges, such as
                        debugging complex code, optimizing website performance, and managing
                        large datasets. However, each challenge has helped me to grow and
                        learn new skills and techniques.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default About