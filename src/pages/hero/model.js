import * as heroApi from './service';

export default {
  namespace: 'hero',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const data = yield call(heroApi.demo, {});
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
