import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Navbar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";

import Avatar from "../../assets/avatar.jpg";

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Navbar className="px-2 shadow mb-4" sticky="top" bg="light">
        <Button variant="light" onClick={handleOpen}>
          <span className="navbar-toggler-icon"></span>
        </Button>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Stack direction="horizontal" gap={3}>
            <Image roundedCircle width={48} height={48} src={Avatar} alt="Avatar" />
            <Stack>
              <span className="fw-semibold">PiggyDiggy</span>
              <small className="text-muted">dima-gus04@mail.ru</small>
            </Stack>
          </Stack>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <NavLink onClick={handleClose} to="/">
                Posts
              </NavLink>
            </ListGroup.Item>
            <ListGroup.Item>
              <NavLink onClick={handleClose} to="about">
                About
              </NavLink>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
