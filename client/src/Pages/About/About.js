import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import Chat from "../../Components/Chat/Chat";
import "./About.css"
import Navbar from "../../Components/Navbar/Navbar";

function About() {
  const [state] = useState({
    title: "Hello everyone",
    titleTwo:"Contact us for"
  });

  return (


    <>
    <Navbar/>
    <Chat />
   
    <div className="home">

      <div className="home-intro" id="content-div">
        <h2>
          <div className="title">{state.title}</div>
        </h2>
        <h2>
          <div className="titleTwo ">{state.titleTwo}</div>
        </h2>

        <div className="text">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [ 
                "Web App Development",
                "UX/UI Design",
                "Full-stack Development",
                "Your DREAM project"

              ],
            }}
          />
        </div>
      </div>

      <div className="pic-part">

        <div>
            <img src="Deeptirtha.jpeg" alt="" className="pro-img" />
            <h3 className="tex deep">Deeptirtha Mukherjee</h3>
            <div className="ico">
            <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox"><i className="fa-solid fa-envelope ic-chnage1" /></a>
            <a href="https://www.linkedin.com/in/deeptirtha-mukherjee-7b5040249/"><i className="fa-brands fa-linkedin-in ic-chnage" /></a>
            <a href="https://www.instagram.com/dee_tirtha/"><i className="fa-brands fa-instagram  ic-chnage" /></a>
            </div>

        </div>

        <div>
            <img src="aman.jpg" alt="" className="pro-img" />
            <h3 className="tex aman">Aman Prajapati</h3>
            <div className="ico">
            <a href=""><i className="fa-solid fa-envelope ic-chnage1" /></a>
            <a href=""> <i className="fa-brands fa-linkedin-in ic-chnage" /></a>
            <a href=""><i className="fa-brands fa-instagram  ic-chnage" /></a>
            </div>
        </div>

      </div>
   



    </div>

    </>
  );
}

export default About;
