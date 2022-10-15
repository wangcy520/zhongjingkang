import axios from 'axios';
// import db from './storage';
import { Message } from 'element-ui';
import Lockr from 'lockr';
import { getToken } from '@/utils/auth'
import { router } from '../router/index';


// 统一请求路径前缀
let BASE = process.env.API_ROOT;
let TOKEN_KEY = process.env.TOKEN_KEY;
//避免多个请求401，出现多个token过期弹框
let status = false

// 超时设定
axios.defaults.timeout = 15000;
// 自定义头
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// http resquest 拦截器
axios.interceptors.request.use(config => {
    return config;
}, err => {
    Message.error('请求超时');
    //return Promise.resolve(err);
    return Promise.reject(err);
});

// request拦截器
axios.interceptors.request.use(
    config => {
        if (getToken()) {
            config.headers['accessToken'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        }
        return config
    },
    error => {
        console.log(error)
        Promise.reject(error)
    }
)


// http response 拦截器
axios.interceptors.response.use(response => {
    let TOKEN_KEY = process.env.TOKEN_KEY;
    let TOKEN_VAL = "";
    for (let headName in response.headers) {
        if (headName === TOKEN_KEY.toLowerCase()) {
            TOKEN_VAL = response.headers[headName];
            break;
        }
    }
    if (TOKEN_VAL !== "") {
        Lockr.set(TOKEN_KEY, TOKEN_VAL)
    }
    const res = response.data;
    if (response.status === 200 && response.config.responseType === 'blob') {
        return response;
    } else {
        // 根据返回的code值来做不同的处理(和后端约定)
        if (res.code === 401) {
            // db.clear();
            location.reload()
            if (res.message !== null) {
                Message.error(res.message);
            } else {
                Message.error("无权访问")
            }
        } else if (res.code === 400 || res.code === 500) {
            if (res.message !== null) {
                Message.error(res.message);
            } else {
                Message.error("未知错误");
            }
        }
    }
    return response.data;
}, (err) => {
    if (err.response.status === 401) {
        if (status === false) {
            Message.error("Token过期，请重新登录！");
            // db.clear();
            location.reload()
            // router.push('/login');

            // 未登录 清除已登录状态
            // Cookies.remove(Constants.USER_COOKIE);
            // 清空缓存数据
        }
        status = true
    } else {
        Message.error("请求异常，请联系管理员！");
        console.log("error========",err)
        var config = err.config;
        if (!config || !config.retry) {
            return Promise.reject(err);
        }
    }
});

const request = {
    get (url, params) {
        return axios({
            method: 'get',
            url: `${url}`,
            params: params,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    },

    post (url, params) {
        return axios({
            method: 'post',
            url: `${url}`,
            data: params,
            transformRequest: [function (data) {
                let ret = '';
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                }
                ret = ret.substring(0, ret.length - 1);
                return ret;
            }],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    },

    post1 (url, params) {
        return axios({
            method: 'post',
            url: `${url}`,
            data: params,
            transformRequest: [function (data) {
                return JSON.stringify(data)
            }],
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });
    },

    put (url, params) {
        return axios({
            method: 'put',
            url: `${url}`,
            data: params,
            transformRequest: [function (data) {
                let ret = '';
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                }
                ret = ret.substring(0, ret.length - 1);
                return ret;
            }],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    },

    delete (url, params) {
        return axios({
            method: 'delete',
            url: `${url}`,
            params: params,
            headers: {
            }
        });
    },
    delete1 (url, params) {
        return axios({
            method: 'delete',
            url: `${url}`,
            params: params,
            transformRequest: [function (data) {
                return JSON.stringify(data)
            }],
            headers: {
                'Content-Type': 'application/json',
            }
        });
    },

    upload (url, params) {
        return axios({
            method: 'post',
            url: `${url}`,
            params: params,
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
    }
};

export default request;
