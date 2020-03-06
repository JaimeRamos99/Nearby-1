import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../styles/firstView.css";
import { Password } from "primereact/password";
import Button from "react-bootstrap/Button";
import Left from "../components/firstViewLeft";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../connectionApi";
import authHandler from "../authandler";
const letters = /^[A-Za-z]+$/;
class Login extends React.Component {
  state = {
    user: "",
    pass: "",
    toHome: false,
    loading: false
  };
  async componentDidMount() {}
  _handleKeyDown = e => {
    if (e.key === "Enter") {
      this.handlerSignIn();
    }
  };
  notify = mensaje => toast(mensaje);
  handlerSignIn = async () => {
    if (this.state.pass.pass.length > 5 && this.state.user.trim().length > 0) {
      //verificación si está registrado y todo bien
      console.log("hola");
      let x = await api.login(
        this.state.user.trim().toLowerCase(),
        this.state.pass.pass
      );
      if (x) {
        console.log(x);
        if (x.error) {
          if (x.body === "unathorized1") {
            this.setState({ loading: false });
            this.notify("¡Usuario o contraseña incorrectos!");
          } else {
            this.setState({ loading: false });
            this.notify(
              "¡Debes terminar el proceso de registro, con el link que te enviamos a tu correo!"
            );
          }
        } else {
          //si autorizaron
          authHandler.sign(this.state.user);

          this.setState({ toHome: true, loading: false });
        }
      } else {
        this.notify("¡Algo salió mal, intenta de nuevo en unos minutos!");
        this.setState({ loading: false });
      }
    } else {
      if (this.state.pass.pass) {
        if (this.state.pass.pass.length <= 5) {
          this.setState({ loading: false });
          this.notify("¡La contraseña tiene por los menos 6 caracteres!");
        } else {
          this.setState({ loading: false });
          this.notify("¡Usuario o contraseña inválidos!");
        }
      } else {
        this.setState({ loading: false });
        this.notify("¡No dejes ningún campo vacío!");
      }
    }
  };
  onChangeUser = value => {
    this.setState({ user: value });
  };
  onChangePass = value => {
    this.setState({ pass: value });
  };
  render() {
    if (this.state.toHome) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="general">
        <ToastContainer />
        <Container fluid className="generalContainer">
          <Row className="h-100">
            <Col className="firstColumn" xs={12} sm={12} md={4} lg={4} xl={4}>
              <Left></Left>
            </Col>
            <Col className="secondColumn" xs={12} sm={12} md={8} lg={8} xl={8}>
              <div className="containerForm">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingBottom: 10
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={e => {
                      this.onChangeUser(e.target.value);
                    }}
                  />
                </div>
                <div style={{ paddingBottom: 10 }}>
                  <Password
                    value={this.state.value}
                    className="form-control"
                    placeholder="Nearby password"
                    onChange={e => this.onChangePass({ pass: e.target.value })}
                    onKeyDown={this._handleKeyDown}
                  />
                </div>
                <div className="containerBoton">
                  {this.state.loading ? (
                    <Button
                      variant="primary"
                      className="botonEstilo"
                      onClick={() => this.handlerSignIn()}
                    >
                      Verifying data...
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      className="botonEstilo"
                      onClick={() => this.handlerSignIn()}
                    >
                      Sign in
                    </Button>
                  )}
                </div>
                <div className="containerFinal">
                  <div className="containerBoton">
                    <Link to="/">
                      <div>
                        <Button className="botonEstilo">Sign up</Button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Login;
