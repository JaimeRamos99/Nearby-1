import React from 'react';
import store from '../assets/store.png'
import star from '../assets/starpro.png'
import clock from '../assets/clock.png'
export default function Benefits() {
    return (
        <div style={{ paddingBottom: 100, paddingTop: 100, display: 'flex', width: '100vw', backgroundColor: '#f5fcfd' }}>



            <div style={{ paddingLeft: 240 }}>
                <div style={{ display: 'flex', marginleft: 40, backgroundColor: 'white', height: 240, width: 290, borderRadius: 2, justifyContent: 'center' }}>
                    <div>
                        <div style={{ paddingLeft: 90, paddingTop: 10, paddingBottom:10 }}>
                            <img src={store} style={{ height: 80, width: 100 }} alt=""></img>
                        </div>
                        <div style={{ paddingBottom: 10 }}>
                            <h6 style={{ display: 'flex', justifyContent: 'center', width: 280, textAlign: "center", fontFamily: 'Roboto', fontWeight: 'bold' }}>Descubre restaurantes</h6>
                        </div>
                        <div style={{ width: 280, paddingLeft: 5 }}>
                            <p style={{ textAlign: "center", fontFamily: 'Quicksand', color: '#8C8A88', fontSize:14 }}>Explora la gastronomía local como nunca antes, atrévete a encontrar nuevos restaurantes y deleitar tu paladar con sabores exquísitos.</p>
                        </div>
                    </div>
                </div>
            </div>



            <div style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 70 }}>
                <div style={{ display: 'flex', backgroundColor: 'white', justifyContent: 'center', height: 240, width: 290, borderRadius: 2, paddingTop: 10 }}>
                    <div style={{}}>

                        <div style={{ paddingLeft: 105, paddingBottom: 20, paddingTop: 10 }}>
                            <img src={clock} style={{ height: 60, width: 60 }} alt=""></img>
                        </div>
                        <div style={{ paddingBottom: 10 }}>
                            <h6 style={{ display: 'flex',paddingLeft:20, justifyContent: 'center', width: 250, textAlign: "center", fontFamily: 'Roboto', fontWeight: 'bold' }}>Ahorra tiempo</h6>
                        </div>
                        <div style={{ width: 270, paddingLeft: 5 }}>
                            <p style={{ textAlign: "center", fontFamily: 'Quicksand', color: '#8C8A88', fontSize:14 }}>Conoce las mesas disponibles de un restaurante o prepara tu pedido con tu anticipación y elimina las largas esperas en fila.</p>

                        </div>
                    </div>
                </div>
            </div>



            <div>
                <div style={{ display: 'flex', backgroundColor: 'white', height: 240, width: 290, borderRadius: 2, justifyContent: 'center' }}>
                    <div >
                        <div style={{ paddingLeft: 110, paddingBottom: 20, paddingTop: 10 }}>
                            <img src={star} style={{ height: 60, width: 60 }} alt=""></img>
                        </div>
                        <div style={{ paddingBottom: 10 }}>
                            <h6 style={{ display: 'flex', justifyContent: 'center', width: 280, paddinTop: 10, fontFamily: 'Roboto', fontWeight: 'bold' }}>Obtén beneficios</h6>
                        </div>
                        <div style={{ paddingLeft: 10, width: 270 }}>
                            <p style={{ textAlign: "center", fontFamily: 'Quicksand', color: '#8C8A88', fontSize:14 }}>Conoce las mesas disponibles de un restaurante o prepara tu pedido con tu anticipación y elimina las largas esperas en fila.</p>

                        </div>
                    </div>
                </div>
            </div>



        </div >
    )
}

/*
    <div >
                <div style={{ paddingLeft: 150 }}> <FastfoodIcon style={{ fontSize: 90 }} /></div>
                <h5 style={{ paddingLeft: 50, paddingTop: 20, paddingBottom: 30 }}>Descubre nuevos restaurantes</h5>
                <div style={{ width: 300, paddingLeft: 50 }}>
                    <em >Con Nearby podrás explorar la gastronomía de tu ciudad como nunca antes, atrevete a encontrar el restaurante de tus sueños.</em>
                </div>
            </div>

            <div>
                <div style={{ paddingLeft: 70 }}><HourglassEmptyIcon style={{ fontSize: 90 }} />
                    <h5 style={{ paddingTop: 20, paddingBottom: 30 }}>Ahorra tiempo</h5>
                </div>
                <div style={{ width: 300 }}>
                    <em >¡Te devolvemos tu tiempo! ya no tienes que esperar para comer, tú solo elige que quieres comer.</em>
                </div>
            </div>
            <div>
                <div style={{ paddingLeft: 70 }}><DoneOutlineIcon  style={{ fontSize: 90 }} />
                    <h5 style={{ paddingTop: 20, paddingBottom: 30 }}>Ahorra tiempo</h5>
                </div>
                <div style={{ width: 300 }}>
                    <em >¡Te devolvemos tu tiempo! ya no tienes que esperar para comer, tú solo elige que quieres comer.</em>
                </div>
            </div>
*/