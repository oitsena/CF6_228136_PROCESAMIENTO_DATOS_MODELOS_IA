(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema2"],{"20a4":function(t,e,s){"use strict";e["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const t=this.elements.map(t=>t.id),e=t.indexOf(this.selected);if(e<0)return{};const s={};return 0===e?s.next=t[e+1]:(e+1===t.length||(s.next=t[e+1]),s.back=t[e-1]),s}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>{const s=t.data&&t.data.attrs?t.data.attrs:[];return{id:this.mainId+e+1,elm:t.elm,...s}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},"63f2":function(t,e,s){t.exports=s.p+"img/1.4ba2532c.png"},7500:function(t,e,s){t.exports=s.p+"img/5.70592366.svg"},8564:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"slyder-a"},["a"===t.tipo?e("div",{staticClass:"slyder-a__tipo-a"},[t.navObj.next?e("div",{staticClass:"slyder-a__btn--sigt",on:{click:function(e){t.selected=t.navObj.next},mouseover:function(e){t.mostrarIndicador=!1}}},[t.mostrarIndicador?e("div",{staticClass:"indicador__container indicador--left"},[e("div",{staticClass:"indicador--click"})]):t._e()]):t._e(),t.navObj.back?e("div",{staticClass:"slyder-a__btn--atrs",on:{click:function(e){t.selected=t.navObj.back}}}):t._e(),e("div",{staticClass:"slyder-a__bullets"},t._l(t.elements,(function(s){return e("div",{key:"sl-blt-key-"+s.id,staticClass:"slyder-a__bullets__item",class:{"slyder-a__bullets__item--active":t.selected===s.id},on:{click:function(e){t.selected=s.id}}})})),0)]):t._e(),t.elements.length&&t.rendered?e("ScrollHorizontal",{attrs:{selectedId:"sl-"+t.selected,"item-full-width":""}},t._l(t.elements,(function(t){return e("div",{directives:[{name:"child",rawName:"v-child",value:t.elm,expression:"item.elm"}],key:"sl-key-"+t.id,staticClass:"slyder-a__item",attrs:{id:"sl-"+t.id}})})),0):t._e(),"b"===t.tipo?e("div",{staticClass:"slyder-a__tipo-b mt-3"},[e("div",{staticClass:"slyder-a__btn--atrs",class:{hide:!t.navObj.back},on:{click:function(e){t.selected=t.navObj.back}}}),e("div",{staticClass:"slyder-a__bullets"},t._l(t.elements,(function(s){return e("div",{key:"sl-blt-key-"+s.id,staticClass:"slyder-a__bullets__item",class:{"slyder-a__bullets__item--active":t.selected===s.id},on:{click:function(e){t.selected=s.id}}})})),0),e("div",{staticClass:"slyder-a__btn--sigt",class:{hide:!t.navObj.next},on:{click:function(e){t.selected=t.navObj.next},mouseover:function(e){t.mostrarIndicador=!1}}},[t.mostrarIndicador?e("div",{staticClass:"indicador__container indicador--left"},[e("div",{staticClass:"indicador--click"})]):t._e()])]):t._e(),e("div",{staticClass:"hidden-slot"},[t._t("default")],2)],1)},i=[],o=function(){var t=this,e=t._self._c;return e("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper"},[e("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":t.itemFullWidth},{row:t.row}],style:[{transform:`translate(${t.scrollVal}px,0px)`}]},[t._t("default")],2)])},n=[],c={name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1},row:{type:Boolean,default:!1}},data(){return{scrollVal:0,ids:[]}},watch:{selectedId(t){t.length&&this.scroll()}},mounted(){this.getCords(),this.scroll(),window.addEventListener("resize",this.scroll)},updated(){this.getCords()},beforeDestroy(){window.removeEventListener("resize",this.scroll)},methods:{scroll(){var t;const e=null===(t=this.ids.find(t=>t.id===this.selectedId))||void 0===t?void 0:t.id,s=document.getElementById(e);if(!Object.keys(this.$slots.default).length||!this.selectedId.length||null===s)return;const a=this.$refs.hContainer,i=s.offsetWidth*this.ids.length;let o=s.offsetLeft;const n=a.offsetWidth/s.offsetWidth;n>1&&i-o<a.offsetWidth&&(o=i-a.offsetWidth),this.scrollVal=1===this.ids.length?0:-o},getCords(){this.$slots.default&&(this.ids=this.$slots.default.map(t=>({id:t.elm.id,key:t.key})))}}},l=c,r=(s("fff0"),s("2877")),d=Object(r["a"])(l,o,n,!1,null,"2a7d1721",null),m=d.exports,u=s("20a4"),v={name:"SlyderA",components:{ScrollHorizontal:m},mixins:[u["a"]],props:{tipo:{type:String,default:"a"}},data:()=>({mostrarIndicador:!0,secuencial:!0})},f=v,p=Object(r["a"])(f,a,i,!1,null,null,null);e["a"]=p.exports},"88ee":function(t,e,s){t.exports=s.p+"img/3.4e049436.svg"},b7da:function(t,e,s){t.exports=s.p+"img/2.d74f403f.png"},b915:function(t,e,s){t.exports=s.p+"img/6.6497c8f6.svg"},bec2:function(t,e,s){},eabe:function(t,e,s){t.exports=s.p+"img/4.c587c804.svg"},fd11:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"curso-main-container pb-3"},[e("BannerInterno"),e("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[t._m(0),e("div",{staticClass:"bloque-texto-g color-secundario p-3 p-sm-4 p-md-5 mb-2",attrs:{"data-aos":"flip-up","data-aos-duration":"1000"}},[e("div",{staticClass:"bloque-texto-g__img",style:{"background-image":`url(${s("63f2")})`}}),t._m(1)]),e("Separador"),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),e("Separador"),t._m(7),e("p",{staticClass:"mb-4",attrs:{"data-aos":"fade-right"}},[t._v("Las metodologías de documentación para informes técnicos avanzados han evolucionado para adaptarse a las necesidades de proyectos de datos cada vez más complejos. El enfoque modular permite desarrollar secciones independientes que luego se integran en un documento cohesivo, facilitando la colaboración entre diferentes equipos y especialistas.")]),e("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-left"}},[t._v("La creación de informes técnicos sigue un proceso iterativo que involucra múltiples etapas y participantes. La siguiente infografía ilustra el flujo de trabajo típico en la generación de informes técnicos avanzados, desde la recopilación inicial de información hasta la publicación final.")]),t._m(8),t._m(9),e("Separador"),t._m(10),e("p",{staticClass:"mb-4",attrs:{"data-aos":"fade-up"}},[t._v("La gestión de versiones en informes técnicos trasciende el simple control de cambios. Implica mantener un registro detallado de la evolución del documento, las decisiones tomadas y las modificaciones realizadas. Esta práctica resulta especialmente importante en entornos colaborativos donde múltiples autores contribuyen al documento.")]),t._m(11)],1)],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"titulo-principal color-acento-contenido",attrs:{"data-aos":"flip-up"}},[e("div",{staticClass:"titulo-principal__numero"},[e("span",[t._v("2")])]),e("h1",[t._v("Informes técnicos avanzados")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"bloque-texto-g__texto p-4"},[e("p",{staticClass:"mb-0"},[t._v("Los informes técnicos avanzados constituyen una herramienta fundamental para comunicar resultados, metodologías y hallazgos en proyectos de analítica de datos. La capacidad de transmitir información técnica compleja de manera clara y estructurada determina en gran medida el impacto y la utilidad de los análisis realizados. Este capítulo explora las metodologías y mejores prácticas para la creación y gestión de informes técnicos efectivos.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_1","data-aos":"fade-right"}},[e("h2",[t._v("2.1 Estructura y organización")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row align-items-center mb-4"},[e("div",{staticClass:"col-lg-7",attrs:{"data-aos":"fade-right"}},[e("p",{staticClass:"mb-4"},[t._v("La estructuración efectiva de un informe técnico requiere un balance entre rigor metodológico y claridad expositiva. La organización jerárquica de la información permite a los lectores navegar el contenido según sus necesidades específicas, desde resúmenes ejecutivos hasta detalles técnicos profundos.")]),e("p",{staticClass:"mb-0"},[t._v("Para comprender mejor los elementos constitutivos de un informe técnico avanzado y su propósito, consideremos la siguiente estructura estándar y sus componentes:")])]),e("div",{staticClass:"col-lg-5 order-first order-lg-last",attrs:{"data-aos":"fade-left"}},[e("figure",{staticClass:"mb-4 mb-lg-0"},[e("img",{staticClass:"mx-auto",staticStyle:{"max-width":"505px"},attrs:{src:s("b7da")}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"titulo-sexto color-acento-contenido",attrs:{"data-aos":"fade-right"}},[e("p",{staticClass:"mb-0"},[e("b",[t._v("Tabla 2.")]),t._v(" Elementos que integran un informe técnico avanzado")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tabla-a color-primario mb-4",attrs:{"data-aos":"fade-up"}},[e("table",[e("caption",{staticClass:"fw-normal"},[e("strong",[t._v("Fuente.")]),t._v(" OIT, 2024.")]),e("thead",[e("tr",{staticClass:"text-white text-center",staticStyle:{"background-color":"#03A9F4"}},[e("th",[t._v("Sección")]),e("th",[t._v("Contenido principal")]),e("th",[t._v("Audiencia objetivo")]),e("th",[t._v("Nivel de detalle técnico")]),e("th",[t._v("Extensión recomendada")])])]),e("tbody",{staticClass:"text-center"},[e("tr",{staticClass:"bg-white"},[e("td",[t._v("Resumen ejecutivo")]),e("td",[t._v("Hallazgos clave y recomendaciones")]),e("td",[t._v("Gerencia y tomadores de decisiones")]),e("td",[t._v("Bajo - enfoque en impacto")]),e("td",[t._v("1-2 páginas")])]),e("tr",{staticClass:"bg-white"},[e("td",[t._v("Introducción")]),e("td",[t._v("Contexto, objetivos y alcance")]),e("td",[t._v("Todos los "),e("em",[t._v("stakeholders")])]),e("td",[t._v("Medio - marco general")]),e("td",[t._v("2-3 páginas")])]),e("tr",{staticClass:"bg-white"},[e("td",[t._v("Metodología")]),e("td",[t._v("Técnicas y herramientas utilizadas")]),e("td",[t._v("Equipo técnico y analistas")]),e("td",[t._v("Alto - detalles específicos")]),e("td",[t._v("3-5 páginas")])]),e("tr",{staticClass:"bg-white"},[e("td",[t._v("Análisis de datos")]),e("td",[t._v("Procesamiento y resultados")]),e("td",[t._v("Analistas y expertos del dominio")]),e("td",[t._v("Alto - análisis detallado")]),e("td",[t._v("5-10 páginas")])]),e("tr",{staticClass:"bg-white"},[e("td",[t._v("Visualizaciones")]),e("td",[t._v("Gráficos y "),e("em",[t._v("dashboards")])]),e("td",[t._v("Todos los "),e("em",[t._v("stakeholders")])]),e("td",[t._v("Medio - interpretación clara")]),e("td",[t._v("3-5 páginas")])]),e("tr",{staticClass:"bg-white"},[e("td",[t._v("Conclusiones")]),e("td",[t._v("Interpretaciones y recomendaciones")]),e("td",[t._v("Gerencia y equipo técnico")]),e("td",[t._v("Medio - síntesis técnica")]),e("td",[t._v("2-3 páginas")])]),e("tr",{staticClass:"bg-white"},[e("td",[t._v("Anexos técnicos")]),e("td",[t._v("Código, logs y documentación adicional")]),e("td",[t._v("Equipo técnico")]),e("td",[t._v("Muy alto - detalles completos")]),e("td",[t._v("Sin límite")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row justify-content-center mb-2",attrs:{"data-aos":"flip-up"}},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"fondo-color-sistema-j p-2"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-md-auto"},[e("figure",{staticClass:"mb-4 mb-md-0"},[e("img",{staticClass:"mx-auto",staticStyle:{"max-width":"90px"},attrs:{src:s("88ee")}})])]),e("div",{staticClass:"col"},[e("p",{staticClass:"mb-0"},[t._v("Esta estructura proporciona un marco de referencia que puede adaptarse según las necesidades específicas del proyecto y la organización, manteniendo siempre un flujo lógico y coherente de información.")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_2","data-aos":"fade-left"}},[e("h2",[t._v("2.2 Metodologías de documentación")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row justify-content-center mb-4",attrs:{"data-aos":"fade"}},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"titulo-sexto color-acento-contenido"},[e("p",{staticClass:"mb-0"},[e("b",[t._v("Figura 1.")]),t._v(" Ciclo de vida del informe técnico")])]),e("figure",{staticClass:"mb-2"},[e("img",{staticClass:"mx-auto",staticStyle:{"max-width":"505px"},attrs:{src:s("eabe")}})]),e("figcaption",{staticClass:"fw-normal"},[e("em",[e("b",[t._v("Fuente")]),t._v(": OIT, 2024.")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row justify-content-center mb-3",attrs:{"data-aos":"flip-up"}},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"fondo-color-sistema-j p-2"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-md-auto"},[e("figure",{staticClass:"mb-4 mb-md-0"},[e("img",{staticClass:"mx-auto",staticStyle:{"max-width":"90px"},attrs:{src:s("7500")}})])]),e("div",{staticClass:"col"},[e("p",{staticClass:"mb-0"},[t._v("El diagrama representa las etapas interconectadas del proceso de documentación, destacando los puntos de revisión, validación y retroalimentación. Esta visualización ayuda a comprender cómo cada fase contribuye a la calidad final del informe, donde los diferentes roles interactúan durante el proceso.")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_3","data-aos":"flip-up"}},[e("h2",[t._v("2.3 Gestión de versiones")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-7",attrs:{"data-aos":"fade-right"}},[e("p",{staticClass:"mb-4"},[t._v("Los sistemas modernos de control de versiones permiten mantener un historial completo de cambios, facilitando la trazabilidad y la capacidad de revertir modificaciones cuando sea necesario. La integración con sistemas de gestión de código permite vincular versiones específicas del informe con los conjuntos de datos y análisis correspondientes.")]),e("div",{staticClass:"fondo-color-sistema-k p-4 mb-4"},[e("p",{staticClass:"mb-0"},[t._v("El versionado semántico ("),e("em",[t._v("Semantic Versioning")]),t._v(") ha emergido como un estándar efectivo para la numeración de versiones de informes técnicos. Este sistema utiliza tres números (MAYOR. MENOR. PARCHE) para indicar la naturaleza de los cambios realizados, facilitando la comprensión rápida del impacto de cada actualización.")])]),e("p",{staticClass:"mb-0"},[t._v("La documentación de cambios entre versiones debe incluir no solo qué se modificó, sino también por qué se realizaron los cambios. Esta información contextual resulta invaluable para comprender la evolución del análisis y las decisiones tomadas en diferentes momentos del proyecto.")])]),e("div",{staticClass:"col-lg-5 order-first order-lg-last",attrs:{"data-aos":"fade-left"}},[e("figure",{staticClass:"mb-4 mb-lg-0"},[e("img",{staticClass:"mx-auto",staticStyle:{"max-width":"393px"},attrs:{src:s("b915")}})])])])}],o=s("8564"),n={name:"Tema2",components:{SlyderA:o["a"]},data:()=>({}),mounted(){this.$nextTick(()=>{this.$aosRefresh()})},updated(){this.$aosRefresh()}},c=n,l=s("2877"),r=Object(l["a"])(c,a,i,!1,null,null,null);e["default"]=r.exports},fff0:function(t,e,s){"use strict";s("bec2")}}]);
//# sourceMappingURL=tema2.39d983fa.js.map