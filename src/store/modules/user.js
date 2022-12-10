import ApiServer from '@/api/apiServer'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    title: '',
    avatar: '',
    roles: [],
    permissions: [],
    menuList: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_TITLE: (state, title) => {
      state.title = title
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_MENULIST: (state, menuList) => {
      state.menuList = menuList
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    }
  },

  actions: {
    // 登录
    Login({
      commit
    }, userInfo) {
      return new Promise((resolve, reject) => {
        ApiServer.common.login(userInfo).then(res => {
          if (res.code == 200) {
            setToken(res.result)
            commit('SET_TOKEN', res.result)
            resolve()
          } else {
            this.$message({
              type: 'error',
              message: res.message,
            })
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    Login2({
      commit
    }, userInfo) {
      return new Promise((resolve, reject) => {
        ApiServer.common.login2(userInfo).then(res => {
          if (res.code == 200) {
            setToken(res.result)
            commit('SET_TOKEN', res.result)
            resolve()
          } else {
            this.$message({
              type: 'error',
              message: res.message,
            })
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetInfo({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        ApiServer.common.getUserInfo().then(res => {
          const user = res.data;
          if (res.data.roleList && res.data.roleList.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', res.data.roleList)
          } else {
            commit('SET_ROLES', ['ROLE_DEFAULT'])
          }
          commit('SET_NAME', user.name)
          commit('SET_TITLE', user.title)
          localStorage.setItem('ms_username', user.name)
          commit('SET_MENULIST', res.data.menuList)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 退出系统
    // LogOut({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     logout(state.token).then(() => {
    //       commit('SET_TOKEN', '')
    //       commit('SET_ROLES', [])
    //       commit('SET_PERMISSIONS', [])
    //       removeToken()
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 前端 登出
    FedLogOut({
      commit
    }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
