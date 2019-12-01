
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
                <div style={{ backgroundColor: '#22264b' }}>
                    <div style={{ height: '100vh', width: '100vw', backgroundImage: 'url(https://storage.googleapis.com/primersegmentoholu/HomePRO.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
                        <Container>
                            <Row style={{ fontFamily: 'Roboto', fontWeight: 'bold', float: 'left' }}>

                                <div>
                                    <div style={{ float: 'left' }}>
                                        <img src={imagenNearby} style={{ height: 60, width: 60 }} alt="" />

                                    </div>
                                    <p style={{ float: 'right', paddingLeft: 10, fontSize: "150%", paddingTop: 10 }}>Nearby</p>
                                </div>
                            </Row>
                            <Row style={{ paddingTop: 100, paddingLeft: 150, paddingBottom: 10 }}>
                                <div style={{ alignItems: "baseline", display: 'flex', justifyContent: "center" }}>
                                    <h2 style={{ width: 600, textAlign: "center", fontFamily: 'Roboto', fontWeight: 'bold' }}>Pronto podrás conocer la disponibilidad de los mejores restaurantes cerca de ti.</h2>
                                </div>

                            </Row>
                            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" color="primary" onClick={()=>{scroll.scrollToBottom();}}>
                                    Regístrate
                            </Button>
                            </Row>
                        </Container>
                        <div>
                        </div>


                    </div>
                </div>

            </React.Fragment>

        )
    }
}