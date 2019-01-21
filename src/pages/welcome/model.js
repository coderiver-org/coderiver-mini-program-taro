import * as welcomeApi from './service';

export default {
  namespace: 'welcome',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const data = yield call(welcomeApi.demo, {});
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
