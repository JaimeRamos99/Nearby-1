import React from 'react';
import store from '../assets/join.png'
import clock from '../assets/pickup-car.png'
import star from '../assets/map.png'
export default function Benefits() {
    return (
        <div style={{ paddingBottom: 100, paddingTop: 100, display: 'flex', width: '100vw', backgroundColor: '#D1F5FF' }}>
            <div style={{ paddingLeft: 240 }}>
                <div style={{ display: 'flex', marginleft: 40, backgroundColor: 'white', height: 240, width: 290, borderRadius: 10, justifyContent: 'center' }}>
                    <div>
                        <div style={{ paddingLeft: 90, paddingTop: 10, paddingBottom:10 }}>
                            <img src={store} style={{ width: "50%" }} alt=""></img>
                        </div>
                        <div style={{ paddingBottom: 10 }}>
                            <h4 style={{ display: 'flex', justifyContent: 'center', width: 280, textAlign: "center", fontFamily: 'Roboto', fontWeight: 'bold' }}>Join</h4>
                        </div>
                        <div style={{ width: 280, paddingLeft: 5 }}>
                            <p style={{ textAlign: "center", fontFamily: 'Quicksand', color: '#8C8A88', fontSize:14 }}>When you’re approved, we’ll send you a Zipcard in the mail.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 70 }}>
                <div style={{ display: 'flex', backgroundColor: 'white', justifyContent: 'center', height: 240, width: 290, borderRadius: 10, paddingTop: 10 }}>
                    <div style={{}}>

                        <div style={{ paddingLeft: 90, paddingTop: 10 }}>
                            <img src={clock} style={{ width:"50%" }} alt=""></img>
                        </div>
                        <div style={{ paddingBottom: 10 }}>
                            <h4 style={{ display: 'flex',paddingLeft:20, justifyContent: 'center', width: 250, textAlign: "center", fontFamily: 'Roboto', fontWeight: 'bold' }}>Drive</h4>
                        </div>
                        <div style={{ width: 270, paddingLeft: 5 }}>
                            <p style={{ textAlign: "center", fontFamily: 'Quicksand', color: '#8C8A88', fontSize:14 }}>Book a round trip car by the hour or day. To unlock, tap your Zipcard to the card reader on the windshield.</p>

                        </div>
                    </div>
                </div>
            </div>



            <div>
                <div style={{ display: 'flex', backgroundColor: 'white', height: 240, width: 290, borderRadius: 10, justifyContent: 'center' }}>
                    <div >
                        <div style={{ paddingLeft: 110, paddingBottom: 20, paddingTop: 10 }}>
                            <img src={star} style={{ height: 60, width: 60 }} alt=""></img>
                        </div>
                        <div style={{ paddingBottom: 10 }}>
                            <h4 style={{ display: 'flex', justifyContent: 'center', width: 280, paddinTop: 10, fontFamily: 'Roboto', fontWeight: 'bold' }}>Return</h4>
                        </div>
                        <div style={{ paddingLeft: 10, width: 270 }}>
                            <p style={{ textAlign: "center", fontFamily: 'Quicksand', color: '#8C8A88', fontSize:14 }}>When you're done, return the car to the same location you picked it up from, then lock up with your Zipcard.</p>

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