import React, { Component } from "react";
import Login from "./components/Login";
import Inicio from "./components/Inicio";
import Nuevo from "./components/Nuevo";
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

    this.state = { ingreso: localStorage.getItem("admin") !== "" };
  }

  cambioTrue = () => this.setState({ ingreso: true });
  cambioFalse = () => {
    this.setState({ ingreso: false });

    localStorage.setItem("admin", "");
  };

  render() {
    return (
      <div
        className="blue lighten-4"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#1b7fcf",
        }}
      >
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
              <img src={Titulo} alt="Titulo de la plataforma" width="500" />
            </div>

            <img
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
                  <a className="white-text" onClick={this.cambioFalse}>
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
              <Route path="/inicio" exact component={Inicio} />
            )}
            <Route>ERROR 404</Route>
          </Switch>
          {!this.state.ingreso && <Redirect to="/" />}
        </Router>
      </div>
    );
  }
}
