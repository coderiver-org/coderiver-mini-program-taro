import * as addApi from './service';

export default {
  namespace: 'add',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const data = yield call(addApi.demo, {});
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
