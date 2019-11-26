import React from 'react';
import realTime from '../assets/realtime.png'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty'
export default function Benefits() {
    return (
        <div style={{ paddingBottom: 200, paddingTop: 50, justifyContent: 'space-between', display: 'flex', width: '100vw', backgroundColor: '#FFF7F2' }}>

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
                <div style={{ paddingLeft: 80 }}> <img src={realTime} style={{ height: 90, width: 90 }} alt="" /></div>
                <h5 style={{ paddingRight: 70, paddingTop: 20, paddingBottom: 30 }}>Disponibilidad en tiempo real</h5>
                <div style={{ width: 300 }}>
                    <em >Desde el 15 de Diciembre podrás saber la disponiblidad de mesas en todos los restaurantes de la ciudad.</em>
                </div>
            </div>

        </div>
    )
}