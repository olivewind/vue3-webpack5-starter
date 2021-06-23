const state = () => ({
  count: 0
});

export type ICounterState = ReturnType<typeof state>;

const getters = {};

const actions = {};

const mutations = {
  increment(state: ICounterState) {
    state.count += 1;
  }
};

export const counter = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
