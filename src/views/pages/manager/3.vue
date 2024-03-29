<template>
  <div>
    <el-card>
      <el-form :inline="true" :model="queryForm" class="demo-form-inline">
        <el-row :gutter="20">
          <el-col :span="20">
            <el-form-item prop="businessMode" label="用户名">
              <el-input v-model="queryForm.patientName"></el-input>
            </el-form-item>
            <el-form-item prop="businessMode" label="订单号">
              <el-input v-model="queryForm.orderCode"></el-input>
            </el-form-item>
            <el-form-item prop="leaseTime" label="下单时间">
              <el-date-picker v-model="date" type="daterange" value-format="yyyy-MM-dd HH:mm:ss" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button @click="getTableData()" icon="el-icon-search" style="color: #409EFF" round>查询</el-button>
          </el-col>
        </el-row>
      </el-form>
      <div>订单总数：{{ orderCount }}</div>
      <el-table :data="tableData" v-loading="loading" ref="multipleTable">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="orderCode" label="订单号/(总疗程)">
        </el-table-column>
        <el-table-column prop="" label="用户名">
          <template slot-scope="scope">{{ scope.row.patient.name }}</template>
        </el-table-column>
        <el-table-column prop="patient.type" label="用户类型">
          <template slot-scope="scope">{{ scope.row.patient.type == 0 ? '近视' : scope.row.patient.type == 1 ? '弱视'
              : scope.row.type == 2
                ? "弱视"
                : ''
          }}</template>
        </el-table-column>
        <el-table-column prop="" label="疗程周期">
          <template slot-scope="scope">{{ scope.row.treatmentDays ? scope.row.treatmentDays :
              scope.row.treatmentCount
          }}</template>
        </el-table-column>
        <el-table-column prop="residueDays" label="月卡剩余数量(天)">
          <template slot-scope="scope">
            <span v-if="scope.row.treatmentType == 0"> - </span>
            <span v-else>{{ scope.row.residueDays == null ? '0' : scope.row.residueDays }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="residueCount" label="次卡剩余数量(次)">
          <template slot-scope="scope">
            <span v-if="scope.row.treatmentType == 1"> - </span>
            <span v-else>{{ scope.row.residueCount == null ? '0' : scope.row.residueCount }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="currentNum" label="单疗程阶段">
          <template slot-scope="scope">{{ scope.row.currentNum == null ? '0' :
              scope.row.currentNum
          }}/{{ scope.row.treatmentDays ? scope.row.treatmentDays :
    scope.row.treatmentCount
}}</template>
        </el-table-column>
        <el-table-column prop="orderTime" label="下单时间(订单号)">
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <!-- <el-button type="text" size="small" @click="isStatus(scope.row)">启用</el-button> -->
            <el-button @click="toTreatment(scope.row)" size="small" type="primary" plain>疗程</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="queryForm.pageParams.pageNum" :page-sizes="[10, 50, 100, 200]" :page-size="queryForm.pageParams.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableTotals">
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
      doctorId: '',
      queryForm: {
        patientName: '',
        orderCode: '',
        pageParams: {
          pageNum: 1,
          pageSize: 10,
          startTime: '',
          endTime: ''
        },
        doctorId: this.$route.query.doctorId
      },
      date: '',
      tableTotals: 1,
      tableData: [],
      loading: false,
      businessModeList: [
        {
          name: '租赁',
          code: '0'
        },
        {
          name: '购买',
          code: '1'
        }
      ],
      leaseTimeList: [
        {
          name: '一年',
          code: '1'
        },
        {
          name: '二年',
          code: '2'
        },
        {
          name: '三年',
          code: '3'
        }
      ],
      statusList: [
        {
          name: '正常运行',
          code: '0'
        },
        {
          name: '设备故障',
          code: '1'
        }
      ],
      orderCount: 0
    }
  },
  components: {},
  created() {},
  methods: {
    handleCurrentChange(val) {
      this.queryForm.pageParams.pageNum = val
      this.getTableData()
    },
    queryCount() {
      let params = {
        doctorId: this.$route.query.doctorId
      }
      ApiServer.manager.queryCount(params).then(res => {
        if (res.code == 200) {
          this.orderCount = res.data.orderCount
        }
      })
    },
    handleSizeChange(val) {
      this.queryForm.pageParams.pageSize = val
      if (this.queryForm.pageParams.pageNum * val > this.tableTotals) return
      this.getTableData()
    },
    getTableData() {
      if (this.date) {
        this.queryForm.pageParams.startTime = this.date[0]
        this.queryForm.pageParams.endTime = this.date[1]
      } else {
        this.queryForm.pageParams.startTime = ''
        this.queryForm.pageParams.endTime = ''
      }
      this.loading = true
      ApiServer.manager.getEquipmentList(this.queryForm).then(res => {
        this.loading = false
        if (res.code == 200) {
          this.tableData = res.data.list
          this.tableTotals = Number(res.data.total)
        }
      })
    },
    toTreatment(row) {
      let query = {
        orderId: row.id,
        orderCode: row.orderCode,
        item: row
      }
      sessionStorage.setItem('query', JSON.stringify(query))
      this.$router.push({
        name: '4',
        query: query
      })
    }
  },
  mounted() {
    // this.doctorId = this.$route.query.doctorId
    this.getTableData()
    this.queryCount()
  }
}
</script>


<style scoped>
.form {
  margin: 0 150px;
}
</style>