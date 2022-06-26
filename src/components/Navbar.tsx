import React from "react";
import { Button, Container, Nav, Navbar as NavBarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <NavBarBs className="bg-white shadow-sm mb-3" sticky="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to={"/"}>
            Home
          </Nav.Link>

          <Nav.Link as={NavLink} to={"/store"}>
            Store
          </Nav.Link>

          <Nav.Link as={NavLink} to={"/about"}>
            About
          </Nav.Link>
        </Nav>
        <Button
          className="rounded-circle"
          variant="outline-primary"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            position: "relative",
          }}
        >
          <AiOutlineShoppingCart size="1.5rem" />
          <div>3</div>
        </Button>
      </Container>
    </NavBarBs>
  );
};

export default Navbar;
