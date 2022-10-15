<template>
  <div>
    <el-form :inline="true"
             :model="queryForm"
             class="demo-form-inline">
      <el-form-item prop="querySelect">
        <el-select v-model="queryForm.querySelect">
          <el-option v-for="item in querySelectList"
                     :key="item.id"
                     :label="item.name"
                     :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="queryDate">
        <el-select v-model="queryForm.queryDate">
          <el-option v-for="item in queryDateList"
                     :key="item.id"
                     :label="item.name"
                     :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div style="text-align: right">
      <div>累计购买次数{{cumulativePurchaseNum}}次&nbsp;&nbsp;月卡次数{{monthlyCard}}天</div>
      <div>次数购买{{purchaseNum}}次&nbsp;&nbsp;剩余次数{{surplusNum}}次&nbsp;&nbsp;月卡购买{{purchaseMonthlyCard}}天&nbsp;&nbsp;剩余{{surplusDay}}天</div>
    </div>

    <el-table :data="tableData"
                style="width: 100%"
                v-loading="loading"
                ref="multipleTable" :show-header="false">
        <el-table-column type="selection"
                         width="55">
        </el-table-column>
        <el-table-column prop="name"
                         width="120"
                         >
        </el-table-column>
    </el-table>
  </div>
</template>
<script>
import ApiServer from '@/api/apiServer'
export default {
  data() {
    return {
      cumulativePurchaseNum: 0,
      purchaseNum: 0,
      monthlyCard: 0,
      surplusNum: 0,
      purchaseMonthlyCard: 0,
      surplusDay: 0,
      queryForm: {
        querySelect: '',
        queryDate: '',
      },
      querySelectList: [],
      queryDateList: [],
      loading: false,
      tableData: [],
    }
  },
  components: {},
  created() {},
  methods: {
    getUserInfo() {
      this.userInfoForm = this.$route.params
      console.log('userInfoForm', this.userInfoForm)
    },
  },
  mounted() {
    this.getUserInfo()
  },
}
</script>


<style scoped>
</style>