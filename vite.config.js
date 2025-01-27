import { defineConfig } from 'vite';

export default defineConfig({
    base: './', // Para rutas relativas
    build: {
        outDir: 'docs', // Salida del build
    },
});
