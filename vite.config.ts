import {defineConfig/*, loadEnv*/} from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import eslint from 'vite-plugin-eslint';


export default (/*{mode}*/) => {
  // const env = loadEnv(mode, process.cwd(), '');
  return defineConfig({
    // define: {
    //   'process.env': env,
    // },
    plugins: [react(), viteTsconfigPaths(), eslint()],

    resolve: {
      alias: {
        src: '/src',
      },
    },
  });
};
