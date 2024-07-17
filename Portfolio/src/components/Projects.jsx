import React from 'react'

const Projects = () => {
  return (
      <section className="project" data-aos="zoom-in-up">
          <h1>Project Information</h1>
          <p>
              I have worked on several projects related to web development, including
              an attendance record system, music player, and todo list application.
              These projects were built using React on the front-end and back-end
              technologies like Node.js and Express.
          </p>
          <hr />
          <div className="accordion">
              <h2>My College Projects</h2>
              <article className="accordion-panel">
                  <input type="radio" name="accordion" id="accordion-question" />
                  <label htmlFor="accordion-question">
                      College attendance system
                      <i className="fa-solid fa-plus open"></i>
                      <i className="fa-solid fa-minus close"></i>
                  </label>
                  <div className="accordion-body">
                      <p className="accordion-answer">
                          <hr style={{ margin: "none", width: "100%" }} />
                          The attendance record system was designed to help organizations
                          keep track of employee attendance. The system had a user-friendly
                          interface that allowed employees to log in and log out, view their
                          attendance history, and download their attendance reports. The
                          back-end was built with Node.js and Express, and the front-end was
                          built with React.
                      </p>
                  </div>
              </article>
              <article className="accordion-panel">
                  <input type="radio" name="accordion" id="accordion-question-2" />
                  <label htmlFor="accordion-question-2">
                      Music player
                      <i className="fa-solid fa-plus open"></i>
                      <i className="fa-solid fa-minus close"></i>
                  </label>
                  <div className="accordion-body">
                      <p className="accordion-answer">
                          <hr style={{ margin: "none", width: "100%" }} />
                          The music player was designed to allow users to listen to their favorite
                          music and create playlists. The music player had a sleek and modern
                          design, and it allowed users to search for songs and artists, create and
                          edit playlists, and listen to music continuously. The back-end was built
                          with Node.js and Express, and the front-end was built with React.
                      </p>
                  </div>
              </article>
              <article className="accordion-panel">
                  <input type="radio" name="accordion" id="accordion-question-3" />
                  <label htmlFor="accordion-question-3">
                      TodoList
                      <i className="fa-solid fa-plus open"></i>
                      <i className="fa-solid fa-minus close"></i>
                  </label>
                  <div className="accordion-body">
                      <p className="accordion-answer">
                          <hr style={{ margin: "none", width: "100%" }} />
                          The todo list application was designed to help users keep track of their
                          tasks and manage their schedules. The application had a user-friendly
                          interface that allowed users to add and delete tasks, and view their
                          task lists. The back-end was built with Node.js and Express, and the
                          front-end was built with React.
                      </p>
                  </div>
              </article>
          </div>
      </section>
  )
}

export default Projects