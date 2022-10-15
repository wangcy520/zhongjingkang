<template>
  <div>
    <el-card>
      <el-form :inline="true"
               :model="queryForm"
               class="demo-form-inline">
        <el-form-item prop="name"
                      label='视光中心'>
          <el-input type="text"
                    placeholder="请输入视光中心名称"
                    v-model="queryForm.name"></el-input>
        </el-form-item>
        <el-form-item prop="type"
                      label='属性'>
          <el-select v-model="queryForm.type">
            <el-option v-for="item in typeList"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="selectedOptions"
                      label='地区'>
          <el-cascader :options="options"
                       v-model="queryForm.selectedOptions"
                       @change="handleChange"></el-cascader>
        </el-form-item>
            <el-form-item label="创建时间"
                        prop="date">
            <el-date-picker v-model="queryForm.date"
                            type="datetime"
                            placeholder="选择日期时间"
                            value-format="yyyy-MM-dd HH:mm:ss">
            </el-date-picker>
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
        <el-table-column fixed
                         type="index"
                         label="数量"
                         width="50">
        </el-table-column>
        <el-table-column fixed
                         prop="name"
                         label="视光中心"
                         width="80">
        </el-table-column>
        <el-table-column prop="code"
                         label="编号"
                         width="60">
        </el-table-column>
        <el-table-column prop="type"
                         label="属性"
                         width="100">
        </el-table-column>
        <el-table-column prop="doctors"
                         label="医生"
                         width="100">
        </el-table-column>
        <el-table-column prop="users"
                         label="用户"
                         width="100">
        </el-table-column>
        <el-table-column prop="subCardUsers"
                         label="次卡用户"
                         width="100">
        </el-table-column>
        <el-table-column prop="monthlyCardUsers"
                         label="月卡用户"
                         width="100">
        </el-table-column>
        <el-table-column prop="activeUsers"
                         label="活跃用户"
                         width="100">
        </el-table-column>
        <el-table-column prop="expiredUsers"
                         label="到期用户"
                         width="100">
        </el-table-column>
        <el-table-column prop="equipment"
                         label="设备"
                         width="100">
        </el-table-column>
        <el-table-column prop="purchasedEquipment"
                         label="购买设备"
                         width="100">
        </el-table-column>
        <el-table-column prop="leasedEquipment"
                         label="租赁设备"
                         width="100">
        </el-table-column>
        <el-table-column prop="damagedEquipment"
                         label="坏损设备"
                         width="100">
        </el-table-column>
        <el-table-column prop="damagedPurchasedEquipment"
                         label="坏损购买设备"
                         width="100">
        </el-table-column>
        <el-table-column prop="damagedLeasedEquipment"
                         label="坏损租赁设备"
                         width="100">
        </el-table-column>
        <el-table-column prop="regionalDistribution"
                         label="地区分布"
                         width="100">
        </el-table-column>
        <el-table-column fixed="right"
                         label="操作"
                         width="100">
          <template slot-scope="scope">
            <!-- <el-button @click="editHandle(scope.row)"
                       type="primary"
                       size="small"
                       icon="el-icon-edit-outline">
                       </el-button> -->
            <i class="el-icon-edit-outline"
               :style="{color:'#409eff','font-size':'25px',cursor: 'pointer'}"
               @click="editHandle(scope.row)"></i>
            <i class="el-icon-delete"
               :style="{color:'red','font-size':'25px',cursor: 'pointer','margin-left': '10px'}"
               @click="delHandle(scope.row)"></i>
            <!-- <el-button @click="delHandle(scope.row)"
                       type="danger"
                       size="small"
                       icon="el-icon-delete">删除</el-button> -->
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
                 :visible.sync="hospitalInfoDialog"
                 @close="cancel('hospitalForm')"
                 >
        <el-form ref="hospitalForm"
                 :model="hospitalForm"
                 :rules="rules"
                 label-width="140px"
                 style="margin-right: 50px;">
          <el-form-item label="视光中心:"
                        prop="name">
            <el-input type="text"
                      placeholder="请输入视光中心"
                      v-model="hospitalForm.name"
                      style="width=250px"></el-input>
          </el-form-item>
          <el-form-item label=''
                        prop="code">
            <label slot="label">编&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
            <el-input type="text"
                      placeholder="请输入编码"
                      v-model="hospitalForm.code"
                      style="width=250px"></el-input>
          </el-form-item>
          <el-form-item prop="type"
                        label=''>
            <label slot="label">属&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;性:</label>
            <el-select v-model="hospitalForm.type">
              <el-option v-for="item in typeList"
                         :key="item.id"
                         :label="item.name"
                         :value="item.id">

              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="selectedOptions"
                        label=''>
            <label slot="label">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区:</label>
            <el-cascader :options="options"
                         v-model="hospitalForm.selectedOptions"
                         @change="handleChange"></el-cascader>
          </el-form-item>
          <!-- <el-form-item label="医院"
                        prop="name">
            <el-input type="text"
                      placeholder="请输入医院名"
                      v-model="hospitalForm.name"
                      style="width=250px"></el-input>
          </el-form-item>
          <el-form-item label="医院等级"
                        prop="level">
            <el-select v-model="hospitalForm.level"
                       placeholder="请选择">
              <el-option v-for="item in levelList"
                         :key="item"
                         :label="item"
                         :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="许可证有效期(月)"
                        prop="licenseDuration">
            <el-select v-model="hospitalForm.licenseDuration"
                       placeholder="请选择">
              <el-option v-for="item in licenseDList"
                         :key="item"
                         :label="item"
                         :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="许可证日期"
                        prop="licenseDate">
            <el-date-picker v-model="hospitalForm.licenseDate"
                            type="datetime"
                            placeholder="选择日期时间"
                            value-format="yyyy-MM-dd HH:mm:ss">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="医院编码"
                        prop="code">
            <el-input type="text"
                      placeholder="请输入医院编码"
                      v-model="hospitalForm.code"
                      style="width=250px"></el-input>
          </el-form-item>
          <el-form-item label="医院许可证"
                        prop="license">
            <el-input type="text"
                      placeholder="请输入医院许可证"
                      v-model="hospitalForm.license"
                      style="width=250px"></el-input>
          </el-form-item>
          <el-form-item label="医院类型"
                        prop="type">
            <el-input type="text"
                      placeholder="请输入医院类型"
                      v-model="hospitalForm.type"
                      style="width=250px"></el-input>
          </el-form-item>
          <el-form-item label="所有权"
                        prop="ownershipFroms">
            <el-input type="text"
                      placeholder="请输入所有权"
                      v-model="hospitalForm.ownershipFroms"
                      style="width=250px"></el-input>
          </el-form-item>
          <el-form-item label="邮编"
                        prop="postal">
            <el-input type="text"
                      placeholder="请输入邮编"
                      v-model="hospitalForm.postal"
                      style="width=250px"></el-input>
          </el-form-item>
          <el-form-item label="地址"
                        prop="address">
            <el-input type="text"
                      placeholder="请输入所有权"
                      v-model="hospitalForm.address"
                      style="width=250px"></el-input>
          </el-form-item>
          <el-form-item label="电话"
                        prop="phone">
            <el-input type="text"
                      placeholder="请输入电话号码"
                      v-model="hospitalForm.phone"></el-input>
          </el-form-item> -->
        </el-form>
        <span slot="footer"
              class="dialog-footer">
          <el-button @click="cancel('hospitalForm')">取 消</el-button>
          <el-button type="primary"
                     @click="submitHospitalInfo('hospitalForm')"
                     :disabled="buttonDisabled">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import ApiServer from '@/api/apiServer'
import { regionData } from 'element-china-area-data'
export default {
  data() {
    return {
      options: regionData,
      buttonDisabled: false,
      loading: false,
      editTitle: '',
      isAdd: false,
      changePwdDialog: false,
      hospitalInfoDialog: false,
      tableData: [],
      date: '',
      queryForm: {
        type: null,
        selectedOptions: [],
        startDate: '',
        endDate: '',
        pageParams: {
          pageNum: 1,
          pageSize: 10,
        },
      },
      hospitalForm: {
        name: '',
        address: '',
        city: '',
        code: '',
        description: '',
        level: '',
        license: '',
        licenseDate: '',
        licenseDuration: '',
        ownershipFroms: '',
        phone: '',
        postalCode: '',
        province: '',
      },
      roleList: [],
      rules: {
        name: [{ required: true, message: '请输入医院名', trigger: 'blur' }],
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
      levelList: [
        '三甲',
        '二甲',
        '一甲',
        '三乙',
        '二乙',
        '一乙',
        '三丙',
        '二丙',
        '一丙',
      ],
      licenseDList: [6, 12, 36, 60],
      typeList: [
        {
          name: '全部',
          id: null,
        },
        {
          name: '医院',
          id: '0',
        },
        {
          name: '机构',
          id: '1',
        },
      ],
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
      this.hospitalInfoDialog = true
      row.status = Number(row.status)
      this.editTitle = '编辑医院'
      this.$nextTick(() => {
        this.hospitalForm = JSON.parse(JSON.stringify(row))
      })
    },
    addHandle() {
      this.isAdd = true
      this.buttonDisabled = false
      this.hospitalInfoDialog = true
      this.editTitle = '新增医院'
      ApiServer.select.selectRoleList().then((res) => {
        if (res.code == 200) {
          this.roleList = res.data
        }
      })
    },
    delHandle(row) {
      this.$confirm('此操作将永久删除该医院, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          ApiServer.manager.delHospital({ id: row.id }).then((res) => {
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
      this.hospitalInfoDialog = false
    },
    submitHospitalInfo(form) {
      this.buttonDisabled = true
      this.$refs.hospitalForm.validate((valid) => {
        if (valid) {
          var requestAddr =
            this.isAdd == false ? 'updateHospitalInfo' : 'addHospital'
          ApiServer.manager[requestAddr](this.hospitalForm).then((res) => {
            if (res.code == 200) {
              this.hospitalInfoDialog = false
              this.$refs[form].resetFields()
              this.hospitalForm.roleIds = []
              this.getTableData()
            }
          })
        }
      })
    },
    batchDel() {
      this.DelIdList = []
      if (this.$refs.multipleTable.selection.length > 0) {
        this.$confirm('此操作将永久删除该医院, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            this.$refs.multipleTable.selection.forEach((item) => {
              this.DelIdList.push(item.id)
            })
            console.log(this.DelIdList)
            ApiServer.manager.batchDelHospital(this.DelIdList).then((res) => {
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
      ApiServer.manager.getHospitalList(this.queryForm).then((res) => {
        if (res.code == 200) {
          this.tableData = res.data.list
          this.tableTotals = Number(res.data.total)
        }
        this.loading = false
      })
    },
    handleChange() {},
  },
  mounted() {},
}
</script>