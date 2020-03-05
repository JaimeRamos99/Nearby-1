import React from 'react';
import '../styles/firstView.css'
//https://storage.googleapis.com/primersegmentoholu/undraw_fast_car_p4cu.svg
export default class Register extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div style={{ display: 'flex', width: '100vw' }} >
                    <div style={{ display: 'flex', justifyContent: 'center', width: 500, height: '100vh', backgroundImage: 'url(https://storage.googleapis.com/primersegmentoholu/undraw_fast_car_p4cu.svg)', backgroundRepeat: 'no-repeat', backgroundSize: '55vh', backgroundPosition: 'center' }}>
                        <div style={{ paddingTop: 100 }}>
                            <h1>Nearby</h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}