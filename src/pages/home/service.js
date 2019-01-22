import Request from '../../utils/request';

// 获取首页轮播图信息
export const banners = data => Request({
  url: '/home/banners',
  method: 'GET',
  data,
});

// 获取首页项目推荐列表
export const recommendProjects = data => Request({
  url: '/home/recommendProjects',
  method: 'GET',
  data,
});

// 获取首页团队推荐列表
export const recommendTeams = data => Request({
  url: '/home/recommendTeams',
  method: 'GET',
  data,
});

// 获取首页英雄推荐列表
export const recommendHeroes = data => Request({
  url: '/home/recommendHeroes',
  method: 'GET',
  data,
});