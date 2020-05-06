import React, { Component } from "react";
/*import select from "react-select";*/

import "./Nuevo.css";

export default class Nuevo extends Component {
  render() {
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
            {/*<Select
              className="basic-single"
              classNamePrefis="select"
              isClearable={true}
              name="impacto"
              options={opcionImpacto}
           />*/}
          </div>
        </div>
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
      </div>
    );
  }
}
/*const opcionImpacto = [
  { value: "1", label: "Externo" },
  { value: "2", label: "Interno" },
];*/
