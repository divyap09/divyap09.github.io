import React from "react";

function AboutSection(){
  return(
    <div>
      <section id="about-section">
        <fieldset id="about">
          {/*<legend>About</legend> */}
          <p className="description">Hello, I'm <br/>
            <span className="intro bold-text">Divya Pulivarthi, </span><br />
            <p>a <span className="bold-text">Web Developer</span> based on Hyderabad, India.<br /> Passionate about learning and designing web pages.
          <div id="social-icons-div" class="social-icons">
						<a 
							href="https://github.com/divyap09" 
							target="_blank" 
							class="btn contact-details no-text-decoration">
							<i class="fab fa-github icon"></i>
						</a>
						<a 
							href="https://www.linkedin.com/in/divya-pulivarthi/"
              target="_blank" 
              class="btn contact-details no-text-decoration">
              <i class="fab fa-linkedin-in icon"></i>
            </a>
            <a 
              href="mailto:divyapulivarthi09@gmail.com" 
              target="_blank" 
              class="btn contact-details no-text-decoration">
              <i class="fas fa-regular fa-envelope"></i>
            </a>
					</div>
          </p>
        </p>
        </fieldset>
        <div id="animated-screen"></div>
      </section>
      
      
    </div>
    
  )
}

function ExperienceSection(){
  return(
    <section id="experience-section" className="experience-section">
        <fieldset>
          <legend>Work Experience</legend>
        </fieldset>
      </section>
  )
}

function InfoSection(){
  return(
    <section id="info-section" className="info-section">
        <fieldset id="info" >
          <header className="center"><h2>Tech Stack</h2></header>
          <h4>Front-end</h4>
          <ul className="flex-icons">
            <li><i className="fab fa-java"></i> Java</li>
            <li><i className="fab fa-brands fa-html5"></i> HTML</li>
          </ul>
           <h4>Back-end</h4>
          <ul className="flex-icons">
            <li><i className="fa fa-database"></i> SQL</li>
          </ul>
        </fieldset>
      </section>
  )
}

function ProjectsSection(){
  return(
    <section id="projects-section">
        <fieldset id="projects">
          <legend>Projects</legend>
        </fieldset>
      </section>
  )
}

function ContactSection(){
  return(
    <section id="contact-section" class="contact-section center">
				<fieldset id="urls">
          {/*<legend>Contact Details</legend> */}
					<div id="div-contacts">
						<a href="mailto:divyapulivarthi09@gmail.com" target="_blank" class="btn contact-details no-text-decoration"><i class="fas fa-paper-plane"></i> Send a Mail</a>
					</div>
				</fieldset>
			</section>
  )
}

function Info() {
  return (
    <div id="main-details" className="main-details">
      <AboutSection />
      <hr />
      <ExperienceSection />
      <hr />
      <InfoSection />
      <hr />
      <ProjectsSection />
      <hr />
      <ContactSection />
    </div>
  );
}
export default Info;