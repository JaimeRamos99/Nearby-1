import React from 'react';
import RestaurantIcon from '@material-ui/icons/Restaurant'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
export default function InstructionsAndFood() {
    return (
        <React.Fragment>


            <div style={{ paddingLeft: 50, paddingBottom: 70 }} >
                <Container>
                    <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 50, paddingTop: 50 }}><h1>Comida para todos los gustos</h1> </Row>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image style={{ height: 300, width: 400 }} src="https://images4.alphacoders.com/895/thumb-1920-895296.jpg" rounded />
                        </Col>
                        <Col xs={8} md={3}>
                            <Image style={{ height: 300, width: 285 }} src="https://s2.best-wallpaper.net/wallpaper/1920x1200/1809/Fast-food-hamburger_1920x1200.jpg" rounded />
                        </Col>
                        <Col xs={8} md={2}>
                            <Image style={{ height: 300, width: 395 }} src="https://luznoticiasrm.blob.core.windows.net.optimalcdn.com/images/2018/12/31/brochetadecamarones-focus-0.15-min0.27-1140-700.jpg" rounded />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image style={{ height: 300, width: 400 }} src="http://yesofcorsa.com/wp-content/uploads/2017/06/4K-Bread-Wallpaper-Full-HD.jpg" rounded />
                        </Col>
                        <Col xs={8} md={4}>
                            <Image style={{ height: 300, width: 380 }} src="http://www.gsfdcy.com/data/img/33/1496253-food-wallpaper.jpg" rounded />
                        </Col>
                        <Col xs={8} md={1}>
                            <Image style={{ height: 300, width: 300 }} src="https://images.wallpaperscraft.com/image/lasagna_cheese_tomatoes_appetizing_112976_1920x1080.jpg" rounded />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ backgroundColor: '#FFF7F2', paddingTop: 50, paddingBottom: 200 }}>
                <Container>
                    <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 40 }}>
                        <h1>Funciona así</h1>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <div style={{ paddingLeft: 70 }}><RestaurantIcon style={{ fontSize: 90 }} />
                                </div>
                                <div style={{ width: 300 }}>
                                    <em><strong>1.</strong> Escoge el restaurante al cual vas a ir y dale click al botón "¡VOY A IR!"</em>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <div style={{ paddingLeft: 150 }}><DoneOutlineIcon style={{ fontSize: 90 }} />
                                </div>
                                <div style={{ paddingLeft: 100, width: 300 }}>
                                    <em><strong>2.</strong> Asiste al restaurante y dile a tu mesero que vienes por Nearby.</em>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <div style={{ paddingLeft: 200 }}><ThumbUpIcon style={{ fontSize: 90 }} />
                                </div>
                                <div style={{ paddingLeft: 190, width: 300 }}>
                                    <em><strong>3.</strong> Disfruta tu comida.</em>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}