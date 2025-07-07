import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar  from 'react-bootstrap/Navbar';
import { BsCart3 } from 'react-icons/bs';
import { useShoppingCard } from './Context/ShoppingCard';

const Navbars = () => {
const {handlOpen ,cartQuantity}=useShoppingCard()
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{position:"sticky", top:0, zIndex:2}}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/store">Store</Nav.Link>
            <Nav.Link href="/about">Aobut </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button onClick={handlOpen} variant="outline-success "  style={{position:"relative"}}>
            <div className='bg-danger rounded d-flex justify-content-center align-items-center' 
            style={{position:"absolute" ,color:"white" ,bottom:0 , right:0, transform:"translate(50% ,50%)", width:"25px", height:"25px"}}>{cartQuantity}</div>
            <BsCart3  />
        </Button>
      </Container>
    </Navbar>
  );

}

export default Navbars