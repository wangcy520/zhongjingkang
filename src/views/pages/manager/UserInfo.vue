<template>
  <div>
    <el-card>
      <el-form :inline="true" :model="queryForm" class="demo-form-inline">
        <el-form-item prop="name" label="用户名">
          <el-input type="text" placeholder="请输入用户名名称" v-model="queryForm.name"></el-input>
        </el-form-item>
        <el-form-item prop="visualCenter" label="次/月卡">
          <el-select v-model="queryForm.visualCenter" placeholder="全部/次卡/月卡">
            <el-option v-for="item in nameList" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="name" label="手机号">
          <el-input type="text" placeholder="请输入手机号码" v-model="queryForm.name"></el-input>
        </el-form-item>
        <el-form-item prop="status" label="患者类型">
          <el-select v-model="queryForm.status" placeholder="全部/近视/弱视/斜视">
            <el-option v-for="item in statusList" :key="item.code" :label="item.name" :value="item.code">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="status" label="即将到期">
          <el-select v-model="queryForm.status" placeholder="全部/全部次卡/全部月卡/全部疗程/会员卡">
            <el-option v-for="item in statusList" :key="item.code" :label="item.name" :value="item.code">
            </el-option>
          </el-select>
        </el-form-item>
        <el-button @click="addHandle()" icon="el-icon-circle-plus-outline" style="color: #409EFF" round>新增</el-button>
        <el-button @click="getTableData()" icon="el-icon-search" style="color: #409EFF" round>查询</el-button>
      </el-form>
    </el-card>
    <el-card>
      <el-table :data="tableData" style="width: 100%" v-loading="loading" ref="multipleTable">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="name" label="用户名" width="120" fixed="left">
        </el-table-column>
        <el-table-column prop="code" label="编号" width="120">
        </el-table-column>
        <el-table-column prop="residueCount" width="120" align="center">
          <template slot="header">
            <div>月卡(天)</div>
            <div>全部/已用/剩余</div>
          </template>
          <template slot-scope="scope">
            <span>{{ scope.row.count }}/{{ scope.row.count - scope.row.residueCount }}/{{ scope.row.residueCount }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="" width="140" align="center">
          <template slot="header">
            <div>次卡(天)</div>
            <div>全部/已用/剩余</div>
          </template>
          <template slot-scope="scope">
            <span>{{ scope.row.days }}/{{ scope.row.days - scope.row.residueDays }}/{{ scope.row.residueDays }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="days" label="疗程(天)" width="120" align="center">
          <template slot="header">
            <div>疗程(天)</div>
            <div>全部/已用/剩余</div>
          </template>
          <template slot-scope="scope">
            <span>{{ scope.row.residueCount }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="residueDays" label="疗程(次)" width="120" align="center">
          <template slot="header">
            <div>疗程(天)</div>
            <div>全部/已用/剩余</div>
          </template>
          <template slot-scope="scope">
            <span>{{ scope.row.residueCount }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="类型" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.type == 0 ? '近视' : scope.row.type == 1 ? '弱视' : '斜视' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="120">
          <template slot-scope="scope">
            {{ scope.row.sex == '1' ? '女' : '男' }}
          </template>
        </el-table-column>
        <el-table-column prop="birthday" label="出生年月" width="120">
        </el-table-column>
        <el-table-column prop="" label="年龄" width="120">
          <template slot-scope="scope">
            <p v-if="scope.row.birthday != null">{{ newYear - scope.row.birthday.split('-')[0] + 1 }}岁</p>
            <p v-else> </p>
          </template>
        </el-table-column>
        <el-table-column prop="phone" label="手机" width="140">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="280">
          <template slot-scope="scope">
            <el-button @click="open(scope.row)" icon="el-icon-search" size="small">启用/关闭</el-button>
            <el-button @click="edit(scope.row)" type="primary" size="small">编辑</el-button>
            <el-button @click="editHandle(scope.row)" type="primary" size="small" icon="el-icon-edit">档案</el-button>
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
      <el-dialog :title="this.editTitle" :visible.sync="userInfoDialog" @close="cancel('userInfoForm')">
        <el-steps :active="active" :space="300" align-center style="display: flex;justify-content: center;">
          <el-step title="基础信息" icon="el-icon-success"></el-step>
          <el-step title="健康档案"></el-step>
        </el-steps>
        <el-form :model="userInfoForm" ref="userInfoForm" label-width="80px" :inline="true" class="userForm"
          style="margin: 50px;" v-if="diolog == 1" :rules="userRules">
          <el-form-item label="用户名" style="display: flex;width:30%" prop="name">
            <el-input style="width:100%" v-model="userInfoForm.name"></el-input>
          </el-form-item>
          <el-form-item label="用户编号" style="display: flex;width:30%" prop="code">
            <el-input style="width:100%" v-model="userInfoForm.code"></el-input>
          </el-form-item>
          <el-form-item label="出生年月" style="display: flex;width:30%" prop="birthday">
            <!-- <el-input style="width:100%" v-model="userInfoForm.birthday"></el-input> -->
            <el-date-picker style="width:200px" v-model="userInfoForm.birthday" type="month" format="yyyy-MM"
              value-format="yyyy-MM-dd" placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="性别" style="display: flex;width:30%" prop="sex">
            <el-select v-model="userInfoForm.sex" placeholder="请选择" style="width:200px">
              <el-option v-for="item in sexList" :key="item.code" :label="item.name" :value="item.code">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="身份证号" style="display: flex;width:30%">
            <el-input style="width:100%" v-model="userInfoForm.idCard"></el-input>
          </el-form-item>
          <el-form-item label="地址" style="display: flex;width:30%" prop="area">
            <el-input style="width:100%" v-model="userInfoForm.area"></el-input>
          </el-form-item>
          <el-form-item label="手机号" style="display: flex;width:30%" prop="phone">
            <el-input style="width:100%" v-model="userInfoForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="家长名" style="display: flex;width:30%" prop="parentsName">
            <el-input style="width:100%" v-model="userInfoForm.parentsName"></el-input>
          </el-form-item>
          <el-form-item label="关系" style="display: flex;width:30%">
            <el-input style="width:100%" v-model="userInfoForm.relation"></el-input>
          </el-form-item>
          <el-form-item label="状态" style="display: flex;width:30%">
            <el-input style="width:100%" v-model="userInfoForm.state"></el-input>
          </el-form-item>
        </el-form>
        <el-form style="margin: 50px;" v-if="diolog == 2">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-row :gutter="20">
                <el-col :span="24">
                  <div class="grid-content bg-purple">*视力</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple" style="line-height:33px">裸眼视力</div>
                  <div class="grid-content bg-purple" style="line-height:33px">矫正视力</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">左眼
                    <el-input v-model="archivesInfo.eyesight.leftUcva" style="width:50px"></el-input>
                  </div>
                  <div class="grid-content bg-purple">左眼
                    <el-input v-model="archivesInfo.eyesight.leftCva" style="width:50px"></el-input>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">右眼
                    <el-input v-model="archivesInfo.eyesight.rightUcva" style="width:50px"></el-input>
                  </div>
                  <div class="grid-content bg-purple">右眼
                    <el-input v-model="archivesInfo.eyesight.rightCva" style="width:50px"></el-input>
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-row :gutter="20">
                <el-col :span="24">
                  <div class="grid-content bg-purple">*屈光度</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple" style="line-height:25px;opacity: 0;">1</div>
                  <div class="grid-content bg-purple" style="line-height:25px">左眼</div>
                  <div class="grid-content bg-purple" style="line-height:25px">右眼</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">球镜
                  </div>
                  <div class="grid-content bg-purple">
                    <el-input v-model="archivesInfo.dioptric.leftSphere" style="width:80px"></el-input>
                  </div>
                  <div class="grid-content bg-purple">
                    <el-input v-model="archivesInfo.dioptric.rightSphere" style="width:80px"></el-input>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">柱镜</div>
                  <div class="grid-content bg-purple">
                    <el-input v-model="archivesInfo.dioptric.leftCylinder" style="width:80px"></el-input>
                  </div>
                  <div class="grid-content bg-purple">
                    <el-input v-model="archivesInfo.dioptric.rightCylinder" style="width:80px"></el-input>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">轴位</div>
                  <div class="grid-content bg-purple">
                    <el-input v-model="archivesInfo.dioptric.leftAxial" style="width:80px"></el-input>
                  </div>
                  <div class="grid-content bg-purple">
                    <el-input v-model="archivesInfo.dioptric.rightAxial" style="width:80px"></el-input>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel('userInfoForm')">取 消</el-button>
          <el-button type="primary" @click="diolog = 2, active = 2" v-if="diolog == 1">确 定</el-button>
          <el-button type="primary" @click="diolog = 1, active = 1" v-if="diolog == 2">上一步</el-button>
          <el-button type="primary" @click="submitUserInfo('userInfoForm')" :disabled="buttonDisabled"
            v-if="diolog == 2">
            确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import ApiServer from '@/api/apiServer'
export default {
  data() {
    return {
      diolog: 1,
      active: 1,
      newYear: '',
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
      cardTypeList: [
        {
          name: '次卡',
          id: '0',
        },
        {
          name: '月卡',
          id: '1',
        },
      ],
      userInfoForm: {
        name: '',
        code: '',
        birthday: '',
        sex: '',
        area: '',
        phone: '',
        parentsName: '',
        relation: '',
        idCard: '',
        state: ''
      },
      archivesInfo: {
        eyesight: {
          leftUcva: "",
          leftCva: "",
          rightUcva: "",
          rightCva: ""
        },
        dioptric: {
          leftSphere: "",
          leftCylinder: "",
          leftAxial: "",
          rightSphere: "",
          rightCylinder: "",
          rightAxial: ""
        }
      },
      sexList: [
        {
          code: 0,
          name: '男',
        },
        {
          code: 1,
          name: '女',
        },
      ],
      userRules: {
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        birthday: [
          { required: true, message: '请输入出生年月', trigger: 'blur' },
        ],
        parentsName: [
          { required: true, message: '请输入家长', trigger: 'blur' },
        ],
        phone: [
          {
            required: true,
            message: '请输入电话号码',
            validator: this.commonJS.checkPhone,
            trigger: 'blur',
          },
        ],
        code: [{ required: true, message: '请输入编号', trigger: 'blur' }],
        sex: [{ required: true, message: '请输入性别', trigger: 'blur' }],
      },
      doctorList: [],
      date: '',
      buttonDisabled: false,
      loading: false,
      editTitle: '',
      isAdd: false,
      userInfoDialog: false,
      tableData: [],
      queryForm: {
        name: null,
        doctorId: null,
        parentsName: null,
        visualCenter: null,
        startDate: '',
        endDate: '',
        pageParams: {
          pageNum: 1,
          pageSize: 10,
        },
      },
      tableTotals: 1,
    }
  },
  components: {},
  created() {
    this.getTableData()
  },
  methods: {
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
    editHandle(row) {
      // this.isAdd = false
      // this.buttonDisabled = false
      // this.userInfoDialog = true
      // row.status = Number(row.status)
      // this.editTitle = '编辑用户'
      // this.$nextTick(() => {
      //   this.userInfoForm = JSON.parse(JSON.stringify(row))
      // })
      let obj = { ...row }
      console.log(obj)
      this.$router.push({ name: 'userDetails', query: obj })
    },
    edit(row) {
      console.log(row)
      this.isAdd = false;
      this.buttonDisabled = false;
      this.userInfoDialog = true;
      this.userInfoForm = { ...row };
      this.userInfoForm.name = row.name;
      this.userInfoForm.code = row.code;
      this.userInfoForm.birthday = row.birthday;
      this.userInfoForm.area = row.area;
      this.userInfoForm.phone = row.phone;
      this.userInfoForm.parentsName = row.parentsName;
      this.userInfoForm.relation = row.relation;
      this.userInfoForm.idCard = row.idCard;
      this.userInfoForm.state = row.state;
      this.userInfoForm.sex = Number(row.sex)
      this.userInfoForm.id = row.id
      this.archivesInfo = JSON.parse(row.healthRecord)
    },
    addHandle() {
      this.isAdd = true
      this.buttonDisabled = false
      this.userInfoDialog = true
      this.editTitle = '用户基础信息'
    },
    delHandle(row) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          ApiServer.manager.delUser({ id: row.id }).then((res) => {
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
      this.userInfoDialog = false
      this.$refs[form].resetFields()
    },
    submitUserInfo(form) {
      this.userInfoForm.healthRecord = JSON.stringify(this.archivesInfo);
      console.log(this.userInfoForm)
      this.buttonDisabled = true
      // this.$refs.userInfoForm.validate((valid) => {
      //   if (valid) {
      var requestAddr = this.isAdd == false ? 'updateUserInfo' : 'saveUser'
      ApiServer.manager[requestAddr](this.userInfoForm).then((res) => {
        if (res.code == 200) {
          this.userInfoDialog = false;
          if (this.$refs.form !== undefined) { this.$refs.form.resetFields() }
          this.userInfoForm.roleIds = [];
          this.getTableData();
          this.$message({ message: '操作成功', type: 'success' });
        }
      })
      //   }
      // })
    },
    batchDel() {
      this.DelIdList = []
      if (this.$refs.multipleTable.selection.length > 0) {
        this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            this.$refs.multipleTable.selection.forEach((item) => {
              this.DelIdList.push(item.id)
            })
            console.log(this.DelIdList)
            ApiServer.manager.batchDelUser(this.DelIdList).then((res) => {
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
      ApiServer.manager.getUserInfoList(this.queryForm).then((res) => {
        if (res.code == 200) {
          this.tableData = res.data.list
          this.tableTotals = Number(res.data.total)
        }
        this.loading = false
      })
    },
    getDoctorList() {
      var data = {
        pageParams: {
          pageNum: 1,
          pageSize: 10,
        },
      }
      ApiServer.manager.getDoctorList(data).then((res) => {
        if (res.code == 200) {
          this.doctorList = res.data.list
        }
        this.loading = false
      })
    },
    addressInfo(row) {
      this.$alert(row.area, '地址', {
        center: true,
        showConfirmButton: false,
      }).catch((err) => {
        console.log(err)
      })
    },
    purchaseInfo(row) {
      this.$router.push({ name: 'visionInfo', params: row })
    },
    trainInfo() { },
    visionInfo() { },
    purchaseManagement(row) {
      this.$router.push({ name: 'purchaseManager', params: row })
    },
    getNameList() {
      ApiServer.manager.getHospitalList().then((res) => {
        if (res.code == 200) {
          this.nameList = res.data.list
        }
      })
    },
    open() {
      this.$confirm('确定禁用吗？禁用后该用户的信息将被锁定,指定授权人员可再次启用', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  },
  mounted() {
    var date = new Date()
    this.newYear = date.getFullYear()
    this.getDoctorList()
    //   this.getNameList();
  },
}
</script>


<style scoped>
.textLink {
  cursor: pointer;
  color: blue;
}

/deep/ .el-form-item__label {
  color: #000000;
}

/deep/ .el-dialog__header {
  text-align: center;
}

.title {
  padding: 20px 10px;
  color: rgb(27, 139, 214);
}

.grid-content {
  padding: 10px 0;
  color: #000000;
  font-size: 14px;
}

.userForm {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 50px 150px;
}
</style>