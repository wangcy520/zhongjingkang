<template>
  <div>
    <el-card>
      <el-form :inline="true"
               :model="queryForm"
               class="demo-form-inline">
        <el-form-item prop="businessMode"
                      label="用户名">
                      <el-input v-model="queryForm.patientName"></el-input>
        </el-form-item>
        <el-form-item prop="businessMode"
                      label="订单号">
                      <el-input  v-model="queryForm.orderCode"></el-input>
        </el-form-item>
        <el-form-item prop="leaseTime"
                      label="下单时间">
          <el-date-picker v-model="date" type="daterange" value-format="yyyy-MM-dd HH:mm:ss"
            range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
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
        <el-table-column prop="orderCode"
                         label="订单号/(总疗程)">
        </el-table-column>
        <el-table-column prop=""
                         label="用户名">
          <template slot-scope="scope">{{scope.row.patient.name}}</template>
        </el-table-column>
        <el-table-column prop="patient.type"
                         label="用户类型">
          <template slot-scope="scope">{{scope.row.patient.type == 0 ? '近视' :scope.row.patient.type == 1 ? '弱视' : '斜视'}}</template>
        </el-table-column>
        <el-table-column prop=""
                         label="疗程周期">
          <template slot-scope="scope">{{scope.row.treatmentDays ? scope.row.treatmentDays : scope.row.treatmentCount}}</template>
        </el-table-column>
        <el-table-column prop="residueDays"
                         label="月卡剩余数量(天)">
                         <template slot-scope="scope">{{scope.row.residueDays == null ? '0' : scope.row.residueDays}}</template>
        </el-table-column>
        <el-table-column prop="residueCount"
                         label="次卡剩余数量(次)">
                         <template slot-scope="scope">{{scope.row.residueCount == null ? '0' : scope.row.residueCount}}</template>
        </el-table-column>
        <el-table-column prop="currentNum"
                         label="单疗程阶段">
            <template slot-scope="scope">{{scope.row.currentNum == null ? '0' : scope.row.currentNum}}/{{scope.row.treatmentDays ? scope.row.treatmentDays : scope.row.treatmentCount}}</template>
        </el-table-column>
        <el-table-column prop="orderTime"
                         label="下单时间(订单号)">
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <!-- <el-button type="text" size="small" @click="isStatus(scope.row)">启用</el-button> -->
            <el-button @click="toTreatment(scope.row)" size="small">疗程</el-button>
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
      doctorId:'',
      queryForm: {
        patientName:'',
        orderCode:'',
        startTime:'',
        endTime:'',
        pageParams: {
          pageNum: 1,
          pageSize: 10,
        },
        doctorId:this.$route.query.doctorId
      },
      date:'',
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
      this.queryForm.pageParams.pageNum = val;
      this.getTableData()
    },
    handleSizeChange(val) {
      this.queryForm.pageSize = val
      if (this.queryForm.pageParams.pageNum * val > this.tableTotals) return
      this.getTableData()
    },
    getTableData() {
      if (this.date != '') {
        this.queryForm.startTime = this.date[0]
        this.queryForm.endTime = this.date[1]
      }
      this.loading = true
      ApiServer.manager.getEquipmentList(this.queryForm).then((res) => {
        this.loading = false
        if (res.code == 200) {
          this.tableData = res.data.list
          this.tableTotals = Number(res.data.total)
        }
      })
    },
    toTreatment(row){
      let query = {
        orderId:row.id,
        orderCode:row.orderCode,
        item:row
      }
      this.$router.push({
        name:'4',
        query:query
      })
    }
  },
  mounted() {
    // this.doctorId = this.$route.query.doctorId
    this.getTableData()
  },
}
</script>


<style scoped>
.form{
  margin: 0 150px;
}
</style>