import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import imagenNearby from '../assets/nearby.png'
import CountDown from './countdown'
export default function Navbar() {
    return (
        <AppBar position="static" style={{ backgroundColor: '#F77A04' }}>
            <Toolbar>
                <img src={imagenNearby} style={{ height: 50, width: 180 }} alt="" />
                <div style={{ paddingLeft: 800 }}>
                    <h6>Faltan:</h6>
                    <CountDown date={new Date("December 15, 2020 03:24:00")}></CountDown>
                </div>
            </Toolbar>
        </AppBar>
    )
}