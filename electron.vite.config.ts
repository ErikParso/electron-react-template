import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import react from '@vitejs/plugin-react';
import swc from 'unplugin-swc';

export default defineConfig({
  main: {
    plugins: [
      externalizeDepsPlugin(),
      swc.vite({ tsconfigFile: './tsconfig.node.json' }),
    ],
    build: {
      rollupOptions: {
        output: {
          preserveModules: true,
          preserveModulesRoot: 'src/main',
        },
      },
    },
  },
  preload: {
    plugins: [
      externalizeDepsPlugin(),
      swc.vite({ tsconfigFile: './tsconfig.node.json' }),
    ],
  },
  renderer: {
    plugins: [react()],
  },
});
