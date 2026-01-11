/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.html",
        "./*.js",
        "./data/*.js"
    ],
    theme: {
        extend: {
            colors: {
                'bg-dark': '#0b0d12',
                'epics-blue': '#1a45bc',
                'epics-blue-hover': '#2563eb',
                'official-blue': '#1E88E5',
                'card-bg': '#18181b',
                'border-color': '#27272a',
                'success-green': '#00E676',
                'danger-red': '#FF1744',
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'roboto': ['Roboto', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'slide-in-1': 'slideIn1 0.8s ease-out 0.1s forwards',
                'slide-in-2': 'slideIn2 0.8s ease-out 0.25s forwards',
                'slide-in-3': 'slideIn3 0.8s ease-out 0.4s forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(26, 69, 188, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(26, 69, 188, 0.6)' },
                },
                slideIn1: {
                    '0%': { opacity: '0', transform: 'translate(-50%, -50%) translateX(-100px) translateY(-40px) rotate(-8deg) scale(0.7)' },
                    '100%': { opacity: '0.5', transform: 'translate(-50%, -50%) translateX(-40px) translateY(-15px) rotate(-6deg) scale(0.92)' },
                },
                slideIn2: {
                    '0%': { opacity: '0', transform: 'translate(-50%, -50%) translateX(-60px) translateY(-25px) rotate(-5deg) scale(0.8)' },
                    '100%': { opacity: '0.75', transform: 'translate(-50%, -50%) translateX(-20px) translateY(-8px) rotate(-3deg) scale(0.96)' },
                },
                slideIn3: {
                    '0%': { opacity: '0', transform: 'translateX(-40px) scale(0.9)' },
                    '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
                },
            },
            borderWidth: {
                '3': '3px',
            },
        }
    },
    plugins: [],
}
