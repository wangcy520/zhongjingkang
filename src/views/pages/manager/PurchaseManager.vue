<template>
  <div>
    <el-card>
      <el-form :inline="true"
               :model="queryForm"
               class="demo-form-inline">
        <el-form-item label="用户名"
                      prop="name">
          <el-input type="text"
                    v-model="queryForm.name"
                    placeholder="请输入用户名"
                    style="width=250px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="getTableData()"
                     icon="el-icon-search"
                     style="color: #409EFF"
                     round>查询</el-button>
        </el-form-item>
      </el-form>
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
            <p v-else></p>
          </template>
        </el-table-column>
        <el-table-column prop="code"
                         label="编号"
                         width="200">
        </el-table-column>
        <el-table-column prop="parentsName"
                         label="家长"
                         width="150">
        </el-table-column>
        <el-table-column prop=""
                         label="关系"
                         width="150">
        </el-table-column>
        <el-table-column prop="phone"
                         label="手机"
                         width="150">
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
    <el-card>
      <el-form ref="purchaseForm"
               :model="purchaseForm"
               :rules="purchaseRules"
               label-width="80px"
               style="margin-top: 25px;">
        <el-form-item>
          <el-radio v-model="purchaseForm.type"
                    :label="0">次卡</el-radio>
          <el-radio v-model="purchaseForm.type"
                    :label="1">月卡</el-radio>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="购买月卡"
                          prop="count"
                          v-if="purchaseForm.type == 1">
              <el-input type="text"
                        v-model="purchaseForm.count"
                        style="width=250px"></el-input>
            </el-form-item>
            <el-form-item label="购买次卡"
                          prop="count"
                          v-if="purchaseForm.type == 0">
              <el-input type="text"
                        v-model="purchaseForm.count"
                        style="width=250px"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="有效期"
                          prop="usefulLife">

              <el-date-picker v-model="purchaseForm.usefulLife"
                              type="date"
                              placeholder="选择日期"
                              value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="赠送额度"
                          prop="giftLimit">
              <el-input type="text"
                        v-model="purchaseForm.giftLimit"
                        style="width=250px"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card style="text-align: right">
      <!-- <el-button @click="cancel('userInfoForm','purchaseForm')">取 消</el-button> -->
      <el-button type="primary"
                 @click="purchaseSubmit('purchaseForm')"
                 :disabled="buttonDisabled">确 定</el-button>
    </el-card>
  </div>
</template>
<script>
import ApiServer from '@/api/apiServer'
export default {
  data() {
    return {
      tableTotals: 1,
      newYear: '',
      buttonDisabled: false,
      userInfoForm: {},
      purchaseForm: {
        patientId: '',
        count: 0,
        type: 0,
        giftLimit: 0,
        usefulLife: '',
      },
      queryForm: {
        name: null,
        pageParams: {
          pageNum: 1,
          pageSize: 10,
        },
      },
      tableData: [],
      purchaseRules: {},
      userRules: {},
      loading: false,
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
    }
  },
  components: {},
  created() {},
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
    purchaseSubmit() {
      console.log(this.$refs.multipleTable.selection)
      if (this.$refs.multipleTable.selection.length == 0) {
        this.$message({
          type: 'info',
          message: '请选择用户',
        })
        return
      }
      this.purchaseForm.patientId = this.$refs.multipleTable.selection[0].id

      this.$confirm(
        '用户[' +
          this.$refs.multipleTable.selection[0].name +
          ']购买, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      )
        .then(() => {
          ApiServer.manager.buyTimes(this.purchaseForm).then((res) => {
            if (res.code == 200) {
              this.$message({
                type: 'success',
                message: '购买成功!',
              })
              this.getTableData()
              this.purchaseForm.count = 0;
              this.purchaseForm.usefulLife = '';
              this.purchaseForm.giftLimit = 0;
            } else {
              this.$message({
                type: 'info',
                message: '购买失败，请联系管理员！',
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
    cancel() {},
    getUserInfo() {
      this.userInfoForm = this.$route.params
      console.log('userInfoForm', this.userInfoForm)
    },
    getTableData() {
      this.loading = true
      ApiServer.manager.getUserInfoList(this.queryForm).then((res) => {
        if (res.code == 200) {
          this.tableData = res.data.list
          this.tableTotals = Number(res.data.total)
        }
        this.loading = false
      })
    },
  },
  mounted() {
    var date = new Date()
    this.newYear = date.getFullYear()
    this.getUserInfo()
  },
}
</script>
