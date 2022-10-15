<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn"
         @click="collapseChage">
      <i v-if="!collapse"
         class="el-icon-s-fold"></i>
      <i v-else
         class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">众晶康用户管理</div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 全屏显示 -->
        <div class="btn-fullscreen"
             @click="handleFullScreen">
          <el-tooltip effect="dark"
                      :content="fullscreen?`取消全屏`:`全屏`"
                      placement="bottom">
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <!-- 消息中心 -->
        <div class="btn-bell">
          <el-tooltip effect="dark"
                      :content="message?`有${message}条未读消息`:`消息中心`"
                      placement="bottom">
            <router-link to="/tabs">
              <i class="el-icon-bell"></i>
            </router-link>
          </el-tooltip>
          <span class="btn-bell-badge"
                v-if="message"></span>
        </div>
        <!-- 用户头像 -->
        <div class="user-avator">
          <!-- <img src="../../assets/img/img.jpg" /> -->
          <i class="el-icon-user"></i>
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name"
                     trigger="click"
                     @command="handleCommand">
          <span class="el-dropdown-link">
            {{username}}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item divided
                              command="loginout">退出登录</el-dropdown-item>
            <el-dropdown-item divided
                              command="changePwd">修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div>
        <el-dialog title="修改用户密码"
                   :visible.sync="changePwdDialog"
                   @close="cancel('changePwdForm')">
          <el-form class="user-account-key"
                   ref="changePwdForm"
                   :model="changePwdForm"
                   :rules="changePwdRules"
                   label-width="100px">
            <el-form-item label="原密码"
                          prop="oldPassword">
              <el-input type="password"
                        placeholder="请输入原密码"
                        v-model="changePwdForm.oldPassword"></el-input>
            </el-form-item>
            <el-form-item label="新密码"
                          prop="newPassword">
              <el-input type="password"
                        placeholder="请设置新密码"
                        v-model="changePwdForm.newPassword"></el-input>
            </el-form-item>
            <el-form-item label="确认密码"
                          prop="qrpassword">
              <el-input type="password"
                        placeholder="请确认新密码"
                        v-model="changePwdForm.qrpassword"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"
                         @click="onSubmit('changePwdForm')">修改</el-button>
              <el-button @click="$refs['changePwdForm'].resetFields()">重置</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import bus from '../common/bus'
import ApiServer from '@/api/apiServer'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { mapGetters } from 'vuex'
export default {
  data() {
    let validateNewPassword = (rule, value, callback) => {
      if (value === this.changePwdForm.oldPassword) {
        callback(new Error('新密码不能与原密码相同!'))
      } else {
        callback()
      }
    }
    //此处即表单发送之前验证  验证新密码与再次确认
    let validateNewPassword2 = (rule, value, callback) => {
      if (value !== this.changePwdForm.newPassword) {
        callback(new Error('与新密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      collapse: false,
      fullscreen: false,
      message: 2,
      changePwdDialog: false,
      changePwdForm: {
        id: '',
        oldPassword: '',
        newPassword: '',
        qrpassword: '',
      },
      changePwdRules: {
        oldPassword: [
          {
            required: true,
            message: '请输入原密码',
            trigger: 'blur',
          },
        ],
        newPassword: [
          {
            required: true,
            message: '请设置新密码',
            trigger: 'blur',
          },
          {
            validator: validateNewPassword,
            trigger: 'blur',
          },
        ],
        qrpassword: [
          {
            required: true,
            message: '请确认新密码',
            trigger: 'blur',
          },
          {
            validator: validateNewPassword2,
            trigger: 'blur',
          },
        ],
      },
    }
  },
  computed: {
    ...mapGetters({
      userName: 'name',
    }),
    username() {
      let username = localStorage.getItem('ms_username')
      return username ? username : this.userName
    },
  },
  methods: {
    onSubmit(changePwdForm) {
      this.$refs.changePwdForm.validate((valid) => {
        if (valid) {
          ApiServer.manager.changePwd(this.changePwdForm).then((res) => {
            if (res.code == 200) {
              this.$refs[changePwdForm].resetFields()
              this.changePwdDialog = false
            }
          })
        }
      })
    },
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if (command == 'loginout') {
        // localStorage.removeItem('ms_username')
        removeToken()
        localStorage.clear()
        this.$router.push('/login')
        window.location.reload()
      } else if (command == 'changePwd') {
        this.changePwdDialog = true
      }
    },
    // 侧边栏折叠
    collapseChage() {
      this.collapse = !this.collapse
      bus.$emit('collapse', this.collapse)
    },
    // 全屏事件
    handleFullScreen() {
      let element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    },
  },
  mounted() {
    if (document.body.clientWidth < 1500) {
      this.collapseChage()
    }
  },
}
</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #409eff;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 15px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #409eff;
}
.btn-bell .el-icon-bell {
  color: #409eff;
}
.user-name {
  margin-left: 10px;
}
.user-avator {
  margin-left: 20px;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-link {
  color: #409eff;
  cursor: pointer;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
