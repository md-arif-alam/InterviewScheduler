import React from "react";
import './about.css'
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";


const About = () => {
  const visitGithub = () => {
    window.location = "https://github.com/md-arif-alam";
  };
  return (
    <div className="aboutSection">
      <div className="aboutSectionGradient">
        <div className="aboutSectionContainer" >
          <h1>About Me</h1>

          <div>
            <div >
              <img
                style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0", borderRadius: "70px" }}
                src="https://res.cloudinary.com/dgmljtcbq/image/upload/v1716773122/avatars/djxsox3nql5ptdab94ti.jpg"
                alt="Founder"
              />
              <h2> <b>Md Arif Alam</b> </h2>
              <button onClick={visitGithub}>
                (Freelance Web Developer)
              </button>
              <span style={{ color: "white" }}>
                Hello World !!!! This Interview Scheduler is a React-based web application that helps HR professionals and recruiters efficiently schedule, manage, and track interviews.Allows users to select a candidate, interviewer, date, time slot, and interview type.Ensures that interviews are scheduled based on the Indian Standard Time (IST).Prevents double-booking of candidates or interviewers at the same time.Users can reschedule interviews by dragging events on the calendar.
              </span>
            </div>
            <div className="aboutSectionContainer2">

              <div style={{ marginTop: "20px", marginBottom: "25px", }}>
                <h2 style={{ textAlign: "center" }}>
                  "Something About Me"
                </h2>
                <p style={{ marginTop: '20px' }}>
                  "I'm a passionate Frontend Developer with a keen interest in exploring Fullstack MERN (MongoDB, Express.js, React.js, Node.js) development. My journey in the tech world began with a fascination for creating beautiful user interfaces, and it has since evolved into a quest to build robust, scalable applications that solve real-world problems"
                </p>
              </div>
              <div>

                <a
                  href="https://www.linkedin.com/in/md-arif-alam0316"
                  target="blank"

                >
                  LinkedIn
                </a>


                <span>{" "}</span>
                <span>{"|"}</span>
                <span>{" "}</span>

                <a href="https://github.com/md-arif-alam" target="blank">
                  Github
                </a>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default About;
