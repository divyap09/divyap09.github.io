import React from "react";
function Info() {
  return (
    <div className="main-details">
      <section id="about-section">
        <fieldset id="about">
          {/*<legend>About</legend> */}
          <p className="description">
            I'm<span className="intro"> Divya Pulivarthi, </span>a web
            developer, passionate about learning and creating web pages.
          </p>
        </fieldset>
      </section>
      <hr />
      <section id="experience-section">
        <fieldset>
          <legend>Work Experience</legend>
        </fieldset>
      </section>
      <hr />
      <section id="info-section">
        <fieldset id="info">
          <legend>Education</legend>
          <h3>Sri Sunflower College of Engineering & Technology, Lankapalli</h3>
          <p>
            <span className="left-text">B.Tech</span>
          </p>
          <p>
            <span className="left-text">Year: 2015-19</span>
          </p>
          <legend>Details</legend>
          <h3>Programming Languages</h3>
          <h4>Front-end</h4>
          <ul>
            <li>Java</li>
            <li>SQL</li>
          </ul>
        </fieldset>
      </section>
      <hr />
      <section id="projects-section">
        <fieldset id="projects">
          <legend>Projects</legend>
        </fieldset>
      </section>
      <section id="contact-section" class="contact-section center">
				<fieldset id="urls">
					<legend>Contact Details</legend>
					<div id="div-contacts">
						<a 
							href="https://github.com/divyap09" 
							target="_blank" 
							class="btn contact-details no-text-decoration">
							<i class="fab fa-github"></i> GitHub
						</a>
						<a 
							href="https://www.linkedin.com/in/divya-pulivarthi/"
              target="_blank" 
              class="btn contact-details no-text-decoration">
              <i class="fab fa-linkedin"></i> Linkedin
            </a>
						<a href="mailto:divyapulivarthi09@gmail.com" target="_blank" class="btn contact-details no-text-decoration"><i class="fas fa-paper-plane"></i> Send a Mail</a>
					</div>
				</fieldset>
			</section>
    </div>
  );
}
export default Info;
