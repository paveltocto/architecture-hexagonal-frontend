import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [vue()],
    base: env.VITE_APP_PUBLIC_PATH || '/',
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
      },
    },
    build: {
      chunkSizeWarningLimit: 1800,
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
              return 'assets/images/[name]-[hash][extname]';
            }

            if (/\.(mp4|mp3)$/.test(name ?? '')) {
              return 'assets/media/[name]-[hash][extname]';
            }

            if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name]-[hash][extname]';
            }

            if (/\.(woff2?|eot|ttf|otf)$/.test(name ?? '')) {
              return 'assets/fonts/[name]-[hash][extname]';
            }

            return 'assets/[name]-[hash][extname]';
          },
        },
      },
    },
    server: {
      port: 5000,
    },
  };
});
