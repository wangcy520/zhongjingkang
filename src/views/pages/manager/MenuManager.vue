<template>
  <div>
    <el-card>
      <el-form :inline="true"
               :model="queryForm"
               class="demo-form-inline">
        <!-- <el-form-item>
          <el-date-picker v-model="date"
                          type="daterange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item> -->
        <el-form-item prop="name">
          <el-input type="text"
                    placeholder="请输入菜单名"
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
    <el-card style="">
      <el-table :data="tableData"
                style="width: 100%;margin-bottom: 20px;"
                row-key="id"
                ref="multipleTable"
                v-loading="loading"
                default-expand-all
                :tree-props="{children: 'childrenList', hasChildren: 'hasChildren'}">
        <el-table-column type="selection"
                         width="55">
        </el-table-column>
        <!-- <el-table-column prop="id"
                         label="ID"
                         width="160">
        </el-table-column> -->
        <el-table-column prop="name"
                         label="菜单名称"
                         width="200">
        </el-table-column>
        <el-table-column prop="icon"
                         label="icon"
                         width="120">
        </el-table-column>
        <el-table-column prop="type"
                         label="类型"
                         width="120">
        </el-table-column>
        <el-table-column prop="orderNum"
                         label="排序号"
                         width="120">
        </el-table-column>
        <el-table-column prop="path"
                         label="菜单URL"
                         width="120">
        </el-table-column>
        <el-table-column prop="code"
                         label="授权标识"
                         width="120">
        </el-table-column>
        <el-table-column prop="createdBy"
                         label="菜单创建人"
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
                       :active-value="1"
                       :inactive-value="0"
                       @change="enableHandle(scope.row)"></el-switch>
          </template>
        </el-table-column>
        <el-table-column fixed="right"
                         label="操作"
                         width="330">
          <template slot-scope="scope">
            <el-button @click="addSubMenu(scope.row)"
                       size="small"
                       icon="el-icon-circle-plus-outline"
                       v-if="scope.row.code == 'view'"
                       style="color:#409eff">新增子菜单</el-button>
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
      <!-- <div class="block">
        <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="queryForm.pageNum"
                       :page-sizes="[10, 50, 100, 200]"
                       :page-size="queryForm.pageSize"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="tableTotals">
        </el-pagination>
      </div> -->
    </el-card>
    <div>
      <el-dialog :title="this.editTitle"
                 :visible.sync="dialogFormVisible"
                 @close="cancel('menuForm')">
        <el-form ref="menuForm"
                 :model="menuForm"
                 :rules="rules"
                 label-width="80px"
                 style="margin-right: 50px;">
          <el-form-item label="上级菜单"
                        prop="parentMenu"
                        v-show="this.isAdd == 1">
            <el-input type="text"
                      v-model="parentMenu"
                      style="width=250px"
                      disabled></el-input>
          </el-form-item>
          <el-form-item label="菜单名称"
                        prop="name">
            <el-input type="text"
                      placeholder="请输入菜单名"
                      v-model="menuForm.name"
                      style="width=250px"></el-input>
          </el-form-item>
          <el-form-item label="菜单类型"
                        prop="type">
            <el-radio-group v-model="menuForm.type"
                            size="small">
              <el-radio label="1">菜单</el-radio>
              <el-radio label="2">按钮</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="icon"
                        prop="icon">
            <el-input type="text"
                      placeholder="请输入菜单icon"
                      v-model="menuForm.icon"></el-input>
          </el-form-item>
          <el-form-item label="菜单URL"
                        prop="path">
            <el-input type="text"
                      placeholder="请输入菜单URL"
                      v-model="menuForm.path"></el-input>
          </el-form-item>
          <el-form-item label="授权标识"
                        prop="code">
            <el-input type="text"
                      placeholder="请输入授权标识"
                      v-model="menuForm.code"></el-input>
          </el-form-item>
          <el-form-item label="菜单状态"
                        prop="status">
            <el-switch style="display: block"
                       v-model="menuForm.status"
                       active-color="#13ce66"
                       inactive-color="#ff4949"
                       active-text="启用"
                       inactive-text="禁用"
                       :active-value="1"
                       :inactive-value="0">
            </el-switch>
          </el-form-item>
          <el-form-item label="排序号"
                        prop="orderNum">
            <el-input type="text"
                      placeholder="排序号"
                      v-model="menuForm.orderNum"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer"
              class="dialog-footer">
          <el-button @click="cancel('menuForm')">取 消</el-button>
          <el-button type="primary"
                     @click="submitMenuInfo('menuForm')"
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
      parentMenu: '',
      editTitle: '',
      isAdd: 0, //0新增菜单1新增子菜单2编辑菜单
      dialogFormVisible: false,
      tableData: [],
      //   date: '',
      queryForm: {
        name: null,
        startDate: '',
        endDate: '',
        pageParams: {
          pageNum: 1,
          pageSize: 10,
        },
      },
      menuForm: {
        name: '',
        path: '',
        icon: '',
        code: '',
        orderNum: '',
        status: 1,
        type: '1',
        parentId: 0,
      },
      roleList: [],
      rules: {
        name: [{ required: true, message: '请输入菜单名', trigger: 'blur' }],
        path: [{ required: true, message: '请输入菜单URL', trigger: 'blur' }],
        code: [
          { required: true, message: '请输入菜单授权标识', trigger: 'blur' },
        ],
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
    enableHandle(row) {
      this.$confirm(row.status == 1 ? '确定要停用？' : '确认要启用？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          var userInfo = {}
          userInfo.id = row.id
          userInfo.status = row.status == '1' ? '0' : '1'
          ApiServer.manager.updateMenuInfo(userInfo).then((res) => {
            if (res.code == 200) {
              this.$message({
                type: 'success',
                message: row.status == '1' ? '启动成功' : '停用成功',
              })
              this.getTableData()
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
      row.status = Number(row.status)
      this.dialogFormVisible = true
      this.editTitle = '编辑菜单'
      this.$nextTick(() => {
        this.menuForm = JSON.parse(JSON.stringify(row))
      })
    },
    addHandle() {
      this.isAdd = 0
      this.buttonDisabled = false
      this.dialogFormVisible = true
      this.editTitle = '新增菜单'
    },
    delHandle(row) {
      this.$confirm('此操作将永久删除该菜单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          ApiServer.manager.delMenu({ id: row.id }).then((res) => {
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
      this.dialogFormVisible = false
    },
    submitMenuInfo(form) {
      this.buttonDisabled = true
      this.$refs.menuForm.validate((valid) => {
        if (valid) {
          //   this.isAdd == false ? this.editMenu() : this.addMenu()
          var requestAddr = this.isAdd == 2 ? 'updateMenuInfo' : 'addMenu'
          console.log('requestAddr', requestAddr)
          ApiServer.manager[requestAddr](this.menuForm).then((res) => {
            if (res.code == 200) {
              this.dialogFormVisible = false
              this.$refs[form].resetFields()
              this.getTableData()
              this.menuForm.parentId = 0
            }
          })
        }
      })
    },
    addSubMenu(row) {
      this.isAdd = 1
      this.editTitle = '新增菜单【' + row.name + '】的子菜单'
      this.parentMenu = row.name
      this.menuForm.parentId = row.id
      this.buttonDisabled = false
      this.dialogFormVisible = true
      //   var menuData = JSON.parse(JSON.stringify(row))
      //   menuData.parentId = row.id
      //   ApiServer.manager.addMenu(this.menuForm).then((res) => {
      //     if (res.code == 200) {
      //       this.dialogFormVisible = false
      //       this.getTableData()
      //     }
      //   })
    },
    // addMenu() {
    //   ApiServer.manager.addMenu(this.menuForm).then((res) => {
    //     if (res.code == 200) {
    //       this.dialogFormVisible = false
    //       this.getTableData()
    //     }
    //   })
    // },
    // editMenu() {
    //   ApiServer.manager.updateMenuInfo(this.menuForm).then((res) => {
    //     if (res.code == 200) {
    //       this.dialogFormVisible = false
    //       this.getTableData()
    //     }
    //   })
    // },
    batchDel() {
      this.DelIdList = []
      if (this.$refs.multipleTable.selection.length > 0) {
        this.$confirm('此操作将永久删除该菜单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            this.$refs.multipleTable.selection.forEach((item) => {
              this.DelIdList.push(item.id)
            })
            console.log(this.DelIdList)
            ApiServer.manager.delMenu(this.DelIdList).then((res) => {
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
      //   if (this.date != '') {
      //     this.queryForm.startDate = this.date[0]
      //     this.queryForm.endDate = this.date[1]
      //   }
      this.loading = true
      ApiServer.manager.getMenuTree(this.queryForm).then((res) => {
        if (res.code == 200) {
          this.tableData = res.data
        }
        this.loading = false
      })
    },
  },
  mounted() {},
}
</script>