
import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from '@material-ui/core/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
export default function FormAndImage() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', width: '100vw', backgroundImage: 'url(https://k60.kn3.net/taringa/2/5/8/1/1/6/76/_quin/01B.jpg)' }}>
            <div>
                <Container>
                    <Row>
                        <Col md={14}>
                            <Form>
                                <Form.Group as={Row} controlId="name">
                                    <Form.Label column sm={3} style={{ color: 'white' }}>
                                        Nombre
                                    </Form.Label>
                                    <Col xs sm={9} >
                                        <Form.Control placeholder="Nombre" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                    <Form.Label column sm={3} style={{ color: 'white' }}>
                                        Email
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="usercontrol">
                                    <Form.Label column sm={3} style={{ color: 'white' }}>
                                        Usuario
                                    </Form.Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                type="text"
                                                aria-label="Input group example"
                                                aria-describedby="btnGroupAddon"
                                            />
                                        </InputGroup>
                                    </Col>
                                </Form.Group>


                                <Form.Group controlId="Password1" as={Row}>
                                    <Form.Label column sm={3} style={{ color: 'white' }}>Contraseña</Form.Label>
                                    <Col xs sm={9} >
                                        <Form.Control type="password" placeholder="Nueva contraseña" />
                                    </Col>
                                </Form.Group>
                                <Form.Group controlId="Password2" as={Row}>
                                    <Form.Label column sm={3} style={{ color: 'white' }}>Contraseña</Form.Label>
                                    <Col xs sm={9} >
                                        <Form.Control type="password" placeholder="Repetir contraseña" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Col sm={{ span: 10, offset: 3 }}>
                                        <Button variant="contained" color="primary">
                                            Suscribirme
                                         </Button>
                                    </Col>
                                </Form.Group>

                            </Form>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}