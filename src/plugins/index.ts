import { router } from '@routes';
import { store, storeKey } from '@stores';

export function installPlugins(app) {
  app.use(router);
  app.use(store, storeKey);
  return store;
}
