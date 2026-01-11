

const examenesDisponibles = {
    // Matemática Discreta
    'MD': {
        'PC1': ['181', '182', '191', '192', '212', '230', '231', '232', '241', '242', '251'],  // MD-PC1-241.pdf existe
        'PC2': ['181', '182', '191', '192', '212', '230', '231', '232', '241', '242', '251', '252'],
        'PC3': ['181', '182', '191', '192', '212', '230', '231', '232', '241', '242', '251',],
        'PC4': ['212', '230', '231', '232', '241', '242', '251'], // MD-PC2-241.pdf ✅ NUEVO
        'EF': ['212', '232', '241', '242', '251'], // MD-PC2-241.pdf ✅ NUEVO

    },
    'AL': {
        'PC1': ['232'],
        'PC2': ['231', '232', '241', '252'],
        'PC3': ['232', '241'],
        'PC4': ['232', '241'],
        'EF': ['231', '232', '241'],

    },
    'F1': {
        'PC1': ['090', '091', '232', '241', '242', '251'],
        'PC2': ['090', '091', '232', '242', '251', '252'],
        'PC3': ['090', '091', '232', '241', '242'],
        'PC4': ['090', '091', '232', '241', '242'],
        'EF': ['090', '091', '231', '232', '241', '242'],
        'LAB1': ['232'],
        'LAB2': ['202'],
        'LAB3': ['232'],
        'LAB4': ['232'],
        'LAB5': ['251'], // MD-PC1-241.pdf existe
        'LAB6': ['202'], // MD-PC2-241.pdf ✅ NUEVO
    },

    // Física 2 - Prof. Castro
    // Carpeta: pdfs/F2C/
    'F2C': {
        'PC1': ['232', '241', '242', '251', '250', '2502', '2503'],
        'PC2': ['242', '240', '251', '252', '250', '2502'],
        'PC3': ['202', '241', '242', '251', '252', '250',],
        'PC4': ['131', '151', '162', '172', '200', '241', '242', '251', '250', '2502'],
        'EF': ['151', '201', '250'],
        'LAB1': ['A', 'B'],
        'LAB2': ['A', 'B'],
        'LAB3': ['A', 'B'],
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
        'PC4': ['241'],
        'EF': ['201'],
        'LAB1': ['A', 'B'],
        'LAB2': ['A', 'B'],
        'LAB3': ['A', 'B'],
        'LAB4': ['A'],
        'LAB5': ['A'],
        'LAB6': ['A'],
    },
    'GA': {
        'PC1': ['231', '232', '241', '242', '251', '252'],
        'PC2': ['231', '232', '241', '242', '251'],
        'PC3': ['231', '232', '241', '251'],
        'PC4': ['231', '232', '241', '242', '251'],
        'EF': ['231', '232', '241', '242', '251']
    },
    'EST2': {
        'PC1': ['251'],
        'PC2': ['251'],
        'PC3': ['251'],
        'PC4': ['251'],
        'EF': ['241']
    },
    // Microeconomía - Prof. Sánchez
    // Carpeta: pdfs/MICROS/
    'MICROS': {
        'PC1': ['252'],
        'PC2': ['252'],
        'EP': ['251', '252'],
        'EF': ['252'],
        'C1': ['252'],
        'C2': ['252'],
        'C3': ['252'],
        'C4': ['252'],
        'C5': ['252'],
        'C6': ['252'],
        'CE': ['252'],
    },

    // Microeconomía - Prof. Caparachín
    // Carpeta: pdfs/MICROC/
    'MICROC': {
        'EF': ['241'],
    },
    // Cálculo I
    // Carpeta: pdfs/C1/
    'C1': {
        'PC1': ['231', '232', '251'],
        'PC2': ['232', '242', '251'],
        'PC3': ['232', '241', '242'],
        'PC4': ['232', '241', '242'],
        'EF': ['232', '241'],  // Todos los ciclos en un solo array
        // Agrega más tipos y ciclos conforme subas PDFs
        // 'PC2': ['241'],
        // 'EF': ['241']
    },
    'CG': {
        'PC1': ['231', '241', '242', '2422','250', '251', '252'],
        'PC2': ['241', '2412', '2422','250', '2512'],
        'PC3': ['232', '241', '2412', '242', '2423','250'],
        'EP': ['242','250', '251', '2512'],
        'EF': ['231', '232', '241', '242', '242A', '251', '251A'],  // Todos los ciclos en un solo array
        // Agrega más tipos y ciclos conforme subas PDFs
        // 'PC2': ['241'],
        // 'EF': ['241']
    },
    'TBD': {

        'EP': ['252'],

    },

    // Geometría Analítica  
    // 'GA': {
    //     'PC1': ['241'],
    //     'EF': ['241']
    // },

    // Cálculo I
    // 'C1': {
    //     'PC1': ['241', '242'],
    //     'PC2': ['241'],
    //     'EF': ['241']
    // },

    // Agrega más cursos conforme subas PDFs...
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
