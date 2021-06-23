import { router } from '@routes';
import { store, storeKey } from '@stores';
import { registerComponents } from '@components';
import { registerDirectives } from '@directives';

export function installPlugins(app) {
  app.use(router);
  app.use(store, storeKey);
  registerComponents(app);
  registerDirectives(app);
  return store;
}
