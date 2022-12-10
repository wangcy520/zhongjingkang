import request from '@/utils/request';
import API from './apiConfig';
import axios from "axios/index";


class ApiService {
  constructor() {
    this.common = {
        login: function (params) {
          return axios({
            method: 'post',
            url: `${API.COMMON.login}`,
            data: params,
            transformRequest: [function (data) {
              let ret = '';
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
              }
              return ret;
            }],
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          });
        },
        login2: function (params) {
          return axios({
            method: 'post',
            url: `${API.MANAGER.smsLogin}`,
            data: params,
            transformRequest: [function (data) {
              let ret = '';
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
              }
              return ret;
            }],
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          });
        },
        captchaInit: function () {
          return request.get(API.COMMON.captchaInit);
        },
        logout: function (params) {
          return request.get(API.COMMON.logout, params);
        },
        getUserInfo: function (params) {
          return request.post(API.COMMON.userInfo, params)
        }
      },
      this.select = {
        selectRoleList: function (params) {
          return request.post(API.SELECT.selectRoleList, params)
        }
      },
      this.manager = {
        //用户管理
        getUserList: function (params) {
          return request.post1(API.MANAGER.getUserList, params);
        },
        updateUserInfo: function (params) {
          return request.post1(API.MANAGER.updateUserInfo, params);
        },
        updateUserStatus: function (params) {
          return request.post(API.MANAGER.updateUserStatus, params);
        },
        delUser: function (params) {
          return request.delete(API.MANAGER.delUser, params);
        },
        batchDelUser: function (params) {
          return request.post(API.MANAGER.batchDelUser, params);
        },
        addUser: function (params) {
          return request.post1(API.MANAGER.addUser, params);
        },
        changePwd: function (params) {
          return request.post1(API.MANAGER.changePwd, params);
        },
        resetPwd: function (params) {
          return request.post1(API.MANAGER.resetPwd, params);
        },
        getMenuTree: function (params) {
          return request.post1(API.MANAGER.getMenuTree, params);
        },
        //菜单管理
        getMenuList: function (params) {
          return request.post1(API.MANAGER.getMenuList, params);
        },
        updateMenuInfo: function (params) {
          return request.post1(API.MANAGER.updateMenuInfo, params);
        },
        delMenu: function (params) {
          return request.delete(API.MANAGER.delMenu, params);
        },
        addMenu: function (params) {
          return request.post1(API.MANAGER.addMenu, params);
        },
        //权限管理
        getRoleList: function (params) {
          return request.post1(API.MANAGER.getRoleList, params);
        },
        updateRoleInfo: function (params) {
          return request.post1(API.MANAGER.updateRoleInfo, params);
        },
        delRole: function (params) {
          return request.delete(API.MANAGER.delRole, params);
        },
        addRole: function (params) {
          return request.post1(API.MANAGER.addRole, params);
        },
        addMean: function (params) {
          return request.post1(API.MANAGER.addMean, params);
        },
        //app管理
        getAppList: function (params) {
          return request.post1(API.MANAGER.getAppList, params);
        },
        delApp: function (params) {
          return request.delete(API.MANAGER.delApp, params);
        },
        updateAppInfo: function (params) {
          return request.post1(API.MANAGER.updateAppInfo, params);
        },
        addApp: function (params) {
          return request.post1(API.MANAGER.addApp, params);
        },
        //文件管理
        fileUpload: function (params) {
          return request.post1(API.MANAGER.fileUpload, params);
        },
        fileDownload: function (params) {
          return request.get(API.MANAGER.fileDownload, params);
        },
        //医生管理
        getDoctorList: function (params) {
          return request.post1(API.MANAGER.getDoctorList, params);
        },
        delDoctor: function (params) {
          return request.delete(API.MANAGER.delDoctor, params);
        },
        updateDoctorInfo: function (params) {
          return request.post1(API.MANAGER.updateDoctorInfo, params);
        },
        addDoctor: function (params) {
          return request.post1(API.MANAGER.addDoctor, params);
        },
        getAllHospital: function (params) {
          return request.post1(API.MANAGER.getAllHospital, params);
        },
        delHospital: function (params) {
          return request.delete(API.MANAGER.delHospital, params);
        },
        updateHospitalInfo: function (params) {
          return request.post1(API.MANAGER.updateHospitalInfo, params);
        },
        addHospital: function (params) {
          return request.post1(API.MANAGER.addHospital, params);
        },
        //用户信息
        getUserInfoList: function (params) {
          return request.post1(API.MANAGER.getUserInfoList, params);
        },
        saveUser: function (params) {
          return request.post1(API.MANAGER.saveUser, params);
        },
        //设备管理
        getEquipmentList: function (params) {
          return request.post1(API.MANAGER.getEquipmentList, params)
        },
        addEquipment: function (params) {
          return request.post1(API.MANAGER.addEquipment, params)
        },
        updateEquipment: function (params) {
          return request.post1(API.MANAGER.updateEquipment, params)
        },
        //购买管理
        buyTimes: function (params) {
          return request.post1(API.MANAGER.buyTimes, params);
        },
        getByOrderId: function (params) {
          return request.get(API.MANAGER.getByOrderId, params)
        },
        getbuyList: function (params) {
          return request.post1(API.MANAGER.getbuyList, params);
        },
        buyTimes: function (params) {
          return request.post1(API.MANAGER.buyTimes, params);
        },
        postModify: function (params) {
          return request.post1(API.MANAGER.postModify, params);
        },
        detail: function (params) {
          return request.get(API.MANAGER.detail, params)
        },
        //医院管理
        getHospitalList: function (params) {
          return request.post1(API.MANAGER.getHospitalList, params);
        },
        getValidSms: function (params) {
          return request.post(API.MANAGER.getValidSms, params);
        },
        smsLogin: function (params) {
          return request.post(API.MANAGER.smsLogin, params);
        },
      }
  }
}

export default new ApiService();
