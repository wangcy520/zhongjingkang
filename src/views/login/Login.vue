<template>
  <div class="login-wrap">
    <el-card class="ms-login"
             :body-style="{padding : '0px' }">
      <el-row>
        <el-col :span="12">
          <div class="login-left"></div>
        </el-col>
        <el-col :span="12">
          <p class="ms-title">账号密码登录</p>
          <div style="text-align: center;margin-top: 30px">
            <div style="font-size: 8px">账号类型&nbsp;&nbsp;&nbsp;&nbsp;
              <el-radio v-model="type"
                        label="1">视光中心</el-radio>
              <el-radio v-model="type"
                        label="2">众晶康</el-radio>
            </div>
          </div>
          <el-form :model="loginForm"
                   :rules="rules"
                   ref="login"
                   label-width="0px"
                   class="ms-content">
            <el-form-item prop="username">
              <el-input v-model="loginForm.username"
                        placeholder="username">
                <template slot="prepend">
                  <i class="el-icon-user"></i>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password"
                        placeholder="password"
                        v-model="loginForm.password"
                        @keyup.enter.native="submitForm()">
                <template slot="prepend">
                  <i class="el-icon-lock"></i>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="loginForm.code"
                        placeholder="验证码"
                        prefix-icon="lj-icon-yanzhengma"
                        autocomplete="off"
                        autocapitalize="off"
                        spellcheck="false"
                        maxlength="4"
                        @keyup.enter.native="submitForm"
                        style="float: left; width: 122px;"></el-input>
              <div class="captcha_code">
                <img :src="captchaImg"
                     ref="code"
                     @click="getCaptchaInit()"
                     style="margin-left: 65px;width: 100px">
              </div>
              <el-checkbox v-model="checked">记住密码</el-checkbox>
            </el-form-item>
            <div class="login-btn">
              <el-button type="primary"
                         @click="submitForm()">登录</el-button>
            </div>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import ApiServer from '@/api/apiServer'
import CryptoJS from 'crypto-js'
export default {
  name: 'login',
  data() {
    return {
      key: 'aaaaaa',
      checked: false,
      title: '众晶康用户管理',
      captchaImg: '',
      type: '1',
      loginForm: {
        username: '',
        password: '',
        captchaId: '',
        code: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
      redirect: undefined,
    }
  },
  methods: {
    setCookie(c_name, c_pwd, exdate) {
      console.log('setCookie')
      var exdate = new Date()
      console.log(c_name, c_pwd)
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdate)
      document.cookie =
        'mobile=' + c_name + ';path=/;expires=' + exdate.toGMTString()
      document.cookie =
        'password=' + c_pwd + ';path=/;expires=' + exdate.toGMTString()
    },
    getCookie() {
      if (document.cookie.length > 0) {
        this.checked = true
        var arr = document.cookie.split(';')
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split('=')
          if (arr2[0] == 'mobile') {
            this.loginForm.username = arr2[1]
          } else if (arr2[0] == ' password') {
            console.log('password')
            let bytes = CryptoJS.AES.decrypt(arr2[1], this.key)
            let originalText = bytes.toString(CryptoJS.enc.Utf8)
            let pwd = Base64.decode(originalText)
            console.log('pwd', pwd)
            this.loginForm.password = pwd
          }
        }
      }
    },
    clearCookie() {
      this.setCookie('', '', -1)
    },
    submitForm() {
      this.$refs.login.validate((valid) => {
        if (valid) {
          this.checkedPwd(this.loginForm.username, this.loginForm.password)
          this.$store
            .dispatch('Login', this.loginForm)
            .then((res) => {
              this.$router.push({ path: this.redirect || '/' })
              this.$message.success('进入成功')
            })
            .catch(() => {})
        } else {
          this.$message.error('请输入账号和密码')
        }
      })
    },
    getCaptchaInit() {
      ApiServer.common.captchaInit().then((res) => {
        this.loginForm.captchaId = res.message
        this.captchaImg = res.data
      })
    },
    checkedPwd(username, pwd) {
      console.log('进入', this.checked)
      if (this.checked) {
        let base64Pwd = Base64.encode(pwd)
        let cryptoJsPwd = CryptoJS.AES.encrypt(base64Pwd, this.key).toString()
        this.setCookie(username, cryptoJsPwd, 7)
      } else {
        this.clearCookie()
      }
    },
  },
  mounted() {
    this.getCookie()
  },
  created() {
    this.getCaptchaInit()
  },
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  /* background-image: url(../../assets/img/login-bg.jpg); */
  background-size: 100%;
}
.login-left {
  position: relative;
  background-color: rgb(247, 242, 242);
  height: 400px;
  width: 100%;
}

.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #409eff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 700px;
  height: 400px;
  margin: -190px 0 0 -350px;
  border-radius: 5px;
  /* background: rgba(255, 255, 255, 0.3); */
  /* background: #ddd; */
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
.el-input__inner {
  height: 36px !important;
}
</style>
