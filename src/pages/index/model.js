import * as indexApi from './service';

export default {
  namespace: 'index',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const data = yield call(indexApi.demo, {});
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
