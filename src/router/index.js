import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/index';
import index from '@/components/index/index';
import login from '@/components/login/login';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/',
          name: 'index',
          component: index,
        },
      ],
      // 需要登录才能进入的页面可以增加一个meta属性
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    }

  ]
});
/**
 * 注册全局钩子用来拦截导航
 * 判断是否需要登录权限 以及是否登录
 * **/
/*router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
    //获取用户是否登录;
    let user = window.sessionStorage.getItem('userInfo');
    if (user) {// 判断是否登录
      next()
    } else {// 没登录则跳转到登录界面
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
});*/

export default router;
