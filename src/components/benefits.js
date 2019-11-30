import React from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood'
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'
import store from '../assets/store.png'
import star from '../assets/starpro.png'
import clock from '../assets/clock.png'
export default function Benefits() {
    return (
        <div style={{ paddingBottom: 100, paddingTop: 100, display: 'flex', width: '100vw', backgroundColor: '#22264b' }}>



            <div style={{ paddingLeft: 260 }}>
                <div style={{ display: 'flex', marginleft: 40, backgroundColor: 'white', height: 250, width: 250, borderRadius: 10, justifyContent: 'center' }}>
                    <div>
                        <div style={{ paddingLeft: 20 }}>
                            <img src={store} style={{ height: 80, width: 100 }} alt=""></img>

                        </div>
                        <h6 style={{ width: 150, textAlign: "center", fontFamily: 'Roboto', fontWeight: 'bold' }}>Descubre nuevos restaurantes</h6>
                    </div>
                </div>
            </div>



            <div style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 50 }}>
                <div style={{ display: 'flex', backgroundColor: 'white', justifyContent: 'center', height: 250, width: 250, borderRadius: 10, paddingTop: 10 }}>
                    <div style={{}}>

                        <div style={{ paddingLeft: 15, paddingBottom: 10 }}>
                            <img src={clock} style={{ height: 60, width: 60 }} alt=""></img>
                        </div>
                        <h6 style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>Ahorra tiempo</h6>
                    </div>
                </div>
            </div>



            <div>
                <div style={{ display: 'flex', backgroundColor: 'white', height: 250, width: 250, borderRadius: 10, justifyContent: 'center' }}>
                    <div>
                        <div style={{ paddingLeft: 25, paddingBottom: 10 }}>
                            <img src={star} style={{ height: 60, width: 60 }} alt=""></img>
                        </div>
                        <h6 style={{ paddinTop: 10, fontFamily: 'Roboto', fontWeight: 'bold' }}>Obtén beneficios</h6>
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