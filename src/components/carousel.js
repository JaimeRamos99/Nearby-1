import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import mitsu1 from '../assets/mitsu1.jpg'
import volvo1 from '../assets/volvo1.jpg'
import volvo2 from '../assets/volvo2.jpg'
import '../App.css'
export default function Home() {
    return (
        <>
            <Navbar className="sombra" style={{ backgroundColor: 'black' }} expand="lg">
                <Navbar.Brand style={{ color: 'white' }}>Nearby</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-secondary" style={{}}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: '80vh', objectFit: 'cover' }}
                        className="d-block w-100"
                        src={mitsu1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Montero Sport 2020</h3>
                        <p>The new Montero Sport is waiting for you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '80vh', objectFit: 'cover' }}
                        className="d-block w-100"
                        src={volvo1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Volvo xc90</h3>
                        <p>Elegance for ever.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '80vh', objectFit: 'cover' }}
                        className="d-block w-100"
                        src={volvo2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Volvo xc90</h3>
                        <p>The roads never end.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>

    )
}