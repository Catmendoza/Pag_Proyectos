/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Icon, TextInput } from "react-materialize";

import "./Nuevo.css";

export default class Nuevo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cerrar: false,

      cod_pro: "",
      tit_pro: "",
      ani_pro: "",
      tip_pro: "",
      con_pro: "",
      fac_pro: "",
      est_pro: "",
      imp_pro: "",
      inv_pro: "",
      co_inv_pro: "",
      inv_lid_pro: "",
      gru_pro: "",
      otr_ent_par: "",
      ent_eje_pro: "",
      val_efe_tot: "",
      val_esp_tot: "",
      val_tot_pro: "",
      val_efe_fin: "",
      val_efe_usc: "",
      val_esp_otr: "",
      cont_esp_usc: "",
      fec_ini_pro: "",
      fec_fin_pro: "",
      pro_pro: "",
      obs_pro: "",
      val_eje_usc: "",
      arc_fis_pro: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  agregar(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    fetch("localhost/OTRI/createProyecto.php", {
      mode: "no-cors",
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  cerrar = () => this.setState({ cerrar: true });

  render() {
    if (this.state.cerrar) return <Redirect to="/inicio" />;
    return (
      <div style={{ paddingTop: 10, paddingLeft: 35, paddingRight: 35 }}>
        <div className="datos" />
        <form onSubmit={this.agregar}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              backgroundColor: "#fff",
              width: "100%",
            }}
          >
            <div
              className="columnanuevo"
              style={{ marginLeft: 5, marginRight: 10 }}
            >
              Codigo:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 10, flexBasis: 100 }}
            >
              {/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
              <input
                id="cod_pro"
                name="cod_pro"
                value={this.state.cod_pro}
                onChange={this.handleChange}
                type="number"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
            <div className="columnanuevo" style={{ marginRight: 10 }}>
              Título del proyecto:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 10, flexGrow: 8 }}
            >
              <input
                id="tit_pro"
                type="text"
                name="tit_pro"
                value={this.state.tit_pro}
                onChange={this.handleChange}
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
            <div className="columnanuevo" style={{ marginRight: 10 }}>
              Año convocatoria:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 5, flexBasis: 100 }}
            >
              <input
                id="ani_pro"
                name="ani_pro"
                value={this.state.ani_pro}
                onChange={this.handleChange}
                type="number"
                max="2021"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
          </div>
          {/*--------------------------------------------------------*/}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              backgroundColor: "#fff",
              width: "100%",
            }}
          >
            <div
              className="columnanuevo"
              style={{ marginLeft: 5, marginRight: 10 }}
            >
              Tipo convocatoria:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 10, flexGrow: 4 }}
            >
              <input
                id="tip_con"
                name="tip_pro"
                value={this.state.tip_pro}
                onChange={this.handleChange}
                type="text"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
            <div className="columnanuevo" style={{ marginRight: 10 }}>
              Nombre convocatoria:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 10, flexGrow: 4 }}
            >
              <input
                id="con_pro"
                type="text"
                name="con_pro"
                value={this.state.con_pro}
                onChange={this.handleChange}
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
            <div className="columnanuevo" style={{ marginRight: 10 }}>
              Impacto:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 5, flexBasis: 200 }}
            >
              <select
                className="browser-default"
                id="select_1_nuevo"
                name="Impacto"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              >
                <option value="" disabled selected>
                  -
                </option>
                <option value="EXTERNO">Externo</option>
                <option value="INTERNO">Interno</option>
              </select>
            </div>
          </div>
          {/*--------------------------------------------------------*/}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              backgroundColor: "#fff",
              width: "100%",
            }}
          >
            <div
              className="columnanuevo"
              style={{ marginLeft: 5, marginRight: 10 }}
            >
              Entidad ejecutora:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 10, flexGrow: 4 }}
            >
              <input
                id="ent_eje_pro"
                name="ent_eje_pro"
                value={this.state.ent_eje_pro}
                onChange={this.handleChange}
                type="text"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
            <div className="columnanuevo" style={{ marginRight: 10 }}>
              Otra entidad participante:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 10, flexGrow: 4 }}
            >
              <input
                id="otr_ent_par"
                name="otr_ent_par"
                value={this.state.otr_ent_par}
                onChange={this.handleChange}
                type="text"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
            <div className="columnanuevo" style={{ marginRight: 10 }}>
              Facultad:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 5, flexGrow: 4 }}
            >
              <input
                id="fac_pro"
                name="fac_pro"
                value={this.state.fac_pro}
                onChange={this.handleChange}
                type="text"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
          </div>
          {/*--------------------------------------------------------*/}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              backgroundColor: "#fff",
              width: "100%",
            }}
          >
            <div
              className="columnanuevo"
              style={{ marginLeft: 5, marginRight: 10 }}
            >
              Fecha Inicio:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 10, flexBasis: 80 }}
            >
              <input
                id="fec_ini_pro"
                name="fec_ini_pro"
                value={this.state.fec_ini_pro}
                onChange={this.handleChange}
                type="date"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
            <div className="columnanuevo" style={{ marginRight: 10 }}>
              Fecha finalización:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 10, flexBasis: 80 }}
            >
              <input
                id="fec_fin_pro"
                name="fec_fin_pro"
                value={this.state.fec_fin_pro}
                onChange={this.handleChange}
                type="date"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
            <div className="columnanuevo" style={{ marginRight: 10 }}>
              Prórroga:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 10, flexGrow: 4 }}
            >
              <input
                id="po_pro"
                name="pro_pro"
                value={this.state.pro_pro}
                onChange={this.handleChange}
                type="text"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
            <div className="columnanuevo" style={{ marginRight: 10 }}>
              Observaciones:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 10, flexGrow: 4 }}
            >
              <input
                id="obs_pro"
                name="obs_pro"
                value={this.state.obs_pro}
                onChange={this.handleChange}
                type="text"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
          </div>
          {/*--------------------------------------------------------*/}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              backgroundColor: "#fff",
              width: "100%",
            }}
          >
            <div
              className="columnanuevo"
              style={{ marginLeft: 5, marginRight: 10 }}
            >
              Investigador principal:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 10, flexGrow: 4 }}
            >
              <input
                id="inv_pro"
                name="inv_pro"
                value={this.state.inv_pro}
                onChange={this.handleChange}
                type="text"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
            <div className="columnanuevo" style={{ marginRight: 10 }}>
              Co-investigadores:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 10, flexGrow: 4 }}
            >
              <input
                id="co_inv_pro"
                name="co_inv_pro"
                value={this.state.co_inv_pro}
                onChange={this.handleChange}
                type="text"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
            <div className="columnanuevo" style={{ marginRight: 10 }}>
              Grupo de investigación:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 5, flexBasis: 200 }}
            >
              <input
                id="gru_pro"
                name="gru_pro"
                value={this.state.gru_pro}
                onChange={this.handleChange}
                type="text"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
          </div>
          {/*--------------------------------------------------------*/}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              backgroundColor: "#fff",
              width: "100%",
            }}
          >
            <div
              className="columnanuevo"
              style={{ marginLeft: 5, marginRight: 10 }}
            >
              Investigador lider:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 10, flexGrow: 4 }}
            >
              <input
                id="inv_lid_pro"
                name="inv_lid_pro"
                value={this.state.inv_lid_pro}
                onChange={this.handleChange}
                type="text"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
            <div className="columnanuevo" style={{ marginRight: 10 }}>
              Valor efectivo financiado:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 10, flexGrow: 4 }}
            >
              <input
                id="val_efe_fin"
                name="val_efe_fin"
                value={this.state.val_efe_fin}
                onChange={this.handleChange}
                type="number"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
            <div className="columnanuevo" style={{ marginRight: 10 }}>
              Valor total de especie:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 5, flexBasis: 200 }}
            >
              <input
                id="val_esp_tot"
                name="val_esp_tot"
                value={this.state.val_esp_tot}
                onChange={this.handleChange}
                type="number"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
          </div>
          {/*--------------------------------------------------------*/}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              backgroundColor: "#fff",
              width: "100%",
            }}
          >
            <div
              className="columnanuevo"
              style={{ marginLeft: 5, marginRight: 10 }}
            >
              Valor especie de otra entidad:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 10, flexBasis: 200 }}
            >
              <input
                id="val_esp_otr"
                name="val_esp_otr"
                value={this.state.val_esp_otr}
                onChange={this.handleChange}
                type="number"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
            <div className="columnanuevo" style={{ marginRight: 10 }}>
              Valor ejecutado por la USC:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 10, flexBasis: 200 }}
            >
              <input
                id="val_eje_usc"
                name="val_eje_usc"
                value={this.state.val_eje_usc}
                onChange={this.handleChange}
                type="number"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
            <div className="columnanuevo" style={{ marginRight: 10 }}>
              Contrapartida en especie USC:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 5, flexBasis: 180 }}
            >
              <input
                id="cont_esp_usc"
                name="cont_esp_usc"
                value={this.state.cont_esp_usc}
                onChange={this.handleChange}
                type="number"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
          </div>
          {/*--------------------------------------------------------*/}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              backgroundColor: "#fff",
              width: "100%",
            }}
          >
            <div
              className="columnanuevo"
              style={{ marginLeft: 5, marginRight: 10 }}
            >
              Valor total proyecto:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 10, flexGrow: 4 }}
            >
              <input
                id="val_tot_pro"
                name="val_tot_pro"
                value={this.state.val_tot_pro}
                onChange={this.handleChange}
                type="number"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
            <div className="columnanuevo" style={{ marginRight: 10 }}>
              Valor total efectivo:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 10, flexGrow: 4 }}
            >
              <input
                id="val_efe_tot"
                name="val_efe_tot"
                value={this.state.val_efe_tot}
                onChange={this.handleChange}
                type="number"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
            <div className="columnanuevo" style={{ marginRight: 10 }}>
              Archivo físico:
            </div>
            <div
              className="columnanuevo"
              style={{ marginRight: 5, flexBasis: 200 }}
            >
              <input
                id="arc_fis_pro"
                name="arc_fis_pro"
                value={this.state.arc_fis_pro}
                onChange={this.handleChange}
                type="file"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 5,
                  background: "rgb(176, 179, 188, 20%)",
                  borderColor: "transparent",
                }}
              ></input>
            </div>
          </div>
          <div className="botones">
            <TextInput
              className="waves-effect waves-light btn"
              style={{
                marginTop: 12,
                marginRight: 5,
                borderRadius: 5,
                backgroundColor: "#1B7FCF",
                color: "white",
                fontSize: 15,
                width: "12%",
                textAlign: "center",
                float: "right",
              }}
              type="submit"
            ></TextInput>
            <a
              className="waves-effect waves-light btn"
              style={{
                marginTop: 12,
                marginRight: 5,
                borderRadius: 5,
                backgroundColor: "#1B7FCF",
                color: "white",
                fontSize: 15,
                width: "10%",
                textAlign: "left",
                float: "right",
              }}
              onClick={this.cerrar}
            >
              Cerrar
              <Icon left>close</Icon>
            </a>
          </div>
        </form>
      </div>
    );
  }
}
