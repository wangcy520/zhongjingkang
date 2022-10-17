<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="2"><div class="grid-content">用户名：A11</div></el-col>
        <el-col :span="2"><div class="grid-content">疗程总数：1</div></el-col>
        <el-col :span="2"><div class="grid-content">本次疗程：1/30</div></el-col>
        <el-col :span="2"><div class="grid-content">频次2</div></el-col>
        <el-col :span="2"><div class="grid-content">疗程周期</div></el-col>
        <el-col :span="2"><div class="grid-content">疗程周期合计</div></el-col>
        <el-col :span="2"><div class="grid-content">训练清单</div></el-col>
        <el-col :span="2"><div class="grid-content">训练时间</div></el-col>
        <el-col :span="2"><div class="grid-content">购买编号</div></el-col>
        <el-col :span="2"><div class="grid-content">定制时间</div></el-col>
      </el-row>
      <el-table :data="tableData"
                v-loading="loading"
                ref="multipleTable">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="code"
                         label="项目">
        </el-table-column>
        <el-table-column prop="businessMode"
                         label="训练时间">
          <template slot-scope="scope">{{scope.row.businessMode == '1' ? '租赁' : '购买'}}</template>
        </el-table-column>
        <el-table-column prop="days"
                         label="阈值">
        </el-table-column>
        <el-table-column prop="count"
                         label="用眼模式">
        </el-table-column>
        <el-table-column prop="usefulLife"
                         label="亮度">
        </el-table-column>
        <el-table-column prop="status"
                         label="色温">
          <template slot-scope="scope">{{scope.row.status == '1' ? '正常运行' : '设备故障'}}</template>
        </el-table-column>
        <el-table-column prop="usefulLife"
                         label="订单号">
        </el-table-column>
        <!-- <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="isStatus(scope.row)">启用</el-button>
          </template>
        </el-table-column> -->
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
.grid-content{
  color: #333;
  padding-bottom: 20px;
  font-weight: 600;
}
</style>