import React from "react";

export default function Contact() {
  return (
    <>
      <div id="contact" className="container contact mt-4">
        <h1>CONTACT ME</h1>
        <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
          <a href="" target="_blank" className="items">
            <i className="icons bi bi-instagram"></i>
          </a>
          <a href="" target="_blank" className="items">
            <i className="icons bi bi-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/m-prasad-/" target="_blank" className="items">
            <i className="icons bi bi-linkedin"></i>
          </a>
          <a href="" target="_blank" className="items">
            <i className="icons bi bi-twitter-x"></i>
          </a>
          <a href="https://github.com/code-with-prasad" target="_blank" className="items">
            <i className="icons bi bi-github"></i>
          </a>
          <a href="mailto:mandaprasad18@gmail.com" target="_blank" className="items">
            <i className="icons bi bi-envelope"></i>
          </a>
        </div>
      </div>
    </>
  );
}
