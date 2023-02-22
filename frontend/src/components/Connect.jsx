import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./Connect.css";
import axios from 'axios';
const Connect = (props) => {
  const [show, setShow] = useState(false);
  const [axiosdata,setAxiosdata]=useState({})
  const handleSubmitClose = () => {
    console.log(text, email);
    setShow(false);
    axios.post('http://127.0.0.1:8000/add/', {
      email: email,
      text: text
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  
  return (
    <>
      
        <Button
          className="nav-link nav-link-btn me-lg-5 pt-lg-3 "
          onClick={handleShow}
        >
          Let's Connect
        </Button>
        <Modal show={show} onHide={handleClose} className="mt-5">
          <Modal.Header closeButton>
            <Modal.Title>Get In Touch!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="modal-form">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                  className="modal-form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="modal-form-control"
                  onChange={(e) => setText(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={handleSubmitClose}
              className="modal-submit-btn"
              type="button"
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>

    </>
  );
};

export default Connect;
