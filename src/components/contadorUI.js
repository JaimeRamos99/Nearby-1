import React from 'react';
import CountDown from './countdown'
export default function ContadorUI() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f5fcfd', paddingBottom: 80, paddingTop: 50 }}>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 20 }}>
                    <h6 style={{ width: 600, fontFamily: 'Roboto', fontWeight: 'bold', textAlign: 'center' }}>Desde el 15 de diciembre los bogotanos en la zona Centro Internacional podrán disfrutar de Nearby.</h6>

                </div>
                <CountDown date={new Date("December 15, 2020 03:24:00")}></CountDown>
            </div>

        </div>
    )
}