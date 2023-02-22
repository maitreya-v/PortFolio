import React from 'react'
import './Home.css';
import { Container,Row,Col } from 'react-bootstrap';
import Typed from "./typed.js";
import Typewriter from "typewriter-effect";
import maitPhoto from '../images/mait-photo-removebg.png';
const Home = () => {
 
  return (
   <>
   
  <Container className='home-container'>
    <Row>
      <Col className='d-grid justify-items-center align-content-center col-6 offset-1'>
        <h6>HELLO</h6>
        <h1>I Am Maitreya Vaghulade</h1>
        <h1 className='typewriter-h1'><Typewriter
  options={{
    strings: ['A Web Developer.', 'A Web Designer.','ML Enthusiast.'],
    autoStart: true,
    loop: true,
  }}
/>
        </h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dolore, eum sed quidem magni at magnam praesentium. Voluptates aliquam quo dolores praesentium magnam nam accusantium placeat? Quis cum quaerat iure minus a enim, fugit nesciunt!
      </Col>
      <Col>
      
      </Col>
    </Row>
  </Container>
   </>
  )
}

export default Home



