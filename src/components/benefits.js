import React from "react";
import store from "../assets/join.png";
import car from "../assets/pickup-car.png";
import map from "../assets/map.png";
export default function Benefits() {
  return (
    <div
      style={{
        paddingBottom: 100,
        paddingTop: 100,

        width: "100%",
        backgroundColor: "#D1F5FF"
      }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-around",
          margin: "0 auto",
          flexWrap: "wrap"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1em",
            backgroundColor: "white",

            width: 290,
            paddingBottom: "1em",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            src={store}
            style={{ width: "35%", margin: "2em 0" }}
            alt=""
          ></img>

          <h4
            style={{
              textAlign: "center",
              fontFamily: "Roboto",
              fontWeight: "bold",
              marginBottom: "0.5em"
            }}
          >
            Join
          </h4>

          <p
            style={{
              textAlign: "center",
              fontFamily: "Quicksand",
              fontSize: "1em",
              color: "#8C8A88",
              width: "80%"
            }}
          >
            When you’re approved, we’ll send you a Zipcard in the mail.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1em",
            backgroundColor: "white",

            width: 290,
            paddingBottom: "1em",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img src={car} style={{ width: "35%", margin: "2em 0" }} alt=""></img>

          <h4
            style={{
              textAlign: "center",
              fontFamily: "Roboto",
              fontWeight: "bold",
              marginBottom: "0.5em"
            }}
          >
            Drive
          </h4>

          <p
            style={{
              textAlign: "center",
              fontFamily: "Quicksand",
              fontSize: "1em",
              color: "#8C8A88",
              width: "80%"
            }}
          >
            To unlock, tap your Zipcard to the card reader on the windshield.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1em",
            backgroundColor: "white",

            width: 290,
            paddingBottom: "1em",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img src={map} style={{ width: "35%", margin: "2em 0" }} alt=""></img>

          <h4
            style={{
              textAlign: "center",
              fontFamily: "Roboto",
              fontWeight: "bold",
              marginBottom: "0.5em"
            }}
          >
            Return
          </h4>

          <p
            style={{
              textAlign: "center",
              fontFamily: "Quicksand",
              fontSize: "1em",
              color: "#8C8A88",
              width: "80%"
            }}
          >
            When you're done, return the car to the same location you picked it
            up from.
          </p>
        </div>
      </div>
    </div>
  );
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
