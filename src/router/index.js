import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../views/common/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../views/common/403.vue'),
                    meta: { title: '403' }
                },
                {
                    path: '/UserManager',
                    component: () => import( '../views/pages/manager/UserManager'),
                    meta: { title: '账号管理' }
                },
                {
                    path: '/MenuManager',
                    component: () => import( '../views/pages/manager/MenuManager'),
                    meta: { title: '菜单管理' }
                },
                {
                    path: '/AuthManager',
                    component: () => import( '../views/pages/manager/AuthManager'),
                    meta: { title: '权限管理' }
                },
                {
                    path: '/AppManager',
                    component: () => import( '../views/pages/manager/AppManager'),
                    meta: { title: 'APP管理' }
                },
                {
                    path: '/DoctorManager',
                    component: () => import( '../views/pages/manager/DoctorManager'),
                    meta: { title: '视训师管理' }
                },
                {
                    path: '/HospitalManager',
                    component: () => import( '../views/pages/manager/HospitalManager'),
                    meta: { title: '机构管理' }
                },
                {
                    name: 'purchaseManager',
                    path: '/PurchaseManager',
                    component: () => import( '../views/pages/manager/PurchaseManager'),
                    meta: { title: '购买管理' },
                    parmas: {}
                },
                {
                    name: 'deviceManager',
                    path: '/DeviceManager',
                    component: () => import( '../views/pages/manager/DeviceManager'),
                    meta: { title: '设备管理' },
                    parmas: {}
                },
                {
                    name: 'userInfo',
                    path: '/UserInfo',
                    component: () => import( '../views/pages/manager/UserInfo'),
                    meta: { title: '用户信息' },
                    parmas: {}
                },
                {
                    name: 'visionInfo',
                    path: '/VisionInfo',
                    component: () => import( '../views/pages/userInfo/VisionInfo'),
                    meta: { title: '购买信息' },
                    parmas: {}
                },
                {
                    name: 'trainInfo',
                    path: '/TrainInfo',
                    component: () => import( '../views/pages/userInfo/TrainInfo'),
                    meta: { title: '购买信息' },
                    parmas: {}
                },
                {
                    name: 'userDetails',
                    path: '/UserDetails',
                    component: () => import( '../views/pages/manager/UserDetails'),
                    meta: { title: '用户详情' },
                    parmas: {}
                },
                {
                    name: '3',
                    path: '/3',
                    component: () => import( '../views/pages/manager/3'),
                    meta: { title: '订单详情' },
                    parmas: {}
                },
                {
                    name: '4',
                    path: '/4',
                    component: () => import( '../views/pages/manager/4'),
                    meta: { title: '疗程详情' },
                    parmas: {}
                }
                // {
                //     path: '/FileManager',
                //     component: () => import( '../views/pages/manager/FileManager'),
                //     meta: { title: '文件管理' }
                // }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
