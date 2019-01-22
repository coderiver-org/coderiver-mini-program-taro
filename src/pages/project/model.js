import * as projectApi from './service';

export default {
  namespace: 'project',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const data = yield call(projectApi.demo, {});
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
