<template>
  <div>
    <el-card>
      <el-form :inline="true"
               :model="queryForm"
               class="demo-form-inline">
        <el-form-item prop="doctorName"
                      label="训练师">
          <el-input type="text"
                    placeholder="请输入训练师名称"
                    v-model="queryForm.doctorName"></el-input>
        </el-form-item>
        <el-form-item prop="visualCenter"
                      label="视光中心">
          <el-select v-model="queryForm.visualCenter"
                     placeholder="请选择视光中心">
            <el-option v-for="item in nameList"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="status"
                      label='当前状态'>
          <el-select v-model="queryForm.status">
            <el-option v-for="item in statusList"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间"
                      prop="date">
          <el-date-picker v-model="queryForm.date"
                          type="datetime"
                          placeholder="选择日期时间"
                          value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
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
                ref="multipleTable">
        <el-table-column type="selection"
                         width="55">
        </el-table-column>
        <el-table-column fixed
                         prop="name"
                         label="医生名"
                         width="100">
        </el-table-column>
        <el-table-column prop="code"
                         label="编码"
                         width="60">
        </el-table-column>
        <el-table-column prop="hospitalId"
                         label="医生ID"
                         width="80">
        </el-table-column>
        <el-table-column prop="phone"
                         label="手机号"
                         width="150">
        </el-table-column>
        <el-table-column prop="type"
                         label="类型"
                         width="150">
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
            <el-tag :type="scope.row.status == '0' ? 'primary' : 'success'"
                    disable-transitions>{{scope.row.status == '1' ? '已启动' : '已禁用'}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column fixed="right"
                         label="操作"
                         width="370">
          <template slot-scope="scope">
            <el-button @click="enableHandle(scope.row)"
                       type="warning"
                       size="small"
                       :icon="scope.row.status == '1' ? 'el-icon-video-pause' : 'el-icon-video-play'">{{scope.row.status == 1 ? '停止' : '启动'}}</el-button>
            <el-button @click="editHandle(scope.row)"
                       type="primary"
                       size="small"
                       icon="el-icon-edit">编辑</el-button>
            <el-button @click="delHandle(scope.row)"
                       type="danger"
                       size="small"
                       icon="el-icon-delete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="queryForm.pageNum"
                       :page-sizes="[10, 50, 100, 200]"
                       :page-size="queryForm.pageSize"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="tableTotals">
        </el-pagination>
      </div>
    </el-card>
    <div>
      <el-dialog :title="this.editTitle"
                 :visible.sync="doctorInfoDialog"
                 @close="cancel('doctorForm')">
        <el-form ref="doctorForm"
                 :model="doctorForm"
                 :rules="rules"
                 label-width="80px"
                 style="margin-right: 50px;">
          <el-form-item label="医生"
                        prop="name">
            <el-input type="text"
                      placeholder="请输入医生名"
                      v-model="doctorForm.name"
                      style="width=250px"></el-input>
          </el-form-item>
          <el-form-item label="医生编码"
                        prop="code">
            <el-input type="text"
                      placeholder="请输入医生编码"
                      v-model="doctorForm.code"
                      style="width=250px"></el-input>
          </el-form-item>
          <el-form-item label="所属医院"
                        prop="hospitalId">
            <el-select v-model="doctorForm.hospitalId"
                       placeholder="请选择">
              <el-option v-for="item in hospitalList"
                         :key="item.id"
                         :label="item.name"
                         :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="医生类型"
                        prop="type">
            <el-select v-model="doctorForm.type"
                       placeholder="请选择">
              <el-option v-for="item in typeList"
                         :key="item"
                         :label="item"
                         :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="电话"
                        prop="phone">
            <el-input type="text"
                      placeholder="请输入电话号码"
                      v-model="doctorForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="医生状态"
                        prop="status">
            <el-switch style="display: block"
                       v-model="doctorForm.status"
                       active-color="#13ce66"
                       inactive-color="#ff4949"
                       active-text="启用"
                       inactive-text="禁用"
                       :active-value="1"
                       :inactive-value="0">
            </el-switch>
          </el-form-item>
          <el-form-item>
            <el-upload class="upload-demo"
                       :action="url"
                       :on-change="handleChange"
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
          <el-button @click="cancel('doctorForm')">取 消</el-button>
          <el-button type="primary"
                     @click="submitDoctorInfo('doctorForm')"
                     :disabled="buttonDisabled">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import ApiServer from '@/api/apiServer'
import { getToken } from '@/utils/auth'
export default {
  data() {
    return {
      buttonDisabled: false,
      loading: false,
      url: process.env.API_ROOT + 'file/upload',
      myHeaders: { accessToken: getToken() },
      file: '',
      fileList: [],
      editTitle: '',
      isAdd: false,
      changePwdDialog: false,
      doctorInfoDialog: false,
      tableData: [],
      nameList: [],
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
      date: '',
      queryForm: {
        startDate: '',
        endDate: '',
        doctorName: null,
        status: null,
        pageParams: {
          pageNum: 1,
          pageSize: 10,
        },
      },
      doctorForm: {
        name: '',
        hospitalId: '',
        status: 1,
        code: '',
        phone: '',
        type: '',
      },
      roleList: [],
      rules: {
        name: [{ required: true, message: '请输入医生名', trigger: 'blur' }],
        phone: [
          {
            required: true,
            message: '请输入电话号码',
            validator: this.commonJS.checkPhone,
            trigger: 'blur',
          },
        ],
      },
      tableTotals: 1,
      hospitalList: [],
      typeList: ['实习医生', '主治医生', '主任医生'],
    }
  },
  components: {},
  created() {
    this.getTableData()
    this.getHospitalList()
  },
  methods: {
    getHospitalList() {
      ApiServer.manager.getHospitalList(this.queryForm).then((res) => {
        if (res.code == 200) {
          this.hospitalList = res.data.list
        }
      })
    },
    handleRemove(file, fileList) {
      this.appForm.imageId = ''
    },
    handleChange() {
      console.log('handleChange')
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.queryForm.pageSize = val
      //   let pageMax = Math.ceil(this.tableTotals / val)
      console.log(this.queryForm.pageParams.pageNum, this.tableTotals)
      if (this.queryForm.pageParams.pageNum * val > this.tableTotals) return
      this.getTableData()
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
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
          ApiServer.manager.updateDoctorInfo(row).then((res) => {
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
      this.isAdd = false
      this.buttonDisabled = false
      this.doctorInfoDialog = true
      row.status = Number(row.status)
      this.editTitle = '编辑医生'
      row.status = Number(row.status)
      this.$nextTick(() => {
        this.doctorForm = JSON.parse(JSON.stringify(row))
      })
    },
    addHandle() {
      this.isAdd = true
      this.buttonDisabled = false
      this.doctorInfoDialog = true
      this.editTitle = '新增医生'
      ApiServer.select.selectRoleList().then((res) => {
        if (res.code == 200) {
          this.roleList = res.data
        }
      })
    },
    delHandle(row) {
      this.$confirm('此操作将永久删除该医生, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          ApiServer.manager.delDoctor({ id: row.id }).then((res) => {
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
      this.$refs[form].resetFields()
      this.doctorInfoDialog = false
    },
    submitDoctorInfo(form) {
      this.buttonDisabled = true
      this.$refs.doctorForm.validate((valid) => {
        if (valid) {
          var requestAddr =
            this.isAdd == false ? 'updateDoctorInfo' : 'addDoctor'
          ApiServer.manager[requestAddr](this.doctorForm).then((res) => {
            if (res.code == 200) {
              this.doctorInfoDialog = false
              this.$refs[form].resetFields()
              this.doctorForm.roleIds = []
              this.getTableData()
            }
          })
        }
      })
    },
    batchDel() {
      this.DelIdList = []
      if (this.$refs.multipleTable.selection.length > 0) {
        this.$confirm('此操作将永久删除该医生, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            this.$refs.multipleTable.selection.forEach((item) => {
              this.DelIdList.push(item.id)
            })
            console.log(this.DelIdList)
            ApiServer.manager.batchDelDoctor(this.DelIdList).then((res) => {
              if (res.code == 200) {
                this.$message({
                  type: 'success',
                  message: '删除成功!',
                })
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
      if (this.date != '') {
        this.queryForm.startDate = this.date[0]
        this.queryForm.endDate = this.date[1]
      }
      ApiServer.manager.getDoctorList(this.queryForm).then((res) => {
        if (res.code == 200) {
          this.tableData = res.data.list
          this.tableTotals = Number(res.data.total)
        }
        this.loading = false
      })
    },
    handleAvatarSuccess(res, file) {
      this.doctorForm.documentId = res.data.id
    },
  },
  mounted() {},
}
</script>