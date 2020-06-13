/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Icon, Table, Button } from "react-materialize";
import M from "materialize-css";
import axios from "axios";
import "./Inicio.css";
import "./Nuevo.jsx";
import "./Actualizar.jsx";

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
      rediactualizar: false,
      mostrarTodo: false,
      mostrarUno: [],
      mostrar: false,
      ModalProyecto: "",
      proyectoSeleccionado: "",
    };
  }

  cargar = () => {
    fetch("http://localhost/OTRI/getProyecto.php")
      .then((res) => res.json())
      .then((data) => this.setState({ proyectos: data, proyectosCopia: data }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.cargar();
    M.Modal.init(this.Modal, {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: true,
      startingTop: "4%",
      endingTop: "10%",
    });
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

  cambioModal = async (proyecto) => {
    await this.setState({
      ModalProyecto: proyecto,
    });
  };

  borrarDato = (id_pro) => {
    axios
      .get(`http://localhost/OTRI/deleteProyecto.php?id=${id_pro}`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data.data);
        this.cargar();
      })
      .catch((err) => console.log(err));
  };

  actualizar = async (pro) =>
    await this.setState({ proyectoSeleccionado: pro, rediactualizar: true });

  render() {
    if (this.state.rediactualizar)
      return (
        <Redirect
          to={{
            pathname: "/actualizar",
            state: { proyecto: this.state.proyectoSeleccionado },
          }}
        />
      );
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
                  placeholder=" Buscar"
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
                    textAlign: "left",

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
                          <Button
                            small
                            className="red darken -3"
                            onClick={() => this.borrarDato(proyecto.id_pro)}
                          >
                            <Icon>delete</Icon>
                          </Button>
                          <Button
                            size="small"
                            className="modal-trigger yellow darken -3"
                            data-target="modal1"
                            onClick={this.cambioModal(proyecto)}
                          >
                            <Icon>remove_red_eye</Icon>
                          </Button>
                          <Button
                            small
                            style={{ backgroundColor: "#1B7FCF" }}
                            onClick={() => this.actualizar(proyecto)}
                          >
                            <Icon>edit</Icon>
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
              <div className="botonVertodo">
                <Button
                  small
                  style={{ backgroundColor: "#1B7FCF" }}
                  onClick={this.mostrarTodo}
                >
                  Mostrar todo
                  <Icon left>remove_red_eye</Icon>
                </Button>
              </div>

              <div className="texto_navbar">
                Resultado: {this.state.proyectos.length} de{" "}
                {this.state.proyectosCopia.length}
              </div>
            </div>
          </div>
          <div
            ref={(Modal) => (this.Modal = Modal)}
            id="modal1"
            className="modal"
          >
            <div className="modal-content">
              {console.log(this.state.ModalProyecto)}
              <Table id="customers">
                <thead>
                  <tr>
                    <th data-field="ani_pro">Año</th>
                    <th data-field="tip_pro">Tip. Convocatoria</th>
                    <th data-field="con_pro">Nom. Convocatoria</th>
                    <th data-field="fac_pro">Facultad</th>
                    <th data-field="tit_pro">Título</th>
                    <th data-field="cod_pro">Codigo</th>
                    <th data-field="est_pro">Estado</th>
                    <th data-field="inv_prin">Inv. Principal</th>
                    <th data-field="co_inv_pro">Co-investigadores</th>
                    <th data-field="inv_lid_pro">Inv. Lider</th>
                    <th data-field="gru_pro">Grupo investigación</th>
                    <th data-field="ent_eje_pro">Ent. ejecutora</th>
                    <th data-field="otr_ent_par">Otra entidad participante</th>
                    <th data-field="val_efe_tot">Val. Efectivo total</th>
                    <th data-field="val_esp_tot">Val. Especie total</th>
                    <th data-field="val_tot_pro">Val. Total proyecto</th>
                    <th data-field="val_efe_fin">Val. Efectivo financiado</th>
                    <th data-field="val_efe_usc">Val. Efectivo USC</th>
                    <th data-field="val_esp_otr_ent">
                      Val. Especie otra entidad
                    </th>
                    <th data-field="con_esp_usc">Contrapartida especie USC</th>
                    <th data-field="fec_ini">Fec. Inicio</th>
                    <th data-field="fec_fin">Fec. Finalización</th>
                    <th data-field="pro_pro">Prórroga</th>
                    <th data-field="obs_pro">Observaciones</th>
                    <th data-field="val_eje_usc">Val. Ejecutado por la USC</th>
                    <th data-field="arc_fis_pro">Archivo físico</th>
                    <th data-field="botones"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={this.state.ModalProyecto.id_pro}>
                    <td>{this.state.ModalProyecto.ani_pro}</td>
                    <td>{this.state.ModalProyecto.tip_pro}</td>
                    <td>{this.state.ModalProyecto.con_pro}</td>
                    <td>{this.state.ModalProyecto.fac_pro}</td>
                    <td>{this.state.ModalProyecto.tit_pro}</td>
                    <td>{this.state.ModalProyecto.cod_pro}</td>
                    <td>{this.state.ModalProyecto.est_pro}</td>
                    <td>{this.state.ModalProyecto.inv_pro}</td>
                    <td>{this.state.ModalProyecto.co_inv_pro}</td>
                    <td>{this.state.ModalProyecto.inv_lid_pro}</td>
                    <td>{this.state.ModalProyecto.gru_pro}</td>
                    <td>{this.state.ModalProyecto.ent_eje_pro}</td>
                    <td>{this.state.ModalProyecto.otr_ent_par}</td>
                    <td>{this.state.ModalProyecto.val_efe_tot}</td>
                    <td>{this.state.ModalProyecto.val_esp_tot}</td>
                    <td>{this.state.ModalProyecto.val_tot_pro}</td>
                    <td>{this.state.ModalProyecto.val_efe_fin}</td>
                    <td>{this.state.ModalProyecto.val_efe_usc}</td>
                    <td>{this.state.ModalProyecto.val_esp_otr_ent}</td>
                    <td>{this.state.ModalProyecto.con_esp_usc}</td>
                    <td>{this.state.ModalProyecto.fec_ini}</td>
                    <td>{this.state.ModalProyecto.fec_fin}</td>
                    <td>{this.state.ModalProyecto.pro_pro}</td>
                    <td>{this.state.ModalProyecto.obs_pro}</td>
                    <td>{this.state.ModalProyecto.val_eje_usc}</td>
                    <td>{this.state.ModalProyecto.arc_fis_pro}</td>
                    <td>
                      <Button small className="red darken -3">
                        <Icon>delete</Icon>
                      </Button>
                      <Button small style={{ backgroundColor: "#1B7FCF" }}>
                        <Icon>edit</Icon>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="modal-footer">
              <Button
                className="modal-close left"
                style={{ backgroundColor: "#1B7FCF" }}
              >
                Cerrar
              </Button>
            </div>
          </div>
        </div>
      );
    else {
      return <Redirect to="/" />;
    }
  }
}
