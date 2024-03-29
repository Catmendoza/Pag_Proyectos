/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Login from "./components/Login";
import Inicio from "./components/Inicio";
import Nuevo from "./components/Nuevo";
import Mostrar from "./components/Mostrar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Logo from "./assets/image/logo.png";
import Titulo from "./assets/image/unnamed.png";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ingreso: false };
  }

  cambioTrue = () => this.setState({ ingreso: true });

  cambioFalse = () => this.setState({ ingreso: false });

  render() {
    document.body.style = "background: #a0dded";
    return (
      <div>
        <div style={{ paddingTop: 10, paddingLeft: 35, paddingRight: 35 }}>
          <div
            style={{
              paddingBottom: 1,
              paddingTop: 1,
              borderRadius: 15,
              paddingLeft: 15,
              backgroundColor: "#004b87",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-4%",
                left: "32%",
              }}
            >
              <img
                className="responsive-img"
                src={Titulo}
                alt="Titulo de la plataforma"
                width="500"
              />
            </div>

            <img
              className="responsive-img"
              src={Logo}
              alt="Logo de la universidad Santiago de Cali"
              width="110"
            />

            {this.state.ingreso && (
              <div
                style={{
                  position: "absolute",
                  top: "6%",
                  right: "5%",
                }}
              >
                <i className="material-icons medium">
                  <a href="#" className="white-text" onClick={this.cambioFalse}>
                    exit_to_app
                  </a>
                </i>
              </div>
            )}
          </div>
        </div>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Login
                cambioTrue={this.cambioTrue}
                cambioFalse={this.cambioFalse}
              />
            </Route>
            {this.state.ingreso && (
              <>
                <Route path="/inicio" exact component={Inicio} />
                <Route path="/nuevo" exact component={Nuevo} />
                <Route path="/mostrar" exact component={Mostrar} />
              </>
            )}
            <Route>
              <Login
                cambioTrue={this.cambioTrue}
                cambioFalse={this.cambioFalse}
              />
            </Route>
          </Switch>
          {!this.state.ingreso && <Redirect to="/" />}
        </Router>
      </div>
    );
  }
}
