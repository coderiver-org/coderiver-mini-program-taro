import * as discoverApi from './service';

export default {
  namespace: 'discover',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const data = yield call(discoverApi.demo, {});
      yield put({ type: 'save',
        payload: {
          topData: data,
        } });
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
