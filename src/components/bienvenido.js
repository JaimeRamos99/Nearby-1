import React from 'react';
import CountDown from './countdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { fontSize } from '@material-ui/system';
export default class Bienvenido extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: '#22264b' }}>
                <div style={{ display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', backgroundImage: 'url(https://storage.googleapis.com/primersegmentoholu/HomePRO.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
                    <Container>
                        <Row>
                            <div style={{ display: 'flex', paddingTop: 30, paddingBottom: 20, justifyContent: 'center', width: '100vw', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
                                <strong style={{color:'#22264b', fontSize:40}}>¡Ya eres parte de Nearby!</strong>
                            </div>
                        </Row>
                        <Row style={{ display: 'flex', justifyContent: 'center', paddingBottom: 30 }}>
                            <div>
                                <h3 style={{paddingTop:8,paddingRight:15}}>En:   </h3>
                            </div>
                            <CountDown date={"December 15, 2020 03:24:00"}></CountDown>

                        </Row>
                        <Row style={{ display: 'flex', justifyContent: 'center' }}>
                            <h4>Podrás disfrutar de Nearby en la zona Centro</h4>
                        </Row>
                        <Row style={{ display: 'flex', justifyContent: 'center' }}>
                            <h4>Internacional de Bogotá</h4>
                        </Row>
                    </Container>
                </div>
            </div>

        )
    }
}