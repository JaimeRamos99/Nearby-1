import React from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood'
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'
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
                <div style={{ paddingLeft: 70 }}><DoneOutlineIcon  style={{ fontSize: 90 }} />
                    <h5 style={{ paddingTop: 20, paddingBottom: 30 }}>Ahorra tiempo</h5>
                </div>
                <div style={{ width: 300 }}>
                    <em >¡Te devolvemos tu tiempo! ya no tienes que esperar para comer, tú solo elige que quieres comer.</em>
                </div>
            </div>

        </div>
    )
}