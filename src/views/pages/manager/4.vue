<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="2">
          <div class="grid-content">用户名:{{ item.patient ? item.patient.name : '' }}</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">疗程总数:{{ item.treatmentType == 0 ? item.treatmentCount : item.treatmentDays }}</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">本次疗程:{{ item.currentNum ? item.currentNum : 0 }}/{{ item.treatmentType == 0 ?
              item.treatmentCount : item.treatmentDays
          }}</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content" v-if="item.treatmentType == 0">频次:{{ item.usageCount }} / {{ item.usageType == 0 ?
              '天' :
              '周'
          }}</div>
          <div class="grid-content" v-else>频次:{{ Math.floor((item.treatmentCount == null ? 0 : item.treatmentCount) /
              (item.treatmentDays == null ? 0 : item.treatmentDays))
          }}/天</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">疗程周期: {{ item.treatmentType == 0 ? item.treatmentCount : item.treatmentDays }}</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">疗程周期合计:{{ item.treatmentCount || 0 }}次</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">训练清单:{{ tableData.length }}个</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">训练时间:{{ count }}分钟</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">定制时间:{{ item.orderTime }}</div>
        </el-col>
      </el-row>
      <el-table :data="tableData" v-loading="loading" ref="multipleTable">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="name" label="项目">
        </el-table-column>
        <el-table-column prop="optimset" label="训练时间">
          <template slot-scope="scope">{{ scope.row.optimset.trainingTime }}</template>
        </el-table-column>
        <el-table-column prop="optimset.threshold" label="阈值">
        </el-table-column>
        <el-table-column prop="optimset.eyes" label="用眼模式">
          <template slot-scope="scope">{{ scope.row.optimset.eyes == '0' ? '左眼' : scope.row.optimset.eyes == '1' ?
              '右眼' : '双眼'
          }}</template>
        </el-table-column>
        <el-table-column prop="optimset.brightness" label="亮度">
        </el-table-column>
        <el-table-column prop="optimset.temperature" label="色温">
          <template slot-scope="scope">{{ scope.row.optimset.temperature == '0' ? '标准' :
              scope.row.optimset.temperature == '1' ? '柔和' :
                scope.row.optimset.temperature == '2' ? '冷色' : '暖色'
          }}
          </template>
        </el-table-column>
        <el-table-column prop="usefulLife" label="订单号">
          <template slot-scope="scope">{{ $route.query.orderCode || '' }}</template>
        </el-table-column>
        <!-- <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="isStatus(scope.row)">启用</el-button>
          </template>
        </el-table-column> -->
      </el-table>
      <!-- <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="queryForm.pageNum" :page-sizes="[10, 50, 100, 200]" :page-size="queryForm.pageSize"
          layout="total, sizes, prev, pager, next, jumper" :total="tableTotals">
        </el-pagination>
      </div> -->
    </el-card>
  </div>
</template>
<script>
import ApiServer from '@/api/apiServer'
export default {
  data () {
    return {
      queryForm: {
        orderId: this.$route.query.orderId
      },
      tableTotals: 1,
      tableData: [],
      loading: false,
      item: {},
      count: 0
    }
  },
  components: {},
  created () { },
  methods: {
    handleCurrentChange (val) {
      this.queryForm.pageParams.pageNum = val
      this.getTableData()
    },
    handleSizeChange (val) {
      this.queryForm.pageSize = val
      if (this.queryForm.pageParams.pageNum * val > this.tableTotals) return
      this.getTableData()
    },
    getTableData () {
      let count = 0
      this.loading = true
      ApiServer.manager.getByOrderId(this.queryForm).then((res) => {
        this.loading = false
        if (res.code == 200) {
          res.data.forEach(e => {
            e.optimset = JSON.parse(e.optimset)
            count = count + e.optimset.trainingTime
          });
          this.count = count
          this.tableData = res.data
          this.tableTotals = Number(res.data.total)
        }
      })
    },
  },
  mounted () {
    this.item = this.$route.query.item
    console.log(this.item)
    this.getTableData()
  },
}
</script>


<style scoped>
.form {
  margin: 0 150px;
}

.grid-content {
  color: #333;
  padding-bottom: 20px;
  /* font-weight: 600; */
}
</style>