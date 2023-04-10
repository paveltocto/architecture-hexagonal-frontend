import { App, Plugin } from 'vue';
import { container, Container } from '@/container';

export const globalPlugins: Plugin = {
  install(app: App) {
    app.provide<Container>('containerContext', container);
  },
};
