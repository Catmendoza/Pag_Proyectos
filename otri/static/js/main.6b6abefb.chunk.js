(this.webpackJsonpotri_proyecto=this.webpackJsonpotri_proyecto||[]).push([[0],{36:function(e,t,a){e.exports=a.p+"static/media/logo.dbef2919.png"},37:function(e,t,a){e.exports=a.p+"static/media/unnamed.9bfb5cc5.png"},38:function(e,t,a){e.exports=a(94)},43:function(e,t,a){},89:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),n=a(24),s=a.n(n),c=a(10),l=a(11),i=a(13),p=a(12),d=a(20),u=a(14),m=a(32),h=a(33),b=a.n(h),g=(a(43),a(8)),E=(a(89),function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).cargar=function(){fetch("https://combita.company/otri/php/getProyecto.php").then((function(e){return e.json()})).then((function(e){return o.setState({proyectos:e,proyectosCopia:e})})).catch((function(e){return console.log(e)}))},o.cambioEstado=function(e){return o.setState(Object(d.a)({},e.target.name,e.target.value))},o.borradoFiltrado=function(){o.setState({estado:"",impacto:"",busqueda:""}),o.setState({proyectos:o.state.proyectosCopia})},o.buscarTexto=function(){if(o.state.busqueda.length>=4){o.setState({proyectos:o.state.proyectosCopia});for(var e=[],t=0;t<o.state.proyectosCopia.length;t++)(null===o.state.proyectosCopia[t].tip_pro||-1===o.state.proyectosCopia[t].tip_pro.toLocaleUpperCase().search(o.state.busqueda.toLocaleUpperCase()))&&(null===o.state.proyectosCopia[t].con_pro||-1===o.state.proyectosCopia[t].con_pro.toLocaleUpperCase().search(o.state.busqueda.toLocaleUpperCase()))&&-1===o.state.proyectosCopia[t].fac_pro.toLocaleUpperCase().search(o.state.busqueda.toLocaleUpperCase())&&-1===o.state.proyectosCopia[t].tit_pro.toLocaleUpperCase().search(o.state.busqueda.toLocaleUpperCase())&&(null===o.state.proyectosCopia[t].cod_pro||o.state.proyectosCopia[t].cod_pro!==o.state.busqueda)&&(null===o.state.proyectosCopia[t].inv_pro||-1===o.state.proyectosCopia[t].inv_pro.toLocaleUpperCase().search(o.state.busqueda.toLocaleUpperCase()))&&(null===o.state.proyectosCopia[t].co_inv_pro||-1===o.state.proyectosCopia[t].co_inv_pro.toLocaleUpperCase().search(o.state.busqueda.toLocaleUpperCase()))&&(null===o.state.proyectosCopia[t].inv_lid_pro||-1===o.state.proyectosCopia[t].inv_lid_pro.toLocaleUpperCase().search(o.state.busqueda.toLocaleUpperCase()))&&(null===o.state.proyectosCopia[t].ent_eje_pro||-1===o.state.proyectosCopia[t].ent_eje_pro.toLocaleUpperCase().search(o.state.busqueda.toLocaleUpperCase()))&&(null===o.state.proyectosCopia[t].gru_pro||-1===o.state.proyectosCopia[t].gru_pro.toLocaleUpperCase().search(o.state.busqueda.toLocaleUpperCase))&&(null===o.state.proyectosCopia[t].otr_ent_par||-1===o.state.proyectosCopia[t].otr_ent_par.toLocaleUpperCase().search(o.state.busqueda.toLocaleUpperCase()))||e.push(o.state.proyectosCopia[t]);o.setState({proyectos:e})}},o.buscar=function(){o.setState({proyectos:o.state.proyectosCopia});for(var e=[],t=0;t<o.state.proyectos.length;t++)""!==o.state.estado&&""!==o.state.impacto?o.state.proyectos[t].imp_pro===o.state.impacto&&o.state.proyectos[t].est_pro===o.state.estado&&e.push(o.state.proyectos[t]):(""!==o.state.estado&&o.state.proyectos[t].est_pro===o.state.estado&&e.push(o.state.proyectos[t]),""!==o.state.impacto&&o.state.proyectos[t].imp_pro===o.state.impacto&&e.push(o.state.proyectos[t]));o.setState({proyectos:e})},o.state={proyectos:[],proyectosCopia:[],estado:"",impacto:"",busqueda:""},o}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.cargar(),console.log(this.state.proyectos)}},{key:"render",value:function(){return""!==localStorage.getItem("admin")?r.a.createElement("div",{className:"flex-container",style:{paddingTop:10,paddingLeft:35,paddingRight:35}},r.a.createElement("div",{className:"filtro"},r.a.createElement("div",{className:"titulo"},"Filtro"),r.a.createElement("div",{className:"fondo-filtro"},r.a.createElement("label",null,"Impacto"),r.a.createElement("select",{className:"browser-default",id:"select_1_inicio",name:"impacto",value:this.state.impacto,onChange:this.cambioEstado},r.a.createElement("option",{value:"",disabled:!0,selected:!0},"-"),r.a.createElement("option",{value:"EXTERNO"},"Externo"),r.a.createElement("option",{value:"INTERNO"},"Interno")),r.a.createElement("label",null,"Estado"),r.a.createElement("select",{className:"browser-default",id:"select_2_inicio",name:"estado",value:this.state.estado,onChange:this.cambioEstado},r.a.createElement("option",{value:"",disabled:!0,selected:!0},"-"),r.a.createElement("option",{value:"PROPUESTA"},"Propuesta"),r.a.createElement("option",{value:"EJECUCION"},"Ejecuci\xf3n"),r.a.createElement("option",{value:"TERMINADO"},"Terminado"))),r.a.createElement("div",{style:{flexBasis:"100%"}},r.a.createElement("a",{className:"waves-effect waves-light btn",style:{marginTop:5,borderRadius:5,backgroundColor:"#1B7FCF",color:"white",fontSize:15,width:"100%",textAlign:"left"},onClick:this.buscar},"Buscar",r.a.createElement(g.Icon,{left:!0},"search")),r.a.createElement("a",{className:"waves-effect waves-light btn",style:{marginTop:5,borderRadius:5,backgroundColor:"#dd4f31",color:"white",fontSize:15,width:"100%",textAlign:"left"},onClick:this.borradoFiltrado},"Limpiar",r.a.createElement(g.Icon,{left:!0},"delete")))),r.a.createElement("div",{className:"tabla"},r.a.createElement("div",{className:"navbar",style:{borderTopLeftRadius:5,borderTopRightRadius:5}},r.a.createElement("a",{className:"waves-effect waves-light btn",style:{paddingBottom:5,paddingLeft:10,paddingRight:10,borderRadius:5,backgroundColor:"#1B7FCF",color:"white",fontSize:15,marginTop:12,marginLeft:15}},"Agregar Nuevo",r.a.createElement(g.Icon,{left:!0},"add_circle")),r.a.createElement("div",{style:{flexGrow:8}},r.a.createElement("input",{placeholder:"Buscar",id:"busq",type:"search",className:"validate",minLength:"4",name:"busqueda",value:this.state.busqueda,onChange:this.cambioEstado,style:{width:"90%",marginLeft:50,marginTop:10,height:40,borderRadius:5,background:"#ffffff"}})),r.a.createElement("div",{style:{marginRight:15}},r.a.createElement("a",{className:"waves-effect waves-light btn",style:{marginTop:12,borderRadius:5,backgroundColor:"#1B7FCF",color:"white",fontSize:15,width:"100%",textAlign:"left"},onClick:this.buscarTexto},r.a.createElement(g.Icon,{center:!0},"search")))),r.a.createElement("div",{className:"tabla_1"},r.a.createElement(g.Table,{id:"customers"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{"data-field":"facultad"},"Facultad"),r.a.createElement("th",{"data-field":"titulo"},"T\xedtulo"),r.a.createElement("th",{"data-field":"estado"},"Estado"),r.a.createElement("th",{"data-field":"inv_prin"},"Inv. principal"),r.a.createElement("th",{"data-field":"ent_eje"},"Ent. Ejecutora"),r.a.createElement("th",{"data-field":"botones"}))),r.a.createElement("tbody",null,this.state.proyectos.map((function(e){return r.a.createElement("tr",{key:e.id_pro},r.a.createElement("td",null,e.fac_pro),r.a.createElement("td",null,e.tit_pro),r.a.createElement("td",null,e.est_pro),r.a.createElement("td",null,e.inv_pro),r.a.createElement("td",null,e.ent_eje_pro),r.a.createElement("td",null,r.a.createElement(g.Button,{small:!0,waves:"light",className:"red darken -3"},r.a.createElement(g.Icon,null,"delete")),r.a.createElement(g.Button,{small:!0,waves:"light",style:{backgroundColor:"#1B7FCF"}},r.a.createElement(g.Icon,null,"edit"))))}))))),r.a.createElement("div",{className:"navbar_abajo "},r.a.createElement("div",{className:"pagination"},r.a.createElement("a",{href:"#"},"\xab"),r.a.createElement("a",{href:"#",className:"active"},"1"),r.a.createElement("a",{href:"#"},"2"),r.a.createElement("a",{href:"#"},"3"),r.a.createElement("a",{href:"#"},"4"),r.a.createElement("a",{href:"#"},"\xbb")),r.a.createElement("div",{className:"texto_navbar"},"Resultado: ",this.state.proyectos.length)))):r.a.createElement(u.a,{to:"/"})}}]),a}(o.Component)),f=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).handleChange=function(e){o.setState(Object(d.a)({},e.target.name,e.target.value))},o.login=function(){fetch("https://combita.company/otri/php/login.php?usuario=".concat(o.state.usuario,"&contrasena=").concat(o.state.contra)).then((function(e){return e.json()})).then((function(e){e.estado&&(o.setState({ingreso:!0}),o.props.cambioTrue(),localStorage.setItem("admin",!0))})).catch((function(e){return console.error(e)}))},o.state={usuario:"",contra:"",ingreso:!1},o}return Object(l.a)(a,[{key:"componentDidMount",value:function(){""!==localStorage.getItem("admin")?(this.props.cambioTrue(),this.setState({ingreso:!0})):this.props.cambioFalse()}},{key:"render",value:function(){return this.state.ingreso?r.a.createElement(u.a,{to:"/inicio"}):r.a.createElement("div",{style:{paddingTop:20,paddingLeft:35,paddingRight:35}},r.a.createElement("div",{className:"container",style:{display:"flex",borderRadius:15,width:"35%",backgroundColor:"#004b87"}},r.a.createElement("div",{className:"container center"},r.a.createElement("div",null,r.a.createElement(m.Icon,{icon:b.a,color:"#ffffff",width:"150",height:"150"})),r.a.createElement("div",null,r.a.createElement("input",{id:"miid",type:"text",name:"usuario",placeholder:"Usuario",value:this.state.usuario,onChange:this.handleChange,style:{background:"rgb( 255, 255, 255, 0.5)",borderRadius:15,color:"#004b87"}})),r.a.createElement("div",null,r.a.createElement("input",{id:"miid",type:"password",name:"contra",placeholder:"Contrase\xf1a",value:this.state.contra,onChange:this.handleChange,style:{background:"rgb( 255, 255, 255, 0.5)",borderRadius:15,color:"#004b87"}})),r.a.createElement("div",{style:{flexBasis:"100%",width:"auto"}},r.a.createElement("a",{className:"waves-effect waves-light btn",style:{paddingBottom:46,paddingTop:12,borderRadius:15,backgroundColor:"#FFFFFF",color:"#004b87",fontSize:40},onClick:this.login},r.a.createElement("b",null,"INGRESAR"))),r.a.createElement("div",{style:{paddingTop:15,paddingBottom:12}},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",className:"filled-in"}),r.a.createElement("span",{style:{color:"white"}},"Recuerdame"))))),r.a.createElement("div",{className:"raya",style:{paddingTop:20}},r.a.createElement("hr",{style:{width:"55%",height:1,backgroundColor:"#004b87",borderColor:"#004b87"}})))}}]),a}(o.Component),y=(a(93),o.Component,a(19)),v=a(36),C=a.n(v),_=a(37),w=a.n(_),N=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).cambioTrue=function(){return o.setState({ingreso:!0})},o.cambioFalse=function(){o.setState({ingreso:!1}),localStorage.setItem("admin","")},o.state={ingreso:""!==localStorage.getItem("admin")},o}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"blue lighten-4",style:{width:"100%",height:"100vh",backgroundColor:"#1b7fcf"}},r.a.createElement("div",{style:{paddingTop:10,paddingLeft:35,paddingRight:35}},r.a.createElement("div",{style:{paddingBottom:1,paddingTop:1,borderRadius:15,paddingLeft:15,backgroundColor:"#004b87"}},r.a.createElement("div",{style:{position:"absolute",top:"-4%",left:"32%"}},r.a.createElement("img",{src:w.a,alt:"Titulo de la plataforma",width:"500"})),r.a.createElement("img",{src:C.a,alt:"Logo de la universidad Santiago de Cali",width:"110"}),this.state.ingreso&&r.a.createElement("div",{style:{position:"absolute",top:"6%",right:"5%"}},r.a.createElement("i",{className:"material-icons medium"},r.a.createElement("a",{className:"white-text",onClick:this.cambioFalse},"exit_to_app"))))),r.a.createElement(y.a,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0},r.a.createElement(f,{cambioTrue:this.cambioTrue,cambioFalse:this.cambioFalse})),this.state.ingreso&&r.a.createElement(u.b,{path:"/inicio",exact:!0,component:E}),r.a.createElement(u.b,null,"ERROR 404")),!this.state.ingreso&&r.a.createElement(u.a,{to:"/"})))}}]),a}(o.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.6b6abefb.chunk.js.map