import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Style.css";
import { useNavigate } from "react-router-dom";
export default function Header({ aaa }) {
  const navigate = useNavigate();
  const [search, setsearch] = useState();
  const a = (ev) => {
    setsearch(ev.target.value);
  };
  const aa = () => {
    aaa(search);
    navigate("/searchpage");
  };
  return (
    <Navbar bg="dark" variant="dark" className="nav" expand="lg">
      <Container className="background">
        <Navbar.Brand href="/" className="back">
          MovieDb
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Popular</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/toprated">
              <Nav.Link>Toprated</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/upcoming">
              <Nav.Link>Upcoming</Nav.Link>
            </LinkContainer>

            <Form.Control
              onChange={a}
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            ></Form.Control>
            <Button onClick={aa} className="button" variant="secondary">
              Search
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
