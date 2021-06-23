import UiButton from './ui-button/index.vue';

const COMPONENTS = {
  'ui-button': UiButton
};

export function registerComponents(Vue) {
  Object.keys(COMPONENTS).forEach((key) => {
    Vue.component(key, COMPONENTS[key]);
  });
}
