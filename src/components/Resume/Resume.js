import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import ResumePdf from "../../Assets/ANKE-SaiPrasad.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { AiFillGithub,
  AiOutlineTwitter,AiFillLinkedin,
  AiOutlineMail ,AiOutlineInstagram} from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
          <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.E in Computer Science Engineering - SJCIT , Chickballapur , Karanataka "
              date="2016 - 2020"
              content={[]}
            />
            <Resumecontent
              title="Intermediate BOARD - Sri Chaitanya Intermediate College  - Vijayawada"
              date="2014 - 2016"
              content={[]}
            />
            <Resumecontent
              title="SSC BOARD - Prasad Concept School - Anantapur "
              date="2014"
              content={[]}
            /> 
            {/* <Button variant="primary"
            href={ResumePdf} 
            target="_blank">
             <AiOutlineDownload />
             &nbsp;Resume
           </Button> */}

            <h3 className="resume-title">Resume</h3>
            <Button variant="primary"
           href={ResumePdf} 
           target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
          </Col>
          <Col md={6} className="resume-right">
          <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Associate Software Dev Engineer"
              date="April 2022 - July 2022"
              content={[
                "Manages all the major task like collecting the resources and ideas to the design of the Project. ",
                "Worked with team members to improve the features of website.",
                "Worked on different features of website and mostly the frontend part of MVP Compliance.",
              ]}
            />
             <Resumecontent
              title="Software Dev Engineer"
              date="July 2022 - Present"
              content={[
                "Manages all the app  like improving UI/UX and design of the Project. ",
                // "Worked with team members to improve the features of website.",
                "Managed AWS and AuthO & Worked on different features of website  ",
              ]}
            />
          </Col>
        </Row>
    


        <Col md={12} className="home-about-social">
            <h1>Contact</h1>
            <p>
              Feel free to <span className="purple">Connect </span>with me
            </p>
            <ul className="home-about-social-links">
              
              <li className="social-icons">
                <a
                  href="https://github.com/ankesai8"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
           <li className="social-icons">
                <a
                  href="mailto:ankesai8@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://twitter.com/saiprasad_264"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anke-saiprasad/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sai__eight_8/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineInstagram />
                </a>
              </li>
            </ul>
          </Col>
<br/>
<br/>
<br/>

         <quote className='footer__quote' 
         style={{fontFamily:"changa",color:"#00c5b4"}}
          >                  “Dream, Dream Dream <br/>
                          Dreams transform into thoughts<br/>
                           And thoughts result in action.”
&nbsp;<i className="footer__title" style={{fontFamily:"changa"}}> ― <b><i>APJ ABDUL KALAM</i></b></i></quote><br/>
<br/>
<br/>
      </Container>
    </Container>
  );
}

export default Resume;
