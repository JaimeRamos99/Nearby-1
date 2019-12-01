import React from 'react';
export default class Bienvenido extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: '#22264b' }}>
                <div style={{ display: 'flex', paddingTop: 100, justifyContent: 'center', height: '100vh', width: '100vw', backgroundImage: 'url(https://storage.googleapis.com/primersegmentoholu/HomePRO.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
                    <h2>¡Ya eres parte de Nearby!</h2>
                </div>
            </div>

        )
    }
}