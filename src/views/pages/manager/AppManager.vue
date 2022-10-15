<template>
  <div>
    <el-card>
      <el-form :inline="true"
               :model="queryForm"
               class="demo-form-inline">
        <!-- <el-button @click="batchDel()"
                   icon="el-icon-delete"
                   type="danger">批量删除</el-button> -->
        <el-form-item prop="name"
                      label="项目查询">
          <el-input type="text"
                    placeholder="请输入项目名"
                    v-model="queryForm.name"></el-input>
        </el-form-item>
        <el-form-item prop="status"
                      label="当前状态">
          <el-select v-model="queryForm.status">
            <el-option v-for="item in statusList"
                       :key="item.code"
                       :label="item.name"
                       :value="item.code">
            </el-option>
          </el-select>
        </el-form-item>
        <el-button @click="addHandle()"
                   icon="el-icon-circle-plus-outline"
                   style="color: #409EFF"
                   round>新增</el-button>
        <el-button @click="getTableData()"
                   icon="el-icon-search"
                   style="color: #409EFF"
                   round>查询</el-button>
      </el-form>
    </el-card>
    <el-card style="">
      <el-table :data="tableData"
                style="width: 100%"
                v-loading="loading"
                ref="multipleTable"
                row-key="id"
                :tree-props="{children: 'childrenList', hasChildren: 'hasChildren'}">
        <el-table-column type="selection"
                         width="55">
        </el-table-column>
        <el-table-column fixed
                         prop="name"
                         label="项目"
                         width="200">
        </el-table-column>
        <el-table-column prop="code"
                         label="编码"
                         width="60">
        </el-table-column>
        <el-table-column prop="path"
                         label="路径"
                         width="80">
        </el-table-column>
        <el-table-column label="图片"
                         width="150">
          <template slot-scope="scope">
            <img :src="downloadUrl + scope.row.imageUrl"
                 style="heigth: 50px;width: 50px" />
          </template>
        </el-table-column>
        <el-table-column prop="description"
                         label="描述"
                         width="250">
        </el-table-column>
        <el-table-column prop="operation"
                         label="操作方法"
                         width="250">
        </el-table-column>
        <el-table-column prop="createdBy"
                         label="创建者"
                         width="80">
        </el-table-column>
        <el-table-column prop="createdTime"
                         label="创建时间"
                         width="150">
        </el-table-column>
        <el-table-column label="状态"
                         width="80">
          <template slot-scope="scope">
            <el-switch :value="scope.row.status"
                       :active-value="1"
                       :inactive-value="0"
                       @change="enableHandle(scope.row)"></el-switch>
          </template>
        </el-table-column>
        <el-table-column fixed="right"
                         label="操作"
                         width="500">
          <template slot-scope="scope">
            <el-button @click="addChildren(scope.row)"
                       size="small"
                       icon="el-icon-place"
                       style="color:#409eff">新增下级</el-button>
            <el-button @click="previewImage(scope.row)"
                       size="small"
                       icon="el-icon-picture"
                       v-if="scope.row.imageId != null"
                       style="color:#409eff">预览</el-button>
            <el-link :href="downloadUrl + scope.row.documentUrl"
                     id="downloadFile"
                     v-if="scope.row.documentId != null">
              <el-button size="small"
                         icon="el-icon-download"
                         style="color:#409eff">下载</el-button>
            </el-link>
            <el-button @click="editHandle(scope.row)"
                       size="small"
                       icon="el-icon-edit"
                       style="color:#409eff">编辑</el-button>
            <el-button @click="delHandle(scope.row)"
                       size="small"
                       icon="el-icon-delete"
                       style="color: red">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div>
      <el-dialog :title="this.editTitle"
                 :visible.sync="appInfoDialog"
                 @close="cancel('appForm')">
        <el-form ref="appForm"
                 :model="appForm"
                 :rules="rules"
                 label-width="80px"
                 style="margin-right: 50px;">
          <el-form-item label="上级APP"
                        prop="parentApp"
                        v-show="this.isAdd == 1">
            <el-input type="text"
                      v-model="parentApp"
                      style="width=250px"
                      disabled></el-input>
          </el-form-item>
          <el-form-item label="APP"
                        prop="name">
            <el-input type="text"
                      placeholder="请输入APP名称"
                      v-model="appForm.name"
                      style="width=250px"></el-input>
          </el-form-item>
          <el-form-item label="APP编码"
                        prop="code">
            <el-input type="text"
                      placeholder="请输入APP编码"
                      v-model="appForm.code"
                      style="width=250px"></el-input>
          </el-form-item>
          <el-form-item label="操作方法"
                        prop="operation">
            <el-input type="text"
                      placeholder="请输入操作方法"
                      v-model="appForm.operation"></el-input>
          </el-form-item>

          <!-- <el-form-item label="默认参数"
                        prop="optimset">
            <el-input type="textarea"
                      placeholder="请输入默认参数"
                      :rows="2"
                      v-model="appForm.optimset"></el-input>
          </el-form-item> -->
          <el-row>
            <el-col :span="12">
              <el-form-item label="亮度"
                            prop="brightness">
                <el-input type="number"
                          v-model="appForm.optimset.brightness"
                          min="0"></el-input>
              </el-form-item>
              <el-form-item label="测温"
                            prop="temperature">
                <el-input type="number"
                          v-model="appForm.optimset.temperature"
                          min="0"></el-input>
              </el-form-item>
              <el-form-item label="阀值"
                            prop="threshold">
                <el-input type="number"
                          v-model="appForm.optimset.threshold"
                          min="0"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="训练时间"
                            prop="trainingTime">
                <el-input type="number"
                          v-model="appForm.optimset.trainingTime"
                          min="0"></el-input>
              </el-form-item>
              <el-form-item label="用眼模式"
                            prop="eyes">
                <el-input type="number"
                          v-model="appForm.optimset.eyes"
                          min="0"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="描述"
                        prop="description">
            <el-input type="text"
                      placeholder="请输入描述"
                      v-model="appForm.description"></el-input>
          </el-form-item>
          <el-form-item label="菜单状态"
                        prop="status">
            <el-switch style="display: block"
                       v-model="appForm.status"
                       active-color="#13ce66"
                       inactive-color="#ff4949"
                       active-text="启用"
                       inactive-text="禁用"
                       :active-value="1"
                       :inactive-value="0">
            </el-switch>
          </el-form-item>
          <el-form-item label="图片">
            <el-upload class="upload-demo"
                       :action="uploadUrl"
                       ref="refImage"
                       :on-remove="imageHandleRemove"
                       :file-list="imageList"
                       :headers="myHeaders"
                       :multiple="false"
                       name='multipartFile'
                       :on-success="imageHandleAvatarSuccess"
                       list-type="picture">
              <el-button size="small"
                         type="primary">点击上传</el-button>
              <div slot="tip"
                   class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="文件">
            <el-upload class="upload-demo"
                       :action="uploadUrl"
                       ref="refFile"
                       :on-remove="fileHandleRemove"
                       :file-list="fileList"
                       :headers="myHeaders"
                       :multiple="false"
                       name='multipartFile'
                       :on-success="handleAvatarSuccess">
              <el-button size="small"
                         type="primary">点击上传</el-button>
              <!-- <div slot="tip"
                   class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
            </el-upload>
          </el-form-item>
        </el-form>
        <span slot="footer"
              class="dialog-footer">
          <el-button @click="cancel('appForm')">取 消</el-button>
          <el-button type="primary"
                     @click="submitAppInfo('appForm')"
                     :disabled="buttonDisabled">确 定</el-button>
        </span>
      </el-dialog>
      <el-image-viewer :url-list="[imgUrl]"
                       fit="fill"
                       v-if="showViewer"
                       :on-close="closeViewer"></el-image-viewer>
    </div>
  </div>
</template>
<script>
import ApiServer from '@/api/apiServer'
import { getToken } from '@/utils/auth'
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
export default {
  data() {
    return {
      statusList: [
        {
          name: '全部',
          id: null,
        },
        {
          name: '正常运行',
          code: '0',
        },
        {
          name: '设备故障',
          code: '1',
        },
      ],
      parentApp: '',
      isAdd: 0, //0新增1新增下级2编辑
      showViewer: false,
      imgUrl: '',
      downloadUrl: process.env.API_ROOT,
      uploadUrl: process.env.API_ROOT + 'file/upload',
      test: '',
      buttonDisabled: false,
      refFile: '',
      refImage: '',
      loading: false,
      myHeaders: { accessToken: getToken() },
      file: '',
      fileList: [],
      imageList: [],
      editTitle: '',
      changePwdDialog: false,
      appInfoDialog: false,
      tableData: [],
      date: '',
      queryForm: {
        appname: '',
        startDate: '',
        endDate: '',
        pageParams: {
          pageNum: 1,
          pageSize: 10,
        },
      },
      appForm: {
        name: '',
        code: '',
        operation: '',
        optimset: {
          brightness: 5,
          temperature: 5,
          threshold: 5,
          trainingTime: 5,
          eyes: 5,
        },
        documentId: '',
        imageId: '',
        status: 1,
        parentId: 0,
      },
      roleList: [],
      rules: {
        name: [{ required: true, message: '请输入APP名', trigger: 'blur' }],
        operation: [
          { required: true, message: '请输入操作方法', trigger: 'blur' },
        ],
      },
      tableTotals: 1,
    }
  },
  components: { ElImageViewer },
  created() {
    this.getTableData()
  },
  methods: {
    addChildren(row) {
      this.isAdd = 1
      this.editTitle = '新增【' + row.name + '】的下级APP'
      this.parentApp = row.name
      this.appForm.parentId = row.id
      this.buttonDisabled = false
      this.appInfoDialog = true
    },
    closeViewer() {
      this.showViewer = false
    },
    handleChange() {
      console.log('handleChange')
    },
    submitUpload() {
      const fd = new FormData()
      fd.append('filename', this.file)
      //   this.$refs.upload.submit()
      ApiServer.manager.fileUpload().then((res) => {
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
    },
    getFile(item) {
      console.log('getFile', item.file)
      this.file = item.file
    },
    fileHandleRemove(file, fileList) {
      this.appForm.documentId = ''
    },
    imageHandleRemove(file, fileList) {
      this.appForm.imageId = ''
    },
    handlePreview(file) {
      console.log(file)
    },
    handleSizeChange(val) {
      this.queryForm.pageSize = val
      if (this.queryForm.pageParams.pageNum * val > this.tableTotals) return
      this.getTableData()
    },
    handleCurrentChange(val) {
      this.queryForm.pageParams.pageNum = val
      this.getTableData()
    },
    enableHandle(row) {
      this.$confirm(
        row.status == '1' ? '确定要停用？' : '确认要启用？',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      )
        .then(() => {
          row.status = row.status == '1' ? '0' : '1'
          ApiServer.manager.updateAppInfo(row).then((res) => {
            if (res.code == 200) {
              this.$message({
                type: 'success',
                message: row.status == '1' ? '启动成功' : '停用成功',
              })
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作',
          })
        })
    },
    editHandle(row) {
      this.isAdd = 2
      this.buttonDisabled = false
      this.appInfoDialog = true
      this.editTitle = '编辑APP'
      row.status = Number(row.status)
      if (row.imageId && row.imageUrl)
        this.imageList = [
          {
            name: row.imageUrl.split('=')[1],
            url: this.downloadUrl + row.imageUrl,
          },
        ]
      if (row.documentId && row.documentUrl)
        this.fileList = [
          {
            name: row.documentUrl.split('=')[1],
            url: this.downloadUrl + row.documentUrl,
          },
        ]
      this.$nextTick(() => {
        this.appForm = JSON.parse(JSON.stringify(row))
        this.appForm.optimset = JSON.parse(this.appForm.optimset)
      })
    },
    addHandle() {
      this.isAdd = 0
      this.buttonDisabled = false
      this.appInfoDialog = true
      this.editTitle = '新增APP'
      ApiServer.select.selectRoleList().then((res) => {
        if (res.code == 200) {
          this.roleList = res.data
        }
      })
    },
    delHandle(row) {
      this.$confirm('此操作将永久删除该APP, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          ApiServer.manager.delApp({ id: row.id }).then((res) => {
            if (res.code == 200) {
              this.$message({
                type: 'success',
                message: '删除成功!',
              })
              this.getTableData()
            } else {
              this.$message({
                type: 'info',
                message: '删除失败，请联系管理员！',
              })
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    },
    cancel(form) {
      this.imageList = []
      this.fileList = []
      this.$refs[form].resetFields()
      this.appInfoDialog = false
    },
    submitAppInfo(form) {
      this.buttonDisabled = true
      this.$refs.appForm.validate((valid) => {
        if (valid) {
          var data = JSON.parse(JSON.stringify(this.appForm))
          data.optimset = JSON.stringify(data.optimset).replace('/[]/g', '')
          console.log('aaa', data.optimset)
          var requestAddr = this.isAdd == 2 ? 'updateAppInfo' : 'addApp'
          ApiServer.manager[requestAddr](data).then((res) => {
            if (res.code == 200) {
              this.appInfoDialog = false
              this.$refs[form].resetFields()
              this.appForm.roleIds = []
              this.getTableData()
            }
          })
        }
      })
    },
    batchDel() {
      this.DelIdList = []
      if (this.$refs.multipleTable.selection.length > 0) {
        this.$confirm('此操作将永久删除该APP, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            this.$refs.multipleTable.selection.forEach((item) => {
              this.DelIdList.push(item.id)
            })
            console.log(this.DelIdList)
            ApiServer.manager.batchDelApp(this.DelIdList).then((res) => {
              if (res.code == 200) {
                this.$message({
                  type: 'success',
                  message: '删除成功!',
                })
                this.getTableData()
              } else {
                this.$message({
                  type: 'info',
                  message: '删除失败，请联系管理员！',
                })
              }
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除',
            })
          })
      }
    },
    getTableData() {
      this.loading = true
      ApiServer.manager.getAppList(this.queryForm).then((res) => {
        if (res.code == 200) {
          this.tableData = res.data
          this.tableTotals = Number(res.data.total)
        }
        this.loading = false
      })
    },
    handleAvatarSuccess(res, file) {
      this.appForm.documentId = res.data.id
    },
    imageHandleAvatarSuccess(res, file) {
      this.appForm.imageId = res.data.id
    },
    previewImage(row) {
      this.showViewer = true
      this.imgUrl = this.downloadUrl + row.imageUrl
    },
  },
  mounted() {},
}
</script>