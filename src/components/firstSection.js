import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import imagenNearby from "../assets/logo.png";
import { Link } from "react-router-dom";
const Scroll = require("react-scroll");
const scroll = Scroll.animateScroll;

export default class FormAndImage extends Component {
  state = {
    toast: false,
    mensaje: "",
    titulo: "",
    loading: false
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            display: "flex",
            width: "100vw",
            backgroundColor: "#D1F5FF"
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100vw",
              height: "100vh",
              backgroundImage:
                "url(https://storage.googleapis.com/primersegmentoholu/undraw_city_driver_jh2h.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center"
            }}
          >
            <Container fluid>
              <Row
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  float: "left"
                }}
              >
                <div>
                  <div
                    style={{ float: "left", paddingLeft: 40, paddingTop: 20 }}
                  >
                    <img
                      src={imagenNearby}
                      style={{ height: 40, width: 40 }}
                      alt=""
                    />
                  </div>
                  <p
                    style={{
                      float: "right",
                      paddingLeft: 7,
                      fontSize: "150%",
                      paddingTop: 20
                    }}
                  >
                    Nearby
                  </p>
                </div>
              </Row>

              <div
                style={{
                  paddingTop: 100,
                  paddingBottom: 10
                }}
              >
                <Container>
                  <h3
                    style={{
                      width: "100%",
                      textAlign: "center",
                      fontFamily: "Roboto",
                      fontWeight: "bold"
                    }}
                  >
                    Access to cars near you, 24/7.
                  </h3>
                </Container>
              </div>

              <Row style={{ display: "flex", justifyContent: "center" }}>
                <div style={{}}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      scroll.scrollToBottom();
                    }}
                  >
                    Register
                  </Button>
                </div>
                <span style={{ width: "20px" }}></span>
                <Link to="/login/">
                  <Button variant="contained" color="primary">
                    Login
                  </Button>
                </Link>
              </Row>
            </Container>
            <div></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
