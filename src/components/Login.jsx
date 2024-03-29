/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Icon } from "@iconify/react";
import sharpPerson from "@iconify/icons-ic/sharp-person";
import Swal from "sweetalert2";
import axios from "axios";
import "./Login.css";
import "./Inicio.jsx";

export default class Login extends Component {
  constructor(props) {
    super(props);

    // Tu novio te ama mucho...
    // ATT: Santiago con mucho amor ;)
    // Eres la mujer mas hermosa del planeta tierra
    // La niña de mi corazon y de mis ojos
    // Mi tesoro mas precioso

    this.state = { usuario: "", contra: "", ingreso: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = () => {
    axios
      .get(
        `https://combita.company/php/login.php?usuario=${this.state.usuario}&contrasena=${this.state.contra}`
      )
      .then((res) => {
        if (res.data.estado) {
          this.props.cambioTrue();
          this.setState({ ingreso: true });
        } else {
          Swal.fire("Error", "Su usuario no existe", "error");
          this.setState({ usuario: "", contra: "" });
        }
      })
      .catch((err) => console.error(err));
  };

  render() {
    if (this.state.ingreso) return <Redirect to="/inicio" />;
    return (
      <div
        style={{
          paddingTop: 20,
          paddingLeft: 35,
          paddingRight: 35,
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            borderRadius: 15,
            width: "35%",
            backgroundColor: "#004b87",
          }}
        >
          <div className="container center">
            <div>
              <Icon
                icon={sharpPerson}
                color="#ffffff"
                width="150"
                height="150"
              />
            </div>
            <div>
              <input
                id="miid"
                type="text"
                name="usuario"
                placeholder="Usuario"
                value={this.state.usuario}
                onChange={this.handleChange}
                style={{
                  background: "rgb( 255, 255, 255, 0.5)",
                  borderRadius: 15,
                  color: "#004b87",
                }}
              />
            </div>
            <div>
              <input
                id="miid"
                type="password"
                name="contra"
                placeholder="Contraseña"
                value={this.state.contra}
                onChange={this.handleChange}
                style={{
                  background: "rgb( 255, 255, 255, 0.5)",
                  borderRadius: 15,
                  color: "#004b87",
                }}
              />
            </div>
            <div style={{ flexBasis: "100%", width: "auto" }}>
              <a
                className="waves-effect waves-light btn"
                style={{
                  paddingBottom: 46,
                  paddingTop: 12,
                  borderRadius: 15,
                  backgroundColor: "#FFFFFF",
                  color: "#004b87",
                  fontSize: 40,
                }}
                onClick={this.login}
              >
                <b>INGRESAR</b>
              </a>
            </div>
            <div style={{ paddingTop: 15, paddingBottom: 12 }}>
              <label>
                <input type="checkbox" className="filled-in" />
                <span style={{ color: "white" }}>Recuerdame</span>
              </label>
            </div>
          </div>
        </div>
        <div
          className="raya"
          style={{
            paddingTop: 20,
          }}
        >
          <hr
            style={{
              width: "55%",
              height: 1,
              backgroundColor: "#004b87",
              borderColor: "#004b87",
            }}
          />
        </div>
      </div>
    );
  }
}
