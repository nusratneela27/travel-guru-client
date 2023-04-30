import React from 'react';
import { Button, Container, Nav, Navbar, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/logo.png'

const Header = () => {

    return (
        <Navbar expand="lg" variant="dark">
            <Container className='mb-5 mt-4'>
                <div>
                    <img src={logo} alt="" className='me-5 mt-2' style={{ height: "56px", width: "120.26px" }} />
                </div>

                <Form className='me-5 ms-5'>
                    <Form.Control
                        type="search"
                        placeholder="Search Your destination"
                        className="me-auto search bg-secondary"
                        aria-label="Search"
                    />
                </Form>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Nav className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll >

                        <Link className='text-black me-5 ms-5 text-decoration-none fs-5'>News</Link>
                        <Link className='text-black me-5 ms-5 text-decoration-none fs-5'>Destination</Link>
                        <Link className='text-black me-5 ms-5 text-decoration-none fs-5'>Blog</Link>
                        <Link className='text-black me-5 ms-5 text-decoration-none fs-5'>Contact</Link>
                        <Button className='bg-warning text-black ms-5 fw-bold'>Login</Button>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;