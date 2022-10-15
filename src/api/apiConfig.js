/**
 * http请求地址
 */
const BASE_URL = process.env.API_ROOT,
    // 公共类
    COMMON = {
        captchaInit: BASE_URL + 'captcha/init',
        login: BASE_URL + 'system/user/login',
        userInfo: BASE_URL + 'system/user/getUserInfo'
    },
    SELECT = {
        selectRoleList: BASE_URL + 'system/role/queryAll'
    },
    MANAGER = {
        //用户管理
        getUserList: BASE_URL + 'system/user/queryPage',
        updateUserInfo: BASE_URL + 'system/user/update',
        updateUserStatus: BASE_URL + 'system/updateUserStatus',
        delUser: BASE_URL + 'system/user/delete',
        batchDelUser: BASE_URL + 'system/batchDelUser',
        addUser: BASE_URL + 'system/user/add',
        changePwd: BASE_URL + 'system/user/restPassword',
        resetPwd: BASE_URL + 'system/user/initPassword',
        //菜单管理
        getMenuList: BASE_URL + 'system/menu/queryPage',
        updateMenuInfo: BASE_URL + 'system/menu/update',
        delMenu: BASE_URL + 'system/menu/delete',
        addMenu: BASE_URL + 'system/menu/add',
        getMenuTree: BASE_URL + 'system/menu/queryTree',
        //权限管理
        getRoleList: BASE_URL + 'system/role/queryPage',
        updateRoleInfo: BASE_URL + 'system/role/update',
        delRole: BASE_URL + 'system/role/delete',
        addRole: BASE_URL + 'system/role/add',
        addMean: BASE_URL + 'system/role/addMean',
        //app管理
        getAppList: BASE_URL + 'backend/app/queryPage',
        updateAppInfo: BASE_URL + 'backend/app/update',
        delApp: BASE_URL + 'backend/app/delete',
        addApp: BASE_URL + 'backend/app/add',
        //文件管理
        fileUpload: BASE_URL + 'file/upload',
        fileDownload: BASE_URL + 'file/download',
        //医生管理
        getDoctorList: BASE_URL + 'backend/doctor/queryPage',
        updateDoctorInfo: BASE_URL + 'backend/doctor/update',
        addDoctor: BASE_URL + 'backend/doctor/add',
        delDoctor: BASE_URL + 'backend/doctor/delete',
        //医院管理
        getHospitalList: BASE_URL + 'backend/hospital/queryPage',
        getAllHospital: BASE_URL + 'backend/hospital/queryAll',
        updateHospitalInfo: BASE_URL + 'backend/hospital/update',
        addHospital: BASE_URL + 'backend/hospital/add',
        delHospital: BASE_URL + 'backend/hospital/delete',
        //用户信息
        getUserInfoList: BASE_URL + 'backend/patient/queryPage',
        saveUser: BASE_URL + 'backend/patient/save',
        //设备管理
        getEquipmentList: BASE_URL + 'backend/equipment/queryPage',
        addEquipment: BASE_URL + 'backend/equipment/save',
        updateEquipment: BASE_URL + 'backend/equipment/modify',
        //购买管理
        buyTimes: BASE_URL + 'backend/purchase/buyTimes'
    }
export default {
    COMMON,
    MANAGER,
    SELECT
}
