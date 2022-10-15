<template>
  <div>
    <el-card>
      <el-upload class="upload-demo"
                 drag
                 action="#"
                 multiple
                 :http-request="httpRequest">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip"
             slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-card>
  </div>
</template>
<script>
import ApiServer from '@/api/apiServer'
export default {
  data() {
    return {
        
    }
  },
  components: {},
  created() {
    
  },
  methods: {
    httpRequest(response, file) {
        console.log("response",response)
        var path = response.data.path
        ApiServer.manager.fileUpload({path: path}).then((res) => {
            if (res.code == 200) {
              this.$message({
                type: 'success',
                message: '重置成功!',
              })
            } else {
              this.$message({
                type: 'info',
                message: '重置密码失败，请联系管理员！',
              })
            }
          })
    }
  },
  mounted() {},
}
</script>