<template>
  <div>
    <el-card>
      <el-form :inline="true"
               :model="queryForm"
               class="demo-form-inline">
        <el-form-item prop="businessMode"
                      label="用户名">
                      <el-input></el-input>
        </el-form-item>
        <el-form-item prop="businessMode"
                      label="订单号">
                      <el-input></el-input>
        </el-form-item>
        <el-form-item prop="leaseTime"
                      label="下单时间">
          <el-select v-model="queryForm.leaseTime" size="mini">
            <el-option v-for="item in leaseTimeList"
                       :key="item.code"
                       :label="item.name"
                       :value="item.code">
            </el-option>
          </el-select>
        </el-form-item>
        <el-button @click="getTableData()"
                   icon="el-icon-search"
                   style="color: #409EFF"
                   round>查询</el-button>
      </el-form>

      <el-table :data="tableData"
                v-loading="loading"
                ref="multipleTable">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="code"
                         label="订单号/(总疗程)">
        </el-table-column>
        <el-table-column prop="businessMode"
                         label="用户名">
          <template slot-scope="scope">{{scope.row.businessMode == '1' ? '租赁' : '购买'}}</template>
        </el-table-column>
        <el-table-column prop="days"
                         label="用户类型">
        </el-table-column>
        <el-table-column prop="count"
                         label="疗程周期">
        </el-table-column>
        <el-table-column prop="usefulLife"
                         label="月卡剩余数量(天)">
        </el-table-column>
        <el-table-column prop="status"
                         label="次卡剩余数量(次)">
          <template slot-scope="scope">{{scope.row.status == '1' ? '正常运行' : '设备故障'}}</template>
        </el-table-column>
        <el-table-column prop="usefulLife"
                         label="单疗程阶段">
        </el-table-column>
        <el-table-column prop="usefulLife"
                         label="下单时间(订单号)">
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="isStatus(scope.row)">启用</el-button>
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
  </div>
</template>
<script>
import ApiServer from '@/api/apiServer'
export default {
  data() {
    return {
      queryForm: {
        pageParams: {
          pageNum: 1,
          pageSize: 10,
        },
      },
      tableTotals: 1,
      tableData: [],
      loading: false,
      businessModeList: [
        {
          name: '租赁',
          code: '0',
        },
        {
          name: '购买',
          code: '1',
        },
      ],
      leaseTimeList: [
        {
          name: '一年',
          code: '1',
        },
        {
          name: '二年',
          code: '2',
        },
        {
          name: '三年',
          code: '3',
        },
      ],
      statusList: [
        {
          name: '正常运行',
          code: '0',
        },
        {
          name: '设备故障',
          code: '1',
        },
      ],
    }
  },
  components: {},
  created() {},
  methods: {
    handleCurrentChange(val) {
      this.queryForm.pageParams.pageNum = val
      this.getTableData()
    },
    handleSizeChange(val) {
      this.queryForm.pageSize = val
      if (this.queryForm.pageParams.pageNum * val > this.tableTotals) return
      this.getTableData()
    },
    getTableData() {
      this.loading = true
      ApiServer.manager.getEquipmentList(this.queryForm).then((res) => {
        this.loading = false
        if (res.code == 200) {
          this.tableData = res.data.list
          this.tableTotals = Number(res.data.total)
        }
      })
    },
  },
  mounted() {
    this.getTableData()
  },
}
</script>


<style scoped>
.form{
  margin: 0 150px;
}
</style>