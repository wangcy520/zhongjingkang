<template>
  <div class="login-wrap">
    <el-card class="ms-login" :body-style="{ padding: '0px' }">
      <el-row>
        <el-col :span="12">
          <div class="login-left"></div>
        </el-col>
        <el-col :span="12">
          <p class="ms-title">登录</p>
          <div style="text-align: center;margin-top: 30px">
            <div style="font-size: 8px">
              <el-radio v-model="type" @change="changeCard(true)" label="1">密码登陆</el-radio>
              <el-radio v-model="type" @change="changeCard(false)" label="2">验证码登陆</el-radio>
            </div>
          </div>
          <el-form v-show="showTable" :model="loginForm" :rules="rules" ref="login" label-width="0px" class="ms-content">
            <el-form-item prop="username">
              <el-input v-model="loginForm.username" placeholder="用户名">
                <template slot="prepend">
                  <i class="el-icon-user"></i>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" placeholder="密码" v-model="loginForm.password" @keyup.enter.native="submitForm()">
                <template slot="prepend">
                  <i class="el-icon-lock"></i>
                </template>
              </el-input>
              <div style="text-align: right;font-size: 12px;color: #11a7f3;">找回密码?</div>
            </el-form-item>
            <el-form-item>
              <el-input v-model="loginForm.code" placeholder="验证码" prefix-icon="lj-icon-yanzhengma" autocomplete="off" autocapitalize="off" spellcheck="false" maxlength="4" @keyup.enter.native="submitForm" style="float: left; width: 122px;"></el-input>
              <div class="captcha_code">
                <img :src="captchaImg" ref="code" @click="getCaptchaInit()" style="margin-left: 65px;width: 100px">
              </div>
              <el-checkbox v-model="checked">记住密码</el-checkbox>
            </el-form-item>
            <div class="login-btn">
              <el-button type="primary" @click="submitForm()">登录</el-button>
            </div>
          </el-form>
          <el-form v-show="!showTable" :model="loginForm2" :rules="rules" ref="login2" label-width="0px" class="ms-content">
            <el-form-item prop="phone" :rules="[{ required: true, message: '电话号码格式有误',validator:commonJS.checkPhone,trigger: 'blur'}]">
              <!-- [{ required: true, required: true, message: '电话号码格式有误', validator: this.commonJS.checkPhone, trigger: 'blur' }] -->
              <el-input v-model="loginForm2.phone" placeholder="请输入手机号" @input="getPhone">
                <template slot="prepend">
                  <i class="el-icon-user"></i>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-col :span="12">
                <el-form-item prop="dxCode" :rules="[{ required: true, message: '请输入短信验证码',trigger: 'blur'}]">
                  <el-input style="width: 122px;" placeholder="请输入短信验证码" v-model="loginForm2.dxCode" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-button style="white-space: nowrap;margin-left: 27px" @click="getCode" :disabled="isDisabled" v-if="show">
                    获取短信验证码
                  </el-button>
                  <el-button style="white-space: nowrap;margin-left: 27px" :disabled=true v-else>
                    请{{count}}秒后重试
                  </el-button>
                </el-form-item>
              </el-col>
            </el-form-item>
            <div class=" login-btn">
              <el-button type="primary" @click="submitForm()">登录</el-button>
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
import { setToken } from '@/utils/auth'
export default {
  name: 'login',
  data() {
    return {
      show: true,
      count: '',
      isDisabled: true,
      showTable: true,
      key: 'aaaaaa',
      checked: false,
      title: this.$store.state.user.title,
      captchaImg: '',
      type: '1',
      loginForm: {
        username: '',
        password: '',
        captchaId: '',
        code: '',
        smsCode: ''
      },
      loginForm2: {
        phone: '',
        dxCode: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      redirect: undefined
    }
  },
  methods: {
    getPhone(value) {
      let phoneReg = /^1[3|4|5|7|8][0-9]{9}$/
      if (phoneReg.test(value)) {
        this.isDisabled = false
      } else {
        this.isDisabled = true
      }
    },
    getCode() {
      let params = {
        mobile: this.loginForm2.phone
      }
      ApiServer.manager.getValidSms(params).then(res => {
        if (res.code == 200) {
          this.daojishi()
          this.$message.success('验证码发送成功')
        }
      })
    },
    daojishi() {
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    },
    changeCard(val) {
      this.showTable = val
    },
    setCookie(c_name, c_pwd, exdate) {
      console.log('setCookie')
      var exdate = new Date()
      console.log(c_name, c_pwd)
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdate)
      document.cookie = 'mobile=' + c_name + ';path=/;expires=' + exdate.toGMTString()
      document.cookie = 'password=' + c_pwd + ';path=/;expires=' + exdate.toGMTString()
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
      let that = this
      if (that.showTable == true) {
        that.$refs.login.validate(valid => {
          if (valid) {
            that.checkedPwd(that.loginForm.username, that.loginForm.password)
            that.$store
              .dispatch('Login', that.loginForm)
              .then(res => {
                console.log(that.redirect)
                that.$router.push({ path: that.redirect || '/' })
                that.$message.success('进入成功')
              })
              .catch(() => {})
          } else {
            that.$message.error('请输入账号和密码')
          }
        })
      } else {
        that.$refs.login2.validate(valid => {
          if (valid) {
            let params = {
              mobile: that.loginForm2.phone,
              code: that.loginForm2.dxCode
            }
            that.$store
              .dispatch('Login2', params)
              .then(res => {
                that.$router.push({ path: that.redirect || '/' })
                that.$message.success('进入成功')
              })
              .catch(() => {})
          }
        })
        //   }
        // })
        // that.$refs.login2.validate(valid => {
        //   if (valid) {
        //     let params = {
        //       mobile: that.loginForm2.phone,
        //       code: that.loginForm2.dxCode
        //     }
        //     ApiServer.manager.smsLogin(params).then(res => {
        //       if (res.code == 200) {
        //         // setToken(res.result)
        //         that.$message.success('进入成功')
        //       }
        //     })
        //   }
        // })
      }
    },
    getCaptchaInit() {
      ApiServer.common.captchaInit().then(res => {
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
    }
  },
  mounted() {
    this.getCookie()
  },
  created() {
    this.getCaptchaInit()
  }
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
