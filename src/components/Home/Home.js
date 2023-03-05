import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import ResumePdf from "../../Assets/ANKE-SaiPrasad.pdf";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ANKE SAIPRASAD</strong>
              </h1>

              <div style={{ padding: 15, paddingLeft: 50 }}>
                <Type />
       
              </div>
              <div style={{padding: 15,paddingLeft: 150 }}>
              {/* <Button variant="primary" a href="https://drive.google.com/file/d/1mE_Gb4110lRG9HfQlBPQqND2h7y-hAWf/view?usp=sharing" target="_blank" ><AiOutlineDownload />
            &nbsp;Resume
          </Button> */}
          <Button variant="primary"
           href={ResumePdf} 
           target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
          </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
        <Home2 />
      </Container>
      
    </section>
  );
}

export default Home;
