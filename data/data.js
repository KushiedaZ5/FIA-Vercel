const dataCarreras = {
    'ingSistemas': {
        nombre: 'Ingeniería de Computación y Sistemas',
        ciclos: {
            'ciclo1': [

                { value: 'ciu_int', text: 'Ciudadanía Intercultural', esquema: '049', creditos: 2, clave: 'CI' },
                { value: 'lenguaje', text: 'Lenguaje', esquema: '049', creditos: 2, clave: 'LEN' },
                { value: 'metodos_est', text: 'Métodos de Estudio', esquema: '049', creditos: 2, clave: 'ME' },
                { value: 'filosofia', text: 'Filosofía', esquema: '045', creditos: 3, clave: 'FIL' },
                { value: 'geom_analitica', text: 'Geometría Analítica', esquema: '040', creditos: 4, clave: 'GA' },
                { value: 'mate_discreta', text: 'Matemática Discreta', esquema: '040', creditos: 5, clave: 'MD' },
                { value: 'intro_sis_info', text: 'Introducción a Sistemas de Información', esquema: '045', creditos: 2, clave: 'ISI' },
                { value: 'actividades1', text: 'Actividades 1', esquema: '038', creditos: 1, clave: 'ACT1' },
                { value: 'ingles1', text: 'Inglés 1', esquema: '039', creditos: 1, clave: 'ING1' },
            ],
            'ciclo2': [

                { value: 'ingles2', text: 'Inglés II', esquema: '039', creditos: 1, clave: 'ING2' },
                { value: 'calculo1', text: 'Cálculo I', esquema: '040', creditos: 5, clave: 'C1' },
                { value: 'algebra_lineal', text: 'Álgebra Lineal', esquema: '040', creditos: 5, clave: 'AL' },
                { value: 'fund_diseno_web', text: 'Fundamentos del Diseño Web', esquema: '045', creditos: 3, clave: 'FDW' },
                { value: 'intro_economia', text: 'Introducción a la Economía', esquema: '038', creditos: 3, clave: 'IE' },
                { value: 'actividades2', text: 'Actividades 2', esquema: '038', creditos: 1, clave: 'ACT2' },
                { value: 'intro_programacion', text: 'Introducción a la Programación', esquema: '128', creditos: 5, clave: 'IP' },
            ],
            'ciclo3': [
                { value: 'alg1', text: 'Algoritmos y Estructura de Datos I', esquema: '128', creditos: 5, clave: 'AED1' },
                { value: 'fis1', text: 'Física I', esquema: '042', creditos: 5, clave: 'F1' },
                { value: 'ti1', text: 'Tecnología de Información I', esquema: '046', creditos: 5, clave: 'TI1' },
                { value: 'est1', text: 'Estadística y Probabilidades I', esquema: '041', creditos: 4, clave: 'EST1' },
                { value: 'sis_info', text: 'Sistemas de Información', esquema: '038', creditos: 3, clave: 'SI' }
            ],
            'ciclo4': [
                { value: 'est2', text: 'Estadística 2', esquema: '041', creditos: 4, clave: 'EST2' },
                { value: 'ti2', text: 'Tecnología de Información 2', esquema: '046', creditos: 4, clave: 'TI2' },
                { value: 'fis2_castro', text: 'Física 2 - Prof. Castro', esquema: '042', creditos: 5, clave: 'F2C' },
                { value: 'fis2_tejada', text: 'Física 2 - Prof. Tejada', esquema: '042', creditos: 5, clave: 'F2T' },
                { value: 'alg2', text: 'Algoritmos 2 - Sistemas', esquema: '047', creditos: 5, clave: 'AED2S' },
                { value: 'micro_sanchez', text: 'Microeconomía - Prof. Sánchez', esquema: '054', creditos: 4, clave: 'MICROS' },
                { value: 'micro_caparachin', text: 'Microeconomía - Prof. Caparachín', esquema: '134', creditos: 4, clave: 'MICROC' }
            ],
            'ciclo5': [
                { value: 'contabilidad_general', text: 'Contabilidad General', esquema: '038', creditos: 4, clave: 'CG' },
                { value: 'gestion_procesos', text: 'Gestión de Procesos', esquema: '046', creditos: 5, clave: 'GP' },
                { value: 'ing_administrativa', text: 'Ingeniería Administrativa', esquema: '132', creditos: 4, clave: 'IA' },
                { value: 'sistemas_operativos', text: 'Sistemas Operativos y Plataformas', esquema: '129', creditos: 4, clave: 'SOP' },
                { value: 'teoria_bd', text: 'Teoría y Diseño de Base de Datos', esquema: '043', creditos: 5, clave: 'TBD' }
            ],
            'ciclo6': [
                { value: 'ing_costos', text: 'Ingeniería de Costos', esquema: '038', creditos: 4, clave: 'ICO' },
                { value: 'ing_software1', text: 'Ingeniería de Software I', esquema: '128', creditos: 5, clave: 'IS1' },
                { value: 'inv_operativa', text: 'Investigación Operativa', esquema: '038', creditos: 4, clave: 'IO' },
                { value: 'programacion1', text: 'Programación I', esquema: '046', creditos: 5, clave: 'PROG1' },
                { value: 'teoria_sistemas', text: 'Teoría General de Sistemas ', esquema: '045', creditos: 4, clave: 'TGS' },
            ],
            'ciclo7': [
                { value: 'arq_soft_si', text: 'Arquitectura de Software para Sistemas de Información', esquema: '135', creditos: 2, clave: 'ASSI' },
                { value: 'ing_software2', text: 'Ingeniería de Software II', esquema: '136', creditos: 5, clave: 'IS2' },
                { value: 'ges_financiera', text: 'Gestión Financiera', esquema: '038', creditos: 4, clave: 'GF' },
                { value: 'discapacidad_inclusion', text: 'Discapacidad e Inclusión(Proximamente...)', esquema: '046', creditos: 1, clave: 'DI' },
                { value: 'i_a', text: 'Inteligencia Artificial', esquema: '135', creditos: 4, clave: 'IAR' },
            ],
            'ciclo8': [
                { value: 'taller_proyectos', text: 'Taller de Proyectos', esquema: '045', creditos: 5, clave: 'TPSIS' },
                { value: 'arq_empresarial', text: 'Arquitectura Empresarial(Proximamente...)', esquema: '128', creditos: 4, clave: 'AESIS' },
                { value: 'diseno_implementacion', text: 'Diseño e Implementacion de Sistemas', esquema: '045', creditos: 4, clave: 'DISIS' },
                { value: 'formulacion_evaluacion', text: 'Formulación y Evaluación de Proyectos', esquema: '045', creditos: 4, clave: 'FEPSIS' },
                { value: 'gestion_recursos', text: 'Gestion de Recursos de Tecnología de Información', esquema: '045', creditos: 4, clave: 'GRTISSIS' },
                { value: 'investigacion_sistemas', text: 'Investigación en Sistemas de Información(Proximamente...)', esquema: '046', creditos: 2, clave: 'ISIS' },

            ],
            'ciclo9': [
                { value: 'inteligencia_negocios', text: 'Inteligencia de Negocios(Proximamente...)', esquema: '045', creditos: 4, clave: 'INSIS' },
                { value: 'planeamiento_estrategico', text: 'Planeamiento estratégico de Tecnología de Información', esquema: '045', creditos: 4, clave: 'PETISIS' },
                { value: 'proyecto_final', text: 'Proyecto Final de Ingenería de Computación y Sistemas(Proximamente...)', esquema: '038', creditos: 4, clave: 'PFCISIS' },
                { value: 'seguridad_auditoria', text: 'Seguridad y auditoría de Sistemas de Información', esquema: '045', creditos: 4, clave: 'SASSIS' },
                { value: 'liderazgo_oratoria', text: 'Liderazgo y Oratoria(Proximamente...)', esquema: '046', creditos: 2, clave: 'LOSIS' },
            ],
            'ciclo10': [
                { value: 'etica_moral', text: 'Ética y Moral', esquema: '038', creditos: 4, clave: 'EMSIS' },
                { value: 'marketing_digital', text: 'Marketing Digital', esquema: '045', creditos: 4, clave: 'MDSIS' },

            ],
            'Electivos': [
                { value: 'pruebas_software', text: 'Pruebas de Software', esquema: '045', creditos: 4, clave: 'PSSIS' },
                { value: 'redes_conectividad', text: 'Redes y Conectividad', esquema: '046', creditos: 4, clave: 'RCSIS' },
                { value: 'gestion_estrategica', text: 'Gestión Estratégica', esquema: '045', creditos: 4, clave: 'GESIS' },

            ]

        }
    },
    'ingCivil': {
        nombre: 'Ingeniería Civil',
        ciclos: {
            'ciclo1': [
                { value: 'ciu_int', text: 'Ciudadanía Intercultural', esquema: '049', creditos: 2, clave: 'CI' },
                { value: 'lenguaje', text: 'Lenguaje', esquema: '049', creditos: 2, clave: 'LEN' },
                { value: 'metodos_est', text: 'Métodos de Estudio', esquema: '049', creditos: 2, clave: 'ME' },
                { value: 'filosofia', text: 'Filosofía', esquema: '045', creditos: 3, clave: 'FIL' },
                { value: 'geom_analitica', text: 'Geometría Analítica', esquema: '040', creditos: 4, clave: 'GA' },
                { value: 'mate_discreta', text: 'Matemática Discreta', esquema: '040', creditos: 5, clave: 'MD' },
                { value: 'intro_ing', text: 'Introducción a la Ingeniería(Proximamente...)', esquema: '045', creditos: 2, clave: 'II' },
                { value: 'ingles1', text: 'Inglés 1', esquema: '039', creditos: 1, clave: 'ING1' }
            ],
            'ciclo2': [
                { value: 'ingles2', text: 'Inglés II', esquema: '039', creditos: 1, clave: 'ING2' },
                { value: 'calculo1', text: 'Cálculo I', esquema: '040', creditos: 5, clave: 'C1' },
                { value: 'algebra_lineal', text: 'Álgebra Lineal', esquema: '040', creditos: 5, clave: 'AL' },
                { value: 'diseño_grafico', text: 'Dibujo y Diseño Gráfico(Proximamente...)', esquema: '045', creditos: 3, clave: 'DDG' },
                { value: 'intro_economia', text: 'Introducción a la Economía', esquema: '038', creditos: 3, clave: 'IE' },
                { value: 'topografia', text: 'Topografía(Proximamente...)', esquema: '128', creditos: 3, clave: 'TOPO' },
                { value: 'geologia_general', text: 'Geología General(Proximamente...)', esquema: '128', creditos: 2, clave: 'GG' },
            ],
            'ciclo3': [
                { value: 'calculo2', text: 'Calculo II', esquema: '040', creditos: 5, clave: 'C2' },
                { value: 'est1', text: 'Estadística y Probabilidades I', esquema: '041', creditos: 4, clave: 'EST1' },
                { value: 'fis1', text: 'Física I', esquema: '042', creditos: 5, clave: 'F1' },
                { value: 'quimicage', text: 'Química General', esquema: '043', creditos: 3, clave: 'QG' },
                { value: 'tecnologia_materiales', text: 'Tecnología de los materiales', esquema: '046', creditos: 3, clave: 'TM' },
                { value: 'topoavanzada', text: 'Topografía Avanzada', esquema: '045', creditos: 2, clave: 'TOPOA' }],
            'ciclo4': [
                { value: 'dinamica_civil', text: 'Dinámica', esquema: '045', creditos: 3, clave: 'DIN' },
                { value: 'tec_concreto', text: 'Tecnología del Concreto', esquema: '045', creditos: 3, clave: 'TC' },
                { value: 'estatica', text: 'Estática', esquema: '049', creditos: 4, clave: 'ESTA' },
                { value: 'construccion1_civil', text: 'Construcción 1 - Civil', esquema: '045', creditos: 3, clave: 'CON1I' },
                { value: 'ec_diferenciales_civil', text: 'Ecuaciones Diferenciales', esquema: '040', creditos: 4, clave: 'ED' },
                { value: 'fis2_castro', text: 'Física 2 - Prof. Castro', esquema: '042', creditos: 5, clave: 'F2C' },
                { value: 'fis2_tejada', text: 'Física 2 - Prof. Tejada', esquema: '042', creditos: 5, clave: 'F2T' },
            ],
            'ciclo5': [
                { value: 'contabilidad_general', text: 'Contabilidad General', esquema: '038', creditos: 4, clave: 'CG' },
                { value: 'construccion2_civil', text: 'Construcción II', esquema: '045', creditos: 4, clave: 'CON2' },
                { value: 'caminos1', text: 'Caminos I', esquema: '045', creditos: 4, clave: 'CAM1' },
                { value: 'resistencia_materiales1', text: 'Resistencia de Materiales I', esquema: '135', creditos: 5, clave: 'RM1' },
                { value: 'ecologia_impacto', text: 'Ecología e Impacto Ambiental', esquema: '045', creditos: 3, clave: 'EIA' },
                { value: 'instalaciones_electricas', text: 'Instalaciones Eléctricas en Edificaciones', esquema: '045', creditos: 2, clave: 'IEECIV' },
            ],
            'ciclo6': [
                { value: 'mecanica_fluidos1', text: 'Mecánica de Fluidos I(Proximamente...)', esquema: '038', creditos: 5, clave: 'MF1' },
                { value: 'pavimentos', text: 'Pavimentos(Proximamente...)', esquema: '128', creditos: 5, clave: 'PAV' },
                { value: 'gestion_financiera', text: 'Gestión Financiera(Proximamente...)', esquema: '038', creditos: 4, clave: 'GF' },
                { value: 'mecanica_suelos1', text: 'Mecánica de Suelos I(Proximamente...)', esquema: '046', creditos: 4, clave: 'MS1' },
                { value: 'resistencia_materiales2', text: 'Resistencia de Materiales II(Proximamente...)', esquema: '046', creditos: 4, clave: 'RM2' },
            ],
            'ciclo7': [
                { value: 'mecanica_fluidos2', text: 'Mecánica de Fluidos II(Proximamente...)', esquema: '038', creditos: 5, clave: 'MF2' },
                { value: 'analisis_estructural1', text: 'Análisis Estructural I(Proximamente...)', esquema: '046', creditos: 4, clave: 'AE1' },
                { value: 'formulacion_proyectos', text: 'Formulación y Evaluación de Proyectos(Proximamente...)', esquema: '045', creditos: 4, clave: 'FEP' },
                { value: 'mecanica_suelos2', text: 'Mecánica de Suelos II(Proximamente...)', esquema: '046', creditos: 4, clave: 'MS2' },
                { value: 'presupuesto_obra', text: 'Presupuesto y Programación de Obra(Proximamente...)', esquema: '045', creditos: 4, clave: 'PPO' },
                { value: 'discapacidad_inclusion', text: 'Discapacidad e Inclusión(Proximamente...)', esquema: '049', creditos: 1, clave: 'DI' },
            ],
            'ciclo8': [
                { value: 'analisis_estructural2', text: 'Análisis Estructural II(Proximamente...)', esquema: '046', creditos: 4, clave: 'AE2' },
                { value: 'concreto_armado1', text: 'Concreto Armado I(Proximamente...)', esquema: '046', creditos: 4, clave: 'CA1' },
                { value: 'gestion_proyectos_pmi', text: 'Gestión de Proyectos - PMI(Proximamente...)', esquema: '045', creditos: 4, clave: 'GPPMI' },
                { value: 'ingenieria_costos_civil', text: 'Ingeniería de Costos(Proximamente...)', esquema: '038', creditos: 4, clave: 'ICO2' },
                { value: 'hidrologia', text: 'Hidrología(Proximamente...)', esquema: '038', creditos: 3, clave: 'HID' },
                { value: 'instalaciones_sanitarias', text: 'Instalaciones Sanitarias(Proximamente...)', esquema: '038', creditos: 3, clave: 'ISAL' },
            ],
            'ciclo9': [
                { value: 'concreto_armado2', text: 'Concreto Armado II(Proximamente...)', esquema: '046', creditos: 4, clave: 'CA2' },
                { value: 'ing_antisismica', text: 'Ingeniería Antisísmica(Proximamente...)', esquema: '046', creditos: 4, clave: 'IAS' },
                { value: 'proyecto_final_civil', text: 'Proyecto Final de Ingeniería Civil(Proximamente...)', esquema: '045', creditos: 4, clave: 'PFIC' },
                { value: 'hidraulica', text: 'Hidráulica(Proximamente...)', esquema: '038', creditos: 4, clave: 'HIDR' },
                { value: 'ing_valuaciones', text: 'Ingeniería de Valuaciones y Tasaciones(Proximamente...)', esquema: '045', creditos: 3, clave: 'IVT' },
                { value: 'diseno_acero_madera', text: 'Diseño de Acero y Madera(Proximamente...)', esquema: '046', creditos: 2, clave: 'DAM' },
            ],
            'ciclo10': [
                { value: 'abastecimiento_agua', text: 'Abastecimiento de Agua y Alcantarillado(Proximamente...)', esquema: '038', creditos: 4, clave: 'AAA' },
                { value: 'trabajo_investigacion', text: 'Trabajo de Investigación(Proximamente...)', esquema: '045', creditos: 4, clave: 'TINV' },
                { value: 'organizacion_empresas_constructoras', text: 'Organización y Dirección de Empresas Constructoras(Proximamente...)', esquema: '045', creditos: 3, clave: 'ODEC' },
                { value: 'puentes_obras_arte', text: 'Puentes y Obras de Arte(Proximamente...)', esquema: '046', creditos: 3, clave: 'POA' },
                { value: 'etica_moral', text: 'Ética y Moral(Proximamente...)', esquema: '049', creditos: 2, clave: 'ETM' },
            ],
            'electivas': [
                { value: 'gestion_estrategica', text: 'Gestión Estratégica(Proximamente...)', esquema: '045', creditos: 4, clave: 'GESTRA' },
                { value: 'ing_cimentaciones', text: 'Ingeniería de Cimentaciones(Proximamente...)', esquema: '046', creditos: 4, clave: 'ICIM' },
                { value: 'software_ing_civil', text: 'Software Aplicado a Ingeniería Civil(Proximamente...)', esquema: '045', creditos: 4, clave: 'SAIC' },
                { value: 'caminos2', text: 'Caminos II(Proximamente...)', esquema: '045', creditos: 3, clave: 'CAM2' },
                { value: 'ing_transporte', text: 'Ingeniería del Transporte(Proximamente...)', esquema: '045', creditos: 3, clave: 'ITRP' },
                { value: 'fund_emprendimiento', text: 'Fundamentos de Emprendimiento(Proximamente...)', esquema: '045', creditos: 3, clave: 'FEMP' },
                { value: 'normatividad', text: 'Normatividad(Proximamente...)', esquema: '045', creditos: 3, clave: 'NORM' },
                { value: 'productividad_construccion', text: 'Productividad en la Construcción(Proximamente...)', esquema: '045', creditos: 3, clave: 'PCON' },
                { value: 'seguridad_obras_civil', text: 'Seguridad en Obras de Ingeniería Civil(Proximamente...)', esquema: '045', creditos: 3, clave: 'SOIC' },
                { value: 'fotogrametria', text: 'Fotogrametría y Exploración Aérea(Proximamente...)', esquema: '045', creditos: 2, clave: 'FEA' },
                { value: 'gestion_innovacion', text: 'Gestión de la Innovación(Proximamente...)', esquema: '045', creditos: 2, clave: 'GINOV' },
                { value: 'liderazgo_oratoria', text: 'Liderazgo y Oratoria(Proximamente...)', esquema: '045', creditos: 2, clave: 'LO' },
                { value: 'mant_conservacion_civil', text: 'Mantenimiento y Conservación de Obras Civiles(Proximamente...)', esquema: '045', creditos: 2, clave: 'MCOC' },
                { value: 'materiales_alternativos', text: 'Materiales de Construcción Alternativos(Proximamente...)', esquema: '045', creditos: 2, clave: 'MCA' },
                { value: 'quechua', text: 'Quechua(Proximamente...)', esquema: '049', creditos: 2, clave: 'QCH' },
            ]
        }
    },
    'ingIndustrial': {
        nombre: 'Ingeniería Industrial',
        ciclos: {
            'ciclo1': [
                { value: 'ciu_int', text: 'Ciudadanía Intercultural', esquema: '049', creditos: 2, clave: 'CI' },
                { value: 'lenguaje', text: 'Lenguaje', esquema: '049', creditos: 2, clave: 'LEN' },
                { value: 'metodos_est', text: 'Métodos de Estudio', esquema: '049', creditos: 2, clave: 'ME' },
                { value: 'filosofia', text: 'Filosofía', esquema: '045', creditos: 3, clave: 'FIL' },
                { value: 'geom_analitica', text: 'Geometría Analítica', esquema: '040', creditos: 4, clave: 'GA' },
                { value: 'mate_discreta', text: 'Matemática Discreta', esquema: '040', creditos: 5, clave: 'MD' },
                { value: 'intro_ing', text: 'Introducción a la Ingeniería(Proximamente...)', esquema: '045', creditos: 2, clave: 'II' },
                { value: 'ingles1', text: 'Inglés 1', esquema: '039', creditos: 1, clave: 'ING1' }
            ],
            'ciclo2': [
                { value: 'ingles2', text: 'Inglés II', esquema: '039', creditos: 1, clave: 'ING2' },
                { value: 'calculo1', text: 'Cálculo I', esquema: '040', creditos: 5, clave: 'C1' },
                { value: 'algebra_lineal', text: 'Álgebra Lineal', esquema: '040', creditos: 5, clave: 'AL' },
                { value: 'diseño_grafico', text: 'Dibujo y Diseño Gráfico(Proximamente...)', esquema: '045', creditos: 3, clave: 'DDG' },
                { value: 'intro_economia', text: 'Introducción a la Economía', esquema: '038', creditos: 3, clave: 'IE' },
                { value: 'intro_programacion', text: 'Introducción a la Programación(Proximamente...)', esquema: '128', creditos: 5, clave: 'IP' }
            ],
            'ciclo3': [
                { value: 'calculo2', text: 'Calculo II', esquema: '040', creditos: 5, clave: 'C2' },
                { value: 'quimica_industrial', text: 'Química Industrial', esquema: '130', creditos: 5, clave: 'QI' },
                { value: 'fis1', text: 'Física I', esquema: '042', creditos: 5, clave: 'F1' },
                { value: 'micro_sanchez', text: 'Microeconomía - Prof. Sánchez', esquema: '054', creditos: 4, clave: 'MICROS' },
                { value: 'micro_caparachin', text: 'Microeconomía - Prof. Caparachín', esquema: '134', creditos: 4, clave: 'MICROC' },
                { value: 'dis_ind_com', text: 'Diseño Industrial por Computador', esquema: '038', creditos: 3, clave: 'DIC' },
                { value: 'discapacidad_inclusion', text: 'Discapacidad e Inclusión(Proximamente...)', esquema: '045', creditos: 3, clave: 'DI' }
            ], 'ciclo4': [
                { value: 'alg1', text: 'Algoritmos y Estructura de Datos I - Industrial', esquema: '128', creditos: 5, clave: 'AED1I' },
                { value: 'est1', text: 'Estadística y Probabilidades I', esquema: '041', creditos: 4, clave: 'EST1' },
                { value: 'fis2_castro', text: 'Física 2 - Prof. Castro', esquema: '042', creditos: 5, clave: 'F2C' },
                { value: 'fis2_tejada', text: 'Física 2 - Prof. Tejada', esquema: '042', creditos: 5, clave: 'F2T' },
                { value: 'ec_diferenciales_civil', text: 'Ecuaciones Diferenciales', esquema: '040', creditos: 4, clave: 'ED' },
                { value: 'materiales_ingenieria', text: 'Materiales de Ingeniería(Proximamente...)', esquema: '046', creditos: 4, clave: 'MI' },
            ], 'ciclo5': [
                { value: 'est2', text: 'Estadística y Probabilidades II', esquema: '041', creditos: 4, clave: 'EST2' },
                { value: 'contabilidad_general', text: 'Contabilidad General', esquema: '038', creditos: 4, clave: 'CG' },
                { value: 'ing_administrativa', text: 'Ingeniería Administrativa', esquema: '132', creditos: 4, clave: 'IA' },
                { value: 'ing_electrica', text: 'Ingeniería Eléctrica y Electrónica', esquema: '047', creditos: 5, clave: 'IEE' },
                { value: 'mecanica_materiales', text: 'Mecánica de Materiales', esquema: '135', creditos: 5, clave: 'MM' },
            ],
            'ciclo6': [
                { value: 'ing_costos', text: 'Ingeniería de Costos', esquema: '038', creditos: 4, clave: 'ICO' },
                { value: 'ing_mtodos1', text: 'Ingeniería de Métodos I', esquema: '038', creditos: 4, clave: 'IM1' },
                { value: 'gestion_procesos', text: 'Gestión de Procesos', esquema: '132', creditos: 4, clave: 'GP' },
                { value: 'investigacion_operativa1', text: 'Investigación Operativa I', esquema: '038', creditos: 4, clave: 'IO1' },
                { value: 'proceso_manufactura', text: 'Proceso de Manufactura', esquema: '047', creditos: 4, clave: 'PM' },
                { value: 'taller_herramientas', text: 'Taller de Herramientas Informáticas', esquema: '133', creditos: 2, clave: 'THI' },
            ],
            'ciclo7': [
                { value: 'control_calidad', text: 'Control de Calidad', esquema: '138', creditos: 4, clave: 'CC' },
                { value: 'gestion_financiera_ind', text: 'Gestión Financiera', esquema: '038', creditos: 4, clave: 'GF' },
                { value: 'ing_metodos2', text: 'Ingeniería de Métodos II', esquema: '038', creditos: 4, clave: 'IM2' },
                { value: 'investigacion_operativa2', text: 'Investigación Operativa II', esquema: '045', creditos: 4, clave: 'IO2' },
                { value: 'mercadotecnia', text: 'Mercadotecnia', esquema: '045', creditos: 4, clave: 'MKT' },
                { value: 'instrumentacion_control', text: 'Instrumentación y Control Industrial', esquema: '046', creditos: 2, clave: 'ICI' },
            ],
            'ciclo8': [
                { value: 'automatizacion_industrial', text: 'Automatización Industrial(Proximamente...)', esquema: '047', creditos: 4, clave: 'AIND' },
                { value: 'formulacion_proyectos_ind', text: 'Formulación y Evaluación de Proyectos(Proximamente...)', esquema: '045', creditos: 4, clave: 'FEP' },
                { value: 'mant_seguridad_salud', text: 'Mantenimiento, Seguridad y Salud Ocupacional(Proximamente...)', esquema: '045', creditos: 4, clave: 'MSSO' },
                { value: 'planeamiento_produccion1', text: 'Planeamiento y Control de la Producción I(Proximamente...)', esquema: '045', creditos: 4, clave: 'PCP1' },
                { value: 'tqm', text: 'Total Quality Management TQM(Proximamente...)', esquema: '038', creditos: 4, clave: 'TQM' },
                { value: 'taller_manufactura', text: 'Taller de Manufactura Moderna(Proximamente...)', esquema: '047', creditos: 2, clave: 'TMM' },
            ],
            'ciclo9': [
                { value: 'diseno_sistemas_produccion', text: 'Diseño de Sistemas de Producción(Proximamente...)', esquema: '045', creditos: 4, clave: 'DSP' },
                { value: 'gestion_proyectos_pmi_ind', text: 'Gestión de Proyectos - PMI(Proximamente...)', esquema: '045', creditos: 4, clave: 'GPPMI' },
                { value: 'planeamiento_produccion2', text: 'Planeamiento y Control de la Producción II(Proximamente...)', esquema: '045', creditos: 4, clave: 'PCP2' },
                { value: 'proyecto_final_ind', text: 'Proyecto Final de Ingeniería Industrial I(Proximamente...)', esquema: '045', creditos: 4, clave: 'PFII' },
                { value: 'psicologia_industrial', text: 'Psicología Industrial y Organizacional(Proximamente...)', esquema: '049', creditos: 2, clave: 'PIO' },
            ],
            'ciclo10': [
                { value: 'gestion_personal_legislacion', text: 'Gestión de Personal y Legislación Laboral(Proximamente...)', esquema: '045', creditos: 4, clave: 'GPLL' },
                { value: 'supply_chain', text: 'Supply Chain Management(Proximamente...)', esquema: '045', creditos: 4, clave: 'SCM' },
                { value: 'trabajo_investigacion_ind', text: 'Trabajo de Investigación(Proximamente...)', esquema: '045', creditos: 4, clave: 'TINV' },
                { value: 'etica_moral_ind', text: 'Ética y Moral(Proximamente...)', esquema: '049', creditos: 2, clave: 'ETM' },
            ],
            'electivas': [
                { value: 'ing_costos_avanzado', text: 'Ingeniería de Costos Avanzado(Proximamente...)', esquema: '038', creditos: 4, clave: 'ICA' },
                { value: 'marketing_digital', text: 'Marketing Digital(Proximamente...)', esquema: '045', creditos: 4, clave: 'MKTD' },
                { value: 'planeamiento_desarrollo_producto', text: 'Planeamiento, Desarrollo e Ingeniería del Producto(Proximamente...)', esquema: '045', creditos: 4, clave: 'PDIP' },
                { value: 'comercio_exterior', text: 'Comercio Exterior y Financiamiento(Proximamente...)', esquema: '038', creditos: 3, clave: 'CEF' },
                { value: 'ergonomia', text: 'Ergonomía(Proximamente...)', esquema: '045', creditos: 3, clave: 'ERGO' },
                { value: 'fund_emprendimiento_ind', text: 'Fundamentos de Emprendimiento(Proximamente...)', esquema: '045', creditos: 3, clave: 'FEMP' },
                { value: 'gestion_riesgos', text: 'Gestión de Riesgos(Proximamente...)', esquema: '045', creditos: 3, clave: 'GRIESG' },
                { value: 'mercado_valores_ind', text: 'Mercado de Valores Industriales(Proximamente...)', esquema: '038', creditos: 3, clave: 'MVI' },
                { value: 'metodologias_agiles', text: 'Metodologías Ágiles(Proximamente...)', esquema: '045', creditos: 3, clave: 'MAGIL' },
                { value: 'sistemas_erp', text: 'Sistemas ERP(Proximamente...)', esquema: '045', creditos: 3, clave: 'SERP' },
                { value: 'gestion_innovacion_ind', text: 'Gestión de la Innovación(Proximamente...)', esquema: '045', creditos: 2, clave: 'GINOV' },
                { value: 'liderazgo_oratoria_ind', text: 'Liderazgo y Oratoria(Proximamente...)', esquema: '045', creditos: 2, clave: 'LO' },
            ]
        }
    },
    'arquitectura': {
        nombre: 'Arquitectura',
        ciclos: {
            'ciclo1': [
                { value: 'ciu_int', text: 'Ciudadanía Intercultural', esquema: '049', creditos: 2, clave: 'CI' },
                { value: 'lenguaje', text: 'Lenguaje', esquema: '049', creditos: 2, clave: 'LEN' },
                { value: 'metodos_est', text: 'Métodos de Estudio', esquema: '049', creditos: 2, clave: 'ME' },
                { value: 'taller1', text: 'Taller I', esquema: '127', creditos: 7, clave: 'T1' },
                { value: 'matematica1', text: 'Matemática I', esquema: '041', creditos: 4, clave: 'MAT1' },
                { value: 'exp_arq1', text: 'Expresión Arquitectónica I', esquema: '038', creditos: 3, clave: 'EA1' },
                { value: 'ingles1', text: 'Inglés 1', esquema: '039', creditos: 1, clave: 'ING1' },
            ], 'ciclo2': [
                { value: 'geom_des', text: 'Geometría Descriptiva', esquema: '038', creditos: 4, clave: 'GD' },
                { value: 'matematica2', text: 'Matemática II', esquema: '041', creditos: 4, clave: 'MAT2' },
                { value: 'taller2', text: 'Taller II', esquema: '127', creditos: 7, clave: 'T2' },
                { value: 'exp_arq2', text: 'Expresión Arquitectónica II', esquema: '038', creditos: 3, clave: 'EA2' },
                { value: 'topografia', text: 'Topografía', esquema: '045', creditos: 3, clave: 'TOPO' },
                { value: 'ingles2', text: 'Inglés 2', esquema: '039', creditos: 1, clave: 'ING2' },
            ], 'ciclo3': [
                { value: 'const1', text: 'Construcción 1(Proximamente...)', esquema: '129', creditos: 4, clave: 'CON1' },
                { value: 'exp_arq3', text: 'Expresión Arquitectónica 3', esquema: '038', creditos: 3, clave: 'EA3' },
                { value: 'estruc1_arq', text: 'Estructuras 1(Proximamente...)', esquema: '038', creditos: 3, clave: 'ESTR1' },
                { value: 'taller3_arq', text: 'Taller 3', esquema: '127', creditos: 8, clave: 'T3' },
                { value: 'fisica1', text: 'Física General I', esquema: '040', creditos: 4, clave: 'F1G' },
            ],
            'ciclo4': [
                { value: 'const2', text: 'Construcción 2', esquema: '129', creditos: 4, clave: 'CON2' },
                { value: 'exp_arq4', text: 'Expresión Arquitectónica 4', esquema: '038', creditos: 3, clave: 'EA4' },
                { value: 'estruc2_arq', text: 'Estructuras 2', esquema: '038', creditos: 3, clave: 'ESTR2' },
                { value: 'taller4_arq', text: 'Taller 4', esquema: '127', creditos: 8, clave: 'T4' },
                { value: 'foto_arq', text: 'Fotografía', esquema: '038', creditos: 2, clave: 'FOTO' },
                { value: 'percep_arte', text: 'Percepción del Arte y la Arquitectura', esquema: '038', creditos: 2, clave: 'PAA' }
            ],
            'ciclo5': [
                { value: 'const3', text: 'Construcción 3', esquema: '129', creditos: 4, clave: 'CON3' },
                { value: 'urb1', text: 'Urbanismo I', esquema: '127', creditos: 4, clave: 'URB1' },
                { value: 'bio1', text: 'Diseño Bioclimático I', esquema: '038', creditos: 3, clave: 'DB1' },
                { value: 'taller5_arq', text: 'Taller 5', esquema: '127', creditos: 8, clave: 'T5' },
                { value: 'hist1', text: 'Historia de la Arquitectura I', esquema: '038', creditos: 3, clave: 'HA1' },
                { value: 'discapacidad_inclusion', text: 'Discapacidad e Inclusión(Proximamente...)', esquema: '038', creditos: 1, clave: 'DI' }
            ], 'ciclo6': [
                { value: 'inst_sanitarias', text: 'Instalaciones Sanitarias y Electromecánicas(Proximamente...)', esquema: '129', creditos: 3, clave: 'ISE' },
                { value: 'urb2', text: 'Urbanismo II(Proximamente...)', esquema: '038', creditos: 4, clave: 'URB2' },
                { value: 'bio2', text: 'Diseño Bioclimático II(Proximamente...)', esquema: '038', creditos: 3, clave: 'DB2' },
                { value: 'taller6_arq', text: 'Taller 6(Proximamente...)', esquema: '127', creditos: 8, clave: 'T6' },
                { value: 'hist2', text: 'Historia de la Arquitectura II(Proximamente...)', esquema: '038', creditos: 3, clave: 'HA2' },
                { value: 'liderazgo_oratoria', text: 'Liderazgo y Oratoria(Proximamente...)', esquema: '038', creditos: 2, clave: 'LO' }
            ]
        }
    },
    'aeronautica': {
        nombre: 'Ciencias Aeronáuticas',
        ciclos: {
            'ciclo1': [
                { value: 'fisica1', text: 'Física General I(Proximamente...)', esquema: '040', creditos: 4, clave: 'F1A' },
                { value: 'matematica1', text: 'Matemática I(Proximamente...)', esquema: '041', creditos: 4, clave: 'MAT1A' },
                { value: 'metodos_est', text: 'Métodos de Estudio(Proximamente...)', esquema: '049', creditos: 2, clave: 'ME' },
                { value: 'realidad_nacional', text: 'Realidad Nacional(Proximamente...)', esquema: '045', creditos: 3, clave: 'RN' },
                { value: 'introduccion_aviacion', text: 'Introducción a la Aviación(Proximamente...)', esquema: '040', creditos: 2, clave: 'IAV' },
                { value: 'metereologia1', text: 'Metereología I(Proximamente...)', esquema: '040', creditos: 2, clave: 'MET1' },
                { value: 'ingles1', text: 'Inglés 1(Proximamente...)', esquema: '039', creditos: 1, clave: 'ING1' },
                { value: 'lenguaje', text: 'Lenguaje(Proximamente...)', esquema: '039', creditos: 2, clave: 'LEN' },
                { value: 'regulaciones_1', text: 'Regulaciones Aéreas I(Proximamente...)', esquema: '039', creditos: 2, clave: 'RA1' },
            ], 'ciclo2': [
                { value: 'fisica2', text: 'Física General II', esquema: '040', creditos: 4, clave: 'F2A' },
                { value: 'matematica2', text: 'Matemática II', esquema: '041', creditos: 4, clave: 'MAT2A' },
                { value: 'operaciones_piloto_privado', text: 'Operaciones de Piloto Privado', esquema: '055', creditos: 5, clave: 'OPP' },
                { value: 'aerodinamica', text: 'Aerodinámica', esquema: '038', creditos: 4, clave: 'AERO' },
                { value: 'factores_humanos_aviacion', text: 'Factores Humanos en Aviación', esquema: '045', creditos: 2, clave: 'FHA' },
                { value: 'performance_aeronaves1', text: 'Performance de Aeronaves I', esquema: '045', creditos: 2, clave: 'PA1' },
                { value: 'ingles2', text: 'Inglés 2', esquema: '039', creditos: 1, clave: 'ING2' },
            ], 'ciclo3': [
                { value: 'navegacion_domestica_internacional', text: 'Navegación Doméstica e Internacional', esquema: '045', creditos: 4, clave: 'NDI' },
                { value: 'sistemas_y_componentes_aeronaves', text: 'Sistemas y Componentes de Aeronaves', esquema: '038', creditos: 4, clave: 'SCA' },
                { value: 'administracion', text: 'Administración(Proximamente...)', esquema: '049', creditos: 3, clave: 'ADM' },
                { value: 'mercancias_peligrosas', text: 'Mercancías Peligrosas(Proximamente...)', esquema: '045', creditos: 3, clave: 'MP' },
                { value: 'etica', text: 'Ética(Proximamente...)', esquema: '040', creditos: 2, clave: 'ETI' },
                { value: 'metereologia2', text: 'Metereología II', esquema: '045', creditos: 3, clave: 'MET2' },
                { value: 'performance_aeronaves2', text: 'Performance de Aeronaves II', esquema: '045', creditos: 2, clave: 'PA2' },
                { value: 'regulaciones_2', text: 'Regulaciones Aéreas II(Proximamente...)', esquema: '039', creditos: 2, clave: 'RA2' },
            ], 'ciclo4': [
                { value: 'estadistica_probabilidades', text: 'Estadística y Probabilidades', esquema: '041', creditos: 4, clave: 'EP' },
                { value: 'motores_aeronaves', text: 'Motores de Aeronaves', esquema: '038', creditos: 4, clave: 'MA' },
                { value: 'fisiologia_vuelo', text: 'Fisiología de Vuelo(Proximamente...)', esquema: '049', creditos: 3, clave: 'FV' },
                { value: 'introduccion_economia', text: 'Introducción a la Economía', esquema: '038', creditos: 3, clave: 'IE' },
                { value: 'planeamiento_carrera', text: 'Planeamiento de Carrera', esquema: '045', creditos: 3, clave: 'PC' },
                { value: 'liderazgo_profesionalizacion', text: 'Liderazgo y Profesionalización', esquema: '038', creditos: 2, clave: 'LP' },
                { value: 'teoria_vuelo_instrumental', text: 'Teoría de Vuelo Instrumental', esquema: '038', creditos: 2, clave: 'TVI' },
            ], 'ciclo5': [
                { value: 'administracion_logistica', text: 'Administración Logística', esquema: '045', creditos: 4, clave: 'ALO' },
                { value: 'contabilidad_general', text: 'Contabilidad General', esquema: '038', creditos: 4, clave: 'CG' },
                { value: 'mercadotecnia', text: 'Mercadotecnia', esquema: '045', creditos: 4, clave: 'MKT' },
                { value: 'comportamiento_organizacional', text: 'Comportamiento Organizacional en Aviación', esquema: '045', creditos: 3, clave: 'COA' },
                { value: 'operaciones_piloto_comercial', text: 'Operaciones de Piloto Comercial', esquema: '045', creditos: 3, clave: 'OPC' },
            ], 'ciclo6': [
                { value: 'administracion_operaciones', text: 'Administración de Operaciones', esquema: '038', creditos: 4, clave: 'AO' },
                { value: 'investigacion_mercados', text: 'Investigación de Mercados', esquema: '045', creditos: 4, clave: 'IMKT' },
                { value: 'operaciones_despacho_aereo', text: 'Operaciones de Despacho Aéreo', esquema: '045', creditos: 4, clave: 'ODA' },
                { value: 'costos_presupuestos', text: 'Costos y Presupuestos', esquema: '038', creditos: 3, clave: 'CP' },
                { value: 'sms_i', text: 'Sistema de Gestión de Seguridad Operacional I (SMS-I)', esquema: '038', creditos: 3, clave: 'SMS1' },
            ], 'ciclo7': [
                { value: 'finanzas', text: 'Finanzas', esquema: '038', creditos: 4, clave: 'FIN' },
                { value: 'gestion_estrategica_aviacion', text: 'Gestión Estratégica para Aviación(Proximamente...)', esquema: '045', creditos: 4, clave: 'GEA' },
                { value: 'derecho_empresarial_aero', text: 'Derecho Empresarial(Proximamente...)', esquema: '045', creditos: 3, clave: 'DEA' },
                { value: 'negocios_internacionales_aero', text: 'Negocios Internacionales(Proximamente...)', esquema: '038', creditos: 3, clave: 'NIA' },
                { value: 'seguridad_aviacion_avsec', text: 'Seguridad de la Aviación (AVSEC)(Proximamente...)', esquema: '045', creditos: 3, clave: 'AVSEC' },
            ]
        }
    }
};

// Mapeo de tipos de examen para mostrar nombres legibles
const tiposExamen = {
    'PC1': 'Práctica 1',
    'PC2': 'Práctica 2',
    'PC3': 'Práctica 3',
    'PC4': 'Práctica 4',
    'EF': 'Examen Final',
    'EP': 'Examen Parcial',
    'W1': 'Trabajo 1',
    'W2': 'Trabajo 2',
    'W3': 'Trabajo 3',
    'LB1': 'Laboratorio 1',
    'LB2': 'Laboratorio 2',
    'LB3': 'Laboratorio 3',
    'LB4': 'Laboratorio 4',
    'LB5': 'Laboratorio 5',
    'LB6': 'Laboratorio 6',
    'LB7': 'Laboratorio 7',
    'C1': 'Control 1',
    'C2': 'Control 2',
    'C3': 'Control 3',
    'C4': 'Control 4',
    'C5': 'Control 5',
    'C6': 'Control 6',
    'CE': 'Controles Extra',
    'L4': 'Laboratorio 4',
    'T3': 'Tarea 3'
};

// Mapeo de ciclos académicos para mostrar nombres legibles
const ciclosAcademicos = {
    '00SAI': '2000 SAI',
    '001': '2000-1',
    '002': '2000-2'
    ,
    '01SAI': '2001 SAI',
    '011': '2001-1',
    '012': '2001-2',

    '02SAI': '2002 SAI',
    '021': '2002-1',
    '022': '2002-2',

    '03SAI': '2003 SAI',
    '031': '2003-1',
    '032': '2003-2',

    '04SAI': '2004 SAI',
    '041': '2004-1',
    '042': '2004-2',

    '05SAI': '2005 SAI',
    '051': '2005-1',
    '052': '2005-2',

    '06SAI': '2006 SAI',
    '061': '2006-1',
    '062': '2006-2',

    '07SAI': '2007 SAI',
    '071': '2007-1',
    '072': '2007-2',

    '08SAI': '2008 SAI',
    '081': '2008-1',
    '082': '2008-2',

    '09SAI': '2009 SAI',
    '091': '2009-1',
    '092': '2009-2',

    '10SAI': '2010 SAI',
    '101': '2010-1',
    '102': '2010-2',

    '11SAI': '2011 SAI',
    '111': '2011-1',
    '112': '2011-2',

    '12SAI': '2012 SAI',
    '121': '2012-1',
    '122': '2012-2',

    '13SAI': '2013 SAI',
    '131': '2013-1',
    '132': '2013-2',

    '14SAI': '2014 SAI',
    '141': '2014-1',
    '142': '2014-2',
    '142 1': '2014-2 Exam 1',
    '142 2': '2014-2 Exam 2',

    '15SAI': '2015 SAI',
    '151': '2015-1',
    '152': '2015-2',

    '16SAI': '2016 SAI',
    '161': '2016-1',
    '162': '2016-2',

    '17SAI': '2017 SAI',
    '171': '2017-1',
    '170': '2017-0',
    '172': '2017-2',

    '18SAI': '2018 SAI',
    '181': '2018-1',
    '182': '2018-2',

    '19SAI': '2019 SAI',
    '191': '2019-1',
    '192': '2019-2',

    '20SAI': '2020 SAI',
    '201': '2020-1',
    '202': '2020-2',

    '21SAI': '2021 SAI',
    '211': '2021-1',
    '212': '2021-2',

    '22SAI': '2022 SAI',
    '221': '2022-1',
    '222': '2022-2',

    '23SAI': '2023 SAI',
    '231': '2023-1',
    '2312': '2023-1 2',
    '2313': '2023-1 3',
    '232': '2023-2',
    '2321': '2023-2 1',

    '24SAI': '2024 SAI',
    '241': '2024-1',
    '2412': '2024-1 2',
    '241A': '2024-1 Aplazados',
    '242': '2024-2',
    '2422': '2024-2 2',
    '2423': '2024-2 3',
    '242A': '2024-2 Aplazados',

    '25SAI': '2025 SAI',
    '250': '2025-0',
    '251': '2025-1',
    '251A': '2025-1 Aplazados',
    '2512': '2025-1 2',
    '252': '2025-2',
    '2522': '2025-2 2',
    '2524': '2025-2 4',

    '26SAI': '2026 SAI',
    '260': '2026-0',
    '261': '2026-1',
    '262': '2026-2'
};
