/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Icon, Table, Button, Preloader } from "react-materialize";
import M from "materialize-css";
import axios from "axios";
import Swal from "sweetalert2";
import Chart from "react-google-charts";
import ReactPaginate from "react-paginate";
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
      rediactualizar: false,
      mostrarTodo: false,
      mostrarUno: [],
      mostrar: false,
      ModalProyecto: "",
      proyectoSeleccionado: "",
      offset: 0,
      data: [],
      perPage: 4,
      currentPage: 0,
      busText: false,
      cargado: false,
    };
  }

  cargar = (arr) =>
    axios
      .get(`https://combita.company/php/getProyecto.php`)
      .then(async (res) => {
        this.setState({ cargado: false });
        let data = this.state.busText ? arr : res.data;

        const slice = data.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );

        const postData = slice.map((pd) => (
          <React.Fragment key={pd.id_pro}>
            <tr>
              <td>{pd.fac_pro}</td>
              <td>{pd.tit_pro}</td>
              <td>{pd.est_pro}</td>
              <td>{pd.inv_pro}</td>
              <td>{pd.ent_eje_pro}</td>
              <td>
                <Button
                  small
                  className="red darken -3"
                  onClick={() => this.borrarDato(pd.id_pro)}
                >
                  <Icon>delete</Icon>
                </Button>
                <Button
                  size="small"
                  className="modal-trigger yellow darken -3"
                  data-target="modal1"
                  onClick={() => this.cambioModal(pd)}
                >
                  <Icon>remove_red_eye</Icon>
                </Button>
                <Button
                  small
                  style={{ backgroundColor: "#1B7FCF" }}
                  onClick={() => this.actualizar(pd)}
                >
                  <Icon>edit</Icon>
                </Button>
              </td>
            </tr>
          </React.Fragment>
        ));

        this.setState(
          {
            pageCount: Math.ceil(data.length / this.state.perPage),
            postData,
            proyectos: data,
            proyectosCopia: res.data,
          },
          () => {
            this.cargarGraficas();
            this.setState({ cargado: true });
          }
        );
      });

  remover = (text) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  cargarGraficas = () => {
    let datosGrafica1 = [["Facultad", "Registrados"]];
    let datosGrafica2 = [["Estado", "Cantidad"]];

    let facultades = [];
    let contadorFacultad = [];
    let contadorEstado = [0, 0, 0];

    //0 -> PROPUESTA
    //1 -> EJECUCION
    //2 -> TERMINADO

    this.state.proyectosCopia.forEach((proyecto) => {
      if (proyecto.fac_pro) {
        let bandera = true;
        let i;

        for (i = 0; i < facultades.length; i++)
          if (this.remover(proyecto.fac_pro) === this.remover(facultades[i])) {
            bandera = false;
            contadorFacultad[i]++;
            break;
          }

        if (bandera) {
          facultades.push(proyecto.fac_pro);
          contadorFacultad.push(1);
        }
      }

      if (proyecto.est_pro === "PROPUESTA") contadorEstado[0]++;
      else if (proyecto.est_pro === "EJECUCION") contadorEstado[1]++;
      else if (proyecto.est_pro === "TERMINADO") contadorEstado[2]++;
    });

    for (let i = 0; i < facultades.length; i++)
      datosGrafica1.push([facultades[i], contadorFacultad[i]]);

    datosGrafica2.push(["PROPUESTA", contadorEstado[0]]);
    datosGrafica2.push(["EJECUCION", contadorEstado[1]]);
    datosGrafica2.push(["TERMINADO", contadorEstado[2]]);

    this.setState({ graf1: datosGrafica1, graf2: datosGrafica2 });
  };

  componentDidMount() {
    this.cargar([]);

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
    this.setState(
      {
        estado: "",
        impacto: "",
        busqueda: "",
        proyectos: this.state.proyectosCopia,
        busText: false,
      },
      () => this.cargar([])
    );
  };

  buscarTexto = () => {
    if (this.state.busqueda.length >= 4)
      this.setState(
        {
          proyectos: this.state.proyectosCopia,
        },
        () => {
          let arr = [];

          this.state.proyectos.forEach((proyecto) => {
            if (
              proyecto.tip_pro &&
              this.remover(proyecto.tip_pro).search(
                this.remover(this.state.busqueda)
              ) !== -1
            )
              arr.push(proyecto);
            else if (
              proyecto.con_pro &&
              this.remover(proyecto.con_pro).search(
                this.remover(this.state.busqueda)
              ) !== -1
            )
              arr.push(proyecto);
            else if (
              this.remover(proyecto.fac_pro).search(
                this.remover(this.state.busqueda)
              ) !== -1
            )
              arr.push(proyecto);
            else if (
              this.remover(proyecto.tit_pro).search(
                this.remover(this.state.busqueda)
              ) !== -1
            )
              arr.push(proyecto);
            else if (
              proyecto.cod_pro &&
              proyecto.cod_pro === this.state.busqueda
            )
              arr.push(proyecto);
            else if (
              proyecto.inv_pro &&
              this.remover(proyecto.inv_pro).search(
                this.remover(this.state.busqueda)
              ) !== -1
            )
              arr.push(proyecto);
            else if (
              proyecto.co_inv_pro &&
              this.remover(proyecto.co_inv_pro).search(
                this.remover(this.state.busqueda)
              ) !== -1
            )
              arr.push(proyecto);
            else if (
              proyecto.inv_lid_pro &&
              this.remover(proyecto.inv_lid_pro).search(
                this.remover(this.state.busqueda)
              ) !== -1
            )
              arr.push(proyecto);
            else if (
              proyecto.ent_eje_pro &&
              this.remover(proyecto.ent_eje_pro).search(
                this.remover(this.state.busqueda)
              ) !== -1
            )
              arr.push(proyecto);
            else if (
              proyecto.gru_pro &&
              this.remover(proyecto.gru_pro).search(
                this.remover(this.state.busqueda)
              ) !== -1
            )
              arr.push(proyecto);
            else if (
              proyecto.otr_ent_par &&
              this.remover(proyecto.otr_ent_par).search(
                this.remover(this.state.busqueda)
              ) !== -1
            )
              arr.push(proyecto);
          });
          this.setState({ busText: true }, () => this.cargar(arr));
        }
      );
  };

  buscar = () => {
    this.setState(
      {
        proyectos: this.state.proyectosCopia,
      },
      () => {
        var arr = [];

        this.state.proyectos.forEach((proyecto) => {
          if (this.state.estado !== "" && this.state.impacto !== "") {
            if (
              proyecto.imp_pro === this.state.impacto &&
              proyecto.est_pro === this.state.estado
            ) {
              arr.push(proyecto);
            }
          } else {
            if (
              this.state.estado !== "" &&
              proyecto.est_pro === this.state.estado
            )
              arr.push(proyecto);
            if (
              this.state.impacto !== "" &&
              proyecto.imp_pro === this.state.impacto
            )
              arr.push(proyecto);
          }
        });

        this.setState({ busText: true }, () => this.cargar(arr));
      }
    );
  };

  registro = () => this.setState({ redireccion: true });

  mostrarTodo = () => this.setState({ mostrarTodo: true });

  cambioModal = (proyecto) =>
    this.setState({
      ModalProyecto: proyecto,
    });

  borrarDato = (id_pro) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, ¡eliminar esto!",
      cancelButtonText: "No, ¡cancelar!",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        axios
          .get(`https://combita.company/php/deleteProyecto.php?id=${id_pro}`)
          .then(() => this.cargar([]))
          .catch((err) => console.log(err));
        Swal.fire("¡Eliminado!", "Su proyecto ha sido eliminado ", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel)
        Swal.fire("Cancelado", "Su proyecto está seguro", "error");
    });
  };

  actualizar = (pro) =>
    this.setState({ proyectoSeleccionado: pro, rediactualizar: true });

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.cargar([]);
      }
    );
  };

  render() {
    if (this.state.rediactualizar)
      return (
        <Redirect
          to={{
            pathname: "/nuevo",
            state: { proyecto: this.state.proyectoSeleccionado },
          }}
        />
      );
    if (this.state.mostrarTodo) return <Redirect to="/mostrar" />;
    if (this.state.redireccion)
      return (
        <Redirect
          to={{
            pathname: "/nuevo",
            state: { proyecto: "" },
          }}
        />
      );
    return (
      <div>
        <div
          className="flex-container "
          style={{ paddingTop: 10, paddingLeft: 35, paddingRight: 35 }}
        >
          <div className="filtro ">
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
                <option value="" disabled>
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
                <option value="" disabled>
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
            <div className="tabla_1 ">
              {!this.state.cargado ? (
                <div
                  className="center"
                  style={{ paddingTop: 60, paddingBottom: 60 }}
                >
                  <Preloader active color="blue" size="big" flashing />
                </div>
              ) : (
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
                  <tbody>{this.state.postData}</tbody>
                </Table>
              )}
            </div>
            <div className="navbar_abajo ">
              {this.state.cargado && (
                <ReactPaginate
                  previousLabel={"<-"}
                  nextLabel={"->"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={4}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active blue darken-2"}
                />
              )}

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
                    <td>
                      {this.state.ModalProyecto.fec_ini_pro === "1900-05-02"
                        ? ""
                        : this.state.ModalProyecto.fec_ini_pro}
                    </td>
                    <td>
                      {this.state.ModalProyecto.fec_fin_pro === "1900-05-02"
                        ? ""
                        : this.state.ModalProyecto.fec_fin_pro}
                    </td>
                    <td>{this.state.ModalProyecto.pro_pro}</td>
                    <td>{this.state.ModalProyecto.obs_pro}</td>
                    <td>{this.state.ModalProyecto.val_eje_usc}</td>
                    <td>
                      <a
                        href={`https://combita.company/php/${this.state.ModalProyecto.arc_fis_pro}`}
                      >
                        {this.state.ModalProyecto.arc_fis_pro}
                      </a>
                    </td>
                    <td>
                      <Button
                        small
                        className="red darken -3"
                        onClick={() =>
                          this.borrarDato(this.state.ModalProyecto.id_pro)
                        }
                      >
                        <Icon>delete</Icon>
                      </Button>
                      <Button
                        small
                        style={{ backgroundColor: "#1B7FCF" }}
                        onClick={() =>
                          this.actualizar(this.state.ModalProyecto)
                        }
                      >
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
        <div className="row" style={{ paddingLeft: 50, paddingRight: 50 }}>
          <div className="col s6 z-depth-2">
            <Chart
              width={"100%"}
              height={"300px"}
              chartType="PieChart"
              loader={
                <div
                  className="center"
                  style={{ paddingTop: 60, paddingBottom: 60 }}
                >
                  <Preloader active color="blue" size="big" flashing />
                </div>
              }
              data={this.state.graf1}
              options={{
                title: "Proyectos por facultad",
              }}
            />
          </div>
          <div className="col s6 z-depth-2">
            <Chart
              width={"100%"}
              height={"300px"}
              chartType="BarChart"
              loader={
                <div
                  className="center"
                  style={{ paddingTop: 60, paddingBottom: 60 }}
                >
                  <Preloader active color="blue" size="big" flashing />
                </div>
              }
              data={this.state.graf2}
              options={{
                title: "Cantidad de proyectos según su estado",
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
