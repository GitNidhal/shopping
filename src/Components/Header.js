import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>Home ..</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
