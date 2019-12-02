
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import imagenNearby from '../assets/logo.png'
const Scroll = require('react-scroll')
const scroll = Scroll.animateScroll;
export default class FormAndImage extends Component {
    state = {
        toast: false,
        mensaje: "",
        titulo: "",
        loading: false
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ display: 'flex', width: '100vw', backgroundColor: '#22264b' }} >
                    <div style={{ display: 'flex', width: '100vw', height: '100vh', backgroundImage: 'url(https://storage.googleapis.com/primersegmentoholu/HomePRO.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
                        <Container fluid>
                            <Row style={{ fontFamily: 'Roboto', fontWeight: 'bold', float: 'left' }}>

                                <div>
                                    <div style={{ float: 'left', paddingLeft: 40, paddingTop: 20 }}>
                                        <img src={imagenNearby} style={{ height: 40, width: 40 }} alt="" />

                                    </div>
                                    <p style={{ float: 'right', paddingLeft: 7, fontSize: "150%", paddingTop: 20 }}>Nearby</p>
                                </div>
                            </Row>

                            <Row style={{ paddingTop: 100, paddingLeft: 130, paddingBottom: 10 }}>

                                <div style={{ alignItems: "baseline", display: 'flex', justifyContent: "center" }}>
                                   <Container>
                                   <Row>
                                    <h3 style={{ width: '60vw', textAlign: "center", fontFamily: 'Roboto', fontWeight: 'bold' }}>Pronto podrás conocer la disponibilidad</h3>

                                    </Row>
                                    <Row>
                                    <h3 style={{ width: '60vw', textAlign: "center", fontFamily: 'Roboto', fontWeight: 'bold' }}>de los mejores restaurantes cerca de ti.</h3>

                                    </Row>
                                   </Container>
                                    
                                </div>
                            </Row>

                            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" color="primary" onClick={() => { scroll.scrollToBottom(); }}>
                                    Regístrate
                            </Button>
                            </Row>
                        </Container>
                        <div>
                        </div>

                    </div>
                </div>

            </React.Fragment >

        )
    }
}