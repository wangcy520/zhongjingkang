<template>
  <div>
    <el-card>
      <el-form :inline="true" :model="queryForm" class="demo-form-inline">
        <!-- <el-form-item prop="doctorName" label="训练师">
          <el-input type="text" placeholder="请输入训练师名称" v-model="queryForm.name"></el-input>
        </el-form-item>
        <el-form-item prop="visualCenter" label="视光中心">
          <el-select v-model="queryForm.visualCenter" placeholder="请选择视光中心">
            <el-option v-for="item in nameList" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="status" label='当前状态'>
          <el-select v-model="queryForm.status">
            <el-option v-for="item in statusList" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item label="时间周期" prop="date">
          <!-- <el-date-picker v-model="queryForm.date"
                          type="datetime"
                          placeholder="选择日期时间"
                          value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker> -->
          <el-date-picker v-model="date" type="daterange" value-format="yyyy-MM-dd HH:mm:ss"
            range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-button @click="addHandle()" icon="el-icon-circle-plus-outline" style="color: #409EFF" round>新增</el-button>
        <el-button @click="getTableData()" icon="el-icon-search" style="color: #409EFF" round>查询</el-button>
      </el-form>
    </el-card>
    <el-card style="">
      <el-table :data="tableData" style="width: 100%" v-loading="loading" ref="multipleTable">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column fixed prop="name" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="treatmentDays" label="疗程(天)" width="100">
        </el-table-column>
        <el-table-column prop="treatmentCount" label="疗程(次)" width="100">
        </el-table-column>
        <el-table-column prop="daysCount" label="日" width="150">
        </el-table-column>
        <el-table-column prop="weekCount" label="周" width="150">
        </el-table-column>
        <el-table-column prop="mouthCount" label="月" width="80">
        </el-table-column>
        <el-table-column prop="durationCount" label="时间周期" width="150">
        </el-table-column>
        <el-table-column label="状态" width="80">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status == '0' ? 'primary' : 'success'" disable-transitions>{{ scope.row.status ==
                '1' ? '已启动' : '已禁用'
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="370">
          <template slot-scope="scope">
            <el-button @click="enableHandle(scope.row)" type="warning" plain size="small"
              :icon="scope.row.status == '1' ? 'el-icon-video-pause' : 'el-icon-video-play'">{{ scope.row.status == 1 ?
                  '停止' : '启动'
              }}</el-button>
            <el-button @click="editHandle(scope.row)" type="primary" plain size="small" icon="el-icon-edit">编辑
            </el-button>
            <!-- <el-button @click="delHandle(scope.row)" type="primary" plain size="small" icon="el-icon-delete">用户
            </el-button> -->
            <el-button @click="toDetails(scope.row)" type="primary" plain size="small">订单</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="queryForm.pageNum" :page-sizes="[10, 50, 100, 200]" :page-size="queryForm.pageSize"
          layout="total, sizes, prev, pager, next, jumper" :total="tableTotals">
        </el-pagination>
      </div>
    </el-card>
    <div>
      <el-dialog :title="this.editTitle" :visible.sync="doctorInfoDialog" @close="cancel('doctorForm')" width="900px">
        <el-form ref="doctorForm" :model="doctorForm" :rules="rules" label-width="150px" style="margin-right: 50px;"
          :inline="true">
          <el-form-item label="类型" prop="type">
            <el-input type="text" value="视训师" disabled style="width=250px"></el-input>
            </el-select>
          </el-form-item>
          <el-form-item label="视训师识别码" prop="simpleCode">
            <el-input disabled type="text" placeholder="请输入视训师识别码" v-model="doctorForm.simpleCode" style="width=250px">
            </el-input>
          </el-form-item>
          <el-form-item label="医生姓名" prop="name">
            <el-input  type="text" placeholder="请输入医生姓名" v-model="doctorForm.name" style="width=250px"></el-input>
          </el-form-item>
          <el-form-item label="视训师编码" prop="code">
            <el-input disabled type="text" placeholder="请输入视训师编码" v-model="doctorForm.code" style="width=250px"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input type="text" placeholder="请输入手机号" v-model="doctorForm.phone" style="width=250px"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input type="number" placeholder="请输入年龄" v-model="doctorForm.age" style="width=250px"></el-input>
          </el-form-item>
          <el-form-item label="地址" prop="address">
            <el-input type="text" placeholder="请输入地址" v-model="doctorForm.address"></el-input>
          </el-form-item>
          <el-form-item label="学历" prop="education">
            <el-select v-model="doctorForm.education" placeholder="请选择" style="width:200px">
              <el-option label="大专" value="0"></el-option>
              <el-option label="本科" value="1"></el-option>
              <el-option label="研究生" value="2"></el-option>
              <el-option label="博士生" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="建档时间" prop="filingTime">
            <!-- <el-input type="text" placeholder="请输入建档时间" v-model="doctorForm.filingTime"></el-input> -->
            <el-date-picker v-model="doctorForm.filingTime" type="date" value-format="yyyy-MM-dd" style="width:200px">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="身份证号" prop="idCard">
            <el-input type="text" placeholder="请输入身份证号" v-model="doctorForm.idCard"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel('doctorForm')">取 消</el-button>
          <el-button type="primary" @click="submitDoctorInfo('doctorForm')" :disabled="buttonDisabled">确 定</el-button>
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
        startTime: '',
        endTime:'',
        pageParams: {
          pageNum: 1,
          pageSize: 10,
        },
      },
      durationCount:'',
      doctorForm: {
        name: '',
        code: '',
        phone: '',
        simpleCode: '',
        age: 0,
        address: '',
        education: '',
        filingTime: '',
        idCard: ''
      },
      roleList: [],
      rules: {
        name: [{ required: true, message: '请输入医生名', trigger: 'blur' }],
        // type: [{ required: true, message: '请输入类型', trigger: 'blur' }],
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
      console.log(this.date)
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
      console.log(row)
      this.isAdd = false
      this.buttonDisabled = false
      this.doctorInfoDialog = true
      row.status = Number(row.status)
      this.editTitle = '编辑医生'
      row.status = Number(row.status)
      this.doctorForm.simpleCode = 'KE-1'
      this.doctorForm.code = 'SGZX-KE-0001'
      this.$nextTick(() => {
        // this.doctorForm = JSON.parse(JSON.stringify(row))
        this.doctorForm.address = row.address
        this.doctorForm.age = row.age
        this.doctorForm.education = row.education
        this.doctorForm.filingTime = row.filingTime
        this.doctorForm.idCard = row.idCard
        this.doctorForm.name = row.name
        this.doctorForm.phone = row.phone
        this.doctorForm.id = row.id
      })
    },
    addHandle() {
      this.isAdd = true
      this.buttonDisabled = false
      this.doctorInfoDialog = true
      this.editTitle = '新增医生'
      this.doctorForm.simpleCode = '系统生成中'
      this.doctorForm.code = '系统生成中'
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
    toDetails(row) {
      let query = {
        doctorId: row.id
      }
      this.$router.push({ name: '3', query: query })
    },
    cancel(form) {
      this.$refs[form].resetFields()
      this.doctorInfoDialog = false
    },
    submitDoctorInfo(form) {
      this.doctorForm.age = Number(this.doctorForm.age)
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
        this.queryForm.startTime = this.date[0]
        this.queryForm.endTime = this.date[1]
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
  mounted() { },
}
</script>

<style scoped>
/deep/ .el-form-item__label{
  color: #000000;
}
/deep/ .el-dialog__header{
  text-align: center;
}
</style>