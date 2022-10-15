<template>
  <div class="navbar">
    <hamburger id="hamburger-container"
               :is-active="sidebar.opened"
               class="hamburger-container"
               @toggleClick="toggleSideBar" />

    <breadcrumb id="breadcrumb-container"
                class="breadcrumb-container" />

    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <search id="header-search"
                class="right-menu-item" />

        <el-tooltip content="源码地址"
                    effect="dark"
                    placement="bottom">
          <ruo-yi-git id="ruoyi-git"
                      class="right-menu-item hover-effect" />
        </el-tooltip>

        <el-tooltip content="文档地址"
                    effect="dark"
                    placement="bottom">
          <ruo-yi-doc id="ruoyi-doc"
                      class="right-menu-item hover-effect" />
        </el-tooltip>

        <screenfull id="screenfull"
                    class="right-menu-item hover-effect" />

        <el-tooltip content="布局大小"
                    effect="dark"
                    placement="bottom">
          <size-select id="size-select"
                       class="right-menu-item hover-effect" />
        </el-tooltip>

      </template>

      <el-dropdown class="avatar-container right-menu-item hover-effect"
                   trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar"
               class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/user/profile">
            <el-dropdown-item>个人中心</el-dropdown-item>
          </router-link>
          <el-dropdown-item>
            <span @click="setting = true">布局设置</span>
          </el-dropdown-item>
          <el-dropdown-item divided
                            @click.native="logout">
            <span>退出登录</span>
          </el-dropdown-item>
          <el-dropdown-item divided
                            @click.native="changePwd">
            <span>修改密码</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import Search from '@/components/HeaderSearch'
import RuoYiGit from '@/components/RuoYi/Git'
import RuoYiDoc from '@/components/RuoYi/Doc'

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
  components: {
    Breadcrumb,
    Hamburger,
    Screenfull,
    SizeSelect,
    Search,
    RuoYiGit,
    RuoYiDoc,
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar', 'device']),
    setting: {
      get() {
        return this.$store.state.settings.showSettings
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'showSettings',
          value: val,
        })
      },
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      this.$confirm('确定注销并退出系统吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.$store.dispatch('LogOut').then(() => {
          location.reload()
        })
      })
    },
    changePwd() {
      this.changePwdDialog = true
    },
    onSubmit() {
      this.$refs.changePwdForm.validate((valid) => {
        if (valid) {
          ApiServer.manager.changePwd(this.changePwdForm).then((res) => {
            if (res.code == 200) {
              this.changePwdDialog = false
            }
          })
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
