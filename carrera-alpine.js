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
            return this.carrera
                ? `Selecciona un Ciclo de ${this.carrera.nombre}`
                : 'Error: Carrera no encontrada';
        },

        // Computed: Array de 6 ciclos con toda su información
        get ciclos() {
            if (!this.carrera) return [];

            return [1, 2, 3, 4, 5, 6].map(i => {
                const cicloKey = `ciclo${i}`;
                const cursos = this.carrera.ciclos[cicloKey] || [];
                const tieneCursos = cursos.length > 0;

                return {
                    numero: i,
                    key: cicloKey,
                    cursos: tieneCursos ? cursos : [{ text: '(Próximamente...)' }],
                    tieneCursos,
                    href: tieneCursos
                        ? `calculadora.html?carrera=${this.carreraKey}&ciclo=${cicloKey}`
                        : '#',
                    classes: this.getClasses(tieneCursos)
                };
            });
        },

        // Método: Obtener clases CSS según estado del ciclo
        getClasses(tieneCursos) {
            return tieneCursos
                ? 'bg-card-bg border border-zinc-700 border-l-[3px] border-l-epics-blue rounded-lg p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl cursor-pointer min-h-[200px] relative overflow-hidden block group shadow-md cycle-gradient'
                : 'bg-zinc-900/40 border border-zinc-700 border-l-[3px] border-l-zinc-700 rounded-lg p-6 min-h-[200px] opacity-40 cursor-not-allowed pointer-events-none block shadow-md';
        }
    }));
});
