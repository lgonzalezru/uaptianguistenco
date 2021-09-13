
var json ={
 locale: "es",
 title: {
  es: "Encuesta General ProTEP"
 },
 completedHtml: {
  es: "<h2>Gracias por contestar la encuesta.</h2>\n<a class=\"btn btn-success btn-lg btn-block\" href=\"./\">Volver a inicio</a>\n"
 },
 pages: [
  {
   name: "page1",
   elements: [
    {
     type: "radiogroup",
     name: "P1",
     title: "¿Trabajas actualmente? (considera cualquier actividad remunerada)",
     isRequired: true,
     choices: [
      {
       value: "Sí",
       text: "Sí"
      },
      {
       value: "No",
       text: "No"
      }
     ]
    },
    {
     type: "html",
     name: "question3"
    }
   ]
  },
  {
   name: "page2",
   elements: [
    {
     type: "radiogroup",
     name: "P2",
     title: "¿Tu trabajo actual es el primer empleo después de haber egresado?",
     enableIf: "{P1} = 'Sí'",
     isRequired: true,
     choices: [
      {
       value: "Sí",
       text: "Sí"
      },
      {
       value: "No",
       text: "No"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "P3",
     visibleIf: "{P2} = 'Sí'",
     title: "¿Cuánto tiempo tardaste en obtener este empleo?",
     enableIf: "{P2} = 'Sí'",
     choices: [
      {
       value: "Menos de 6 meses",
       text: "Menos de 6 meses"
      },
      {
       value: "De 6 a 9 meses",
       text: "De 6 a 9 meses"
      },
      {
       value: "De 9 a 12 meses",
       text: "De 9 a 12 meses"
      },
      {
       value: "Más de 1 año",
       text: "Más de 1 año"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "P4",
     visibleIf: "{P2} = 'No'",
     title: {
      es: "¿Cuánto tiempo tardaste en obtener tu primer empleo?"
     },
     enableIf: "{P2} = 'No'",
     isRequired: true,
     choices: [
      "Menos de 6 meses",
      "De 6 a 9 meses",
      "De 9 a 12 meses",
      "Más de 1 año"
     ]
    },
    {
     type: "text",
     name: "P5",
     title: {
      es: "Fecha de contratación aproximada de tu empleo actual"
     },
     isRequired: true,
     inputType: "date"
    }
   ],
   visibleIf: "{P1} = 'Sí'"
  },
  {
   name: "page3",
   elements: [
    {
     type: "radiogroup",
     name: "P6",
     title: {
      es: "Medio a través del cual encontraste tu empleo actual"
     },
     isRequired: true,
     hasOther: true,
     choices: [
      "Bolsa de trabajo",
      "Bolsa de trabajo virtual",
      "Red social",
      "Recomendación de conocidos",
      "Negocio propio",
      "Prácticas profesionales",
      "Servicio social",
      "Feria del empleo"
     ],
     otherText: {
      es: "Otro (especifica)"
     }
    },
    {
            type: "nouislider",
            name: "P7",
            title: {
      es: "Indica el nivel de relación que tienen las actividades laborales que desempeñas con tu formación profesional."
     },
     "isRequired": true
        },
    {
     type: "text",
     name: "P8",
     title: {
      es: "Nombre de la empresa, institución u organismo donde laboras."
     },
     isRequired: true
    },
    {
     type: "radiogroup",
     name: "P9",
     title: {
      es: "Régimen jurídico al que pertenece la empresa, institución u organización en la que trabajas:"
     },
     isRequired: true,
     choices: [
      "Sector público",
      "Sector privado",
      {
       value: "Sector social (ONG, patronato)",
       text: {
        es: "Sector social"
       }
      },
      "Autoempleados",
      "Empresa propia"
     ]
    },
    {
     type: "dropdown",
     name: "P10",
     title: {
      es: "Entidad donde actualmente laboras"
     },
     isRequired: true,
     choices: [
      "En el Extranjero",
      "Aguascalientes",
      "Baja California",
      "Baja California Sur",
      "Campeche",
      "Chiapas",
      "Chihuahua",
      "Coahuila",
      "Colima",
      "Ciudad de México",
      "Durango",
      "Estado de México",
      "Guanajuato",
      "Guerrero",
      "Hidalgo",
      "Jalisco",
      "Michoacán",
      "Morelos",
      "Nayarit",
      "Nuevo León",
      "Oaxaca",
      "Puebla",
      "Querétaro",
      "Quintana Roo",
      "San Luis Potosí",
      "Sinaloa",
      "Sonora",
      "Tabasco",
      "Tamaulipas",
      "Tlaxcala",
      "Veracruz",
      "Yucatán",
      "Zacatecas"
     ]
    },
    {
     type: "dropdown",
     name: "P11",
     visibleIf: "{P10} = \"Estado de México\"",
     title: {
      es: "Si es dentro del Estado de México, especifica en qué Municipio"
     },
     isRequired: true,
     choices: [
      "Acambay",
      "Acolman",
      "Aculco",
      "Almoloya de Alquisiras",
      "Almoloya de Juárez",
      "Almoloya del Río",
      "Amanalco",
      "Amatepec",
      "Amecameca",
      "Apaxco",
      "Atenco",
      "Atizapán",
      "Atizapán de Zaragoza",
      "Atlacomulco",
      "Atlautla",
      "Axapusco",
      "Ayapango",
      "Calimaya",
      "Capulhuac",
      "Chalco",
      "Chapa de Mota",
      "Chapultepec",
      "Chiautla",
      "Chicoloapan",
      "Chiconcuac",
      "Chimalhuacán",
      "Coacalco de Berriozábal",
      "Coatepec Harinas",
      "Cocotitlán",
      "Coyotepec",
      "Cuautitlán",
      "Cuautitlán Izcalli",
      "Donato Guerra",
      "Ecatepec de Morelos",
      "Ecatzingo",
      "El Oro",
      "Huehuetoca",
      "Hueypoxtla",
      "Huixquilucan",
      "Isidro Fabela",
      "Ixtapaluca",
      "Ixtapan de la Sal",
      "Ixtapan del Oro",
      "Ixtlahuaca",
      "Jaltenco",
      "Jilotepec",
      "Jilotzingo",
      "Jiquipilco",
      "Jocotitlán",
      "Joquicingo",
      "Juchitepec",
      "La Paz",
      "Lerma",
      "Luvianos",
      "Malinalco",
      "Melchor Ocampo",
      "Metepec",
      "Mexicaltzingo",
      "Morelos",
      "Naucalpan de Juárez",
      "Nextlalpan",
      "Nezahualcóyotl",
      "Nicolás Romero",
      "Nopaltepec",
      "Ocoyoacac",
      "Ocuilan",
      "Otumba",
      "Otzoloapan",
      "Otzolotepec",
      "Ozumba",
      "Papalotla",
      "Polotitlán",
      "Rayón",
      "San Antonio la Isla",
      "San Felipe del Progreso",
      "San José del Rincón",
      "San Martín de las Pirámides",
      "San Mateo Atenco",
      "San Simón de Guerrero",
      "Santo Tomás",
      "Soyaniquilpan de Juárez",
      "Sultepec",
      "Tecámac",
      "Tejupilco",
      "Temamatla",
      "Temascalapa",
      "Temascalcingo",
      "Temascaltepec",
      "Temoaya",
      "Tenancingo",
      "Tenango del Aire",
      "Tenango del Valle",
      "Teoloyucan",
      "Teotihuacán",
      "Tepetlaoxtoc",
      "Tepetlixpa",
      "Tepotzotlán",
      "Tequixquiac",
      "Texcaltitlán",
      "Texcalyacac",
      "Texcoco",
      "Tezoyuca",
      "Tianguistenco",
      "Timilpan",
      "Tlalmanalco",
      "Tlalnepantla de Baz",
      "Tlatlaya",
      "Toluca",
      "Tonanitla",
      "Tonatico",
      "Tultepec",
      "Tultitlán",
      "Valle de Bravo",
      "Valle de Chalco Solidaridad",
      "Villa de Allende",
      "Villa del Carbón",
      "Villa Guerrero",
      "Villa Victoria",
      "Xalatlaco",
      "Xonacatlán",
      "Zacazonapan",
      "Zacualpan",
      "Zinacantepec",
      "Zumpahuacán",
      "Zumpango"
     ]
    }
   ],
   visibleIf: "{P1} = 'Sí'"
  },
  {
   name: "page4",
   elements: [
    {
     type: "dropdown",
     name: "P12",
     title: {
      es: "El puesto que actualmente ocupas es:"
     },
     isRequired: true,
     choices: [
      "Funcionario / director / jefe",
      "Profesionista / técnico",
      "Trabajador auxiliar en actividades administrativas",
      "Comerciante / empleado en ventas / agente de venta",
      "Trabajador en servicios personales y vigilancia",
      "Trabajador en actividades agrícolas / ganaderas / forestales / caza / pesca.",
      "Trabajador artesanal",
      "Operador de maquinaria industrial / ensamblador / chofer / conductor de transporte",
      "Trabajador en actividades elementales y de apoyo"
     ]
    },
    {
     type: "dropdown",
     name: "P13",
     visibleIf: "{P12} = 'Funcionario / director / jefe'",
     title: {
      es: "Funcionario / director / jefe"
     },
     isRequired: true,
     choices: [
      "Funcionario / alta autoridad dentro de los sectores público, privado y social",
      "Director / gerente en servicios financieros, administrativos y sociales",
      "Director / gerente en producción, tecnología y transporte",
      "Director / gerentes de ventas, restaurantes, hoteles y otros establecimientos",
      "Coordinador / jefe de área en servicios financieros, administrativos y sociales",
      "Coordinador / jefe de área en producción y tecnología",
      "Coordinador / jefe de área de ventas, restaurantes, hoteles y otros establecimientos",
      "Otros directores, funcionarios, gerentes, coordinadores y jefes de área, no clasificados anteriormente"
     ]
    },
    {
     type: "dropdown",
     name: "P14",
     visibleIf: "{P12} = 'Profesionista / técnico'",
     title: {
      es: "Profesionista / técnico"
     },
     isRequired: true,
     choices: [
      "Especialista en ciencias económico-administrativas, ciencias sociales, humanistas y en artes",
      "Investigador / especialistas en ciencias exactas, biológicas, ingeniería, informática, y en telecomunicaciones",
      "Profesor / especialista en docencia",
      "Médicos / enfermeros y otros especialistas en salud",
      "Auxiliar / técnico en ciencias económico-administrativas, ciencias sociales, humanistas y en artes",
      "Auxiliar / técnico en ciencias exactas, biológicas, ingeniería, informática y en telecomunicaciones",
      "Auxiliar / técnico en educación / instructor",
      "Técnico en medicina / trabajador de apoyo en la salud",
      "Otros especialistas y técnicos, no clasificados anteriormente"
     ]
    },
    {
     type: "dropdown",
     name: "P15",
     visibleIf: "{P12} = 'Trabajador auxiliar en actividades administrativas'",
     title: {
      es: "Trabajador / auxiliar en actividades administrativas"
     },
     isRequired: true,
     choices: [
      "Secretario / capturista / cajero / trabajadores de control de archivo y transporte",
      "Trabajador que brinda y maneja información",
      "Otras secretarias, capturistas, cajeros y trabajadores que brindan información, no clasificados anteriormente"
     ]
    },
    {
     type: "dropdown",
     name: "P16",
     visibleIf: "{P12} = 'Comerciante / empleado en ventas / agente de venta'",
     title: {
      es: "Comerciante / empleado en ventas / agente de ventas"
     },
     isRequired: true,
     choices: [
      "Comerciante en establecimiento",
      "Empleado de ventas en establecimiento",
      "Trabajador en el alquiler de equipo",
      "Otros comerciantes, empleados en ventas y agentes de ventas en establecimientos, no clasificados anteriormente"
     ]
    },
    {
     type: "dropdown",
     name: "P17",
     visibleIf: "{P12} = 'Trabajador en servicios personales y vigilancia'",
     title: {
      es: "Trabajador en servicios personales / vigilancia"
     },
     isRequired: true,
     choices: [
      "Trabajador en la preparación y servicio de alimentos y bebidas en establecimientos",
      "Trabajador en cuidados personales y del hogar",
      "Trabajador en servicios de protección y vigilancia",
      "Trabajador de la Armada, Ejército y Fuerza Aérea",
      "Otras ocupaciones en servicios personales y vigilancia, no clasificadas anteriormente"
     ]
    },
    {
     type: "dropdown",
     name: "P18",
     visibleIf: "{P12} = 'Trabajador en actividades agrícolas / ganaderas / forestales / caza / pesca.'",
     title: {
      es: "Trabajador en actividades agrícolas / ganaderas / forestales / caza / pesca"
     },
     isRequired: true,
     choices: [
      "Trabajador en actividades agrícolas y ganaderas",
      "Trabajador en actividades pesqueras, forestales, caza y similares",
      "Operador de maquinaria agropecuaria y forestal",
      "Otros trabajadores en actividades agrícolas, ganaderas, forestales, caza y pesca, no clasificados anteriormente"
     ]
    },
    {
     type: "dropdown",
     name: "P19",
     visibleIf: "{P12} = 'Trabajador artesanal'",
     title: {
      es: "Trabajador artesanal"
     },
     isRequired: true,
     choices: [
      "Trabajador en la extracción y la edificación de construcciones",
      "Artesano / trabajador en el tratamiento y elaboración de productos de metal",
      "Artesano / trabajador en la elaboración de productos de madera, papel, textiles y de cuero y piel",
      "Artesano / trabajador en la elaboración de productos de hule, caucho, plásticos y de sustancias químicas",
      "Trabajador en la elaboración y procesamientos de alimentos, bebidas y productos de tabaco",
      "Artesano / trabajador en la elaboración de productos de cerámica, vidrio, azulejo y similares",
      "Otros trabajadores artesanales, no clasificados anteriormente"
     ]
    },
    {
     type: "dropdown",
     name: "P20",
     visibleIf: "{P12} = 'Operador de maquinaria industrial / ensamblador / chofer / conductor de transporte'",
     title: {
      es: "Operador de maquinaria industrial/ ensamblador / chofer / conductor de transporte"
     },
     isRequired: true,
     choices: [
      "Operador de instalaciones y maquinaria industrial",
      "Ensamblador / montadores de herramientas, maquinaria, productos metálicos y electrónicos",
      "Conductor de transporte y de maquinaria móvil",
      "Otros operadores de maquinaria industrial, ensambladores y conductores de transporte, no clasificados anteriormente"
     ]
    },
    {
     type: "dropdown",
     name: "P21",
     visibleIf: "{P12} = 'Trabajador en actividades elementales y de apoyo'",
     title: {
      es: "Trabajador en actividades elementales y de apoyo."
     },
     isRequired: true,
     choices: [
      "Trabajado de apoyo en actividades agropecuarias, forestales, pesca y caza",
      "Trabajador de apoyo en la minería, construcción e industria",
      "Ayudante de conductores de transporte, conductores de transporte de tracción humana y animal y cargadores",
      "Ayudante en la preparación de alimentos",
      "Vendedor ambulante",
      "Trabajador doméstico, de limpieza, planchadores y otros trabajadores de limpieza",
      "Trabajador de paquetería, de apoyo para espectáculos y repartidores de mercancías",
      "Otros trabajadores en actividades elementales y de apoyo, no clasificados anteriormente"
     ]
    }
   ],
   visibleIf: "{P1} = 'Sí'"
  },
  {
   name: "page5",
   elements: [
    {
     type: "radiogroup",
     name: "P22",
     title: {
      es: "Actividad económica en la cual te desempeñas:"
     },
     isRequired: true,
     choices: [
      "Agricultura, cría y explotación de animales, aprovechamiento forestal, pesca y caza",
      "Minería",
      "Generación, transmisión y distribución de energía eléctrica, suministro de agua y de gas por ductos al consumidor final",
      "Construcción",
      "Industria manufacturera",
      "Comercio al por mayor",
      "Comercio al por menor",
      "Transportes, servicios postales, correos y almacenamiento",
      "Información en medios masivos",
      "Servicios financieros y de seguros",
      "Servicios inmobiliarios y de alquiler de bienes muebles e intangibles",
      "Servicios profesionales, científicos y técnicos",
      "Corporativos",
      "Servicios de apoyo a los negocios y manejo de desechos y servicios de remediación",
      "Servicios educativos",
      "Servicios de salud y de asistencia social",
      "Servicios de esparcimiento culturales y deportivos, y otros servicios recreativos",
      "Servicios de alojamiento temporal y de preparación de alimentos y bebidas",
      "Otros servicios excepto actividades gubernamentales",
      "Actividades legislativas, gubernamentales, de impartición de justicia y de organismos internacionales y extraterritoriales "
     ],
     colCount: 2
    },
    {
     type: "matrix",
     name: "P23",
     title: {
      es: "Califica del 1 (nada importante o no influyente) al 5 (muy importante o muy influyente) las razones o los factores que hicieron que te contrataran: (excepto becarios, autónomos por cuenta propia y dueños de negocio propio o familiar)"
     },
     isRequired: true,
     columns: [
      "1",
      "2",
      "3",
      "4",
      "5",
      {
       value: "0",
       text: {
        es: "N/A"
       }
      }
     ],
     rows: [
      "Los conocimientos teóricos ",
      "Los conocimientos prácticos ",
      "Dominio del inglés",
      "La formación en el uso de la informática y de las nuevas tecnologías",
      "La manera de ser: personalidad, habilidades sociales, comunicación...",
      "La capacidad de gestión y planificación",
      "La capacidad de trabajar en grupo",
      "El prestigio de la UAEMex"
     ],
     isAllRowRequired: true
    }
   ],
   visibleIf: "{P1} = 'Sí'"
  },
  {
   name: "page5.1",
   elements: [
    {
     type: "matrix",
     name: "P24",
     title: {
      es: "De acuerdo con tu experiencia actual y la (s) actividad (es) que desarrollas, indícanos, por favor, cuál es el grado de exigencia que enfrentas en tu trabajo conforme a los siguientes aspectos (aunque personalmente no tengas dificultades para cumplir los requerimientos)."
     },
     isRequired: true,
     columns: [
      "Nada",
      "Poco",
      "Regular",
      "Alta",
      "Muy alta"
     ],
     rows: [
      "Desarrollo de proyectos de investigación (básica o aplicada).",
      "Habilidad en el manejo de paquetes computacionales.",
      "Habilidad para relaciones humanas.",
      "Habilidad para tomar decisiones.",
      "Habilidad para identificar problemas y encontrar soluciones.",
      "Habilidad para trabajar en equipo.",
      "Habilidad para comunicación oral y escrita (lengua materna).",
      "Habilidad para comunicación oral y escrita (inglés).",
      "Disposición para enfrentar retos.",
      "Adaptación a cambios organizacionales y nuevas tecnologías"
     ],
     isAllRowRequired: true
    }
   ],
   visibleIf: "{P1} = 'Sí'"
  },
  {
   name: "page6",
   elements: [
    {
     type: "radiogroup",
     name: "P25",
     title: {
      es: "Tiempo dedicado al empleo"
     },
     isRequired: true,
     choices: [
      "Tiempo completo",
      "Medio tiempo",
      "Eventual"
     ]
    },
    {
     type: "radiogroup",
     name: "P26",
     title: {
      es: "El salario mensual que percibes, en pesos mexicanos, asciende a (incluyendo bonos y prestaciones):"
     },
     isRequired: true,
     choices: [
      "Menos de 2,999 pesos",
      "De 3,000 a 4,999 pesos",
      "De 5,000 a 6,999 pesos",
      "De 7,000 a 9,999 pesos",
      "De 10,000 a 14,999 pesos",
      "Más de 15,000 pesos"
     ]
    },
    {
     type: "multipletext",
     name: "P27",
     title: {
      es: "La UAEM evalúa la pertinencia de sus programas educativos, para ello realiza estudios de opinión de empleadores; si consideras que tu jefe inmediato participaría, proporciona los datos siguientes:"
     },
     items: [
      {
       name: "text1",
       title: {
        es: "Nombre del jefe inmediato:"
       }
      },
      {
       name: "text2",
       title: {
        es: "Puesto del jefe inmediato:"
       }
      },
      {
       name: "text3",
       title: "Correo electrónico del jefe inmediato:"
      },
      {
       name: "text4",
       title: "Número de teléfono de la oficina:"
      }
     ]
    }
   ],
   visibleIf: "{P1} = 'Sí'"
  },
  {
   name: "page6.1",
   elements: [
    {
     type: "radiogroup",
     name: "P28",
     title: {
      es: "Número de empleos que has tenido desde tu egreso"
     },
     isRequired: true,
     choices: [
      "1",
      "2",
      "3",
      "4 o más"
     ]
    },
    {
     type: "checkbox",
     name: "P29",
     visibleIf: "{P28} <> \"1\"",
     title: {
      es: "¿Cuáles han sido las causas más frecuentes de tu cambio de empleo? (Puedes seleccionar más de una opción)"
     },
     enableIf: "{P28} <> \"1\"",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: {
        es: "Bajo salario"
       }
      },
      {
       value: "2",
       text: {
        es: "Pocas oportunidades de crecimiento"
       }
      },
      {
       value: "3",
       text: {
        es: "Pocas prestaciones"
       }
      },
      {
       value: "4",
       text: {
        es: "Ambiente laboral"
       }
      },
      {
       value: "5",
       text: {
        es: "Recorte de personal"
       }
      },
      {
       value: "6",
       text: {
        es: "Cambio de residencia"
       }
      },
      {
       value: "7",
       text: {
        es: "Mejor oferta de trabajo"
       }
      }
     ],
     colCount: 3
    },
    {
     type: "radiogroup",
     name: "P30",
     visibleIf: "{P28} notempty",
     title: {
      es: "Además de trabajar en una empresa, institución u organización, ¿cuentas con alguna actividad remunerada adicional?"
     },
     isRequired: true,
     choices: [
      {
       value: "Sí",
       text: {
        es: "Sí"
       }
      },
      {
       value: "No",
       text: {
        es: "No"
       }
      }
     ]
    },
    {
     type: "radiogroup",
     name: "P31",
     visibleIf: "{P30} = 'Sí'",
     title: {
      es: "Si es así, precisa cuál:"
     },
     isRequired: true,
     hasOther: true,
     choices: [
      "Negocio propio",
      "Negocio familiar",
      "Empresa propia",
      "Consultoría"
     ]
    }
   ],
   visibleIf: "{P1} = 'Sí'"
  },
  {
   name: "page7",
   elements: [
    {
     type: "radiogroup",
     name: "P32",
     title: {
      es: "Razón principal por la que no has logrado conseguir trabajo:"
     },
     isRequired: true,
     hasOther: true,
     choices: [
      "Estudio de posgrado de tiempo completo",
      "Bajos salarios",
      "Horarios",
      "No cumplir con la experiencia profesional solicitada",
      "Falta de título o cédula profesional",
      "Se solicita dominio del idioma inglés",
      "Asuntos personales",
      "Pocas oportunidades de empleo",
      "Oportunidades poco atractivas",
      "Falta de conocimientos"
     ],
     choicesOrder: "random"
    }
   ],
   visibleIf: "{P1} = 'No'"
  },
  {
   name: "page8",
   elements: [
    {
     type: "matrix",
     name: "P33",
     title: {
      es: "Cuál es tu grado de satisfacción respecto a:"
     },
     isRequired: true,
     columns: [
      "Nada satisfecho",
      "Poco satisfecho",
      "Satisfecho",
      "Muy satisfecho"
     ],
     rows: [
      "El desarrollo de tu carrera profesional",
      "La formación recibida en la UAEM"
     ],
     isAllRowRequired: true
    },
    {
     type: "radiogroup",
     name: "P34",
     title: {
      es: "¿Si tuvieras que cursar nuevamente tu licenciatura u otra ¿elegirías inscribirte en la UAEM?"
     },
     isRequired: true,
     choices: [
      "Sí",
      "No"
     ]
    },
    {
     type: "radiogroup",
     name: "P35",
     title: {
      es: "¿Has considerado cursar un posgrado en la UAEM?"
     },
     isRequired: true,
     choices: [
      "Sí",
      "No"
     ]
    },
    {
     type: "dropdown",
     name: "P36",
     visibleIf: "{P35} = 'Sí'",
     title: {
      es: "En cuál área del conocimiento"
     },
     isRequired: true,
     choices: [
      "Biología y Química",
      "Biología, Química y Ciencias de la Vida",
      "Biotecnología y Ciencias Agropecuarias",
      "Ciencias Sociales y Económico-Administrativas",
      "Físico-matemáticas y Ciencias de la Tierra",
      "Humanidades y Ciencias de la Conducta",
      "Ingeniería",
      "Medicina y Ciencias de la Salud"
     ]
    },
    {
     type: "dropdown",
     name: "P37",
     visibleIf: "{P35} = 'Sí' and {P36} = 'Biología y Química'",
     title: {
      es: "Biología y Química"
     },
     isRequired: true,
     choices: [
      "Maestría en Ciencias y Tecnología Farmacéuticas",
      "Doctorado en Ciencias y Tecnología Farmacéuticas"
     ],
     optionsCaption: {
      es: "Selecciona un posgrado"
     }
    },
    {
     type: "dropdown",
     name: "P38",
     visibleIf: "{P35} = 'Sí' and {P36} = 'Biología, Química y Ciencias de la Vida'",
     title: {
      es: "Biología, Química y Ciencias de la Vida"
     },
     isRequired: true,
     choices: [
      "Maestría en Ciencias Químicas",
      "Doctorado en Ciencias Químicas"
     ],
     optionsCaption: {
      es: "Selecciona un posgrado"
     }
    },
    {
     type: "dropdown",
     name: "P39",
     visibleIf: "{P36} = 'Biotecnología y Ciencias Agropecuarias' and {P35} = 'Sí'",
     title: {
      es: "Biotecnología y Ciencias Agropecuarias"
     },
     isRequired: true,
     choices: [
      "Especialidad en Floricultura",
      "Especialidad en Medicina y Cirugía de perros y gatos",
      "Especialidad en Producción Ovina",
      "Maestría en Ciencias Agropecuarias y Recursos Naturales",
      "Doctorado en Ciencias Agropecuarias y Recursos Naturales"
     ],
     optionsCaption: {
      es: "Selecciona un posgrado"
     }
    },
    {
     type: "dropdown",
     name: "P40",
     visibleIf: "{P36} = 'Ciencias Sociales y Económico-Administrativas' and {P35} = 'Sí'",
     title: {
      es: "Ciencias Sociales y Económico-Administrativas"
     },
     isRequired: true,
     choices: [
      "Especialidad en Administración de Empresas Turisticas",
      "Especialidad en Derecho Civil",
      "Especialidad en Género Violencia y Políticas Públicas",
      "Maestría en Administración",
      "Maestría en Administración Pública y Gobierno",
      "Maestría en Administración de Recursos Humanos",
      "Maestría en Agroindustria Rural, Desarrollo Territorial y Turismo Agroalimentario",
      "Maestría en Análisis Espacial y Geoinformática",
      "Maestría en Ciencia Jurídica",
      "Maestría en Creación y Estrategias de Negocios",
      "Maestría en Derecho",
      "Maestría en Derecho Parlamentario",
      "Maestría en Estudios de la Ciudad",
      "Maestría en Estudios Jurídicos",
      "Maestría en Estudios para la Paz y el Desarrollo",
      "Maestría en Estudios Sustentables, Regionales y Metropolitanos",
      "Maestría en Estudios Turísticos",
      "Maestría en Gobierno y Asuntos Públicos",
      "Maestría en Procesos Jurídicos",
      "Maestría en Sociología de la Salud",
      "Doctorado en Ciencia Jurídica",
      "Doctorado en Ciencias Económico-Administrativas",
      "Doctorado en Ciencias Sociales ",
      "Doctorado en Derecho Parlamentario",
      "Doctorado en Estudios Jurídicos",
      "Doctorado en Estudios para el Desarrollo Humano",
      "Doctorado en Sustentabilidad para el Desarrollo",
      "Doctorado en Urbanismo"
     ],
     optionsCaption: {
      es: "Selecciona un posgrado"
     }
    },
    {
     type: "dropdown",
     name: "P41",
     visibleIf: "{P36} = 'Físico-matemáticas y Ciencias de la Tierra' and {P35} = 'Sí'",
     title: {
      es: "Físico-matemáticas y Ciencias de la Tierra"
     },
     choices: [
      "Especialidad en Cartografia Automatizada, Teledetección y Sistemas de Información Geográfica",
      "Maestría en Calidad Ambiental",
      "Maestría en Ciencias",
      "Maestría en Ciencias Ambientales",
      "Doctorado en Ciencias Ambientales"
     ]
    },
    {
     type: "dropdown",
     name: "P42",
     visibleIf: "{P36} = 'Humanidades y Ciencias de la Conducta' and {P35} = 'Sí'",
     title: {
      es: "Humanidades y Ciencias de la Conducta"
     },
     isRequired: true,
     choices: [
      "Especialidad en Intervención Clínica Psicoanalítica",
      "Maestría en Diseño",
      "Maestría en Enseñanza del Inglés",
      "Maestría en Estudios Visuales",
      "Maestría en Humanidades",
      "Maestría en Lingüística Aplicada",
      "Maestría en Práctica Docente",
      "Maestría en Psicologia",
      "Doctorado en Ciencias",
      "Doctorado en Critica de la Cultura y la Creación Artística",
      "Doctorado en Diseño",
      "Doctorado en Humanidades",
      "Doctorado en Psicología"
     ],
     optionsCaption: {
      es: "Selecciona un posgrado"
     }
    },
    {
     type: "dropdown",
     name: "P43",
     visibleIf: "{P36} = 'Ingeniería' and {P35} = 'Sí'",
     title: {
      es: "Ingeniería"
     },
     choices: [
      " Especialidad en Valuación de Bienes Inmuebles",
      "Maestría en Ciencia de Materiales",
      "Maestría en Ciencias de la Computación",
      "Maestría en Ciencias de la Ingeniería",
      "Maestría en Ciencias del Agua",
      "Maestría en Ingeniería de la Cadena de Suministro",
      "Doctorado en Ciencia de Materiales",
      "Doctorado en Ciencias de la Computación",
      "Doctorado en Ciencias de la Ingeniería",
      "Doctorado en Ciencias del Agua"
     ],
     optionsCaption: {
      es: "Selecciona un posgrado"
     }
    },
    {
     type: "dropdown",
     name: "P44",
     visibleIf: "{P36} = 'Medicina y Ciencias de la Salud' and {P35} = 'Sí'",
     title: {
      es: "Medicina y Ciencias de la Salud"
     },
     choices: [
      "Especialidad de Enfermería en Salud Familiar",
      "Especialidad en Anestesiologia",
      "Especialidad en Cardiología",
      "Especialidad en Cirugia General",
      "Especialidad en Cirugia Maxilofacial",
      "Especialidad en Cirugía Oncológica",
      "Especialidad en Cirugia Pediatrica",
      "Especialidad en Cirugía Plástica y Reconstructiva",
      "Especialidad en Endodoncia",
      "Especialidad en Geriatria",
      "Especialidad en Gerontología",
      "Especialidad en Ginecologia y Obstetricia",
      "Especialidad en Imagenología Diagnóstica Terapéutica",
      "Especialidad en Medicina Crítica en Obstetricia",
      "Especialidad en Medicina de la Actividad Física y el Deporte",
      "Especialidad en Medicina de Rehabilitación",
      "Especialidad en Medicina de Urgencias",
      "Especialidad en Medicina del Enfermo en Estado Crítico",
      "Especialidad en Medicina Familiar",
      "Especialidad en Medicina Interna",
      "Especialidad en Medicina Legal",
      "Especialidad en Neonatología",
      "Especialidad en Neurocirugía",
      "Especialidad en Odontopediatria",
      "Especialidad en Oncología Médica",
      "Especialidad en Ortodoncia",
      "Especialidad en Ortopedia",
      "Especialidad en Otorrinolaringología",
      "Especialidad en Pediatría",
      "Especialidad en Radiooncología",
      "Especialidad en Salud Pública",
      "Especialidad en Urología",
      "Espedialidad en Gastroenterología",
      "Maestría en Ciencias de la Salud",
      "Maestría en Ciencias Odontológicas",
      "Maestría en Enfermería",
      "Maestría en Física Médica",
      "Doctorado en Ciencias de la Salud"
     ],
     optionsCaption: {
      es: "Selecciona un posgrado"
     }
    }
   ]
  },
  {
   name: "page9",
   elements: [
    {
     type: "matrix",
     name: "P45",
     title: {
      es: "Señala en qué medida la formación de licenciatura te preparó para lo siguiente:"
     },
     isRequired: true,
     columns: [
      "Nada",
      "Poco",
      "Lo suficiente",
      "Mucho"
     ],
     rows: [
      "Optar por trabajos en distintos sectores económicos.",
      "Vincularse con alguna institución/empresa en particular.",
      "Desarrollarse de manera independiente."
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "P46",
     title: {
      es: "Indica el grado de énfasis que otorgarías a los diferentes contenidos en el plan de estudios de licenciatura que cursaste"
     },
     isRequired: true,
     columns: [
      "No aplica",
      "Nada",
      "Poco énfasis",
      "Lo suficiente",
      "Mucho énfasis"
     ],
     rows: [
      "Enseñanza teórica",
      "Enseñanza metodológica",
      "Enseñanza de matemáticas y estadística",
      "Prácticas de laboratorio, de campo, en talleres, clínicas, etc",
      "Uso de herramientas TIC, software o simuladores"
     ],
     isAllRowRequired: true
    }
   ]
  },
  {
   name: "page9.1",
   elements: [
    {
     type: "matrix",
     name: "P47",
     title: {
      es: "¿Qué modificaciones sugerirías al plan de estudios que cursaste?"
     },
     isRequired: true,
     columns: [
      "No aplica",
      "Reducir",
      "Mantener",
      "Ampliar"
     ],
     rows: [
      "Contenidos teóricos",
      "Contenidos metodológicos",
      "Contenidos técnicos",
      "Prácticas de laboratorio, talleres, otras (en su caso)",
      "Prácticas profesionales",
      "Enseñanza de las matemáticas",
      "Enseñanza de paquetes computacionales",
      "Enseñanza de ciencias sociales y humanísticas, comunicación"
     ],
     isAllRowRequired: true
    }
   ]
  },
  {
   name: "page10",
   elements: [
    {
     type: "dropdown",
     name: "P48",
     title: {
      es: "Selecciona tu plan de estudios. Y posteriormente indica cómo calificarías el desarrollo que lograste en las siguientes competencias profesionales."
     },
     isRequired: true,
     choices: [
      {
       value: "APO",
       text: "Licenciatura en Administración y Promoción de la Obra Urbana"
      },
      {
       value: "ARL",
       text: "Licenciatura en Arqueología"
      },
      {
       value: "ARQ",
       text: "Licenciatura en Arquitectura"
      },
      {
       value: "BIO",
       text: "Licenciatura en Biología"
      },
      {
       value: "CDE",
       text: "Licenciatura de Cirujano Dentista"
      },
      {
       value: "CIA",
       text: "Licenciatura en Ciencias Ambientales"
      },
      {
       value: "LDA",
       text: "Licenciatura en Danza"
      },
      {
       value: "FIS",
       text: "Licenciatura en Física"
      },
      {
       value: "IAC",
       text: "Licenciatura de Ingeniero Agrónomo en Floricultura"
      },
      {
       value: "IAF",
       text: "Licenciatura de Ingeniero Agrónomo Fitotecnista"
      },
      {
       value: "IAI",
       text: "Licenciatura de Ingeniero Agrónomo Industrial"
      },
      {
       value: "IAP",
       text: "Licenciatura de Ingeniero Agrónomo en Producción"
      },
      {
       value: "IAZ",
       text: "Licenciatura de Ingeniero Agrónomo Zootecnista"
      },
      {
       value: "ICI",
       text: "Licenciatura en Ingeniería Civil"
      },
      {
       value: "ICO",
       text: "Licenciatura en Ingeniería en Computación"
      },
      {
       value: "IEL",
       text: "Licenciatura en Ingeniería en Electrónica"
      },
      {
       value: "IIN",
       text: "Licenciatura en Ingeniería Industrial"
      },
      {
       value: "IME",
       text: "Licenciatura en Ingeniería Mecánica"
      },
      {
       value: "IPI",
       text: "Licenciatura de Ingeniero en Producción Industrial"
      },
      {
       value: "IPL",
       text: "Licenciatura de Ingeniero en Plásticos"
      },
      {
       value: "IPQ",
       text: "Licenciatura en Ingeniería Petroquímica"
      },
      {
       value: "IQU",
       text: "Licenciatura de Ingeniería Química"
      },
      {
       value: "ISES",
       text: "Licenciatura en Ingeniería en Sistemas Energéticos Sustentables "
      },
      {
       value: "ISI",
       text: "Licenciatura en Ingeniería en Sistemas Inteligentes"
      },
      {
       value: "ISW",
       text: "Licenciatura de Ingeniero en Software"
      },
      {
       value: "ITR",
       text: "Licenciatura en Ingeniería en Transportes"
      },
      {
       value: "LAC",
       text: "Licenciatura en Actuaría"
      },
      {
       value: "LADI",
       text: "Licenciatura en Arte Digital "
      },
      {
       value: "LAM",
       text: "Licenciatura en Administración"
      },
      {
       value: "LAMD",
       text: {
        default: "Licenciado en Administración Distancia",
        es: "Licenciatura en Administración a Distancia"
       }
      },
      {
       value: "LAP",
       text: "Licenciatura en Artes Plásticas"
      },
      {
       value: "LAS",
       text: "Licenciatura en Antropología Social"
      },
      {
       value: "LBM",
       text: "Licenciatura en Bioingeniería Médica "
      },
      {
       value: "LBT",
       text: "Licenciatura en Biotecnología "
      },
      {
       value: "LCFD",
       text: "Licenciatura en Cultura Física y Deporte"
      },
      {
       value: "LCI",
       text: "Licenciatura en Comercio Internacional"
      },
      {
       value: "LCM",
       text: "Licenciatura en Estudios Cinematográficos"
      },
      {
       value: "LCN",
       text: "Licenciatura en Contaduría"
      },
      {
       value: "LCO",
       text: "Licenciatura en Comunicación"
      },
      {
       value: "LCP",
       text: "Licenciatura en Ciencias Políticas y Administración Pública"
      },
      {
       value: "LDE",
       text: "Licenciatura en Derecho"
      },
      {
       value: "LDG",
       text: "Licenciatura en Diseño Gráfico"
      },
      {
       value: "LDI",
       text: "Licenciatura en Diseño Industrial"
      },
      {
       value: "LDT",
       text: "Licenciatura en Derecho Internacional"
      },
      {
       value: "LDTD",
       text: {
        default: "Licenciado en Derecho Internacional Distancia",
        es: "Licenciatura en Derecho Internacional a Distancia"
       }
      },
      {
       value: "LEC",
       text: "Licenciatura en Economía"
      },
      {
       value: "LED",
       text: "Licenciatura en Educación"
      },
      {
       value: "LEI",
       text: "Licenciatura en Enseñanza del Inglés"
      },
      {
       value: "LEN",
       text: "Licenciatura en Enfermería"
      },
      {
       value: "LEND",
       text: {
        default: "Licenciado en Enfermería Distancia",
        es: "Licenciatura en Enfermería a Distancia"
       }
      },
      {
       value: "LES",
       text: "Licenciatura en Educación para la Salud"
      },
      {
       value: "LFI",
       text: "Licenciatura en Filosofía"
      },
      {
       value: "LGA",
       text: "Licenciatura en Gastronomía"
      },
      {
       value: "LGAM",
       text: "Licenciatura en Geología Ambiental y Recursos Hídricos"
      },
      {
       value: "LGE",
       text: "Licenciatura en Geografía"
      },
      {
       value: "LGI",
       text: "Licenciatura en Geoinformática"
      },
      {
       value: "LGR",
       text: "Licenciatura en Gerontología"
      },
      {
       value: "LGRS",
       text: "Licenciatura en Gestión de Información en Redes Sociales"
      },
      {
       value: "LHI",
       text: "Licenciatura en Historia"
      },
      {
       value: "LIA",
       text: "Licenciatura en Informática Administrativa"
      },
      {
       value: "LIAD",
       text: {
        default: "Licenciado en Informática Administrativa Distancia",
        es: "Licenciatura en Informática Administrativa a Distancia"
       }
      },
      {
       value: "LID",
       text: "Licenciatura en Ciencias de la Información Documental"
      },
      {
       value: "LLE",
       text: "Licenciatura en Lenguas"
      },
      {
       value: "LLH",
       text: "Licenciatura en Lengua y Literatura Hispánicas"
      },
      {
       value: "LLO",
       text: "Licenciatura en Logística"
      },
      {
       value: "LLOD",
       text: {
        default: "Licenciado en Logística Distancia",
        es: "Licenciatura en Logística a Distancia"
       }
      },
      {
       value: "LMA",
       text: "Licenciatura en Medios Alternos de Solución de Conflictos"
      },
      {
       value: "LMAX",
       text: {
        default: "Licenciado en Medios Alternos de Solución de Conflictos Mixta",
        es: "Licenciatura en Medios Alternos de Solución de Conflictos Mixta"
       }
      },
      {
       value: "LME",
       text: "Licenciatura en Mercadotecnia "
      },
      {
       value: "LMU",
       text: "Licenciatura en Música"
      },
      {
       value: "LNI",
       text: "Licenciatura en Negocios Internacionales"
      },
      {
       value: "LNIB",
       text: "Licenciatura en Negocios Internacionales Bilingüe "
      },
      {
       value: "LNID",
       text: {
        default: "Licenciado en Negocios Internacionales Distancia",
        es: "Licenciatura en Negocios Internacionales a Distancia"
       }
      },
      {
       value: "LNU",
       text: "Licenciatura en Nutrición"
      },
      {
       value: "LPS",
       text: "Licenciatura en Psicología"
      },
      {
       value: "LPT",
       text: "Licenciatura en Planeación Territorial"
      },
      {
       value: "LRI",
       text: "Licenciatura en Relaciones Económicas Internacionales"
      },
      {
       value: "LRID",
       text: {
        default: "Licenciado en Relaciones Económicas Internacionales",
        es: "Licenciatura en Relaciones Económicas Internacionales a Distancia"
       }
      },
      {
       value: "LSC",
       text: "Licenciatura en Ingeniería en Sistemas y Comunicaciones"
      },
      {
       value: "LSD",
       text: "Licenciatura en Seguridad Ciudadana"
      },
      {
       value: "LSO",
       text: "Licenciatura en Sociología"
      },
      {
       value: "LTF",
       text: "Licenciatura en Terapia Física"
      },
      {
       value: "LTO",
       text: "Licenciatura en Terapia Ocupacional"
      },
      {
       value: "LTS",
       text: "Licenciatura en Trabajo Social"
      },
      {
       value: "LTT",
       text: "Licenciatura en Artes Teatrales"
      },
      {
       value: "LTU",
       text: "Licenciatura en Turismo"
      },
      {
       value: "MAT",
       text: "Licenciatura en Matemáticas"
      },
      {
       value: "MED",
       text: "Licenciatura de Médico Cirujano"
      },
      {
       value: "MVZ",
       text: "Licenciatura de Médico Veterinario Zootecnista"
      },
      {
       value: "QAL",
       text: "Licenciatura en Química en Alimentos"
      },
      {
       value: "QFB",
       text: "Licenciatura en Química Farmacéutica Biológica"
      },
      {
       value: "QUI",
       text: "Licenciatura en Química"
      },
      {
       value: "TSA",
       text: "Técnico Superior Universitario en Arboricultura"
      },
      {
       value: "TSUPB",
       text: "Técnico Superior Universitario en Prótesis Bucodental"
      }
     ],
     choicesOrder: "asc",
     optionsCaption: {
      es: "Selecciona tu Plan de Estudios"
     }
    },
    {
     type: "matrix",
     name: "CDE",
     visibleIf: "{P48} = 'CDE'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Promover el cuidado y la salud bucal."
       }
      },
      {
       value: "B",
       text: {
        es: "Revisión y diagnóstico de enfermedades bucales."
       }
      },
      {
       value: "C",
       text: {
        es: "Realizar trabajos diversos de investigación en el campo de la odontología."
       }
      },
      {
       value: "D",
       text: {
        es: "Dar tratamiento bucal, limpieza dental y colocación de amalgamas y prótesis."
       }
      },
      {
       value: "E",
       text: {
        es: "Realizar cirugías correctivas, extracción de piezas dentales y rehabilitación maxilar."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LNU",
     visibleIf: "{P48} = 'LNU'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Tener conocimientos en medicina y ciencias de la salud."
       }
      },
      {
       value: "B",
       text: {
        es: "Elaborar planes y programas alimenticios balanceados y de nutrición."
       }
      },
      {
       value: "C",
       text: {
        es: "Promover en la población la alimentación sana de acuerdo con pláticas y consultas."
       }
      },
      {
       value: "D",
       text: {
        es: "Generar investigación en las ciencias de la nutrición de manera individual o en equipos multidisciplinarios."
       }
      },
      {
       value: "E",
       text: {
        es: "Hacer medición de estatura, pliegues, e índice de masa corporal en pacientes con sobrepeso para diagnóstico."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LTF",
     visibleIf: "{P48} = 'LTF'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Brindar atención personalizada al paciente."
       }
      },
      {
       value: "B",
       text: {
        es: "Diseñar y ejecutar programas de rehabilitación."
       }
      },
      {
       value: "C",
       text: {
        es: "Diagnosticar y determinar el uso de aparatos auxiliares."
       }
      },
      {
       value: "D",
       text: {
        es: "Realizar revisión de pacientes con problemas auditivos, del lenguaje o motrices."
       }
      },
      {
       value: "E",
       text: {
        es: "Brindar atención con calidad, eficiencia y pertinencia, con base en los principios éticos."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LTO",
     visibleIf: "{P48} = 'LTO'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Brindar atención personalizada al paciente."
       }
      },
      {
       value: "B",
       text: {
        es: "Realizar revisión de pacientes con problemas auditivos, del lenguaje o motrices."
       }
      },
      {
       value: "C",
       text: {
        es: "Brindar atención con calidad, eficiencia y pertinencia, con base en los principios éticos."
       }
      },
      {
       value: "D",
       text: {
        es: "Favorecer el conocimiento de la discapacidad en la sociedad, manteniendo una actitud que permita continuar con una formación científica durante la vida profesional."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "MED",
     visibleIf: "{P48} = 'MED'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Realizar historial médico del paciente."
       }
      },
      {
       value: "B",
       text: {
        es: "Canalizar al especialista según lo requiera el paciente."
       }
      },
      {
       value: "C",
       text: {
        es: "Realizar diagnóstico y recetar medicación o tratamiento."
       }
      },
      {
       value: "D",
       text: {
        es: "Normar su ejercicio profesional con base en los principios éticos."
       }
      },
      {
       value: "E",
       text: {
        es: "Hacer revisión y auscultación del paciente, sintomatología y signos del parecimiento."
       }
      },
      {
       value: "F",
       text: {
        es: "Mantener una actitud que le permita continuar con una formación científica durante su vida profesional."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LEN",
     visibleIf: "{P48} = 'LEN'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Realizar esterilización y acomodo de material e instrumental médico y de quirófano."
       }
      },
      {
       value: "B",
       text: {
        es: "Realizar revisiones médicas, atención y administración de medicamentos a pacientes."
       }
      },
      {
       value: "C",
       text: {
        es: "Coordinar equipos interdisciplinarios para implementar acciones de vacunación y prevención de enfermedades."
       }
      },
      {
       value: "D",
       text: {
        es: "Aplicar acciones de promoción de la salud pública, prevención de enfermedades y manejo de riesgos sanitarios."
       }
      },
      {
       value: "E",
       text: {
        es: "Capacidad para planificar, organizar, ejecutar y evaluar actividades de promoción, prevención y recuperación de la salud, con criterios de calidad."
       }
      },
      {
       value: "F",
       text: {
        es: "Participar en investigación sobre el objeto de estudio, el trabajo de enfermería y problemas de la salud que afectan a la persona, familia y comunidad."
       }
      },
      {
       value: "G",
       text: {
        es: "Habilidad para aplicar la metodología del proceso de enfermería y teorías de la disciplina que, organiza la intervención garantizando la relación de ayuda."
       }
      },
      {
       value: "H",
       text: {
        es: "Habilidad para interactuar en equipos interdisciplinarios y multisectoriales, con capacidad resolutiva para satisfacer las necesidades de salud prioritaria, emergente y especial."
       }
      },
      {
       value: "I",
       text: {
        es: "Capacidad para aplicar los conocimientos en el cuidado holístico de la persona, familia y comunidad considerando las diversas fases del ciclo de vida en los procesos de salud-enfermedad."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "IQU",
     visibleIf: "{P48} = 'IQU'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Tener conocimientos en biología y química."
       }
      },
      {
       value: "B",
       text: {
        es: "Obtener y análisis de muestras de laboratorio."
       }
      },
      {
       value: "C",
       text: {
        es: "Diseñar y participar en proyectos de investigación."
       }
      },
      {
       value: "D",
       text: {
        es: "Administrar y dar mantenimiento al equipo de laboratorio."
       }
      },
      {
       value: "E",
       text: {
        es: "Supervisar procesos químicos en plantas de producción de materias primas."
       }
      },
      {
       value: "F",
       text: {
        es: "Ejecutar actividades conforme a métodos y normas de calidad y productividad."
       }
      },
      {
       value: "G",
       text: {
        es: "Participar en propuestas y desarrollo de productos científicos y tecnológicos innovadores."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "QAL",
     visibleIf: "{P48} = 'QAL'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Aplicar los avances en ciencia y tecnología en la producción de alimentos para mantener y mejorar la salud."
       }
      },
      {
       value: "B",
       text: {
        es: "Diseñar y elaborar nuevos procesos y productos a lo largo de la cadena alimentaria a través de la investigación básica y aplicada."
       }
      },
      {
       value: "C",
       text: {
        es: "Establecer y aplicar procedimientos y manuales de control de calidad para asegurar una calidad fisicoquímica, microbiológica y nutrimental de los alimentos."
       }
      },
      {
       value: "D",
       text: {
        es: "Instruir de manera individual o como parte de un equipo inter o multidisciplinario proporcionando servicios, asesorías y consultorías a empresas del sector agroalimentario."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "QFB",
     visibleIf: "{P48} = 'QFB'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Normar su ejercicio profesional apegado a los principios humanísticos, éticos, sustentables y normativos."
       }
      },
      {
       value: "B",
       text: {
        es: "Planear, dirigir y ejecutar actividades propias del área de bioquímica clínica dentro de los servicios de salud."
       }
      },
      {
       value: "C",
       text: {
        es: "Proporcionar servicios farmacéuticos que contribuyen a preservar la salud en farmacias hospitalarias y comunitarias."
       }
      },
      {
       value: "D",
       text: {
        es: "Contribuir al conocimiento relacionado con el área de la salud, orientado a los sistemas de producción de medicamentos en las áreas de desarrollo, manufactura y control de calidad en la industria farmacéutica."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "QUI",
     visibleIf: "{P48} = 'QUI'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Realizar investigaciones de modelos matemáticos para reacciones químicas y moleculares."
       }
      },
      {
       value: "B",
       text: {
        es: "Experimentar nuevas fórmulas químicas para aplicaciones técnicas en productos industriales."
       }
      },
      {
       value: "C",
       text: {
        es: "Brindar asesoría a empresas e instituciones en materia de calidad del medio ambiente y seguridad."
       }
      },
      {
       value: "D",
       text: {
        es: "Normar su ejercicio profesional apegado a los principios humanísticos, éticos, sustentables y normativos."
       }
      },
      {
       value: "E",
       text: {
        es: "Aplica, desarrolla y valida los métodos de análisis químicos que se realicen en los laboratorios de pruebas y análisis."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "ICI",
     visibleIf: "{P48} = 'ICI'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Supervisar al personal y realizar reportes de avance de obra."
       }
      },
      {
       value: "B",
       text: {
        es: "Realizar diseños y planos de construcción de urbanización, obra pesada e industrial."
       }
      },
      {
       value: "C",
       text: {
        es: "Normar su ejercicio profesional apegado a los principios humanísticos, éticos, sustentables y normativos."
       }
      },
      {
       value: "D",
       text: {
        es: "Elaborar los precios unitarios, números generadores de obra, estimaciones y presupuestos del área asignada."
       }
      },
      {
       value: "E",
       text: {
        es: "Planear y programar las acciones de logística, procesos constructivos y presupuestales necesarias para la ejecución de un proyecto."
       }
      },
      {
       value: "F",
       text: {
        es: "Asignar tareas para la ejecución y cumplimiento de los procedimientos de construcción correspondientes al proyecto u obra a personal interno y subcontratado."
       }
      },
      {
       value: "G",
       text: {
        es: "Programar los recursos humanos, financieros y el insumo de materiales, maquinaria, equipo y herramienta requeridos para la ejecución de los trabajos asignados."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "ICO",
     visibleIf: "{P48} = 'ICO'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Administrar recursos de cómputo."
       }
      },
      {
       value: "B",
       text: {
        es: "Poseer la capacidad de crear tecnología, basándose en una integración de Hardware y Software."
       }
      },
      {
       value: "C",
       text: {
        es: "Realizar el análisis, el diseño, la implementación y el mantenimiento de sistemas computacionales."
       }
      },
      {
       value: "D",
       text: {
        es: "Normar su ejercicio profesional apegado a los principios humanísticos, éticos, sustentables y normativos."
       }
      },
      {
       value: "E",
       text: {
        es: "Realizar el diseño y mantenimiento de circuitería de computadoras así como la administración de redes de comunicación."
       }
      },
      {
       value: "F",
       text: {
        es: "Poseer la capacidad de observación y abstracción para reconocer y resolver problemas propios de otras disciplinas, mediante el uso de herramientas computacionales."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "IEL",
     visibleIf: "{P48} = 'IEL'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Diseñar de diagramas de conexiones de redes."
       }
      },
      {
       value: "B",
       text: {
        es: "Tener conocimientos integrales en electricidad, mecánica y computación."
       }
      },
      {
       value: "C",
       text: {
        es: "Instalar y dar mantenimiento preventivo de sistemas eléctricos industriales y domésticos."
       }
      },
      {
       value: "D",
       text: {
        es: "Reparar equipos, redes, sistemas de control y sistemas de protección de media y baja tensión."
       }
      },
      {
       value: "E",
       text: {
        es: "Normar su ejercicio profesional apegado a los principios humanísticos, éticos, sustentables y normativos."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "IME",
     visibleIf: "{P48} = 'IME'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Detectar fallas, dar mantenimiento y soporte a los sistemas y corregir el diseño."
       }
      },
      {
       value: "B",
       text: {
        es: "Normar su ejercicio profesional apegado a los principios humanísticos, éticos, sustentables y normativos."
       }
      },
      {
       value: "C",
       text: {
        es: "Investigar, administrar proyectos relacionados, diseñar, instalar y desarrollar sistemas electromecánicos."
       }
      },
      {
       value: "D",
       text: {
        es: "Definir controles para garantizar el funcionamiento óptimo y la seguridad del equipo y toda actividad relacionada."
       }
      },
      {
       value: "E",
       text: {
        es: "Elaborar procedimientos, diagramas y especificaciones técnicas en la construcción, reubicación e instalación de los elementos que conforman sistemas electromecánicos."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "APO",
     visibleIf: "{P48} = 'APO'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Investigar problemas o necesidades del espacio urbano."
       }
      },
      {
       value: "B",
       text: {
        es: "Evaluar los procesos normativos, administrativos de obra urbana y de servicios públicos."
       }
      },
      {
       value: "C",
       text: {
        es: "Evaluar proyectos de espacios urbanos, respecto a la funcionalidad y normatividad correspondiente."
       }
      },
      {
       value: "D",
       text: {
        es: "Crear propuestas de rehabilitación o conservación sostenible con base en la normatividad vigente."
       }
      },
      {
       value: "E",
       text: {
        es: "Crear propuestas de nuevos espacios sustentables, funcionales, estéticos, eficientes y seguros, tomando en cuenta la normatividad."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "ARQ",
     visibleIf: "{P48} = 'ARQ'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Realizar diseños y planos de construcción de urbanización, y trazos viales."
       }
      },
      {
       value: "B",
       text: {
        es: "Supervisar al personal y realizar reportes de avance de obra de urbanización."
       }
      },
      {
       value: "C",
       text: {
        es: "Elaborar proyectos de conservación y restauración del patrimonio histórico urbano-arquitectónico."
       }
      },
      {
       value: "D",
       text: {
        es: "Elaborar los precios unitarios, números generadores de obra, estimaciones y presupuestos del área asignada."
       }
      },
      {
       value: "E",
       text: {
        es: "Planear y programar las acciones de logística, procesos constructivos y presupuestales necesarias para la ejecución de un proyecto de urbanización."
       }
      },
      {
       value: "F",
       text: {
        es: "Asignar tareas para la ejecución y cumplimiento de los procedimientos de construcción correspondientes al proyecto u obra a personal interno y subcontratado."
       }
      },
      {
       value: "G",
       text: {
        es: "Programar los recursos humanos, financieros y el insumo de materiales, maquinaria, equipo y herramienta requeridos para la ejecución de los trabajos asignados."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LDG",
     visibleIf: "{P48} = 'LDG'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Conocimientos en abstracción conceptual enfocada a la comunicación o transmisión de conocimiento."
       }
      },
      {
       value: "B",
       text: {
        es: "Crear proyectos de diseño de sitios Web, incluyendo la estimación presupuestal y de tiempo de entrega."
       }
      },
      {
       value: "C",
       text: {
        es: "Investiga, analiza y estudia el mercado tomando en cuenta aspectos económicos, sociológicos, antropológicos y psicológicos de la percepción humana."
       }
      },
      {
       value: "D",
       text: {
        es: "Realizar el dibujo, trazo digital, boceto y creación tanto de patrones como de producto final, iconográficos y para revistas, material publicitario o video promocional."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LDI",
     visibleIf: "{P48} = 'LDI'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Realizar presupuesto de materiales y costos."
       }
      },
      {
       value: "B",
       text: {
        es: "Dibujar y crear planos esquemáticos industriales."
       }
      },
      {
       value: "C",
       text: {
        es: "Manejar programas de diseño por computadora y manejo de imágenes."
       }
      },
      {
       value: "D",
       text: {
        es: "Diseño de muebles, equipos de trabajo y artículos metálicos y de plástico."
       }
      },
      {
       value: "E",
       text: {
        es: "Desarrolla proyectos de diseño industrial para resolver las necesidades de la sociedad."
       }
      },
      {
       value: "F",
       text: {
        es: "Produce objetos o productos tomando en cuenta criterios de diseño y necesidades de los usuarios."
       }
      },
      {
       value: "G",
       text: {
        es: "Aplicar métodos de investigación y principios de diseño en la formulación de proyectos de diseño industrial."
       }
      },
      {
       value: "H",
       text: {
        es: "Crear modelos de objetos, productos y servicios acordes a las necesidades de las personas, a través del proceso de diseño."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LDE",
     visibleIf: "{P48} = 'LDE'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Capacidad de argumentar jurídicamente."
       }
      },
      {
       value: "B",
       text: {
        es: "Realizar, elaborar instrumentos que gozan de presunción legal, fedación."
       }
      },
      {
       value: "C",
       text: {
        es: "Capacidad de sistematizar e integrar conocimientos y ordenamientos jurídicos."
       }
      },
      {
       value: "D",
       text: {
        es: "Investigación y análisis de leyes, códigos, reglamentos y jurisprudencia en general."
       }
      },
      {
       value: "E",
       text: {
        es: "Actuar de manera ética en la defensa de intereses de las personas a las que representa."
       }
      },
      {
       value: "F",
       text: {
        es: "Promover y defender juicios, así como asistir a audiencias donde se requiera al cliente."
       }
      },
      {
       value: "G",
       text: {
        es: "Aplicar los principios generales del Derecho, la jurisprudencia y los ordenamientos jurídicos."
       }
      },
      {
       value: "H",
       text: {
        es: "Redactar, presentar y responder demandas, contratos, convenios y todo instrumento legal de su competencia."
       }
      },
      {
       value: "I",
       text: {
        es: "Conocer, interpretar y aplicar los principios generales del Derecho, la jurisprudencia y los ordenamientos jurídicos."
       }
      },
      {
       value: "J",
       text: {
        es: "Asesoría profesional, realización de trámites y representación de los clientes ante tribunales o instancias gubernamentales sobre diversas cuestiones legales."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LAM",
     visibleIf: "{P48} = 'LAM'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Planificar y supervisar programas de reclutamiento."
       }
      },
      {
       value: "B",
       text: {
        es: "Conocimientos en entrenamiento operativo, administración de recursos, inventarios, impuestos y nómina."
       }
      },
      {
       value: "C",
       text: {
        es: "Capacidades en la elaboración de esquemas de planeación, manuales de procedimientos y políticas generales."
       }
      },
      {
       value: "D",
       text: {
        es: "Elaborar y planear estrategias de organización interna para empresas que les ayude a optimizar los recursos."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LCN",
     visibleIf: "{P48} = 'LCN'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Realizar conciliaciones de impuestos ante el SAT."
       }
      },
      {
       value: "B",
       text: {
        es: "Obtener, analizar y controlar información financiera."
       }
      },
      {
       value: "C",
       text: {
        es: "Obtener, analizar y controlar información legal y fiscal."
       }
      },
      {
       value: "D",
       text: {
        es: "Dictaminar los resultados de las auditorías que practican."
       }
      },
      {
       value: "E",
       text: {
        es: "Hacer las recomendaciones pertinentes para corregir las irregularidades encontradas."
       }
      },
      {
       value: "F",
       text: {
        es: "Establecer controles de los elementos del costo que permita la efectiva toma de decisiones."
       }
      },
      {
       value: "G",
       text: {
        es: "Interpretar y aplicar normatividad internacional para la conversión de estados financieros."
       }
      },
      {
       value: "H",
       text: {
        es: "Verificar y evaluar la veracidad de la información para la emisión de informes o dictámenes."
       }
      },
      {
       value: "I",
       text: {
        es: "Analizar la exactitud y procedencia de los registros contables, los movimientos de efectivo y valores, facturas, etc."
       }
      },
      {
       value: "J",
       text: {
        es: "Calcular y formular declaraciones tributarias y presentar ante el fisco, documentación, pagos, alegatos o reclamaciones."
       }
      },
      {
       value: "K",
       text: {
        es: "Verificar que las operaciones contables y financieras sean legales y estén de acuerdo con los procedimientos establecidos."
       }
      },
      {
       value: "L",
       text: {
        es: "Formular informes detallados sobre las auditorías practicadas, actividades realizadas, resultados obtenidos y/o sobre algún otro aspecto contable."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LIA",
     visibleIf: "{P48} = 'LIA'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Creación y mantenimiento de helpesk."
       }
      },
      {
       value: "B",
       text: {
        es: "Liderar proyectos de desarrollo de software."
       }
      },
      {
       value: "C",
       text: {
        es: "Generación de planes estratégicos informáticos incluyendo estudios DOFA"
       }
      },
      {
       value: "D",
       text: {
        es: "Administrar los sistemas de comunicaciones de las organizaciones de manera eficiente."
       }
      },
      {
       value: "E",
       text: {
        es: "Administrar y controlar las redes y las comunicaciones en general en las organizaciones."
       }
      },
      {
       value: "F",
       text: {
        es: "Analiza, organiza y resuelve cuestiones numéricas, datos financieros, estadísticos y similares."
       }
      },
      {
       value: "G",
       text: {
        es: "Usar sistemas de información para la toma de decisiones, apoyándose en tecnología informática."
       }
      },
      {
       value: "H",
       text: {
        es: "Planear, generar y mantener bases de datos de las organizaciones con bancos de datos electrónicos."
       }
      },
      {
       value: "I",
       text: {
        es: "Diseño de implementación de planes de contingencia en caso de desastres (DRP) y planes operativos de respaldo electrónico."
       }
      },
      {
       value: "J",
       text: {
        es: "Brinda capacidad técnica e intelectual en conocimientos de mercados y productos, fiscal, financiero, recursos humanos y gestión organizacional, como funciones sustantivas de las organizaciones."
       }
      },
      {
       value: "K",
       text: {
        es: "Desarrollo de sistemas de información administrativos que permitan los procesamientos en línea y la generación de estadísticas y simulaciones pertinentes para apoyar la toma de decisiones en tiempo real."
       }
      },
      {
       value: "L",
       text: {
        es: "Encuentra alternativas diferentes de solución de problemas, interpretar de distintas formas las situaciones y visualizar una variedad de respuestas ante problemas cotidianos y estratégicos de las organizaciones."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LFI",
     visibleIf: "{P48} = 'LFI'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Para efectuar análisis filosóficos."
       }
      },
      {
       value: "B",
       text: {
        es: "Para propiciar la interdisciplinariedad."
       }
      },
      {
       value: "C",
       text: {
        es: "Para participar en proyectos de investigación."
       }
      },
      {
       value: "D",
       text: {
        es: "Para participar en debates con argumentos precisos."
       }
      },
      {
       value: "E",
       text: {
        es: "Para realizar actividades relacionadas con el proceso editorial."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LHI",
     visibleIf: "{P48} = 'LHI'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Consultar a expertos o testigos sobre acontecimientos y hechos históricos."
       }
      },
      {
       value: "B",
       text: {
        es: "Analizar el desarrollo histórico en campos como la economía, sociología o filosofía."
       }
      },
      {
       value: "C",
       text: {
        es: "Diseñar programas y cursos de Historia en sus diversas modalidades en los niveles medio y superior."
       }
      },
      {
       value: "D",
       text: {
        es: "Estudiar culturas, en sociedades, incluyendo religión, economía, creencias y tradiciones, así como la vida artística e intelectual."
       }
      },
      {
       value: "E",
       text: {
        es: "Revisar publicaciones y exhibiciones preparadas por otras personas antes de su lanzamiento al público a fin de garantizar la precisión histórica de las exposiciones."
       }
      },
      {
       value: "F",
       text: {
        es: "Reunir datos históricos mediante la consulta de fuentes, como archivos, registros judiciales, diarios, archivos de noticias, entre otros diversos materiales publicados e inéditos."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LID",
     visibleIf: "{P48} = 'LID'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Difundir la investigación científica mediante mecanismos de vanguardia disponibles."
       }
      },
      {
       value: "B",
       text: {
        es: "Investigar en materia de información documental con objeto de fortalecer la disciplina."
       }
      },
      {
       value: "C",
       text: {
        es: "Usar las teorías, métodos y prácticas del fenómeno informativo documental para aplicar los procesos documentales en la solución de problemas."
       }
      },
      {
       value: "D",
       text: {
        es: "Aplicar las tecnologías de la información y comunicación a través de su conocimiento, evaluación y su instrumentación a procesos documentales con el objeto de mejorar e innovar la práctica documental."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LTT",
     visibleIf: "{P48} = 'LTT'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Aprender libretos y diálogos."
       }
      },
      {
       value: "B",
       text: {
        es: "Habilidades para difundir obras."
       }
      },
      {
       value: "C",
       text: {
        es: "Participar en montajes de grupos."
       }
      },
      {
       value: "D",
       text: {
        es: "Realizar actuaciones en foros o locaciones."
       }
      },
      {
       value: "E",
       text: {
        es: "Capacidades para producir y dirigir programas artísticos en televisión, radio, cine, teatro o afines."
       }
      },
      {
       value: "F",
       text: {
        es: "Conocimientos en administración, producciones artísticas, exposiciones culturales y medios de comunicación."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LCO",
     visibleIf: "{P48} = 'LCO'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Dirigir contenidos radiofónicos y televisivos."
       }
      },
      {
       value: "B",
       text: {
        es: "Establecer y dirigir los procedimientos operativos y administrativos."
       }
      },
      {
       value: "C",
       text: {
        es: "Dirigir la instalación y mantenimiento de los medios de comunicación y telecomunicaciones."
       }
      },
      {
       value: "D",
       text: {
        es: "Asegurar el cumplimiento de la ley de radio y televisión así como la utilización racional de los recursos."
       }
      },
      {
       value: "E",
       text: {
        es: "Conocimiento y comprensión de postulados teórico- metodológicos, epistemológicos, heurísticos y científicos en general concernientes a las Ciencias de la Comunicación."
       }
      },
      {
       value: "F",
       text: {
        es: "Capacidad para investigar, recabar datos, procesar información y actualizar conocimientos sobre la situación económica, política, social y medioambiental a nivel regional, nacional e internacional."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LCP",
     visibleIf: "{P48} = 'LCP'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Investigar la relación entre el Estado y la sociedad."
       }
      },
      {
       value: "B",
       text: {
        es: "Preparar informes en los que se detallan resultados y conclusiones."
       }
      },
      {
       value: "C",
       text: {
        es: "Recomendar programas y políticas a instituciones y organizaciones."
       }
      },
      {
       value: "D",
       text: {
        es: "Organizar y dirigir encuestas de opinión pública e interpretar los resultados."
       }
      },
      {
       value: "E",
       text: {
        es: "Proponer mejores métodos de planificación, organización, facultades, reformas y toma de decisiones de los organismos del Estado."
       }
      },
      {
       value: "F",
       text: {
        es: "La capacidad y habilidad de redacción y argumentación, manejo de métodos cuantitativos y cualitativos para efectuar investigaciones."
       }
      },
      {
       value: "G",
       text: {
        es: "Analizar e interpretar resultados de estudios y preparar informes en los que se detallan los resultados, recomendaciones o conclusiones."
       }
      },
      {
       value: "H",
       text: {
        es: "Realizar investigaciones sobre filosofía, política y teorías de sistemas políticos, como instituciones gubernamentales, derecho público y derecho internacional."
       }
      },
      {
       value: "I",
       text: {
        es: "La realización de investigaciones, proyectos y estudios específicos, así como en el diseño y desarrollo de sistemas y procedimientos que incrementen la eficacia y la eficiencia de la función pública."
       }
      },
      {
       value: "J",
       text: {
        es: "Analizar la estructura de funciones y procesos de los gobiernos (estatal, federal y/o municipal), los procedimientos legislativos y la actividad política de las organizaciones sociales (partidos políticos, sindicatos, organizaciones patronales, etcétera)."
       }
      },
      {
       value: "K",
       text: {
        es: "El desarrollo de investigaciones, proyectos, análisis, propuestas y evaluaciones para cualquier institución del sector público o privado, organizaciones de la sociedad civil, partidos políticos, organismos electorales, organizaciones sindicales o patronales."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LSO",
     visibleIf: "{P48} = 'LSO'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Realizar diagnósticos demográficos."
       }
      },
      {
       value: "B",
       text: {
        es: "Realizar investigaciones demográficas relacionadas con los principales problemas sociales."
       }
      },
      {
       value: "C",
       text: {
        es: "Recabar información y emitir juicios a través de la observación, entrevistas y revisión de documentos."
       }
      },
      {
       value: "D",
       text: {
        es: "Realizar consultorías en temas de población y desarrollo, incorporando los enfoques del análisis demográfico."
       }
      },
      {
       value: "E",
       text: {
        es: "Capacidad de reflexión teórica y metodológica, así como la habilidad técnica e instrumental necesaria para su trabajo profesional."
       }
      },
      {
       value: "F",
       text: {
        es: "Analizar datos científicos sobre fenómenos sociales en la comunidad, asociaciones, instituciones sociales, minorías étnicas y sus cambios sociales."
       }
      },
      {
       value: "G",
       text: {
        es: "Capacidad para comprender y distinguir el objeto de estudio de las Ciencias Sociales y sus áreas disciplinares, dentro de ellas: el ámbito de la Sociología."
       }
      },
      {
       value: "H",
       text: {
        es: "Publicar informes en materias tales como los factores sociales que afectan la salud, características demográficas, y discriminación social y racial en la sociedad."
       }
      },
      {
       value: "I",
       text: {
        es: "Observar la interacción de grupos y entrevistar a sus miembros para identificar problemas y recopilar información relacionada con su forma de organización y sus relaciones de autoridad."
       }
      },
      {
       value: "J",
       text: {
        es: "Capacidad para el estudio sistemático y diferenciado de las relaciones sociales. A partir de los distintos marcos epistémicos y teóricos explicados desde la sociología como un campo específico."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LAC",
     visibleIf: "{P48} = 'LAC'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      "Investigar y desarrollar modelos matemáticos.",
      "Asesorar sobre las formas de aplicación de la probabilidad estadística y modelos matemáticos.",
      "Elaborar y revisar la administración de riesgos en instituciones y empresas.",
      "Valuar y/o diseñar sistemas de pensiones.",
      "Diseñar notas técnicas.",
      "Realizar suficiencia de reservas.",
      "Proyectar datos en el área financiera.",
      "Procesar y/o manejar base de datos.",
      "Manejar portafolios de Inversión.",
      "Realizar actividades de programación."
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LEC",
     visibleIf: "{P48} = 'LEC'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      "Desarrollar modelos para pronosticar el comportamiento económico futuro.",
      "Diseñar métodos para la recopilación y análisis de datos.",
      "Realizar análisis de mercado, finanzas y economía.",
      "Diagnosticar causas de fluctuaciones de precios en base a la producción y el consumo para determinar tendencias futuras.",
      "Desarrollar accesorios económicos para organizaciones públicas y privadas.",
      "Examinar datos estadísticos sobre el intercambio económico de bienes y servicios entre las naciones, para asesorar a dependencias gubernamentales sobre las políticas de comercio exterior."
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LRI",
     visibleIf: "{P48} = 'LRI'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      "Desarrollar modelos para pronosticar el comportamiento económico futuro.",
      "Diseñar métodos para la recopilación y análisis de datos.",
      "Realizar análisis de mercado, finanzas y economía.",
      "Diagnosticar causas de fluctuaciones de precios en base a la producción y el consumo para determinar tendencias futuras.",
      "Desarrollar accesorios económicos para organizaciones públicas y privadas.",
      "Examinar datos estadísticos sobre el intercambio económico de bienes y servicios entre las naciones, para asesorar a dependencias gubernamentales sobre las políticas de comercio exterior."
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LGE",
     visibleIf: "{P48} = 'LGE'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      "Analizar información sobre población, usos del suelo, infraestructura, vegetación, límites administrativos, etcétera.",
      "Preparar informes de impacto ambiental.",
      "Realizar investigaciones territoriales de desarrollo urbanístico para evaluar zonas de riesgos.",
      "Recopilar datos de características físicas de un área específica, como formación geológica, clima y vegetación mediante equipos de estudio o meteorológicos.",
      "Utilizar equipos de estudio para determinar la geología, física y biología dentro de un área determinada.",
      "Elaborar e interpretar mapas, gráficas y diagramas.",
      "Estudiar las características de la población dentro de un área, como la distribución étnica y las actividades económicas."
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "IAC",
     visibleIf: "{P48} = 'IAC'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      "Realizar investigación en la ciencia y tecnología para el beneficio del productor florícola, mediante técnicas y estrategias acordes a las condiciones de las zonas productoras.",
      "Administrar con eficiencia y eficacia el capital humano y los recursos materiales, naturales, económicos de los sistemas de producción florícolas.",
      "Rescatar, preservar y aprovechar los recursos fitogenéticos con potencial ornamental.",
      "Analizar y proponer alternativas de solución a la problemática de la producción, abasto, distribución y comercialización de productos florícolas."
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "IAF",
     visibleIf: "{P48} = 'IAF'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Manejo agronómico de cultivos intensivos y extensivos."
       }
      },
      {
       value: "B",
       text: {
        es: "Analizar las condiciones agroecológicas y socioeconómicas en distintas regiones agrícolas, para el diseño y/o mejoramiento de los sistemas de producción sustentables."
       }
      },
      {
       value: "C",
       text: {
        es: "Desarrollar estudios de productividad y factibilidad económica en el acompañamiento empresarial de proyectos agropecuarios."
       }
      },
      {
       value: "D",
       text: {
        es: "Realizar investigación para mejorar los problemas que afectan a los sistemas de producción a través de la generación de conocimientos y aplicación de nuevas tecnologías."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "IAI",
     visibleIf: "{P48} = 'IAI'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Organizar los procesos industriales de transformación de los productos agropecuarios."
       }
      },
      {
       value: "B",
       text: {
        es: "Realizar investigación y diagnósticos oportunos en el ámbito de la agricultura y la agroindustria."
       }
      },
      {
       value: "C",
       text: {
        es: "Acondicionar la producción agropecuaria para su destino hacia las agroindustrias o para su comercialización inmediata."
       }
      },
      {
       value: "D",
       text: {
        es: "Diseñar proyectos para la creación de nuevas empresas agroindustriales en las unidades de producción agropecuaria y en las comunidades rurales."
       }
      },
      {
       value: "E",
       text: {
        es: "Administrar los recursos financieros de la empresa, del personal que participa en ella y de sus activos relacionados con las actividades productivas."
       }
      },
      {
       value: "F",
       text: {
        es: "Gestionar recursos financieros y de mercadotecnia para el abasto y la comercialización de insumos y productos derivados del procesamiento agropecuario y agroindustrial."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "MVZ",
     visibleIf: "{P48} = 'MVZ'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Realización de cirugías y curaciones."
       }
      },
      {
       value: "B",
       text: {
        es: "Conocimientos en biología, química o medio ambiente."
       }
      },
      {
       value: "C",
       text: {
        es: "Observación, diagnóstico y tratamiento enfermedades en animales."
       }
      },
      {
       value: "D",
       text: {
        es: "Diseñar proyectos de investigación y resolución de problemáticas pecuarias."
       }
      },
      {
       value: "E",
       text: {
        es: "Conocimiento en programas de prevención de enfermedades y vacunación de animales."
       }
      },
      {
       value: "F",
       text: {
        es: "Formular y aplicar programas y estrategias de manejo para el incremento de la eficiencia reproductiva de los animales."
       }
      },
      {
       value: "G",
       text: {
        es: "Diseñar, gestionar y evaluar programas de prevención, control, erradicación y vigilancia de enfermedades zoonóticas y de las transmitidas por alimentos (ETAs) que afectan a poblaciones animales y humanas."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LED",
     visibleIf: "{P48} ='LED'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Realizar investigación educativa en las Instituciones Educativas públicas y privadas."
       }
      },
      {
       value: "B",
       text: {
        es: "Analizar críticamente la realidad educativa en sus diversos niveles, a través de las estructuras organizativas y operativas."
       }
      },
      {
       value: "C",
       text: {
        es: "Elaborar proyectos de intervención en sectores sociales que requieran ser educados en propuestas de integración y conformación ciudadana."
       }
      },
      {
       value: "D",
       text: {
        es: "Focalizar los procesos de integración y regionalización para la conformación de proyectos de formación profesional: formación de formadores."
       }
      },
      {
       value: "E",
       text: {
        es: "Intervenir en Instituciones Educativas en el diseño curricular, con la finalidad de proponer planes y programas que respondan a las condiciones y características culturales y económicas de sus destinatarios"
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LPS",
     visibleIf: "{P48} = 'LPS'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Seleccionar y evaluar a los candidatos de un puesto de trabajo."
       }
      },
      {
       value: "B",
       text: {
        es: "Evaluar, diagnosticar y tratar los trastornos y padecimientos de las personas."
       }
      },
      {
       value: "C",
       text: {
        es: "Asesorar sobre la impartición de programas y métodos de formación en diversos ámbitos."
       }
      },
      {
       value: "D",
       text: {
        es: "Realizar investigaciones relacionadas con las conductas humanas y sus principales afecciones."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LTS",
     visibleIf: "{P48} = 'LTS'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Intervenir en conflictos entre trabajadores e instituciones sociales."
       }
      },
      {
       value: "B",
       text: {
        es: "Capacidad para detectar a través de visitas, casos de maltrato físico y psicológico."
       }
      },
      {
       value: "C",
       text: {
        es: "Analizar el contexto socioeconómico, cultural y su impacto en los diferentes grupos de población."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LGA",
     visibleIf: "{P48} = 'LGA'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Aplicación de normas de higiene y de seguridad."
       }
      },
      {
       value: "B",
       text: {
        es: "Supervisar el abastecimiento continuo de materia prima."
       }
      },
      {
       value: "C",
       text: {
        es: "Revisar de forma sistémica la ejecución del trabajo del personal a su cargo."
       }
      },
      {
       value: "D",
       text: {
        es: "Planificar y coordinar el trabajo y las actividades a realizar en organizaciones gastronómicas."
       }
      },
      {
       value: "E",
       text: {
        es: "Supervisar que los servicios de alimentos cumplan con las normas establecidas de higiene y seguridad."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LTU",
     visibleIf: "{P48} = 'LTU'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Manejo y administración de presupuestos."
       }
      },
      {
       value: "B",
       text: {
        es: "Diseña y opera productos y servicios turísticos innovadores y competitivos."
       }
      },
      {
       value: "C",
       text: {
        es: "Gestión competitiva y sustentable  de organizaciones y destinos turísticos."
       }
      },
      {
       value: "D",
       text: {
        es: "Supervisar, organizar y dirigir las actividades de organizaciones turísticas y recreativas competitivas."
       }
      },
      {
       value: "E",
       text: {
        es: "Gestión del patrimonio natural y cultural bajo los principios de la sustentabilidad y responsabilidad social."
       }
      },
      {
       value: "F",
       text: {
        es: "Diseña estrategias para intervenir en emprendimientos y proyectos sustentables de aprovechamiento del patrimonio."
       }
      },
      {
       value: "G",
       text: {
        es: "Analiza el turismo, sus desafíos y temas emergentes a partir de los diversos enfoques y perspectivas teórico-metodológicas."
       }
      },
      {
       value: "H",
       text: {
        es: "Innova productos, procedimientos y servicios en las organizaciones relacionadas con el turismo en los sectores público, privado y social."
       }
      },
      {
       value: "I",
       text: {
        es: "Diseño, instrumentación y evaluación de iniciativas sustentables y competitivas acordes con la política turística y el marco normativo."
       }
      },
      {
       value: "J",
       text: {
        es: "Aplica conocimientos y metodologías para el estudio y comprensión del turismo a fin de profundizar sobre su ubicación contextual y sus explicaciones teóricas."
       }
      },
      {
       value: "K",
       text: {
        es: "Desarrolla estudios socioeconómicos y culturales sobre los visitantes y comunidades receptoras que permitan valorar los impactos del turismo, a fin de formular nuevas estrategias de aprovechamiento turístico."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LAS",
     visibleIf: "{P48} = 'LAS'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Analizar los contextos sociales y culturales de los grupos humanos."
       }
      },
      {
       value: "B",
       text: {
        es: "Realizar estudios de investigación de los grupos humanos en su variabilidad biológica y cultural."
       }
      },
      {
       value: "C",
       text: {
        es: "Establecer la secuencia cronológica del desarrollo de cada cultura en niveles que van desde el más simple hasta el más avanzado."
       }
      },
      {
       value: "D",
       text: {
        es: "Capacidad de buscar alternativas de solución a problemáticas socioculturales, en instituciones gubernamentales y no gubernamentales, participando de forma crítica en la elaboración, aplicación y evaluación de planes y programas de desarrollo."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "CIA",
     visibleIf: "{P48} = 'CIA'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Analizar el contexto socioeconómico y sus repercusiones en el ámbito biofísico."
       }
      },
      {
       value: "B",
       text: {
        es: "Conocer las diferentes metodologías para la formulación de proyectos ambientales."
       }
      },
      {
       value: "C",
       text: {
        es: "Gestionar la aplicación de proyectos de aprovechamiento de recursos naturales sustentables."
       }
      },
      {
       value: "D",
       text: {
        es: "Prevenir problemas ambientales y situaciones de riesgo generadas por la relación sociedad naturaleza."
       }
      },
      {
       value: "E",
       text: {
        es: "Elaborar planes, programas y proyectos, estudios de factibilidad técnica, social y económica, cronogramas de trabajo, presupuestos y evaluaciones económicas."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LPT",
     visibleIf: "{P48} = 'LPT'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Gestionar la instrumentación y operación de las medidas y acciones correspondientes al planteamiento de soluciones para prevenir, corregir y mitigar la problemática del territorio."
       }
      },
      {
       value: "B",
       text: {
        es: "Formular soluciones para prevenir, corregir, mitigar la problemática del territorio conforme a los estudios e instrumentos urbanos, políticos, económicos, sociales y ambientales aplicables."
       }
      },
      {
       value: "C",
       text: {
        es: "Investigar los procesos territoriales actuales, la metropolización sustentabilidad y movilidad urbana así como su vinculación con las condiciones ambientales, sociales y económicas correspondientes."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "BIO",
     visibleIf: "{P48} = 'BIO'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Investigar y desarrollar medidas para el control y manejo de plagas."
       }
      },
      {
       value: "B",
       text: {
        es: "Redactar artículos científicos con base a resultados obtenidos en investigaciones."
       }
      },
      {
       value: "C",
       text: {
        es: "Realizar estudios para potabilizar el agua del mar y eliminar la salinidad que contiene."
       }
      },
      {
       value: "D",
       text: {
        es: "Recopilar y analizar datos biológicos sobre las relaciones entre organismos y su medio ambiente."
       }
      },
      {
       value: "E",
       text: {
        es: "Planear y administrar programas de investigación biológica para instituciones gubernamentales y empresas privadas."
       }
      },
      {
       value: "F",
       text: {
        es: "Desarrollar métodos y aparatos para conservar muestras representativas de plantas, animales, especies acuáticas o del suelo."
       }
      },
      {
       value: "G",
       text: {
        es: "Estudiar la estructura, conducta, ecología, fisiología, nutrición, cultivo y distribución de especies de plantas y animales."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "FIS",
     visibleIf: "{P48} = 'FIS'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Desarrollar el autoconocimiento (autodidáctica), la inferencia y el ser inquisitivo."
       }
      },
      {
       value: "B",
       text: {
        es: "Vincular con la industria, la empresa y grupos de investigación mediante trabajo multidisciplinario."
       }
      },
      {
       value: "C",
       text: {
        es: "Comunicar a la sociedad conocimientos científicos y avances tecnológicos relacionados con la física."
       }
      },
      {
       value: "D",
       text: {
        es: "Comunicar en idioma inglés y español, manuscritos científicos para ser publicados en foros o revistas internacionales de calidad."
       }
      },
      {
       value: "E",
       text: {
        es: "Impartir docencia a nivel educativo medio superior y cursos iniciales de licenciatura en el área de ciencias básicas e ingeniería."
       }
      },
      {
       value: "F",
       text: {
        es: "Diagnosticar, orientar, recomendar y sugerir métodos y procedimientos para la solución de problemas tanto en el ámbito académico como profesional."
       }
      },
      {
       value: "G",
       text: {
        es: "Desarrollar modelos sencillos de interacción entre diversos parámetros para control de un evento de naturaleza empresarial, tecnológica o de investigación."
       }
      },
      {
       value: "H",
       text: {
        es: "Diseñar, construir y modificar dispositivos experimentales, modelar y desarrollar procedimientos teóricos y prácticos relacionados con el conocimiento adquirido, todo ello de forma óptima."
       }
      },
      {
       value: "I",
       text: {
        es: "Tramitar, negociar y administrar recursos materiales y humanos en el ámbito de: proyectos educativos, proyectos de investigación, laboratorios de instituciones educativas, de la industria, así como en sectores públicos y privado."
       }
      },
      {
       value: "J",
       text: {
        es: "Profundizar en el conocimiento, perfeccionar la concepción de la naturaleza en el ámbito científico. Esta investigación puede ser básica o aplicada con el objeto de colaborar en las líneas en generación y aplicación del conocimiento."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "MAT",
     visibleIf: "{P48} = 'MAT'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Capacidad de comunicación con colegas."
       }
      },
      {
       value: "B",
       text: {
        es: "Capacidad de participar en el ámbito docente."
       }
      },
      {
       value: "C",
       text: {
        es: "Capacidad de colaborar en grupos multidiciplinarios."
       }
      },
      {
       value: "D",
       text: {
        es: "Capacidad de comunicación con la sociedad en general."
       }
      },
      {
       value: "E",
       text: {
        es: "Capacidad de interpretar resultados y proponer soluciones."
       }
      },
      {
       value: "F",
       text: {
        es: "Capacidad de participar en la formación de recursos humanos."
       }
      },
      {
       value: "G",
       text: {
        es: "Capacidad para realizar y concluir proyectos de investigación."
       }
      },
      {
       value: "H",
       text: {
        es: "Capacidad de abstraer problemas que surgen en otras disciplinas científicas y técnicas."
       }
      },
      {
       value: "I",
       text: {
        es: "Capacidad de participar en la planeación de la enseñanza y elaboración de programas educativos."
       }
      },
      {
       value: "J",
       text: {
        es: "Capacidad de plantear y/o resolver problemas abstractos en el contexto de una teoría matemática."
       }
      },
      {
       value: "K",
       text: {
        es: "Coadyuvar en los procesos de abstracción de los problemas que surgen en otras disciplinas científicas y técnicas."
       }
      },
      {
       value: "L",
       text: {
        es: "Plantear y resolver problemas abstractos en atención a sus relaciones claramente definidas en el contexto de una teoría matemática."
       }
      },
      {
       value: "M",
       text: {
        es: "Participar en programas de la investigación matemática y de otras ciencias que elaboren las Universidades y Centros de Investigación nacionales e internacionales."
       }
      },
      {
       value: "N",
       text: {
        es: "Manejar esquemas, modelos y teorías abstractas, aplicando sus conocimientos a problemas prácticos y útiles a la sociedad, las ciencias y al desarrollo de la misma matemática."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "IAP",
     visibleIf: "{P48} = 'IAP'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Manejar los sistemas de producción con visión sustentables."
       }
      },
      {
       value: "B",
       text: {
        es: "Diagnosticará los factores bióticos y abióticos limitantes de la producción"
       }
      },
      {
       value: "C",
       text: {
        es: "Manejar de forma eficiente los productos terminales de los sistemas de producción."
       }
      },
      {
       value: "D",
       text: {
        es: "Incrementará la eficiencia de los recursos agua-suelo en la producción de básicos."
       }
      },
      {
       value: "E",
       text: {
        es: "Adquirir las bases para la construcción de sistemas de producción en ambientes ideales."
       }
      },
      {
       value: "F",
       text: {
        es: "Apoyar en la adecuación socioeconómica de las políticas oficiales de desarrollo rural regional."
       }
      },
      {
       value: "G",
       text: {
        es: "Adquirir las bases para analizar la problemática que enfrenta el campo ofreciendo alternativas de solución de manera ética y responsable."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LLE",
     visibleIf: "{P48} = 'LLE'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Impartir clases de idiomas y de traducción."
       }
      },
      {
       value: "B",
       text: {
        es: "Capacidades para traducir documentos y textos."
       }
      },
      {
       value: "C",
       text: {
        es: "Manejo de correspondencia en diversos idiomas."
       }
      },
      {
       value: "D",
       text: {
        es: "Diseñar, evaluar y aplicar programas de enseñanza e instrumentos de evaluación."
       }
      },
      {
       value: "E",
       text: {
        es: "Habilidades para fungir como intérprete en congresos, conferencias y eventos sociales."
       }
      },
      {
       value: "F",
       text: {
        es: "Seleccionar, diseñar y evaluar materiales didácticos para la enseñanza de lenguas extranjeras."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "IIN",
     visibleIf: "{P48} = 'IIN'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Desarrollar planes de acción preventivo y correctivo."
       }
      },
      {
       value: "B",
       text: {
        es: "Determinar los requerimientos de recursos humanos y desarrollar programas de adiestramiento."
       }
      },
      {
       value: "C",
       text: {
        es: "Implementar métodos y procedimientos para detectar incumplimiento de los estándares de calidad, partes defectuosas o dañadas."
       }
      },
      {
       value: "D",
       text: {
        es: "Dirigir estudios sobre la confiabilidad y funcionamiento de instalaciones de plantas, así como de sus sistemas de producción y administración."
       }
      },
      {
       value: "E",
       text: {
        es: "Analizar datos estadísticos y especificaciones del producto para determinar normas y establecer la calidad y objetivos de confiabilidad del producto terminado."
       }
      },
      {
       value: "F",
       text: {
        es: "Coordinar los objetivos de control de calidad entre los distintos departamentos para resolver problemas de producción, maximizar la confiabilidad del producto y minimizar el costo."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LSC",
     visibleIf: "{P48} = 'LSC'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Diseño, instalación y desarrollo de sistemas, equipos y aparatos para la emisión, transmisión o recepción de signos, señales, imágenes, sonidos, a través de radioelectricidad, medios ópticos y otros sistemas de telecomunicaciones."
       }
      },
      {
       value: "B",
       text: {
        es: "Elaborar diagramas y especificaciones técnicas en la construcción, reubicación e instalación de sistemas de telecomunicación y cableado."
       }
      },
      {
       value: "C",
       text: {
        es: "Detectar fallas, dar mantenimiento y soporte a los sistemas y corregir diseños de red."
       }
      },
      {
       value: "D",
       text: {
        es: "Evaluar el rendimiento de la tecnología de cómputo, redes y comunicaciones."
       }
      },
      {
       value: "E",
       text: {
        es: "Administrar centros de cómputo, participando en procesos de diseño, seguridad y auditoría."
       }
      },
      {
       value: "F",
       text: {
        es: "Formular y administrar proyectos de inversión para sistemas de cómputo o instalación de redes."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LAP",
     visibleIf: "{P48} = 'LAP'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Dominio de los métodos, procesos y técnicas que permiten la confección de imágenes."
       }
      },
      {
       value: "B",
       text: {
        es: "Familiarizarse con las ideas que generan y han generado una cultura de la imagen y de los procesos sociales."
       }
      },
      {
       value: "C",
       text: {
        es: "Experiencia en la preparación de la exhibición regular de sus proyectos mediante la integración de obras de acuerdo al contexto artístico para contribuir al ámbito profesional del arte contemporáneo."
       }
      },
      {
       value: "D",
       text: {
        es: "Destreza en la aplicación adecuada de técnicas de representación multidimensionales con un amplio espectro de recursos plásticos-materiales y uso de herramientas en talleres profesionales para la creación de objetos artísticos de formatos diversos."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "IAZ",
     visibleIf: "{P48} = 'IAZ'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Realizar el análisis físico, químico  y biológico de suelos, agua y plantas."
       }
      },
      {
       value: "B",
       text: {
        es: "Diseñar estrategias de comercialización de los productos del campo y modelos de desarrollo."
       }
      },
      {
       value: "C",
       text: {
        es: "Gestionar y canalizar programas y servicios de apoyo social que incidan en el desarrollo rural integral."
       }
      },
      {
       value: "D",
       text: {
        es: "Aplicar estrategias para el mejoramiento genético (métodos de selección, hibridación y consanguinidad)."
       }
      },
      {
       value: "E",
       text: {
        es: "Gestionar programas y proyectos para el desarrollo de infraestructura de captación y almacenamiento de agua."
       }
      },
      {
       value: "F",
       text: {
        es: "Aplicar conocimientos de matemáticas y física para el diseño de sistemas hidráulicos y de modelos topográficos."
       }
      },
      {
       value: "G",
       text: {
        es: "Comprender procesos hormonales y endocrinos que influyen en el comportamiento reproductivo de las especies pecuarias."
       }
      },
      {
       value: "H",
       text: {
        es: "Aplicar adecuadamente los métodos algebraicos estadísticos y estocásticos, para determinar leyes de la herencia y heredabilidad."
       }
      },
      {
       value: "I",
       text: {
        es: "Identificar el funcionamiento de células, tejidos y órganos en plantas y animales y su ubicación en los taxones correspondientes."
       }
      },
      {
       value: "J",
       text: {
        es: "Diseñar estrategias en el ámbito regional, estatal y nacional para la planificación y organización de la producción agropecuaria."
       }
      },
      {
       value: "K",
       text: {
        es: "Aplicar cálculos matemáticos y  datos estadísticos en determinaciones agronómicas y zootécnicas  así como en modelos experimentales y de investigación."
       }
      },
      {
       value: "L",
       text: {
        es: "Conocer con profundidad el metabolismo de  grasas, lípidos, proteínas, carbohidratos, vitaminas y minerales."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "ARL",
     visibleIf: "{P48} = 'ARL'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Interpretar las teorías y las metodologías de la arqueología social latinoamericana y la arqueología conductual que explican la cultura material."
       }
      },
      {
       value: "B",
       text: {
        es: "Emplear las habilidades técnicas de investigación y las tecnológicas dirigidas a la protección integral del patrimonio cultural de sociedades pasadas y presentes, así como contribuir a la consolidación de la identidad nacional."
       }
      },
      {
       value: "C",
       text: {
        es: "Valorar las teorías y las metodologías de la Antropología, Geografía e Historia y ciencias auxiliares para la generación de conocimiento arqueológico que coadyuven a la recuperación, rehabilitación, conservación, protección y divulgación de la cultura material."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LEI",
     visibleIf: "{P48} = 'LEI'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Producir y comprender textos y discursos en español e inglés con precisión y fluidez."
       }
      },
      {
       value: "B",
       text: {
        es: "Diseñar, evaluar y aplicar programas de enseñanza e instrumentos de evaluación en diferentes contextos de enseñanza-aprendizaje de la lengua inglesa."
       }
      },
      {
       value: "C",
       text: {
        es: "Impartir clases de lengua inglesa utilizando una amplia gama de estrategias didácticas que reflejan su comprensión de la naturaleza del lenguaje y el proceso de adquisición y aprendizaje de una lengua extranjera."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LGI",
     visibleIf: "{P48} = 'LGI'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Preparar informes de impacto ambiental."
       }
      },
      {
       value: "B",
       text: {
        es: "Desarrollar sistemas de información geográfica."
       }
      },
      {
       value: "C",
       text: {
        es: "Elaborar e interpretar mapas, gráficas y diagramas."
       }
      },
      {
       value: "D",
       text: {
        es: "Analizar información sobre población, usos del suelo, infraestructura, vegetación, límites administrativos, etcétera."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LES",
     visibleIf: "{P48} = 'LES'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Reconocer en las prácticas o hábitos comunitarias el origen y o propagación de enfermedades."
       }
      },
      {
       value: "B",
       text: {
        es: "Canalizar a las distintas instituciones a individuos, familias o colectivos que requieran de atención médica."
       }
      },
      {
       value: "C",
       text: {
        es: "Reconocer la presencia de enfermedades crónico-degenerativas o causadas por distintos agentes patógena o epidemiológica que afecten la salud comunitaria."
       }
      },
      {
       value: "D",
       text: {
        es: "Proponer, gestionar y operar programas educativos para la prevención y conservación de la salud, así como para la transformación de las prácticas culturales, sociales y económicas coadyuvantes de la enfermedad."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LCI",
     visibleIf: "{P48} = 'LCI'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Conocimiento de las teorías sobre la Nueva División Internacional del Trabajo."
       }
      },
      {
       value: "B",
       text: {
        es: "Diseñar y lanzar propuestas de valor operativo superior hacia los mercados internacionales."
       }
      },
      {
       value: "C",
       text: {
        es: "Identificar las oportunidades de generación de negocios rentables en los mercados globales."
       }
      },
      {
       value: "D",
       text: {
        es: "Diseñar estrategias de planeación del mercado, tomando como base la población a nivel mundial."
       }
      },
      {
       value: "E",
       text: {
        es: "Generar escenarios donde se considere el desarrollo sustentable a nivel mundial con impacto de lo nacional."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "ITR",
     visibleIf: "{P48} = 'ITR'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Planificar y estimar las rutas y destinos."
       }
      },
      {
       value: "B",
       text: {
        es: "Realizar estudios de oferta y demanda de transporte."
       }
      },
      {
       value: "C",
       text: {
        es: "Diagnosticar problemas y necesidades de transporte en sus diferentes tipos."
       }
      },
      {
       value: "D",
       text: {
        es: "Conocimientos en administración, logística, planificación de rutas, costos y presupuestos."
       }
      },
      {
       value: "E",
       text: {
        es: "Programar los recursos humanos, financieros y el insumo de materiales, maquinaria, equipo y herramienta requeridos para la ejecución de los trabajos asignados."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "ISI",
     visibleIf: "{P48} = 'ISI'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Optimizar sistemas y recursos computacionales."
       }
      },
      {
       value: "B",
       text: {
        es: "Desarrollar investigación competitiva en el área de Ingeniería en Sistemas Inteligentes."
       }
      },
      {
       value: "C",
       text: {
        es: "Instalar, configurar, administrar y dar mantenimiento a productos de hardware y software inteligente."
       }
      },
      {
       value: "D",
       text: {
        es: "Comprender y aplicar los conocimientos, técnicas y herramientas de la Inteligencia Artificial y de la Minería de Datos, para el desarrollo de sistemas inteligentes."
       }
      },
      {
       value: "E",
       text: {
        es: "Desarrollar sistemas computacionales, mediante métodos y técnicas de Inteligencia Artificial, para el tratamiento de información, toma de decisiones y solución de problemas."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "ISW",
     visibleIf: "{P48} = 'ISW'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Programar software."
       }
      },
      {
       value: "B",
       text: {
        es: "Planear proyectos de software."
       }
      },
      {
       value: "C",
       text: {
        es: "Diseñar proyectos de software."
       }
      },
      {
       value: "D",
       text: {
        es: "Implementar y evaluar los proyectos de software."
       }
      },
      {
       value: "E",
       text: {
        es: "Detectar fallas y/o oportunidades de mejora en los proyectos de software."
       }
      },
      {
       value: "F",
       text: {
        es: "Monitorear la funcionalidad de los proyectos de software en producción y los equipos de cómputo en los que están instalados."
       }
      },
      {
       value: "G",
       text: {
        es: "Revisar los avances en lenguajes de programación, modelos, metodologías y herramientas tecnológicas y valora los beneficios de utilizarlos en el desarrollo de proyectos de software."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "IPL",
     visibleIf: "{P48} = 'IPL'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Crear productos plásticos de alto valor, sustentables y de alta calidad."
       }
      },
      {
       value: "B",
       text: {
        es: "Seleccionar los materiales necesarios para el óptimo desarrollo de un producto plástico."
       }
      },
      {
       value: "C",
       text: {
        es: "Preserva el medio ambiente como un principio de ética profesional en el desarrollo de productos plásticos."
       }
      },
      {
       value: "D",
       text: {
        es: "Definir los equipos, herramentales e instalaciones necesarias para la implementación de un óptimo proceso productivo de productos plásticos."
       }
      },
      {
       value: "E",
       text: {
        es: "Establecer y administrar la cadena de valor de un sistema productivo de transformación de materiales plásticos que garantice la calidad y satisfacción del cliente."
       }
      },
      {
       value: "F",
       text: {
        es: "Desarrolla proyectos de investigación relacionados con el desarrollo de materiales plásticos, la innovación tecnológica y la preservación del medio ambiente para la generación e innovación del conocimiento."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "IPI",
     visibleIf: "{P48} = 'IPI'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Dirigir el proceso de producción industrial."
       }
      },
      {
       value: "B",
       text: {
        es: "Controlar el proceso de producción industrial."
       }
      },
      {
       value: "C",
       text: {
        es: "Optimizar el proceso de producción industrial."
       }
      },
      {
       value: "D",
       text: {
        es: "Administrar y planear el proceso producción industrial."
       }
      },
      {
       value: "E",
       text: {
        es: "Planear tiempos y costos para la entrega final del diseño del proceso de producción industrial."
       }
      },
      {
       value: "F",
       text: {
        es: "Crear o diseñar la maquinaria, equipos y herramentales para el proceso de producción industrial."
       }
      },
      {
       value: "G",
       text: {
        es: "Identificar el problema o necesidad del proceso de producción industrial y un tipo de solución esperada."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LSD",
     visibleIf: "{P48} = 'LSD'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Genera y gestiona conocimiento para la efectividad del sistema penitenciario."
       }
      },
      {
       value: "B",
       text: {
        es: "Asesoría al público sobre la interpretación adecuada de leyes, reglamentos en materia de seguridad social y derechos/obligaciones."
       }
      },
      {
       value: "C",
       text: {
        es: "Desarrolla programas de comunicación social y vinculación ciudadana de las instituciones del sistema de seguridad y justicia penal."
       }
      },
      {
       value: "D",
       text: {
        es: "Aplicar las metodologías para la Prevención del delito, la Procuración de Justicia, la atención de la Reinserción Social, la Administración de Justicia y la Participación Ciudadana."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LGR",
     visibleIf: "{P48} = 'LGR'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Realiza investigación para contribuir a la consolidación de la Gerontología."
       }
      },
      {
       value: "B",
       text: {
        es: "Realizar la valoración gerontológica integral del adulto mayor, persona que envejece y cuidador primario."
       }
      },
      {
       value: "C",
       text: {
        es: "Otorgar información y orientación a la comunidad sobre aspectos relacionados con el proceso de envejecimiento social."
       }
      },
      {
       value: "D",
       text: {
        es: "Estructurar y evaluar planes de intervención y programas de atención gerontológica a nivel comunitario para el autocuidado y envejecimiento activo y saludable."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LDT",
     visibleIf: "{P48} = 'LDT'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Gestionar los trámites y requisitos aduaneros."
       }
      },
      {
       value: "B",
       text: {
        es: "Asesorar jurídicamente el desarrollo de contratos comerciales."
       }
      },
      {
       value: "C",
       text: {
        es: "Formular contratos de compraventa internacional y supervisa su cumplimiento."
       }
      },
      {
       value: "D",
       text: {
        es: "Actuar como mediador internacional entre las empresas mexicanas y de otra procedencia fiscal."
       }
      },
      {
       value: "E",
       text: {
        es: "Evaluar y diseñar, acuerdos y tratados comerciales (arancelarios, de servicios y de propiedad intelectual."
       }
      },
      {
       value: "F",
       text: {
        es: "Asesorar a particulares y empresas que desean realizar actividades comerciales en nuestro País o en el Extranjero."
       }
      },
      {
       value: "G",
       text: {
        es: "Investigar y desarrollar nuevos procedimientos para la celebración y cumplimiento de contratos comerciales internacionales."
       }
      },
      {
       value: "H",
       text: {
        es: "Interpretar la problemática del comercio internacional desde el dominio de la regulación jurídica multilateral, regional y bilateral del comercio."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LLO",
     visibleIf: "{P48} = 'LLO'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Coordinar el proceso de compras. "
       }
      },
      {
       value: "B",
       text: {
        es: "Analizar información y diseñar bases de datos que den soporte al sistema."
       }
      },
      {
       value: "C",
       text: {
        es: "Gestionar inventarios para sincronizar la producción y la demanda del mercado."
       }
      },
      {
       value: "D",
       text: {
        es: "Participar en el desarrollo y modernización de instalaciones logísticas en México."
       }
      },
      {
       value: "E",
       text: {
        es: "Administrar y realizar la planeación de la producción y almacenamiento de productos. "
       }
      },
      {
       value: "F",
       text: {
        es: "Establecer un sistema o proceso de ingeniería o reingeniería en la cadena de suministro."
       }
      },
      {
       value: "G",
       text: {
        es: "Procesar pedidos de la cadena de suministros para el intercambio de información y de mercancías."
       }
      },
      {
       value: "H",
       text: {
        es: "Aplicar la logística como medio de apalancamiento financiero optimizado costos de operación en la cadena de suministros."
       }
      },
      {
       value: "I",
       text: {
        es: "Diseñar redes de transporte y administra su proceso para el desplazamiento físico del producto en diferentes escenarios geográficos y regulaciones gubernamentales."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LNI",
     visibleIf: "{P48} = 'LNI'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Promueve la creación y expansión de PYMEs."
       }
      },
      {
       value: "B",
       text: {
        es: "Evaluar proyectos de inversión para resolver una necesidad en forma eficiente, segura y rentable."
       }
      },
      {
       value: "C",
       text: {
        es: "Generar conocimiento sobre aplicaciones numéricas y su influencia sobre los negocios internacionales."
       }
      },
      {
       value: "D",
       text: {
        es: "Generar conocimiento sobre los mercados, la cultura y la forma de hacer negocios internacionales en distintas regiones."
       }
      },
      {
       value: "E",
       text: {
        es: "Evalúa y analiza alternativas económicas relacionadas con el consumo y la producción, para el mejoramiento de la productividad."
       }
      },
      {
       value: "F",
       text: {
        es: "Emplear software matemático y estadístico adecuado, para una correcta evaluación de los resultados y una mejor toma de decisiones en la empresa."
       }
      },
      {
       value: "G",
       text: {
        es: "Identifica las principales variables micro y macroeconómicas que determinan el entorno de la empresa, y como estas influyen en las decisiones que se deben tomar."
       }
      },
      {
       value: "H",
       text: {
        es: "Aplica diferentes métodos en estados financieros, con variación al capital contable y al estado de cambios en la posición financiera, con base al flujo de efectivo."
       }
      },
      {
       value: "I",
       text: {
        es: "Colaborar en la correcta aplicación y observancia de la normatividad, acuerdos, tratados y reglamentos en materia de comercio exterior, inversión extranjera y negocios internacionales."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LBM",
     visibleIf: "{P48} = 'LBM'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Promover el uso óptimo de la tecnología para ofrecer la mejor calidad de atención a los pacientes."
       }
      },
      {
       value: "B",
       text: {
        es: "Investigación sobre los resultados derivados de aplicación de las tecnologías y de su adaptación al contexto sanitario del país."
       }
      },
      {
       value: "C",
       text: {
        es: "Intercambio de información como herramienta para la toma de decisiones relacionadas con políticas de salud, servicios hospitalarios y práctica clínica."
       }
      },
      {
       value: "D",
       text: {
        es: "Desarrollo de innovaciones en productos y servicios tecnológicos o en procesos de soporte tecnológico en las áreas de Cirugía, medicina interna, medico quirúrgicas, diagnóstico y medicina física."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "ISES",
     visibleIf: "{P48} = 'ISES'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Diseñar edificaciones sustentables y con bajo consumo energético."
       }
      },
      {
       value: "B",
       text: {
        es: "Elaborar programas de ahorro y uso eficiente de la energía en el sector energético, social, e industrial."
       }
      },
      {
       value: "C",
       text: {
        es: "Investigar sobre la problemática energética y plantear soluciones que contribuyan al desarrollo sustentable."
       }
      },
      {
       value: "D",
       text: {
        es: "Proyectar, diseñar, analizar, instalar, programar, controlar, operar y mantener sistemas relacionados con el aprovechamiento sustentable de la energía."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LME",
     visibleIf: "{P48} = 'LME'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Administrar y planear la función de mercadotecnia."
       }
      },
      {
       value: "B",
       text: {
        es: "Conocer el entorno legal del comercio internacional."
       }
      },
      {
       value: "C",
       text: {
        es: "Implementar y evaluar sistemas de protección ecológica."
       }
      },
      {
       value: "D",
       text: {
        es: "Promover registros de propiedad intelectual e industrial."
       }
      },
      {
       value: "E",
       text: {
        es: "Promover, desarrollar, expandir y establecer negocios vía internet."
       }
      },
      {
       value: "F",
       text: {
        es: "Desarrollar programas de capacitación de fuerzas de ventas, publicistas y promotores."
       }
      },
      {
       value: "G",
       text: {
        es: "Elaborar y ofertar diagnósticos mercadológicos para organismos sociales y empresariales."
       }
      },
      {
       value: "H",
       text: {
        es: "Administrar servicios de mercadotecnia en ámbitos locales, regionales, nacionales e internacionales."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LNIB",
     visibleIf: "{P48} = 'LNIB'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Promover la creación y expansión de PYMEs empleando estrategias de comunicación bilingüe."
       }
      },
      {
       value: "B",
       text: {
        es: "Valorar la mejor decisión de inversión, minimizar riesgos, costos y maximizar beneficios en materia de comercio y finanzas."
       }
      },
      {
       value: "C",
       text: {
        es: "Identificar las principales variables micro y macroeconómicas que determinan el entorno de la empresa, y cómo éstas influyen en las decisiones que se deben tomar."
       }
      },
      {
       value: "D",
       text: {
        es: "Aplicar diferentes métodos en estados financieros, con variación al capital contable y al estado de cambios en la posición financiera, con base al flujo de efectivo."
       }
      },
      {
       value: "E",
       text: {
        es: "Analizar el funcionamiento de los mercados financieros internacionales, los medios de política económica relacionados con el mundo de las finanzas y los portafolios de inversión."
       }
      },
      {
       value: "F",
       text: {
        es: "Diseñar e implementar estrategias para promocionar y promover los negocios internacionales de empresas establecidas en México con empresarios de otros países, con el más alto dominio de una lengua extranjera."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LBT",
     visibleIf: "{P48} = 'LBT'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Cultivar Tejidos vegetales con fines de micropropagación de especies en peligro de extinción o de su conservación."
       }
      },
      {
       value: "B",
       text: {
        es: "Aplicar técnicas experimentales y computacionales para describir propiedades físico-químicas de proteínas, ácidos nucleicos, carbohidratos y lípidos."
       }
      },
      {
       value: "C",
       text: {
        es: "Analizar y proponer soluciones sustentables basadas en el empleo de seres vivos como sistemas de trabajo capaces de eliminar contaminantes de las aguas residuales y suelos."
       }
      },
      {
       value: "D",
       text: {
        es: "Participar en el estudio y generación de nuevos metabólicos, así como la generación e investigación sobre vacunas, proteínas recombinantes y anticuerpos monoclonales."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LADI",
     visibleIf: "{P48} = 'LADI'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Manejo de equipo fotográfico y de video."
       }
      },
      {
       value: "B",
       text: {
        es: "Revelar, editar y restaurar fotografías."
       }
      },
      {
       value: "C",
       text: {
        es: "Crear diversas estrategias educativas para la educación visual."
       }
      },
      {
       value: "D",
       text: {
        es: "Manejo de programas computacionales para digitalización de imágenes, audio y video."
       }
      },
      {
       value: "E",
       text: {
        es: "Crear objetos artísticos: videos; animaciones; imagen auditiva; intervenciones al espacio urbano, natural, virtual; manipulación de tecnología obsoleta; acciones reales o virtuales; interactividad; juegos digitales; objetos electrónicos; net art; activismo digital."
       }
      },
      {
       value: "F",
       text: {
        es: "Crear producciones de imagen fija y en movimiento: presentaciones digitales, videos, animaciones, imagen en movimiento como ficción, imagen en movimiento como documentales, promocionales en imagen fija y en movimiento, comerciales, direcciones artísticas de teatro, cine, producción de cine, teatro, video."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LCFD",
     visibleIf: "{P48} = 'LCFD'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Enseñar técnicas y rutinas de los deportes."
       }
      },
      {
       value: "B",
       text: {
        es: "Participar en equipos multidisciplinarios especializados en servicios de la salud terapeuta y rehabilitación."
       }
      },
      {
       value: "C",
       text: {
        es: "Administrar y gestionar actividades y eventos de carácter deportivo recreativo y social en instituciones públicas y privadas."
       }
      },
      {
       value: "D",
       text: {
        es: "Emprender acciones individuales y colectivas para crear ambientes saludables a través de la actividad física, prevenir adicciones y fomentar el uso positivo del tiempo libre."
       }
      },
      {
       value: "E",
       text: {
        es: "Ejercer docencia de la actividad física y el deporte en instituciones de educación media superior y superior, como proceso pedagógico organizado y vinculado al sistema educativo."
       }
      },
      {
       value: "F",
       text: {
        es: "Atender a través de la actividad física y el deporte, las necesidades de integración y aceptación en la sociedad de grupos vulnerables, y sectores juveniles marginados que viven en un entorno de pobreza y rezago social."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LGAM",
     visibleIf: "{P48} = 'LGAM'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Evaluar el riesgo natural a escala global y regional en términos de probabilidad de ocurrencia y severidad."
       }
      },
      {
       value: "B",
       text: {
        es: "Investigar los elementos de competitividad y de desarrollo económico y social en el ámbito internacional, nacional, estatal y local."
       }
      },
      {
       value: "C",
       text: {
        es: "Proponer soluciones encaminadas al uso sostenible de los recursos naturales que el hombre emplea en beneficio propio: flora y fauna, suelo, minerales y agua."
       }
      },
      {
       value: "D",
       text: {
        es: "Evaluar el impacto social, económico y ambiental de las acciones y proyectos emprendidos sobre la utilización de los recursos naturales de manera sustentable."
       }
      },
      {
       value: "E",
       text: {
        es: "Proponer proyectos de planeación estratégica eficientes de sostenibilidad aplicando aspectos teóricos y metodológicos de la evaluación multicriterio y multiobjetivo."
       }
      },
      {
       value: "F",
       text: {
        es: "Generar conocimiento que mejore la comprensión de los impactos de riego ambiental y natural en zonas identificadas como amenaza, con el uso de la tecnología y los sistemas de información Geográfica."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "TSA",
     visibleIf: "{P48} = 'TSA'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Conocimientos en biología, química o medio ambiente."
       }
      },
      {
       value: "B",
       text: {
        es: "Diseño, supervisión, dirección y participación de programas de explotación y reforestación de áreas verdes urbanas y bosques."
       }
      },
      {
       value: "C",
       text: {
        es: "Gestión y promoción las actividades de reforestación y conservación de suelos."
       }
      },
      {
       value: "D",
       text: {
        es: "Investigación aplicada en preparación de suelos, conocimientos de plantas, semillas y recursos forestales."
       }
      },
      {
       value: "E",
       text: {
        es: "Capacitación en temas como ecología y medio ambiente."
       }
      },
      {
       value: "F",
       text: {
        es: "Diseñar espacios verdes que contemplen una adecuada población arbórea."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LCM",
     visibleIf: "{P48} = 'LCM'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Crear obras fílmicas de Ficción y Documental que trascienden y motivan a la reflexión a través de la expresión artística."
       }
      },
      {
       value: "B",
       text: {
        es: "Realiza proyectos Documentales basados en investigaciones concisas para profundizar y enriquecer el conocimiento y la cultura."
       }
      },
      {
       value: "C",
       text: {
        es: "Fomentar a través de ensayos visuales la relevancia que adquiere el Cine como archivo histórico de nuestro acontecer."
       }
      },
      {
       value: "D",
       text: {
        es: "Exponer la realidad social a través de discursos visuales para crear sinergias que ayuden a la solución de problemas específicos."
       }
      },
      {
       value: "E",
       text: {
        es: "Dirigir proyectos Cinematográficos de Ficción, Documental y audiovisual."
       }
      },
      {
       value: "F",
       text: {
        es: "Elaborar la preproducción de proyectos Cinematográficos."
       }
      },
      {
       value: "G",
       text: {
        es: "Realizar fotografía en cortos, medios y largometrajes ficcionales y documentales."
       }
      },
      {
       value: "H",
       text: {
        es: "Coordinar y crear los aspectos artísticos de una Producción Cinematográfica."
       }
      },
      {
       value: "I",
       text: {
        es: "Escribir cortos, medios y largometrajes Ficcionales y Documentales."
       }
      },
      {
       value: "J",
       text: {
        es: "Editar proyectos Cinematográficos y televisivos."
       }
      },
      {
       value: "K",
       text: {
        es: "Sonorizar cortos, medios y largometrajes Ficcionales y Documentales."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LMU",
     visibleIf: "{P48} = 'LMU'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Componer repertorio para orquestas, solistas, grupos de cámara y medios audiovisuales y realiza arreglos musicales."
       }
      },
      {
       value: "B",
       text: {
        es: "Impartir docencia musical en todos los niveles educativos."
       }
      },
      {
       value: "C",
       text: {
        es: "Dirigir y/o integrar agrupaciones instrumentales y vocales profesionales o de aficionados."
       }
      },
      {
       value: "D",
       text: {
        es: "Ejecutar e interpretar un instrumento musical."
       }
      },
      {
       value: "E",
       text: {
        es: "Investigar y analizar el fenómeno sonoro."
       }
      },
      {
       value: "F",
       text: {
        es: "Promover y gestionar el arte sonoro."
       }
      },
      {
       value: "G",
       text: {
        es: "Realizar crítica musical a través de diferentes estilos de análisis."
       }
      },
      {
       value: "H",
       text: {
        es: "Producir discursos sonoros utilizando herramientas tecnológicas."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "IPQ",
     visibleIf: "{P48} = 'IPQ'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Aplicar diseños que aseguran la síntesis, desarrollo y manufactura de productos petroquímicos."
       }
      },
      {
       value: "B",
       text: {
        es: "Desarrollar procesos productivos y organizacionales que mejorar la calidad y productividad en la cadena de valor del sector petroquímico mediante la innovación."
       }
      },
      {
       value: "C",
       text: {
        es: "Establecer programas de control de calidad y procedimientos operativos en la producción y distribución de petroquímicos con un enfoque sustentable."
       }
      },
      {
       value: "D",
       text: {
        es: "Desarrollar investigación sobre nuevas plataformas tecnológicas."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LLH",
     visibleIf: "{P48} = 'LLH'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Corrección ortotipográfica y de estilo."
       }
      },
      {
       value: "B",
       text: {
        es: "Desempeño de tareas especializadas en el ámbito editorial: editor, director, jefe o gerente editorial."
       }
      },
      {
       value: "C",
       text: {
        es: "Construcción de proyectos de promoción y gestión cultural, con énfasis en la escritura y la lectura."
       }
      },
      {
       value: "D",
       text: {
        es: "Escritura especializada en medios editoriales (periodísticos, por ejemplo)."
       }
      },
      {
       value: "E",
       text: {
        es: "Escritura especializada en medios de comunicación (como guiones)."
       }
      },
      {
       value: "F",
       text: {
        es: "Crítica y autocrítica, de manera ética, humanística y reflexiva."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LMA",
     visibleIf: "{P48} = 'LMA'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Restaurar las relaciones interpersonales y sociales dañadas por la comisión de un delito, así como en conflictos familiares, escolares y sociales donde incida la violencia."
       }
      },
      {
       value: "B",
       text: {
        es: "Fomentar la comunicación no violenta entre las partes para que lleguen a la solución de sus conflictos."
       }
      },
      {
       value: "C",
       text: {
        es: "Orienta el proceso de conciliación aplicando las herramientas, técnicas y habilidades que permitan a las partes llegar a sus propios acuerdos."
       }
      },
      {
       value: "D",
       text: {
        es: "Reconocer las limitaciones jurídicas y humanas en un determinado conflicto y respetar las leyes, los Derechos Humanos y la voluntad de las partes."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "TSUPB",
     visibleIf: "{P48} = 'TSUPB'",
     title: {
      es: "TSUPB"
     },
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Diseñar y elaborar restauraciones dentales."
       }
      },
      {
       value: "B",
       text: {
        es: "Diseñar, elaborar y modificar prótesis bucodentales mediante el uso del sistema CAD CAM."
       }
      },
      {
       value: "C",
       text: {
        es: "Diseñar, elaborar, modificar y reparar aparatos protésicos bucodentales."
       }
      },
      {
       value: "D",
       text: {
        es: "Diseñar, elaborar, modificar y reparar aparatos ortodóncicos."
       }
      },
      {
       value: "E",
       text: {
        es: "Diseñar, elaborar, modificar y reparar aparatos ortopédicos maxilomandibulares."
       }
      },
      {
       value: "F",
       text: {
        es: "Organizar el funcionamiento del laboratorio dental apegado a la normatividad."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LGRS",
     visibleIf: "{P48} = 'LGRS'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Evaluar datos para identificar patrones, tendencias, necesidades y problemáticas de la sociedad en red a nivel internacional y nacional."
       }
      },
      {
       value: "B",
       text: {
        es: "Proponer información sobre patrones, tendencias, necesidades, problemáticas, identidad e imagen personal, profesional y corporativa de la sociedad en red."
       }
      },
      {
       value: "C",
       text: {
        es: "Gestionar estratégicamente la información en las organizaciones públicas y privadas sobre tendencias, necesidades y problemáticas de la sociedad en red, para la toma de decisiones."
       }
      },
      {
       value: "D",
       text: {
        es: "Gestionar comunidades virtuales de la sociedad en red."
       }
      },
      {
       value: "E",
       text: {
        es: "Evaluar el desempeño de organizaciones públicas y privadas en el manejo de datos e información."
       }
      },
      {
       value: "F",
       text: {
        es: "Colaborar en la formulación de políticas y acciones gubernamentales sobre el acceso, uso y protección de datos e información de la sociedad en red."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LDA",
     visibleIf: "{P48} = 'LDA'",
     title: {
      es: "LDA"
     },
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Crear coreografías de danza de diversos estilos, con el uso de las técnicas dancísticas clásica, contemporánea y/o folklór mexicano."
       }
      },
      {
       value: "B",
       text: {
        es: "Proponer proyectos escénico-dancísticos para la presentación de coreografías en eventos locales, estatales, regionales, nacionales e internacionales."
       }
      },
      {
       value: "C",
       text: {
        es: "Interpretar obras dancísticas en grupos o compañías, en eventos locales, estatales, regionales, nacionales e internacionales."
       }
      },
      {
       value: "D",
       text: {
        es: "Promover la gestión cultural en instituciones y organizaciones, en los ámbitos nacional e internacional."
       }
      },
      {
       value: "E",
       text: {
        es: "Evaluar proyectos escénicos y eventos de danza."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LMAX",
     visibleIf: "{P48} = 'LMAX'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Restaurar las relaciones interpersonales y sociales dañadas por la comisión de un delito, así como en conflictos familiares, escolares y sociales donde incida la violencia."
       }
      },
      {
       value: "B",
       text: {
        es: "Fomentar la comunicación no violenta entre las partes para que lleguen a la solución de sus conflictos."
       }
      },
      {
       value: "C",
       text: {
        es: "Orienta el proceso de conciliación aplicando las herramientas, técnicas y habilidades que permitan a las partes llegar a sus propios acuerdos."
       }
      },
      {
       value: "D",
       text: {
        es: "Reconocer las limitaciones jurídicas y humanas en un determinado conflicto y respetar las leyes, los Derechos Humanos y la voluntad de las partes."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LAMD",
     visibleIf: "{P48} = 'LAMD'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Planificar y supervisar programas de reclutamiento."
       }
      },
      {
       value: "B",
       text: {
        es: "Conocimientos en entrenamiento operativo, administración de recursos, inventarios, impuestos y nómina."
       }
      },
      {
       value: "C",
       text: {
        es: "Capacidades en la elaboración de esquemas de planeación, manuales de procedimientos y políticas generales."
       }
      },
      {
       value: "D",
       text: {
        es: "Elaborar y planear estrategias de organización interna para empresas que les ayude a optimizar los recursos."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LIAD",
     visibleIf: "{P48} = 'LIAD'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Creación y mantenimiento de helpesk."
       }
      },
      {
       value: "B",
       text: {
        es: "Liderar proyectos de desarrollo de software."
       }
      },
      {
       value: "C",
       text: {
        es: "Generación de planes estratégicos informáticos incluyendo estudios DOFA"
       }
      },
      {
       value: "D",
       text: {
        es: "Administrar los sistemas de comunicaciones de las organizaciones de manera eficiente."
       }
      },
      {
       value: "E",
       text: {
        es: "Administrar y controlar las redes y las comunicaciones en general en las organizaciones."
       }
      },
      {
       value: "F",
       text: {
        es: "Analiza, organiza y resuelve cuestiones numéricas, datos financieros, estadísticos y similares."
       }
      },
      {
       value: "G",
       text: {
        es: "Usar sistemas de información para la toma de decisiones, apoyándose en tecnología informática."
       }
      },
      {
       value: "H",
       text: {
        es: "Planear, generar y mantener bases de datos de las organizaciones con bancos de datos electrónicos."
       }
      },
      {
       value: "I",
       text: {
        es: "Diseño de implementación de planes de contingencia en caso de desastres (DRP) y planes operativos de respaldo electrónico."
       }
      },
      {
       value: "J",
       text: {
        es: "Brinda capacidad técnica e intelectual en conocimientos de mercados y productos, fiscal, financiero, recursos humanos y gestión organizacional, como funciones sustantivas de las organizaciones."
       }
      },
      {
       value: "K",
       text: {
        es: "Desarrollo de sistemas de información administrativos que permitan los procesamientos en línea y la generación de estadísticas y simulaciones pertinentes para apoyar la toma de decisiones en tiempo real."
       }
      },
      {
       value: "L",
       text: {
        es: "Encuentra alternativas diferentes de solución de problemas, interpretar de distintas formas las situaciones y visualizar una variedad de respuestas ante problemas cotidianos y estratégicos de las organizaciones."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LEND",
     visibleIf: "{P48} = 'LEND'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Realizar esterilización y acomodo de material e instrumental médico y de quirófano."
       }
      },
      {
       value: "B",
       text: {
        es: "Realizar revisiones médicas, atención y administración de medicamentos a pacientes."
       }
      },
      {
       value: "C",
       text: {
        es: "Coordinar equipos interdisciplinarios para implementar acciones de vacunación y prevención de enfermedades."
       }
      },
      {
       value: "D",
       text: {
        es: "Aplicar acciones de promoción de la salud pública, prevención de enfermedades y manejo de riesgos sanitarios."
       }
      },
      {
       value: "E",
       text: {
        es: "Capacidad para planificar, organizar, ejecutar y evaluar actividades de promoción, prevención y recuperación de la salud, con criterios de calidad."
       }
      },
      {
       value: "F",
       text: {
        es: "Participar en investigación sobre el objeto de estudio, el trabajo de enfermería y problemas de la salud que afectan a la persona, familia y comunidad."
       }
      },
      {
       value: "G",
       text: {
        es: "Habilidad para aplicar la metodología del proceso de enfermería y teorías de la disciplina que, organiza la intervención garantizando la relación de ayuda."
       }
      },
      {
       value: "H",
       text: {
        es: "Habilidad para interactuar en equipos interdisciplinarios y multisectoriales, con capacidad resolutiva para satisfacer las necesidades de salud prioritaria, emergente y especial."
       }
      },
      {
       value: "I",
       text: {
        es: "Capacidad para aplicar los conocimientos en el cuidado holístico de la persona, familia y comunidad considerando las diversas fases del ciclo de vida en los procesos de salud-enfermedad."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LDTD",
     visibleIf: "{P48} = 'LDTD'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Gestionar los trámites y requisitos aduaneros."
       }
      },
      {
       value: "B",
       text: {
        es: "Asesorar jurídicamente el desarrollo de contratos comerciales."
       }
      },
      {
       value: "C",
       text: {
        es: "Formular contratos de compraventa internacional y supervisa su cumplimiento."
       }
      },
      {
       value: "D",
       text: {
        es: "Actuar como mediador internacional entre las empresas mexicanas y de otra procedencia fiscal."
       }
      },
      {
       value: "E",
       text: {
        es: "Evaluar y diseñar, acuerdos y tratados comerciales (arancelarios, de servicios y de propiedad intelectual."
       }
      },
      {
       value: "F",
       text: {
        es: "Asesorar a particulares y empresas que desean realizar actividades comerciales en nuestro País o en el Extranjero."
       }
      },
      {
       value: "G",
       text: {
        es: "Investigar y desarrollar nuevos procedimientos para la celebración y cumplimiento de contratos comerciales internacionales."
       }
      },
      {
       value: "H",
       text: {
        es: "Interpretar la problemática del comercio internacional desde el dominio de la regulación jurídica multilateral, regional y bilateral del comercio."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LNID",
     visibleIf: "{P48} = 'LNID'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Promueve la creación y expansión de PYMEs."
       }
      },
      {
       value: "B",
       text: {
        es: "Evaluar proyectos de inversión para resolver una necesidad en forma eficiente, segura y rentable."
       }
      },
      {
       value: "C",
       text: {
        es: "Generar conocimiento sobre aplicaciones numéricas y su influencia sobre los negocios internacionales."
       }
      },
      {
       value: "D",
       text: {
        es: "Generar conocimiento sobre los mercados, la cultura y la forma de hacer negocios internacionales en distintas regiones."
       }
      },
      {
       value: "E",
       text: {
        es: "Evalúa y analiza alternativas económicas relacionadas con el consumo y la producción, para el mejoramiento de la productividad."
       }
      },
      {
       value: "F",
       text: {
        es: "Emplear software matemático y estadístico adecuado, para una correcta evaluación de los resultados y una mejor toma de decisiones en la empresa."
       }
      },
      {
       value: "G",
       text: {
        es: "Identifica las principales variables micro y macroeconómicas que determinan el entorno de la empresa, y como estas influyen en las decisiones que se deben tomar."
       }
      },
      {
       value: "H",
       text: {
        es: "Aplica diferentes métodos en estados financieros, con variación al capital contable y al estado de cambios en la posición financiera, con base al flujo de efectivo."
       }
      },
      {
       value: "I",
       text: {
        es: "Colaborar en la correcta aplicación y observancia de la normatividad, acuerdos, tratados y reglamentos en materia de comercio exterior, inversión extranjera y negocios internacionales."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LLOD",
     visibleIf: "{P48} = 'LLOD'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      {
       value: "A",
       text: {
        es: "Coordinar el proceso de compras. "
       }
      },
      {
       value: "B",
       text: {
        es: "Analizar información y diseñar bases de datos que den soporte al sistema."
       }
      },
      {
       value: "C",
       text: {
        es: "Gestionar inventarios para sincronizar la producción y la demanda del mercado."
       }
      },
      {
       value: "D",
       text: {
        es: "Participar en el desarrollo y modernización de instalaciones logísticas en México."
       }
      },
      {
       value: "E",
       text: {
        es: "Administrar y realizar la planeación de la producción y almacenamiento de productos. "
       }
      },
      {
       value: "F",
       text: {
        es: "Establecer un sistema o proceso de ingeniería o reingeniería en la cadena de suministro."
       }
      },
      {
       value: "G",
       text: {
        es: "Procesar pedidos de la cadena de suministros para el intercambio de información y de mercancías."
       }
      },
      {
       value: "H",
       text: {
        es: "Aplicar la logística como medio de apalancamiento financiero optimizado costos de operación en la cadena de suministros."
       }
      },
      {
       value: "I",
       text: {
        es: "Diseñar redes de transporte y administra su proceso para el desplazamiento físico del producto en diferentes escenarios geográficos y regulaciones gubernamentales."
       }
      }
     ],
     isAllRowRequired: true
    },
    {
     type: "matrix",
     name: "LRID",
     visibleIf: "{P48} = 'LRID'",
     isRequired: true,
     columns: [
      "Ninguno",
      "Escaso",
      "Moderado",
      "Sustancial",
      "Extenso"
     ],
     rows: [
      "Desarrollar modelos para pronosticar el comportamiento económico futuro.",
      "Diseñar métodos para la recopilación y análisis de datos.",
      "Realizar análisis de mercado, finanzas y economía.",
      "Diagnosticar causas de fluctuaciones de precios en base a la producción y el consumo para determinar tendencias futuras.",
      "Desarrollar accesorios económicos para organizaciones públicas y privadas.",
      "Examinar datos estadísticos sobre el intercambio económico de bienes y servicios entre las naciones, para asesorar a dependencias gubernamentales sobre las políticas de comercio exterior."
     ],
     isAllRowRequired: true
    }
   ]
  },
  {
   name: "page11",
   elements: [
    {
     type: "multipletext",
     name: "P135",
     title: {
      es: "Con la finalidad de contar con un directorio actualizado de los egresados de la UAEM, nos puedes apoyar con los siguientes datos (opcional):"
     },
     items: [
      {
       name: "Dirección de correo electrónico:"
      },
      {
       name: "Número de teléfono:"
      }
     ]
    },
    {
     type: "checkbox",
     name: "P136",
     title: {
      es: "Información de interés que deseas conocer (opcional, puedes elegir más de uno):"
     },
     hasOther: true,
     choices: [
      "Beneficios a Alumniversitarios",
      "Cursos de empleabilidad",
      "Resultados estadísticos de estudios anteriores de egresados",
      "Modalidades de titulación",
      "Encuentros y actividades universitarias",
      "Encuentros y actividades artísticas y culturales",
      "Cursos de formación continua"
     ]
    },
    {
     type: "text",
     name: "P137",
     title: {
      es: "Comparte con la UAEM algunos de tus logros en el ámbito profesional o personal:\n(Opcional)"
     }
    }
   ]
  }
 ],
 showProgressBar: "bottom"
}
window.survey = new Survey.Model(json);
    survey.sendResultOnPageNext = true;
var storageName = "presponse";
function saveSurveyData(survey) {
	var cuent= $('#cuent').val();
   survey.setValue('ct', cuent);
    var data = survey.data;
    data.pageNo = survey.currentPageNo;
    window.sessionStorage.setItem(storageName, JSON.stringify(data));
}
survey.onPartialSend.add(function (survey) {
    saveSurveyData(survey);
});
survey.onComplete.add(function (survey, options) {
    saveSurveyData(survey);
    var datos= JSON.stringify(survey.data);
    var cuenta= $('#cuent').val();
    var periodo= $('#periodo').val();
    var espa= $('#espa').val();
    $.ajax({
        url: "lib/phptransac/saveEncu2.php",
        type: "post",
        data: { datos:datos,cuenta:cuenta,periodo:periodo,espa:espa}
    });
});
var prevData = window.sessionStorage.getItem(storageName) || null;
if (prevData) {
    var data = JSON.parse(prevData);
    survey.data = data;
    if (data.pageNo) {
        survey.currentPageNo = data.pageNo;
    }
}


$("#surveyElement").Survey({model: survey});
var cuent= $('#cuent').val();
   survey.setValue('No_cuenta', cuent);
   var nom= $('#nom').val();
   survey.setValue('nombre', nom);
   var esp= $('#espa').val();
   survey.setValue('Espacio_acad', esp);
   var plan= $('#plan').val();
   survey.setValue('plan', plan);
   //Use setValue to set the value of the question
   var cvplan =$('#cvplan').val();
survey.setValue('P48', cvplan);
$('#btn01').click(function() {
    location.reload();
});