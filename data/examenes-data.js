

const examenesDisponibles = {
    // Matemática Discreta
    'MD': {
        'PC1': ['181', '182', '191', '192', '212', '230', '231', '232', '241', '242', '251', '261', '2612', 'REP'],
        'PC2': ['181', '182', '191', '192', '212', '230', '231', '232', '241', '242', '251', '252', 'REP'],
        'PC3': ['181', '182', '191', '192', '212', '230', '231', '232', '241', '242', '251', 'REP'],
        'PC4': ['212', '230', '231', '232', '241', '242', '251', 'REP2', 'SEM', 'SEM2'],
        'EF': ['212', '232', '241', '242', '251', '251A', 'REP', 'SEM'],
    },
    'AED1': {
        'PC1': ['251'],
        'PC2': ['251'],
    },
    'AL': {
        'PC1': ['232', '242', '251', '252'],
        'PC2': ['231', '232', '241', '252'],
        'PC3': ['232', '241', '242', '251', '252', 'SEM'],
        'PC4': ['232', '241', '242', '251', '252'],
        'EF': ['231', '232', '241', '242', '251', '252', '252A'],
    },
    'F1': {
        'PC1': ['061', '062', '071', '072', '081', '082', '091', '092', '232', '241', '242', '251', '090'],
        'PC2': ['061', '062', '071', '072', '081', '082', '091', '092', '232', '242', '251', '252', '090'],
        'PC3': ['061', '062', '072', '081', '082', '091', '092', '232', '241', '242', '251', '090'],
        'PC4': ['051', '052', '071', '072', '081', '082', '091', '092', '232', '241', '242', '251', '090'],
        'EF': ['061', '062', '071', '072', '081', '082', '091', '092', '231', '232', '241', '242', '251', 'REP', '090'],
        'LAB1': ['232'],
        'LAB2': ['202', '252'],
        'LAB3': ['232'],
        'LAB4': ['232'],
        'LAB5': ['251'],
        'LAB6': ['202'],
    },

    // Física 2 - Prof. Castro
    // Carpeta: pdfs/F2C/
    'F2C': {
        'PC1': ['232', '241', '242', '251', '252', '250', '2502', '2503'],
        'PC2': ['242', '240', '251', '252', '250', '2502'],
        'PC3': ['202', '241', '242', '251', '252', '250'],
        'PC4': ['131', '151', '162', '172', '200', '241', '242', '251', '250', '2502', '252'],
        'LAB1': ['A', 'B', '252'],
        'LAB2': ['A', 'B', '252'],
        'LAB3': ['A', 'B', '252'],
        'EF': ['151', '201', '231', '241', '250'],
        'LAB4': ['A'],
        'LAB5': ['A'],
        'LAB6': ['A'],
    },

    // Física 2 - Prof. Tejada
    // Carpeta: pdfs/F2T/
    'F2T': {
        'PC1': ['231', '241', '242', '251'],
        'PC2': ['232', '242'],
        'PC3': ['242', '251', '252'],
        'PC4': ['241', '251'],
        'EF': ['201'],
        'LAB1': ['A', 'B'],
        'LAB2': ['A', 'B'],
        'LAB3': ['A', 'B'],
        'LAB4': ['A'],
        'LAB5': ['A'],
        'LAB6': ['A'],
    },
    'GA': {
        'PC1': ['231', '2312', '241', '242', '251', '252'],
        'PC2': ['231', '2312', '241', '242', '251', 'SEM', 'SEM2'],
        'PC3': ['231', '232', '241', '251', 'SEM', 'SEM2'],
        'PC4': ['231', '232', '241', '242', '251', 'REP'],
        'EF': ['231', '232', '241', '242', '251']
    },
    'EST2': {
        'PC1': ['251', '252'],
        'PC2': ['251', '252'],
        'PC3': ['251', '252'],
        'PC4': ['251', '252'],
        'EF': ['241', '252']
    },
    // Microeconomía - Prof. Sánchez
    // Carpeta: pdfs/MICROS/
    'MICROS': {
        'PC1': ['181', '250', '251', '252'],
        'PC2': ['250', '251', '252'],
        'EP': ['171', '182', '250', '251', '252'],
        'EF': ['151', '152', '251', '252', '112'],
        'C1': ['251', '252', '261'],
        'C2': ['251', '252'],
        'C3': ['251', '2512', '252'],
        'C4': ['251', '252'],
        'C5': ['251', '252'],
        'C6': ['252'],
        'CE': ['252'],
        'PD1': ['251'],
        'PD14': ['251'],
        'PD2': ['251'],
        'PD4': ['251'],
        'PD5': ['251'],
        'PD7': ['251'],
    },

    // Microeconomía - Prof. Caparachín
    // Carpeta: pdfs/MICROC/
    'MICROC': {
        'C3': ['231'],
        'C4': ['181'],
        'EP': ['181', '231', '232', '241', '242'],
        'EF': ['121', '122', '132', '142', '151', '152', '171', '182', '231', '232', '241', '241A'],
    },
    // Cálculo I
    // Carpeta: pdfs/C1/
    'C1': {
        'PC1': ['231', '232', '242', '251', '252'],
        'PC2': ['232', '242', '251'],
        'PC3': ['231', '232', '241', '242', '251'],
        'PC4': ['231', '232', '241', '242', '251'],
        'EF': ['231', '232', '241', '242', '242A', '251'],
    },
    'CG': {
        'PC1': ['231', '232', '241', '242', '2422', '250', '251', '252', '260'],
        'PC2': ['241', '2412', '242', '2422', '250', '2512', '260'],
        'PC3': ['232', '241', '2412', '242', '2423', '250', '260'],
        'EP': ['242', '250', '251', '2512', '260'],
        'EF': ['231', '232', '241', '242', '242A', '251', '251A', '260'],
    },
    'TBD': {
        'EP': ['252'],
        'EF': ['242', '252'],
    },

    // Investigación Operativa
    // Carpeta: pdfs/IO/
    'IO': {
        'PC1': ['111'],
    },

    // Teoría General de Sistemas
    // Carpeta: pdfs/TGS/
    'TGS': {
        'PC2': ['202', '222'],
        'EP': ['252', '261'],
        'PC3': ['252', '2524'],
        'PC4': ['252', '2522'],
    },

    // ── Ingeniería Civil ─────────────────────────────────────────────────────

    // Dibujo y Diseño Gráfico
    // Carpeta: pdfs/DDG/
    'DDG': {
        'PC1': ['222'],
        'EF': ['222'],
        'PC2': ['242'],
    },

    // Introducción a la Economía
    // Carpeta: pdfs/IE/
    'IE': {
        'C4': ['212'],
        'C2': ['251', '252'],
        'EF': ['242', '251', '252', 'SEM'],
        'EP': ['242', '251', '252'],
        'C3': ['252'],
    },

    // Cálculo II
    // Carpeta: pdfs/C2/
    'C2': {
        'PC2': ['251'],
        'EF': ['251'],
        'PC1': ['242', '251', '261'],
        'PC3': ['251'],
        'PC4': ['242', '251'],
    },

    // Tecnología de los Materiales
    // Carpeta: pdfs/TM/
    'TM': {
        'PC2': ['181', '221'],
    },

    // Construcción I
    // Carpeta: pdfs/CON1I/
    'CON1I': {
        'PC1': ['221'],
        'PC2': ['201', '211', '201R'],
        'PC3': ['211'],
        'PC4': ['211'],
        'EP': ['251'],
    },

    // Dinámica
    // Carpeta: pdfs/DIN/
    'DIN': {
        'PC1': ['222'],
        'PC2': ['201', '202'],
        'PC3': ['202', '222'],
        'PC4': ['202'],
        'EP': ['212'],
    },

    // Estática
    // Carpeta: pdfs/ESTA/
    'ESTA': {
        'PC1': ['202'],
        'PC4': ['212'],
    },

    // Tecnología del Concreto
    // Carpeta: pdfs/TC/
    'TC': {
        'PC2': ['221'],
        'PC3': ['221'],
        'PC4': ['211'],
    },

    // Resistencia de Materiales I
    // Carpeta: pdfs/RM1/
    'RM1': {
        'PC1': ['061', '171', '211', '212'],
        'PC3': ['061', '062', '071', '072'],
        'PC4': ['201'],
    },

    // Mecánica de Fluidos I
    // Carpeta: pdfs/MF1/
    'MF1': {
        'PC1': ['211'],
        'PC2': ['221'],
        'PC3': ['201', '202'],
        'PC4': ['202'],
    },

    // Resistencia de Materiales II
    // Carpeta: pdfs/RM2/
    'RM2': {
        'PC1': ['082', '091', '092', '101', '102', '202', '212'],
        'PC2': ['082', '091', '092', '101', '102', '211'],
        'PC3': ['082', '091', '092', '101', '102'],
        'PC4': ['082', '091', '092', '101', '102', '201'],
        'EP': ['082', '091', '092', '101', '102'],
        'EF': ['082', '091', '092', '101', '102'],
    },

    // ── Ingeniería Civil — Ciclos 7 al 10 ────────────────────────────────────

    // Análisis Estructural I
    // Carpeta: pdfs/AE1/
    'AE1': {
        'PC1': ['210'],
        'PC2': ['202', '210', '220', '221', '230'],
        'PC3': ['202'],
    },

    // Mecánica de Fluidos II
    // Carpeta: pdfs/MF2/
    'MF2': {
        'PC2': ['202'],
    },

    // Presupuesto y Programación de Obra
    // Carpeta: pdfs/PPO/
    'PPO': {
        'PC3': ['211'],
        'PC4': ['211'],
    },

    // Análisis Estructural II
    // Carpeta: pdfs/AE2/
    'AE2': {
        'PC1': ['211', '221'],
        'PC2': ['231', '241', '231_2'],
        'PC3': ['241'],
    },

    // Concreto Armado I
    // Carpeta: pdfs/CA1/
    'CA1': {
        'PC1': ['212'],
        'PC2': ['211'],
        'PC4': ['202'],
    },

    // Instalaciones Sanitarias
    // Carpeta: pdfs/ISAL/
    'ISAL': {
    },

    // Concreto Armado II
    // Carpeta: pdfs/CA2/
    'CA2': {
        'PC3': ['222'],
    },

    // Hidráulica
    // Carpeta: pdfs/HIDR/
    'HIDR': {
        'PC1': ['212'],
        'PC2': ['202'],
        'PC4': ['212'],
    },

    // Ingeniería Antisísmica
    // Carpeta: pdfs/IAS/
    'IAS': {
        'PC1': ['161', '202', '211', '212'],
        'PC2': ['202', '211'],
        'PC3': ['202', '212'],
        'PC4': ['202', '211'],
    },

    // Ingeniería de Valuaciones y Tasaciones
    // Carpeta: pdfs/IVT/
    'IVT': {
        'PC1': ['232'],
    },

    // Ética y Moral
    // Carpeta: pdfs/ETM/
    'ETM': {
        'PC1': ['231'],
    },

    // Puentes y Obras de Arte
    // Carpeta: pdfs/POA/
    'POA': {
        'PC1': ['202', '212'],
        'PC4': ['140'],
    },

    // Caminos II (Electiva)
    // Carpeta: pdfs/CAM2/
    'CAM2': {
        'PC1': ['202', '211'],
        'PC2': ['221'],
        'PC3': ['201', '211', '201_2'],
        'PC4': ['202'],
    },

    // ── Arquitectura ─────────────────────────────────────────────────────

    // Física General I (Arquitectura)
    // Carpeta: pdfs/F1G/
    'F1G': {
        'PC2': ['201'],
        'PC3': ['211'],
    },

    // Instalaciones Sanitarias y Electromecánicas
    // Carpeta: pdfs/ISE/ (pendiente crear carpeta - PDFs en ISAL por ahora)
    'ISE': {
        'PC1': ['212'],
        'PC3': ['212'],
        'T3': ['202'],
    },

    // Liderazgo y Oratoria
    // Carpeta: pdfs/LO/
    'LO': {
        'EF': ['222'],
    },

    // ── Ingeniería Industrial ──────────────────────────────────────────────────────

    // Ingeniería Administrativa
    // Carpeta: pdfs/IA/
    'IA': {
        'PC1': ['192', '242'],
        'PC2': ['242'],
        'PC3': ['242'],
        'PC4': ['242'],
    },

    // Proceso de Manufactura
    // Carpeta: pdfs/PM/
    'PM': {
        'PC1': ['152', '161', '162', '170', '242', '151'],
        'PC2': ['151', '152', '161', '162'],
        'EP': ['151', '152', '161', '162'],
        'EF': ['151', '152', '161', '162'],
    },

    // Instrumentación y Control Industrial
    // Carpeta: pdfs/ICI/
    'ICI': {
        'PC1': ['210', '21SAI'],
        'PC4': ['201'],
    },

    // Automatización Industrial
    // Carpeta: pdfs/AIND/
    'AIND': {
        'PC1': ['211'],
        'PC3': ['202'],
        'L4': ['202'],
    },
    'AED1I': {
        'EP': ['241'],
        'PC2': ['242'],
    },
    'ED': {
        'EF': ['241', '242', '251'],
        'PC2': ['232', '242', '251'],
        'PC3': ['242', '251'],
        'PC4': ['242', '251'],
        'PC1': ['251', '261'],
    },
    'MI': {
        'EP': ['242'],
    },
    'MM': {
        'EF': ['251'],
    },
    'AED2S': {
        'EP': ['242'],
    },
    'QI': {
        'EP': ['242', '251'],
        'PC1': ['251'],
        'PC2': ['242', '251'],
    },
    'THI': {
        'PC3': ['251'],
    },
    'IEE': {
        'EF': ['232'],
        'EP': ['231', '232'],
        'PC1': ['232'],
        'PC2': ['232'],
    },
    'CI': {
        'EP': ['241'],
    },
    'EST1': {
        'PC1': ['232', '251'],
        'PC2': ['251'],
        'PC3': ['251'],
        'PC4': ['251'],
    },
    'FDW': {
        'EF': ['231', '2312', '231_2', '232'],
        'EP': ['231', '2312', '231_1'],
    },
    'FIL': {
        'EP': ['241'],
    },
    'IP': {
        'EF': ['242', '252'],
        'EP': ['242', '252'],
        'LAB1': ['242'],
        'LAB2': ['252'],
        'PC1': ['252', '2522'],
        'PC2': ['242', '252'],
    },
    'ISI': {
        'EP': ['241'],
    },
    'LEN': {
        'EF': ['241'],
        'EP': ['241'],
        'PC1': ['241'],
        'PC2': ['241'],
        'PC3': ['241'],
    },
    'SI': {
        'EP': ['251'],
        'EF': ['232', '241', '251'],
    },
    'TI1': {
        'EF': ['251'],
    },
    'TI2': {
        'EP': ['252'],
    },
    'MICRO': {
        'C6': ['252'],
        'EP': ['251', '252'],
        'C3': ['252'],
        'C4': ['252'],
        'C1': ['252'],
        'PC2': ['252'],
        'C2': ['252'],
        'CE': ['252'],
        'C5': ['252'],
        'EF': ['252', '112'],
        'PC1': ['252'],
    },
    'FIN': {
        'EP': ['260'],
    },
    'GF': {
        'EF': ['252'],
        'PC1': ['260'],
        'PC2': ['260'],
    }
};

/**
 * Función helper para verificar si existe un PDF
 * @param {string} clave - Clave del curso (ej: 'MD')
 * @param {string} tipo - Tipo de examen (ej: 'PC1')
 * @param {string} ciclo - Ciclo académico (ej: '241')
 * @returns {boolean}
 */
function existeExamen(clave, tipo, ciclo) {
    return examenesDisponibles[clave]?.[tipo]?.includes(ciclo) || false;
}

/**
 * Obtiene la URL del PDF
 * Nueva estructura: pdfs/CLAVE/TIPO-CICLO.pdf
 * Ejemplo: pdfs/MD/PC1-241.pdf
 * @param {string} clave - Clave del curso (será la carpeta)
 * @param {string} tipo - Tipo de examen
 * @param {string} ciclo - Ciclo académico
 * @returns {string} URL del PDF
 */
function getPdfUrl(clave, tipo, ciclo) {
    return `pdfs/${clave}/${tipo}-${ciclo}.pdf`;
}

/**
 * Obtiene todos los tipos de examen disponibles para un curso
 * @param {string} clave - Clave del curso
 * @returns {string[]} Array de tipos disponibles
 */
function getTiposDisponibles(clave) {
    if (!examenesDisponibles[clave]) return [];
    return Object.keys(examenesDisponibles[clave]);
}

/**
 * Obtiene todos los ciclos disponibles para un curso y tipo
 * @param {string} clave - Clave del curso
 * @param {string} tipo - Tipo de examen
 * @returns {string[]} Array de ciclos disponibles
 */
function getCiclosDisponibles(clave, tipo) {
    return examenesDisponibles[clave]?.[tipo] || [];
}

/**
 * Obtiene todos los cursos que tienen exámenes disponibles
 * @returns {string[]} Array de claves de cursos
 */
function getCursosConExamenes() {
    return Object.keys(examenesDisponibles);
}
