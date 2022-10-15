<template>
  <div>
    <el-card>
      <el-form :inline="true"
               :model="queryForm"
               class="demo-form-inline">
        <el-form-item prop="name"
                      label="用户名">
          <el-input type="text"
                    placeholder="请输入用户名名称"
                    v-model="queryForm.name"></el-input>
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
                      label="当前状态">
          <el-select v-model="queryForm.status">
            <el-option v-for="item in statusList"
                       :key="item.code"
                       :label="item.name"
                       :value="item.code">
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
        <el-table-column prop="name"
                         label="用户名"
                         width="120"
                         fixed="left">
        </el-table-column>
        <el-table-column prop="sex"
                         label="性别"
                         width="120">
          <template slot-scope="scope">
            {{scope.row.sex == '1' ? '女' : '男'}}
          </template>
        </el-table-column>
        <el-table-column prop="birthday"
                         label="出生年月"
                         width="120">
        </el-table-column>
        <el-table-column prop=""
                         label="年龄"
                         width="120">
          <template slot-scope="scope">
            <p v-if="scope.row.birthday != null">{{newYear - scope.row.birthday.split('-')[0] + 1}}岁</p>
            <p v-else> </p>
          </template>
        </el-table-column>
        <el-table-column prop="code"
                         label="编号"
                         width="120">
        </el-table-column>
        <el-table-column prop="parentsName"
                         label="家长"
                         width="120">
        </el-table-column>
        <el-table-column prop=""
                         label="关系"
                         width="120">
        </el-table-column>
        <el-table-column prop="phone"
                         label="手机"
                         width="140">
        </el-table-column>
        <el-table-column prop="doctorName"
                         label="训练师"
                         width="140">
        </el-table-column>
        <el-table-column prop="days"
                         label="购买月卡"
                         width="120">
        </el-table-column>
        <el-table-column prop="residueDays"
                         label="剩余天数"
                         width="120">
        </el-table-column>
        <el-table-column prop="count"
                         label="购买次卡"
                         width="120">
        </el-table-column>
        <el-table-column prop="residueCount"
                         label="剩余次数"
                         width="120">
        </el-table-column>
        <el-table-column prop="usefulLife"
                         label="有效期"
                         width="150">
        </el-table-column>
        <el-table-column prop="introducer"
                         label="介绍人"
                         width="150">
        </el-table-column>
        <el-table-column label="地址"
                         width="150">
          <template slot-scope="scope">
            <span class="textLink"
                  @click="addressInfo(scope.row)">查看地址</span>
          </template>
        </el-table-column>
        <el-table-column label="购买记录"
                         width="150">
          <template slot-scope="scope">
            <span class="textLink"
                  @click="purchaseInfo(scope.row)">查看购买</span>
          </template>
        </el-table-column>
        <el-table-column prop=""
                         label="训练记录"
                         width="150">
          <template slot-scope="scope">
            <span class="textLink"
                  @click="trainInfo(scope.row)">查看训练</span>
          </template>
        </el-table-column>
        <el-table-column prop=""
                         label="视力信息"
                         width="150">
          <template slot-scope="scope">
            <span class="textLink"
                  @click="visionInfo(scope.row)">查看视力</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right"
                         label="操作"
                         width="100">
          <template slot-scope="scope">
            <!-- <el-button @click="purchaseManagement(scope.row)"
                       type="danger"
                       size="small"
                       icon="el-icon-money">购买管理</el-button> -->
            <i class="el-icon-edit-outline"
               :style="{color:'#409eff','font-size':'25px',cursor: 'pointer'}"
               @click="editHandle(scope.row)"></i>
            <i class="el-icon-delete"
               :style="{color:'red','font-size':'25px',cursor: 'pointer','margin-left': '10px'}"
               @click="delHandle(scope.row)"></i>
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
                 :visible.sync="userInfoDialog"
                 @close="cancel('userInfoForm')">
        <el-form ref="userInfoForm"
                 :model="userInfoForm"
                 :rules="userRules"
                 label-width="80px"
                 style="margin-top: 25px;">
          <el-row>
            <el-col :span="12">
              <el-form-item label="用户名"
                            prop="name">
                <el-input type="text"
                          v-model="userInfoForm.name"></el-input>
              </el-form-item>
              <el-form-item label="出生年月"
                            prop="birthday">
                <el-date-picker v-model="userInfoForm.birthday"
                                type="date"
                                placeholder="选择日期"
                                value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="家长"
                            prop="parentsName">
                <el-input type="text"
                          v-model="userInfoForm.parentsName"></el-input>
              </el-form-item>
              <el-form-item label="手机号码"
                            prop="phone">
                <el-input type="text"
                          v-model="userInfoForm.phone"></el-input>
              </el-form-item>
              <!-- <el-form-item label="购买月卡"
                            prop="days">
                <el-input type="text"
                          v-model="userInfoForm.days"></el-input>
              </el-form-item>
              <el-form-item label="购买次卡"
                            prop="count">
                <el-input type="text"
                          v-model="userInfoForm.count"></el-input>
              </el-form-item> -->
              <!-- <el-form-item label="赠送额"
                            prop="giftAmount">
                <el-input type="text"
                          v-model="userInfoForm.giftAmount"></el-input>
              </el-form-item> -->
            </el-col>
            <el-col :span='12'>
              <el-form-item label="性别"
                            prop="sex">
                <el-select v-model="userInfoForm.sex">
                  <el-option v-for="item in sexList"
                             :key="item.code"
                             :label="item.name"
                             :value="item.code">
                  </el-option>
                </el-select>
              </el-form-item>
              <!-- <el-form-item label="编号"
                            prop="code">
                <el-input type="text"
                          v-model="userInfoForm.code"></el-input>
              </el-form-item> -->
              <el-form-item label="关系"
                            prop="relation">
                <el-input type="text"
                          v-model="userInfoForm.relation"></el-input>
              </el-form-item>
              <el-form-item label="训练师"
                            prop="doctorId">
                <el-select v-model="queryForm.doctorId"
                           placeholder="请选择视光中心">
                  <el-option v-for="item in doctorList"
                             :key="item.id"
                             :label="item.name"
                             :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
              <!-- <el-form-item label="剩余天数"
                            prop="residueDays">
                <el-input type="text"
                          v-model="userInfoForm.residueDays"></el-input>
              </el-form-item>
              <el-form-item label="剩余次数"
                            prop="residueCount">
                <el-input type="text"
                          v-model="userInfoForm.residueCount"></el-input>
              </el-form-item> -->
              <el-form-item label="介绍人"
                            prop="introducer">
                <el-input type="text"
                          v-model="userInfoForm.introducer"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="有效期"
                        prop="usefulLife">
            <el-date-picker v-model="userInfoForm.usefulLife"
                            type="date"
                            placeholder="选择日期"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-form-item>
        </el-form>
        <span slot="footer"
              class="dialog-footer">
          <el-button @click="cancel('userInfoForm')">取 消</el-button>
          <el-button type="primary"
                     @click="submitUserInfo('userInfoForm')"
                     :disabled="buttonDisabled">确 定</el-button>
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
      userInfoForm: {},
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
        doctorName: [
          { required: true, message: '请输入训练师', trigger: 'blur' },
        ],
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
      this.isAdd = false
      this.buttonDisabled = false
      this.userInfoDialog = true
      row.status = Number(row.status)
      this.editTitle = '编辑用户'
      this.$nextTick(() => {
        this.userInfoForm = JSON.parse(JSON.stringify(row))
      })
    },
    addHandle() {
      this.isAdd = true
      this.buttonDisabled = false
      this.userInfoDialog = true
      this.editTitle = '新增用户'
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
      this.$refs[form].resetFields()
      this.userInfoDialog = false
    },
    submitUserInfo(form) {
      this.buttonDisabled = true
      this.$refs.userInfoForm.validate((valid) => {
        if (valid) {
          var requestAddr = this.isAdd == false ? 'updateUserInfo' : 'saveUser'
          ApiServer.manager[requestAddr](this.userInfoForm).then((res) => {
            if (res.code == 200) {
              this.userInfoDialog = false
              this.$refs[form].resetFields()
              this.userInfoForm.roleIds = []
              this.getTableData()
            }
          })
        }
      })
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
    trainInfo() {},
    visionInfo() {},
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
</style>