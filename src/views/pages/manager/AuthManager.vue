<template>
  <div>
    <el-card>
      <el-form :inline="true"
               :model="queryForm"
               class="demo-form-inline">
        <el-form-item>
          <el-date-picker v-model="date"
                          type="daterange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item prop="name">
          <el-input type="text"
                    placeholder="请输入角色名"
                    v-model="queryForm.name"></el-input>
        </el-form-item>
        <el-button @click="getTableData()"
                   icon="el-icon-search"
                   style="color: #409EFF"
                   round>查询</el-button>
        <el-button @click="addHandle()"
                   icon="el-icon-circle-plus-outline"
                   style="color: #409EFF"
                   round>新增</el-button>
      </el-form>
    </el-card>
    <el-card>
      <el-table :data="tableData"
                style="width: 100%"
                v-loading="loading"
                ref="multipleTable">
        <el-table-column type="selection"
                         width="55">
        </el-table-column>
        <el-table-column prop="name"
                         label="角色名"
                         width="120">
        </el-table-column>
        <el-table-column prop="code"
                         label="角色描述"
                         width="120">
        </el-table-column>
        <el-table-column prop="createdTime"
                         label="创建时间"
                         width="150">
        </el-table-column>
        <el-table-column label="状态"
                         width="120">
          <template slot-scope="scope">
            <el-switch :value="scope.row.status"
                       active-value="1"
                       inactive-value="0"
                       @change="enableHandle(scope.row)"></el-switch>
          </template>
        </el-table-column>
        <el-table-column fixed="right"
                         label="操作"
                         width="300">
          <template slot-scope="scope">
            <el-button @click="setPermiss(scope.row)"
                       size="small"
                       icon="el-icon-setting"
                       style="color:#409eff">设置权限</el-button>
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
                 :visible.sync="authInfoDialog"
                 @close="cancel('roleForm')">
        <el-form ref="roleForm"
                 :model="roleForm"
                 :rules="rules"
                 label-width="80px"
                 style="margin-right: 50px;">
          <el-form-item label="角色名"
                        prop="name">
            <el-input type="text"
                      placeholder="请输入角色名"
                      v-model="roleForm.name"
                      style="width=250px"></el-input>
          </el-form-item>
          <el-form-item label="角色编码"
                        prop="code">
            <el-input type="text"
                      placeholder="请输入角色编码"
                      v-model="roleForm.code"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer"
              class="dialog-footer">
          <el-button @click="cancel('roleForm')">取 消</el-button>
          <el-button type="primary"
                     @click="submitRoleInfo('roleForm')"
                     :disabled="buttonDisabled">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog title="设置角色权限"
                 :visible.sync="setPermissDialog"
                 @close="setPermissCancel('roleForm')">
        <el-tree :data="menuTreeList"
                 show-checkbox
                 default-expand-all
                 node-key="id"
                 ref="tree"
                 highlight-current
                 :props="defaultProps"
                 :default-checked-keys="this.userMenuList">
        </el-tree>
        <span slot="footer"
              class="dialog-footer">
          <el-button @click="setPermissCancel('roleForm')">取 消</el-button>
          <el-button type="primary"
                     @click="setMean('roleForm')"
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
      userMenuList: [],
      addRoleId: '',
      editTitle: '',
      isAdd: false,
      authInfoDialog: false,
      setPermissDialog: false,
      tableData: [],
      menuTreeList: [],
      defaultProps: {
        children: 'childrenList',
        label: 'name',
      },
      date: '',
      queryForm: {
        name: null,
        startDate: '',
        endDate: '',
        pageParams: {
          pageNum: 1,
          pageSize: 10,
        },
      },
      roleForm: {
        name: '',
        code: '',
        status: 1,
      },
      roleList: [],
      rules: {
        name: [{ required: true, message: '请输入角色名', trigger: 'blur' }],
        code: [{ required: true, message: '请输入角色编码', trigger: 'blur' }],
      },
      tableTotals: 1,
    }
  },
  components: {},
  methods: {
    setPermissCancel(form) {
      this.userMenuList = []
      this.buttonDisabled = false
      this.setPermissDialog = false
    },
    handleSizeChange(val) {
      this.queryForm.pageSize = val
      //   let pageMax = Math.ceil(this.tableTotals / val)
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
          ApiServer.manager.updateRoleInfo(row).then((res) => {
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
      this.buttonDisabled = false
      this.isAdd = false
      this.authInfoDialog = true
      row.status = Number(row.status)
      this.editTitle = '编辑角色'
      this.$nextTick(() => {
        this.roleForm = JSON.parse(JSON.stringify(row))
      })
    },
    addHandle() {
      this.isAdd = true
      this.buttonDisabled = false
      this.authInfoDialog = true
      this.editTitle = '新增角色'
    },
    delHandle(row) {
      this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          ApiServer.manager.delRole({ id: row.id }).then((res) => {
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
      this.authInfoDialog = false
    },
    submitRoleInfo(form) {
      this.buttonDisabled = true
      this.$refs.roleForm.validate((valid) => {
        if (valid) {
          var requestAddr = this.isAdd == false ? 'updateRoleInfo' : 'addRole'
          ApiServer.manager[requestAddr](this.roleForm).then((res) => {
            if (res.code == 200) {
              this.authInfoDialog = false
              this.$refs[form].resetFields()
              this.getTableData()
            }
          })
        }
      })
    },
    batchDel() {
      this.DelIdList = []
      if (this.$refs.multipleTable.selection.length > 0) {
        this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            this.$refs.multipleTable.selection.forEach((item) => {
              this.DelIdList.push(item.id)
            })
            console.log(this.DelIdList)
            ApiServer.manager.delRole(this.DelIdList).then((res) => {
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
      ApiServer.manager.getRoleList(this.queryForm).then((res) => {
        if (res.code == 200) {
          this.tableData = res.data.list
          this.tableTotals = Number(res.data.total)
        }
        this.loading = false
      })
    },
    setPermiss(row) {
      this.addRoleId = row.id
      this.setPermissDialog = true
      ApiServer.manager.getMenuTree(this.queryForm).then((res) => {
        if (res.code == 200) {
          this.menuTreeList = res.data
          this.$nextTick(() => {
            var nodes = []
            row.menuIdList.forEach((item) => {
              var node = this.$refs.tree.getNode(item)
              if (node.isLeaf) {
                nodes.push(item)
              }
            })
            this.userMenuList = nodes
          })
        }
      })
    },
    setMean() {
      this.buttonDisabled = true
      var meanList = {}
      meanList.roleId = this.addRoleId
      meanList.meanIds = this.$refs.tree.getCheckedKeys()
      var halfCheckedKeys = this.$refs.tree.getHalfCheckedKeys()
      meanList.meanIds.unshift.apply(meanList.meanIds, halfCheckedKeys)
      ApiServer.manager.addMean(meanList).then((res) => {
        if (res.code == 200) {
          this.menuTreeList = res.data
          this.setPermissDialog = false
          this.getTableData()
        }
      })
    },
  },
  mounted() {
    this.getTableData()
  },
}
</script>