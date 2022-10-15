<template>
  <div>
    <el-card>
      <el-form :inline="true"
               :model="queryForm"
               class="demo-form-inline">
        <el-form-item prop="businessMode"
                      label="商业模式">
          <el-select v-model="queryForm.businessMode" size="mini">
            <el-option v-for="item in businessModeList"
                       :key="item.code"
                       :label="item.name"
                       :value="item.code">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="leaseTime"
                      label="租赁时间">
          <el-select v-model="queryForm.leaseTime" size="mini">
            <el-option v-for="item in leaseTimeList"
                       :key="item.code"
                       :label="item.name"
                       :value="item.code">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="有效期"
                      prop="usefulLife">
          <el-date-picker v-model="queryForm.usefulLife"
                          type="date"
                          placeholder="选择日期" size="mini">
          </el-date-picker>
        </el-form-item>
        <el-form-item prop="status"
                      label="当前状态">
          <el-select v-model="queryForm.status" size="mini">
            <el-option v-for="item in statusList"
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
                style="width: 100%"
                v-loading="loading"
                ref="multipleTable">
        <el-table-column label="设备清单"
                         type="index"
                         width="100">
        </el-table-column>
        <el-table-column prop="code"
                         label="设备编号"
                         width="200">
        </el-table-column>
        <el-table-column prop="businessMode"
                         label="商业模式"
                         width="200">
          <template slot-scope="scope">{{scope.row.businessMode == '1' ? '租赁' : '购买'}}</template>
        </el-table-column>
        <el-table-column prop="days"
                         width="200"
                         label="租赁时间">
        </el-table-column>
        <el-table-column prop="count"
                         width="200"
                         label="累计次数">
        </el-table-column>
        <el-table-column prop="usefulLife"
                         width="200"
                         label="有效期">
        </el-table-column>
        <el-table-column prop="status"
                         width="150"
                         label="当前状态">
          <template slot-scope="scope">{{scope.row.status == '1' ? '正常运行' : '设备故障'}}</template>
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
        if (res.code == 200) {
          this.tableData = res.data.list
          this.tableTotals = Number(res.data.total)
        }
        this.loading = false
      })
    },
  },
  mounted() {
    this.getTableData()
  },
}
</script>


<style scoped>
</style>