/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Icon, Table, Button } from "react-materialize";
import "./Inicio.css";
import "./Nuevo.jsx";

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proyectos: [],
      proyectosCopia: [],
      estado: "",
      impacto: "",
      busqueda: "",
      redireccion: false,
      mostrarTodo: false,
    };
  }

  cargar = () => {
    fetch("https://combita.company/otri/php/getProyecto.php")
      .then((res) => res.json())
      .then((data) => this.setState({ proyectos: data, proyectosCopia: data }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.cargar();
    console.log(this.state.proyectos);
  }

  cambioEstado = (e) => this.setState({ [e.target.name]: e.target.value });

  borradoFiltrado = () => {
    this.setState({ estado: "", impacto: "", busqueda: "" });
    this.setState({
      proyectos: this.state.proyectosCopia,
    });
  };

  buscarTexto = () => {
    if (this.state.busqueda.length >= 4) {
      this.setState({
        proyectos: this.state.proyectosCopia,
      });

      let arr = [];

      for (let i = 0; i < this.state.proyectosCopia.length; i++) {
        if (
          this.state.proyectosCopia[i].tip_pro !== null &&
          this.state.proyectosCopia[i].tip_pro
            .toLocaleUpperCase()
            .search(this.state.busqueda.toLocaleUpperCase()) !== -1
        ) {
          arr.push(this.state.proyectosCopia[i]);
          continue;
        }
        if (
          this.state.proyectosCopia[i].con_pro !== null &&
          this.state.proyectosCopia[i].con_pro
            .toLocaleUpperCase()
            .search(this.state.busqueda.toLocaleUpperCase()) !== -1
        ) {
          arr.push(this.state.proyectosCopia[i]);
          continue;
        }
        if (
          this.state.proyectosCopia[i].fac_pro
            .toLocaleUpperCase()
            .search(this.state.busqueda.toLocaleUpperCase()) !== -1
        ) {
          arr.push(this.state.proyectosCopia[i]);
          continue;
        }
        if (
          this.state.proyectosCopia[i].tit_pro
            .toLocaleUpperCase()
            .search(this.state.busqueda.toLocaleUpperCase()) !== -1
        ) {
          arr.push(this.state.proyectosCopia[i]);
          continue;
        }
        if (
          this.state.proyectosCopia[i].cod_pro !== null &&
          this.state.proyectosCopia[i].cod_pro === this.state.busqueda
        ) {
          arr.push(this.state.proyectosCopia[i]);
          continue;
        }
        if (
          this.state.proyectosCopia[i].inv_pro !== null &&
          this.state.proyectosCopia[i].inv_pro
            .toLocaleUpperCase()
            .search(this.state.busqueda.toLocaleUpperCase()) !== -1
        ) {
          arr.push(this.state.proyectosCopia[i]);
          continue;
        }
        if (
          this.state.proyectosCopia[i].co_inv_pro !== null &&
          this.state.proyectosCopia[i].co_inv_pro
            .toLocaleUpperCase()
            .search(this.state.busqueda.toLocaleUpperCase()) !== -1
        ) {
          arr.push(this.state.proyectosCopia[i]);
          continue;
        }
        if (
          this.state.proyectosCopia[i].inv_lid_pro !== null &&
          this.state.proyectosCopia[i].inv_lid_pro
            .toLocaleUpperCase()
            .search(this.state.busqueda.toLocaleUpperCase()) !== -1
        ) {
          arr.push(this.state.proyectosCopia[i]);
          continue;
        }
        if (
          this.state.proyectosCopia[i].ent_eje_pro !== null &&
          this.state.proyectosCopia[i].ent_eje_pro
            .toLocaleUpperCase()
            .search(this.state.busqueda.toLocaleUpperCase()) !== -1
        ) {
          arr.push(this.state.proyectosCopia[i]);
          continue;
        }
        if (
          this.state.proyectosCopia[i].gru_pro !== null &&
          this.state.proyectosCopia[i].gru_pro
            .toLocaleUpperCase()
            .search(this.state.busqueda.toLocaleUpperCase) !== -1
        ) {
          arr.push(this.state.proyectosCopia[i]);
          continue;
        }
        if (
          this.state.proyectosCopia[i].otr_ent_par !== null &&
          this.state.proyectosCopia[i].otr_ent_par
            .toLocaleUpperCase()
            .search(this.state.busqueda.toLocaleUpperCase()) !== -1
        ) {
          arr.push(this.state.proyectosCopia[i]);
          continue;
        }
      }

      this.setState({ proyectos: arr });
    }
  };

  buscar = () => {
    this.setState({
      proyectos: this.state.proyectosCopia,
    });

    var busqueda = [];

    for (let i = 0; i < this.state.proyectos.length; i++) {
      if (this.state.estado !== "" && this.state.impacto !== "") {
        if (
          this.state.proyectos[i].imp_pro === this.state.impacto &&
          this.state.proyectos[i].est_pro === this.state.estado
        ) {
          busqueda.push(this.state.proyectos[i]);
        }
      } else {
        if (this.state.estado !== "") {
          if (this.state.proyectos[i].est_pro === this.state.estado) {
            busqueda.push(this.state.proyectos[i]);
          }
        }
        if (this.state.impacto !== "") {
          if (this.state.proyectos[i].imp_pro === this.state.impacto) {
            busqueda.push(this.state.proyectos[i]);
          }
        }
      }
    }

    this.setState({ proyectos: busqueda });
  };

  registro = () => this.setState({ redireccion: true });

  mostrarTodo = () => this.setState({ mostrarTodo: true });

  render() {
    if (this.state.mostrarTodo) return <Redirect to="/mostrar" />;
    if (this.state.redireccion) return <Redirect to="/nuevo" />;
    if (localStorage.getItem("admin") !== "")
      return (
        <div
          className="flex-container"
          style={{ paddingTop: 10, paddingLeft: 35, paddingRight: 35 }}
        >
          <div className="filtro">
            <div className="titulo">Filtro</div>
            <div className="fondo-filtro">
              <label>Impacto</label>
              <select
                className="browser-default"
                id="select_1_inicio"
                name="impacto"
                value={this.state.impacto}
                onChange={this.cambioEstado}
              >
                <option value="" disabled selected>
                  -
                </option>
                <option value="EXTERNO">Externo</option>
                <option value="INTERNO">Interno</option>
              </select>
              <label>Estado</label>
              <select
                className="browser-default"
                id="select_2_inicio"
                name="estado"
                value={this.state.estado}
                onChange={this.cambioEstado}
              >
                <option value="" disabled selected>
                  -
                </option>
                <option value="PROPUESTA">Propuesta</option>
                <option value="EJECUCION">Ejecución</option>
                <option value="TERMINADO">Terminado</option>
              </select>
            </div>
            <div style={{ flexBasis: "100%" }}>
              <a
                className="waves-effect waves-light btn"
                style={{
                  marginTop: 5,
                  borderRadius: 5,
                  backgroundColor: "#1B7FCF",
                  color: "white",
                  fontSize: 15,
                  width: "100%",
                  textAlign: "left",
                }}
                onClick={this.buscar}
              >
                Buscar
                <Icon left>search</Icon>
              </a>
              <a
                className="waves-effect waves-light btn"
                style={{
                  marginTop: 5,
                  borderRadius: 5,
                  backgroundColor: "#dd4f31",
                  color: "white",
                  fontSize: 15,
                  width: "100%",
                  textAlign: "left",
                }}
                onClick={this.borradoFiltrado}
              >
                Limpiar
                <Icon left>delete</Icon>
              </a>
            </div>
          </div>
          <div className="tabla">
            <div
              className="navbar"
              style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
            >
              <a
                className="waves-effect waves-light btn"
                style={{
                  paddingBottom: 5,
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderRadius: 5,
                  backgroundColor: "#1B7FCF",
                  color: "white",
                  fontSize: 15,
                  marginTop: 12,
                  marginLeft: 15,
                }}
                onClick={this.registro}
              >
                Agregar Nuevo
                <Icon left>add_circle</Icon>
              </a>
              <div style={{ flexGrow: 8 }}>
                <input
                  placeholder="Buscar"
                  id="busq"
                  type="search"
                  className="validate"
                  minLength="4"
                  name="busqueda"
                  value={this.state.busqueda}
                  onChange={this.cambioEstado}
                  style={{
                    width: "90%",
                    marginLeft: 50,
                    marginTop: 10,
                    height: 40,
                    borderRadius: 5,
                    background: "#ffffff",
                  }}
                ></input>
              </div>
              <div style={{ marginRight: 15 }}>
                <a
                  className="waves-effect waves-light btn"
                  style={{
                    marginTop: 12,
                    borderRadius: 5,
                    backgroundColor: "#1B7FCF",
                    color: "white",
                    fontSize: 15,
                    width: "100%",
                    textAlign: "left",
                  }}
                  onClick={this.buscarTexto}
                >
                  <Icon center>search</Icon>
                </a>
              </div>
            </div>
            <div className="tabla_1 scrollito">
              <Table id="customers">
                <thead>
                  <tr>
                    <th data-field="facultad">Facultad</th>
                    <th data-field="titulo">Título</th>
                    <th data-field="estado">Estado</th>
                    <th data-field="inv_prin">Inv. principal</th>
                    <th data-field="ent_eje">Ent. Ejecutora</th>
                    <th data-field="botones"></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.proyectos.map((proyecto) => {
                    return (
                      <tr key={proyecto.id_pro}>
                        <td>{proyecto.fac_pro}</td>
                        <td>{proyecto.tit_pro}</td>
                        <td>{proyecto.est_pro}</td>
                        <td>{proyecto.inv_pro}</td>
                        <td>{proyecto.ent_eje_pro}</td>
                        <td>
                          <Button small waves="light" className="red darken -3">
                            <Icon>delete</Icon>
                          </Button>
                          <Button
                            small
                            waves="light"
                            style={{ backgroundColor: "#1B7FCF" }}
                          >
                            <Icon>edit</Icon>
                          </Button>
                          <Button
                            small
                            waves="light"
                            className="yellow darken -3"
                          >
                            <Icon>remove_red_eye</Icon>
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
            <div className="navbar_abajo ">
              <div className="pagination">
                <a href="#">&laquo;</a>
                <a href="#" className="active">
                  1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">&raquo;</a>
              </div>
              <div>
                <Button
                  small
                  waves="light"
                  className="yellow darken -3"
                  style={{ float: "right" }}
                  onClick={this.mostrarTodo}
                >
                  <Icon>remove_red_eye</Icon>
                </Button>
              </div>
              <div className="texto_navbar">
                Resultado: {this.state.proyectos.length}
              </div>
            </div>
          </div>
        </div>
      );
    else {
      return <Redirect to="/" />;
    }
  }
}
