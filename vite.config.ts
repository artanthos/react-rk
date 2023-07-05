import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return defineConfig({
    define: {
      'process.env': env,
    },
    plugins: [react(), viteTsconfigPaths()],

    resolve: {
      alias: {
        src: '/src',
      },
    },
  });
};
