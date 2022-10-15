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
      <el-form-item prop="date">

      </el-form-item>
    </el-form>
    <div style="text-align: right">
      <div>累计训练{{cumulativeTrain}}次</div>
      <div>本月训练{{mouthTrain}}次</div>
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
        cumulativeTrain: 0,
        monthTrain: 0,
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