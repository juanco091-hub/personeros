// =========================================================================
// ARCHIVO DE CONFIGURACIÓN DEL SISTEMA ELECTORAL (config.js)
// =========================================================================

const CONFIG = {
    // 1. INFORMACIÓN GENERAL Y TEXTOS
    TITULO_SUBTÍTULO_BANNER: "Elecciones Regionales 4 de Octubre",
    TITULO_PRINCIPAL: "Sistema de Control de Personeros",
    NOMBRE_REGION: "Región Pasco",
    NOMBRE_PARTIDO: "PODEMOS PERÚ",
    SUBTEXTO_PARTIDO: "Partido Político",

    // 2. ACTIVAR / DESACTIVAR BOTÓN DE LLAMADA DIRECTA (Solo para el día de las elecciones)
    MODO_LLAMADA_ACTIVO: false, // Cambiar a true el día de las elecciones

    // 3. PALETA DE COLORES DEL ENCABEZADO / BANNER
    BANNER_GRADIENTE_COLOR: "from-blue-900 via-blue-800 to-indigo-900",

    // 4. ENLACES A GOOGLE SHEETS (FORMATO CSV PUBLICADO REAL)
    SHEET_URLS: {
        'PASCO': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJZwfyh-D-FoBgAqP6q35LtwfnRphG0jW8zDeLSHMz7AyHXLTKXEC58sOZkvpW1h-80Qa9d6gYqSqh/pub?gid=0&single=true&output=csv',
        'DANIEL ALCIDES\nCARRIÓN': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJZwfyh-D-FoBgAqP6q35LtwfnRphG0jW8zDeLSHMz7AyHXLTKXEC58sOZkvpW1h-80Qa9d6gYqSqh/pub?gid=34256585&single=true&output=csv',
        'OXAPAMPA': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJZwfyh-D-FoBgAqP6q35LtwfnRphG0jW8zDeLSHMz7AyHXLTKXEC58sOZkvpW1h-80Qa9d6gYqSqh/pub?gid=1157227472&single=true&output=csv'
    }
};
