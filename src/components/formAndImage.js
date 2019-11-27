
import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from '@material-ui/core/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Toast from 'react-bootstrap/Toast'
import api from '../connectionApi'

export default class FormAndImage extends Component {
    state = {
        toast: false,
        mensaje: "",
        titulo: ""
    }
    registro = async () => {
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
                    console.log(c)
                    if (c === "Done!") {
                        this.setState({ toast: true, titulo: "¡Bienvenido a Nearby!", mensaje: "Registro exitoso, confirma tu cuenta por medio del link que te enviamos a tu correo." })
                    } else {
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
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', width: '100vw', backgroundImage: 'url(https://k60.kn3.net/taringa/2/5/8/1/1/6/76/_quin/01B.jpg)' }}>
                <div>
                    <Container>
                        <Row >
                            <Col md={14}>
                                <Form>
                                    {(this.state.toast) ?
                                        <Toast style={{ height: 100 }} onClose={() => this.setState({ toast: false })} delay={20000} autohide animation>
                                            <Toast.Header>
                                                <strong className="mr-auto">{this.state.titulo}</strong>
                                            </Toast.Header>
                                            <Toast.Body>{this.state.mensaje}</Toast.Body>
                                        </Toast> : null
                                    }
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label column sm={3} style={{ color: 'white' }}>
                                            Nombre
                                        </Form.Label>
                                        <Col xs sm={9} >
                                            <input type="text" className="form-control" id="nombre" placeholder="Nombre" required />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={3} style={{ color: 'white' }}>
                                            Email
                                        </Form.Label>
                                        <Col sm={9}>
                                            <input type="text" className="form-control" id="email" placeholder="Email" required />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="usercontrol">
                                        <Form.Label column sm={3} style={{ color: 'white' }}>
                                            Usuario
                                        </Form.Label>
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
                                        <Form.Label column sm={3} style={{ color: 'white' }}>Contraseña</Form.Label>
                                        <Col xs sm={9} >
                                            <input type="password" className="form-control" id="pass" placeholder="Nueva contraseña" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group controlId="Password2" as={Row}>
                                        <Form.Label column sm={3} style={{ color: 'white' }}>Contraseña</Form.Label>
                                        <Col xs sm={9} >
                                            <input type="password" className="form-control" id="pass2" placeholder="Repetir contraseña" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Col sm={{ span: 10, offset: 3 }}>
                                            <Button variant="contained" color="primary" onClick={this.registro}>
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
}