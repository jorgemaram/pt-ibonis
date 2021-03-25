import React from 'react';
import styled from '@emotion/styled';
import { Navbar, Nav } from 'react-bootstrap';

const Navegation = styled(Navbar)`
    border-top: 12px solid #000;
    border-bottom: 1px solid #dcdcdc;
    text-align: center;
    font-family: "Helvetica neue", Helvetica, sans-serif;
    font-weight: bold;
    margin: 0;
    padding: 0;
    line-height: 21px;
    font-size: 14px;
    text-transform: uppercase;
`

const Coachpyme = styled.p`
    font-size: 26px;
    color: #22d099;
    line-height: 42px;
    letter-spacing: 1px;
    padding: 0;
    span {
        font-weight: 100;
        color: #958c81;
    }
`

const Inicio = styled.p`
    color: #2b7874;
    padding: 2px 0 10px 0;
    margin: 0;
`
const Obtengo = styled.p`
    color: #000;
    padding: 2px 0;
    margin: 0;
    &:hover {
        color: #22d099;
    }
`
const Acceder = styled.p`
    background-color: #000;
    display: inline;
    color: #fff;
    padding: 5px 25px;
    text-align: center;
    margin: 0;
    &:hover {
        background-color: #22d099;
    }
    
`

const Header = () => {
    return (
        <Navegation collapseOnSelect expand="lg">
            <Navbar.Brand>
                <Nav.Link as="div" className="brand-navbar"><Coachpyme>Coach<span>pyme</span></Coachpyme></Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#"><Inicio>Inicio</Inicio></Nav.Link>
                    <Nav.Link href="#"><Obtengo>Qué obtengo</Obtengo></Nav.Link>
                    <Nav.Link href="#"><Acceder>Acceder</Acceder></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navegation>
    );
}

export default Header;
