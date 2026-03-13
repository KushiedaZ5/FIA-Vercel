// Registrar componente Alpine.js cuando Alpine se inicialice
document.addEventListener('alpine:init', () => {
    Alpine.data('carreraApp', () => ({
        // Estado
        carreraKey: null,
        carrera: null,

        // Inicialización del componente (se ejecuta automáticamente)
        init() {
            const params = new URLSearchParams(window.location.search);
            this.carreraKey = params.get('carrera');
            this.carrera = (this.carreraKey && dataCarreras[this.carreraKey])
                ? dataCarreras[this.carreraKey]
                : null;

            // Esperar a que Alpine renderice el DOM y luego igualar alturas
            this.$nextTick(() => {
                this.equalizarAlturas();
            });

            // También igualar cuando la ventana cambie de tamaño
            window.addEventListener('resize', () => this.equalizarAlturas());
        },

        // Método: Igualar alturas de todas las tarjetas de ciclo
        equalizarAlturas() {
            // Buscar todas las tarjetas de ciclo (los links dentro del grid)
            const cards = document.querySelectorAll('[x-data="carreraApp"] .grid > div > a');

            if (cards.length === 0) return;

            // Primero resetear alturas para medir correctamente
            cards.forEach(card => card.style.height = 'auto');

            // Encontrar la altura máxima
            let maxHeight = 0;
            cards.forEach(card => {
                const height = card.offsetHeight;
                if (height > maxHeight) maxHeight = height;
            });

            // Aplicar la altura máxima a todas las tarjetas
            cards.forEach(card => {
                card.style.height = `${maxHeight}px`;
            });

            console.log(`📐 Alturas igualadas: ${maxHeight}px para ${cards.length} tarjetas`);
        },

        // Computed: Título dinámico
        get titulo() {
            if (this.carrera) {
                return `Selecciona un Ciclo de ${this.carrera.nombre}`;
            }
            // Si no hay carrera seleccionada, mostrar título de selección de carreras
            return 'Selecciona tu Carrera - FIA USMP';
        },

        // Computed: Array de 6 ciclos con toda su información
        // O lista de carreras si no hay carrera seleccionada
        // FILTRO: Oculta cursos con "Proximamente" y ciclos vacíos
        get ciclos() {
            // Si no hay carrera seleccionada, mostrar lista de carreras disponibles
            if (!this.carrera) {
                const carreras = Object.keys(dataCarreras).map(key => {
                    const carrera = dataCarreras[key];
                    return {
                        numero: carrera.nombre,
                        key: key,
                        cursos: [{ text: `${Object.keys(carrera.ciclos).length} ciclos disponibles` }],
                        tieneCursos: true,
                        href: `carrera.html?carrera=${key}`,
                        classes: this.getClasses(true)
                    };
                });
                return carreras;
            }

            // Si hay carrera seleccionada, mostrar todos los ciclos disponibles
            // Filtrando cursos con "Proximamente" y ocultando ciclos vacíos
            const ciclosFiltrados = Object.keys(this.carrera.ciclos).map(cicloKey => {
                const cursosOriginales = this.carrera.ciclos[cicloKey] || [];

                // Filtrar cursos que NO contengan "Proximamente" (case insensitive)
                const cursosDisponibles = cursosOriginales.filter(curso =>
                    !curso.text.toLowerCase().includes('proximamente')
                );

                const tieneCursos = cursosDisponibles.length > 0;

                // Determinar el número/label del ciclo
                let numero;
                const lowerKey = cicloKey.toLowerCase();
                if (lowerKey === 'electivas' || lowerKey === 'electivos') {
                    numero = 'ELECTIVOS';
                } else if (lowerKey.startsWith('ciclo')) {
                    const numPart = cicloKey.replace(/ciclo/i, '');
                    numero = isNaN(numPart) ? cicloKey.toUpperCase() : parseInt(numPart);
                } else {
                    numero = cicloKey.toUpperCase();
                }

                return {
                    numero,
                    key: cicloKey,
                    cursos: cursosDisponibles,
                    tieneCursos,
                    href: tieneCursos
                        ? `calculadora.html?carrera=${this.carreraKey}&ciclo=${cicloKey}`
                        : '#',
                    classes: this.getClasses(tieneCursos)
                };
            });

            // Filtrar ciclos que NO tengan cursos disponibles (ocultar tarjetas vacías)
            return ciclosFiltrados.filter(ciclo => ciclo.tieneCursos);
        },

        // Método: Obtener clases CSS según estado del ciclo
        getClasses(tieneCursos) {
            return tieneCursos
                ? 'bg-card-bg border border-zinc-700 border-l-[3px] border-l-epics-blue rounded-lg p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl cursor-pointer min-h-[200px] relative overflow-hidden block group shadow-md cycle-gradient'
                : 'bg-zinc-900/40 border border-zinc-700 border-l-[3px] border-l-zinc-700 rounded-lg p-6 min-h-[200px] opacity-40 cursor-not-allowed pointer-events-none block shadow-md';
        }
    }));
});
