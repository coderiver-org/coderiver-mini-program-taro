import * as homeApi from './service';

export default {
  namespace: 'home',
  state: {
    banners: [],
    recommendProjects: [],
    recommendTeams: [],
    recommendHeroes: [],
  },
  effects: {
    * banners(_, {call, put}) {
      const data = yield call(homeApi.banners, {});
      yield put({ type: 'save',payload: {
        banners: data,
      } });
    },
    * recommendProjects(_, {call, put}) {
      const data = yield call(homeApi.recommendProjects, {});
      yield put({ type: 'save',payload: {
        recommendProjects: data,
      } });
    },
    * recommendTeams(_, {call, put}) {
      const data = yield call(homeApi.recommendTeams, {});
      yield put({ type: 'save',payload: {
        recommendTeams: data,
      } });
    },
  },
  reducers: {
    save(state, { payload }) {
      return {...state, ...payload};
    },
  },
};
