import React, { Component } from "react";
import { Icon, Table, Button } from "react-materialize";
import "./Mostrar.css";

export default class Mostrar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proyectos: [],
    };
  }

  componentDidMount() {
    this.cargar();
    console.log(this.state.proyectos);
  }

  cargar = () => {
    fetch("https://combita.company/otri/php/getProyecto.php")
      .then((res) => res.json())
      .then((data) => this.setState({ proyectos: data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div style={{ paddingTop: 10, paddingLeft: 35, paddingRight: 35 }}>
        <div className="scroll">
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
                <th data-field="val_esp_otr_ent">Val. Especie otra entidad</th>
                <th data-field="con_esp_usc">Contrapartida especie USC</th>
                <th data-field="fec_ini">Fec. Inicio</th>
                <th data-field="fec_fin">Fec. Finalización</th>
                <th data-field="pro_pro">Prórroga</th>
                <th data-field="obv_pro">Observaciones</th>
                <th data-field="val_eje_usc">Val. Ejecutado por la USC</th>
                <th data-field="arc_fis_pro">Archivo físico</th>
                <th data-field="botones"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.proyectos.map((proyecto) => {
                return (
                  <tr key={proyecto.id_pro}>
                    <td>{proyecto.ani_pro}</td>
                    <td>{proyecto.tip_pro}</td>
                    <td>{proyecto.con_pro}</td>
                    <td>{proyecto.fac_pro}</td>
                    <td>{proyecto.tit_pro}</td>
                    <td>{proyecto.cod_pro}</td>
                    <td>{proyecto.est_pro}</td>
                    <td>{proyecto.inv_pro}</td>
                    <td>{proyecto.co_inv_pro}</td>
                    <td>{proyecto.inv_lid_pro}</td>
                    <td>{proyecto.gru_pro}</td>
                    <td>{proyecto.ent_eje_pro}</td>
                    <td>{proyecto.otr_ent_par}</td>
                    <td>{proyecto.val_efe_tot}</td>
                    <td>{proyecto.val_esp_tot}</td>
                    <td>{proyecto.val_tot_pro}</td>
                    <td>{proyecto.val_efe_fin}</td>
                    <td>{proyecto.val_efe_usc}</td>
                    <td>{proyecto.val_esp_otr}</td>
                    <td>{proyecto.cont_esp_usc}</td>
                    <td>{proyecto.fec_ini_pro}</td>
                    <td>{proyecto.fec_fin_pro}</td>
                    <td>{proyecto.pro_pro}</td>
                    <td>{proyecto.obs_pro}</td>
                    <td>{proyecto.val_eje_usc}</td>
                    <td>{proyecto.arc_fis_pro}</td>
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
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}