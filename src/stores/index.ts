import { counter, ICounterState } from './modules/counter';
import { InjectionKey } from 'vue';
import {
  createStore,
  useStore as baseUseStore,
  Store,
  createLogger
} from 'vuex';
import { isDev } from '@utils';

export interface IState {
  counter: ICounterState;
}

export const storeKey: InjectionKey<Store<IState>> = Symbol();

export const store = createStore<IState>({
  modules: {
    counter
  },
  strict: isDev(),
  plugins: isDev() ? [createLogger()] : []
});

export function useStore() {
  return baseUseStore(storeKey);
}
