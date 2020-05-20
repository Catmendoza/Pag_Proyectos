import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Icon, Table, Button } from "react-materialize";

import "./Nuevo.css";

export default class Nuevo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cerrar: false,
    };
  }

  cerrar = () => this.setState({ cerrar: true });

  render() {
    if (this.state.cerrar) return <Redirect to="/inicio" />;
    return (
      <div style={{ paddingTop: 10, paddingLeft: 35, paddingRight: 35 }}>
        <div className="datos" />
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
            <input
              id="codigo"
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
              id="nom_con"
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
              id="ent_pro"
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
          <div className="columnanuevo" style={{ marginRight: 5, flexGrow: 4 }}>
            <input
              id="fac_pro"
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
              id="nom_con"
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
              id="nom_con"
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
              id="inv_pri"
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
              id="val_tot_esps"
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
              id="con_esp_usc"
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
              id="val_tot_efe"
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
              id="arc_fis"
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
        {/*--------------------------------------------------------*/}
        <div className="botones">
          <a
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
            onClick={this.cerrar}
          >
            Guardar
            <Icon left>save</Icon>
          </a>
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
      </div>
    );
  }
}
