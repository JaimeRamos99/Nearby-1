import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Boton from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Form from 'react-bootstrap/Form'
import Toast from 'react-bootstrap/Toast'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from '@material-ui/core/Button'
import api from '../connectionApi'
export default class FormAndImage extends Component {
    state = {
        toast: false,
        mensaje: "",
        titulo: "",
        loading: false
    }
    registro = async () => {
        this.setState({ loading: true })
        let nombre = document.getElementById('nombre').value, correo = document.getElementById('email').value, user = document.getElementById('username').value, pass = document.getElementById('pass').value, pass2 = document.getElementById('pass2').value
        if (pass !== pass2) {
            this.setState({ toast: true, mensaje: "Las contraseñas no coinciden." })
        } else {
            if (nombre.length === 0 || correo.length === 0 || user.length === 0) {
                this.setState({ toast: true, titulo: "¡ERROR!", mensaje: "Debe llenar todo los campos." })
            } else {
                if (pass.length < 6) {
                    this.setState({ toast: true, titulo: "¡ERROR!", mensaje: "La contraseña debe tener más de seis carácteres." })
                } else {
                    let c = await api.register(nombre, correo, user, pass)
                    if (c === "Done!") {
                        this.setState({ toast: true, titulo: "¡Bienvenido a Nearby!", mensaje: "Registro exitoso, confirma tu cuenta por medio del link que te enviamos a tu correo." })
                    } else {
                        if (c !== undefined) {
                            if (c.code === "auth/invalid-email") {
                                this.setState({ toast: true, titulo: "¡ERROR!", mensaje: "El correo proporcionado no es válido." })
                            } else {
                                if (c.code === "auth/email-already-in-use")
                                    this.setState({ toast: true, titulo: "¡ERROR!", mensaje: "El correo proporcionado ya está registrado en la plataforma." })
                            }
                        }
                    }
                }
            }
        }
        this.setState({ loading: false })
    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#22264b', paddingTop: 60, paddingBottom: 80 }}>
                <Container >
                    <Row style={{ display: 'flex', justifyContent: 'center', paddingBottom: 30 }}>
                        <h2 style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: 'white' }}>¡Regístrate!</h2>
                    </Row>
                    <Row >
                        <Col md={9}>
                            <Form style={{ paddingLeft: 380 }}>
                                {(this.state.toast) ?
                                    <Toast style={{ height: 100 }} onClose={() => this.setState({ toast: false })} delay={20000} autohide animation>
                                        <Toast.Header>
                                            <strong className="mr-auto">{this.state.titulo}</strong>
                                        </Toast.Header>
                                        <Toast.Body>{this.state.mensaje}</Toast.Body>
                                    </Toast> : null
                                }
                                <Form.Group as={Row} controlId="name">
                                    <Col xs sm={9} >
                                        <input type="text" className="form-control" id="nombre" placeholder="Nombre" required />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                    <Col sm={9}>
                                        <input type="text" className="form-control" id="email" placeholder="Email" required />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="usercontrol">
                                    <Col sm={9}>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                            </div>
                                            <input type="text" className="form-control" id="username" placeholder="Usuario" aria-describedby="inputGroupPrepend2" required />
                                        </div>
                                    </Col>
                                </Form.Group>


                                <Form.Group controlId="Password1" as={Row}>
                                    <Col xs sm={9} >
                                        <input type="password" className="form-control" id="pass" placeholder="Nueva contraseña" />
                                    </Col>
                                </Form.Group>

                                <Form.Group controlId="Password2" as={Row}>
                                    <Col xs sm={9} >
                                        <input type="password" className="form-control" id="pass2" placeholder="Repetir contraseña" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Col sm={{ span: 14, offset: 3 }}>
                                        {(this.state.loading) ?
                                            <ButtonToolbar> <Boton variant="primary" disabled>
                                                <Spinner
                                                    as="span"
                                                    animation="grow"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                                Cargando...
                                                    </Boton></ButtonToolbar> : <Button variant="contained" color="primary" onClick={this.registro}>
                                                Suscribirme
                                             </Button>}
                                    </Col>
                                </Form.Group>

                            </Form>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}