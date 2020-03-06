import React from "react";
//import CountDown from './countdown'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//import { fontSize } from '@material-ui/system';
export default class Bienvenido extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#7EA3E1" }}>
        <div
          style={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            backgroundImage:
              "url(https://storage.googleapis.com/primersegmentoholu/undraw_navigator_a479.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100vh",
            backgroundPosition: "center"
          }}
        >
          <Container>
            <Row>
              <div
                style={{
                  display: "flex",
                  paddingTop: 30,
                  paddingBottom: 20,
                  justifyContent: "center",
                  width: "100vw",
                  backgroundRepeat: "no-repeat"
                }}
              >
                <strong
                  style={{ color: "#22264b", fontSize: 40, color: "white" }}
                >
                  ¡Welcome to Nearby!
                </strong>
              </div>
            </Row>
            {/* <Row style={{ display: 'flex', justifyContent: 'center', paddingBottom: 30 }}>
                            <div>
                                <h3 style={{ paddingTop: 6, paddingRight: 15 }}>En:   </h3>
                            </div>
                            <CountDown date={"December 15, 2020 03:24:00"}></CountDown>

        </Row>*/}
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white"
              }}
            >
              <h4>Enjoy Nearby all around the world.</h4>
            </Row>
            {/*<Row style={{ display: 'flex', justifyContent: 'center' }}>
                            <h4>Internacional de Bogotá</h4>
    </Row>*/}
          </Container>
        </div>
      </div>
    );
  }
}
