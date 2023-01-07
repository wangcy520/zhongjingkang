<template>
  <div>
    <el-card>
      <el-form :inline="true"
               :model="queryForm"
               class="demo-form-inline">
        <el-form-item prop="name"
                      label="管理员">
          <el-input type="text"
                    placeholder="请输入管理员"
                    v-model="queryForm.name"></el-input>
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
        <el-form-item prop="status"
                      label='权限'>
          <el-select v-model="queryForm.role">
            <el-option v-for="item in roleList"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="getTableData()"
                     icon="el-icon-search"
                     style="color: #409EFF"
                     round>查询</el-button>
          <el-button @click="addHandle()"
                     icon="el-icon-circle-plus-outline"
                     style="color: #409EFF"
                     round>新增</el-button>
        </el-form-item>
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
                         label="登录名"
                         width="120">
        </el-table-column>
        <el-table-column prop="phone"
                         label="手机"
                         width="140">
        </el-table-column>
        <el-table-column prop="email"
                         label="邮箱"
                         width="200">
        </el-table-column>
        <el-table-column prop="roleList[0].name"
                         label="角色"
                         width="200">
        </el-table-column>
        <el-table-column prop="createdTime"
                         label="创建时间"
                         width="200">
        </el-table-column>
        <el-table-column label="状态"
                         width="120">
          <template slot-scope="scope">
            <el-switch :value="scope.row.status"
                       :active-value="1"
                       :inactive-value="0"
                       @change="enableHandle(scope.row)"></el-switch>
            <!-- <el-tag :type="scope.row.status == 0 ? 'primary' : 'success'"
                    disable-transitions>{{scope.row.status == 1 ? '已启动' : '已禁用'}}</el-tag> -->
          </template>
        </el-table-column>
        <el-table-column fixed="right"
                         label="操作"
                         width="100">
          <template slot-scope="scope">
            <!-- <el-button @click="resetPwd(scope.row)"
                       type="danger"
                       size="small"
                       icon="el-icon-key">重置密码</el-button> -->
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
                 @close="cancel('userForm')">
        <el-form ref="userForm"
                 :model="userForm"
                 :rules="rules"
                 label-width="80px"
                 style="margin-right: 50px;">
          <el-form-item label="用户"
                        prop="name">
            <el-input type="text"
                      placeholder="请输入用户名"
                      v-model="userForm.name"
                      style="width=250px"></el-input>
          </el-form-item>
          <el-form-item label="电话"
                        prop="phone">
            <el-input type="text"
                      placeholder="请输入电话号码"
                      v-model="userForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱"
                        prop="email">
            <el-input type="text"
                      placeholder="请输入邮箱"
                      v-model="userForm.email"></el-input>
          </el-form-item>
          <el-form-item label="角色"
                        prop="roleIds">
            <el-select v-model="userForm.roleIds"
                       placeholder="请选择角色"
                       multiple>
              <el-option v-for="item in roleList"
                         :key="item.id"
                         :label="item.name"
                         :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="密码"
                        prop="password"
                        v-if="this.isAdd == true">
            <el-input type="text"
                      placeholder="请设置用户密码"
                      v-model="userForm.password"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer"
              class="dialog-footer">
          <el-button @click="cancel('userForm')">取 消</el-button>
          <el-button type="primary"
                     @click="submitUserInfo('userForm')"
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
      buttonDisabled: false,
      loading: false,
      editTitle: '',
      isAdd: false,
      changePwdDialog: false,
      userInfoDialog: false,
      tableData: [],
      date: '',
      queryForm: {
        role: null,
        status: null,
        username: '',
        startDate: '',
        endDate: '',
        pageParams: {
          pageNum: 1,
          pageSize: 10,
        },
      },
      userForm: {
        name: '',
        phone: '',
        email: '',
        roleIds: [],
        password: '',
        status: '1',
      },
      roleList: [],
      rules: {
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        phone: [
          {
            required: true,
            message: '请输入电话号码',
            validator: this.commonJS.checkPhone,
            trigger: 'blur',
          },
        ],
        email: [
          {
            required: true,
            message: '请输入编码',
            validator: this.commonJS.checkEmail,
            trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' },
        ],
      },
      tableTotals: 1,
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
      ]
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
    enableHandle(row) {
      this.$confirm(row.status == '1' ? '确定要停用？' : '确认要启用？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          row.status = row.status == '1' ? '0' : '1'
          ApiServer.manager.updateUserInfo(row).then((res) => {
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
      this.userInfoDialog = true
      row.status = Number(row.status)
      this.editTitle = '编辑用户'
      this.$nextTick(() => {
        this.userForm = JSON.parse(JSON.stringify(row))
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
      this.$refs.userForm.validate((valid) => {
        if (valid) {
          var requestAddr = this.isAdd == false ? 'updateUserInfo' : 'addUser'
          ApiServer.manager[requestAddr](this.userForm).then((res) => {
            if (res.code == 200) {
              this.userInfoDialog = false
              this.$refs[form].resetFields()
              this.userForm.roleIds = []
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
      ApiServer.manager.getUserList(this.queryForm).then((res) => {
        if (res.code == 200) {
          this.tableData = res.data.list
          this.tableTotals = Number(res.data.total)
        }
        this.loading = false
      })
    },
    resetPwd(row) {
      this.$confirm('此操作将重置密码, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          ApiServer.manager.resetPwd({ id: row.id }).then((res) => {
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
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    },
    getRoleList() {
      ApiServer.select.selectRoleList().then((res) => {
        if (res.code == 200) {
          this.roleList = res.data
        }
      })
    },
  },
  mounted() {
    this.getRoleList()
  },
}
</script>
