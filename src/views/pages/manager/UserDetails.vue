<template>
  <div>
    <div class="title">用户信息基础</div>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">用户名：{{ item.name }}</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">性别：{{ item.sex == '0' ? '男' : '女' }}</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">年龄： {{ newYear - item.birthday.split("-")[0] }}岁
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">手机号：{{ item.phone }}</div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">用户编号：{{ item.code }}</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">视训师：{{ item.doctorName }}</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">月卡剩余(天)：{{ item.residueDays }}</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">次卡剩余(次)：{{ item.residueCount }}</div>
        </el-col>
      </el-row>
    </el-card>
    <div class="title">用户健康档案</div>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-row :gutter="20">
            <el-col :span="24">
              <div class="grid-content bg-purple">*视力</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">裸眼视力</div>
              <div class="grid-content bg-purple">矫正视力</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">左眼
                <!-- <span>{{ userArchives.eyesight ? userArchives.eyesight.leftUcva : '' }}</span> -->
                <el-input disabled v-model="userArchives.eyesight.leftUcva" style="width:50px"></el-input>
              </div>
              <div class="grid-content bg-purple">左眼
                <!-- <span>{{ userArchives.eyesight ? userArchives.eyesight.leftCva : '' }}</span> -->
                <el-input disabled v-model="userArchives.eyesight.leftCva" style="width:50px"></el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">右眼
                <!-- <span>{{ userArchives.eyesight ? userArchives.eyesight.rightUcva : '' }}</span> -->
                <el-input disabled v-model="userArchives.eyesight.rightUcva" style="width:50px"></el-input>
              </div>
              <div class="grid-content bg-purple">右眼
                <!-- <span>{{ userArchives.eyesight ? userArchives.eyesight.rightUcva : '' }}</span> -->
                <el-input disabled v-model="userArchives.eyesight.rightUcva" style="width:50px"></el-input>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row :gutter="20">
            <el-col :span="24">
              <div class="grid-content bg-purple">*屈光度</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple" style="opacity: 0;">1</div>
              <div class="grid-content bg-purple">左眼</div>
              <div class="grid-content bg-purple">右眼</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">球镜
              </div>
              <div class="grid-content bg-purple">
                <el-input disabled v-model="userArchives.dioptric.leftSphere" style="width:80px"></el-input>
                <!-- <span>{{ userArchives.dioptric ? userArchives.dioptric.leftSphere : '' }}</span> -->
              </div>
              <div class="grid-content bg-purple">
                <el-input disabled v-model="userArchives.dioptric.rightSphere" style="width:80px"></el-input>
                <!-- <span>{{ userArchives.dioptric ? userArchives.dioptric.rightSphere : '' }}</span> -->
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">柱镜</div>
              <div class="grid-content bg-purple">
                <el-input disabled v-model="userArchives.dioptric.leftCylinder" style="width:80px"></el-input>
                <!-- <span>{{ userArchives.dioptric ? userArchives.dioptric.leftCylinder : '' }}</span> -->
              </div>
              <div class="grid-content bg-purple">
                <el-input disabled v-model="userArchives.dioptric.rightCylinder" style="width:80px"></el-input>
                <!-- <span>{{ userArchives.dioptric ? userArchives.dioptric.rightCylinder : '' }}</span> -->
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">轴位</div>
              <div class="grid-content bg-purple">
                <el-input disabled v-model="userArchives.dioptric.leftAxial" style="width:80px"></el-input>
                <!-- <span>{{ userArchives.dioptric ? userArchives.dioptric.leftAxial : '' }}</span> -->
              </div>
              <div class="grid-content bg-purple">
                <el-input disabled v-model="userArchives.dioptric.rightAxial" style="width:80px"></el-input>
                <!-- <span>{{ userArchives.dioptric ? userArchives.dioptric.rightAxial : '' }}</span> -->
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-button icon="el-icon-plus" type="success" style="margin-top:30px;" @click="buy" plain>购买</el-button>
    </el-card>
    <div class="title">购买记录</div>
    <el-card>
      <el-table :header-cell-style="{ background: '#409eff' }" :data="tableData" style="width: 100%" v-loading="loading"
        ref="multipleTable">
        <el-table-column prop="name" label="用户名">
          <template>
            <span>{{ item.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="purchaseType" label="类型">
          <template slot-scope="scope">
            <span>{{ scope.row.purchaseType == 0 ? '次卡' : '月卡' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="purchaseCount" label="购买数量">
        </el-table-column>
        <el-table-column prop="residueCount" label="剩余数量">
        </el-table-column>
        <el-table-column prop="purchaseTime" label="购买时间">
        </el-table-column>
        <el-table-column prop="usefulLife" label="有效期">
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="pageParams.pageNum" :page-sizes="[10, 50, 100, 200]" :page-size="pageParams.pageSize"
          layout="total, sizes, prev, pager, next, jumper" :total="tableTotals">
        </el-pagination>
      </div>
    </el-card>

    <el-dialog title="购买信息" :visible.sync="buyModel" width="50%">
      <el-form ref="form" :model="buyForm" label-width="80px" :inline="true" class="userForm" :rules="rules">
        <el-row>
          <el-col :span="24">
            <el-form-item style="width:100%;text-align: center;" prop="type">
              <el-radio v-model="buyForm.type" label="0">次卡</el-radio>
              <el-radio v-model="buyForm.type" label="1">月卡</el-radio>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="数量" prop="count">
              <el-input v-model="buyForm.count" style="width:200px"></el-input>
            </el-form-item>
          </el-col>
          <!-- <el-form-item label="赠送额度">
          <el-input style="width:300px"></el-input>
        </el-form-item> -->
          <el-col :span="12">
            <el-form-item label="有效期" prop="usefulLife">
              <el-date-picker v-model="buyForm.usefulLife" type="date" style="width:200px" placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="价格">
              <el-input disabled style="width:200px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="卡号">
              <el-input disabled :value="phone" style="width:200px"></el-input>
            </el-form-item>
          </el-col>
          <el-form-item style="width:100%;text-align: center;">
            <span>总购买记录：月卡：{{ item.days }}天 次卡：{{ item.count }}次</span>
          </el-form-item>
          <el-form-item style="width:100%;text-align: center;">
            <span>总剩余次数：月卡：{{ item.residueDays }}天 次卡：{{ item.residueCount }}次</span>
          </el-form-item>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="buyModel = false">取 消</el-button>
        <el-button type="primary" @click="confirm" plain>确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
import ApiServer from '@/api/apiServer'
export default {
  data() {
    return {
      id: '',
      newYear: "",
      tableData: [],
      buyForm: {
        count: '',
        usefulLife: '',
        type: '',
        patientId: '',
      },
      loading: false,
      buyModel: false,
      radio: '1',
      item: {},
      userArchives: {},
      pageParams: {
        pageNum: 1,
        pageSize: 10
      },
      tableTotals: 1,
      rules: {
        type: [
          { required: true, message: '请选择次卡/月卡', trigger: 'blur' },
        ],
        count: [
          { required: true, message: '请选择数量', trigger: 'blur' },
        ],
        usefulLife: [
          { required: true, message: '请选择有效期', trigger: 'blur' },
        ],
      }

    }
  },
  created() { },
  methods: {
    buy() {
      this.buyModel = true
    },
    confirm() {
      let that = this;
      that.$refs.form.validate((valid) => {
        if (valid) {
          this.$confirm('确定继续购买?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            that.buyForm.patientId = this.item.id
            ApiServer.manager.buyTimes(this.buyForm).then(res => {
              if (res.code == 200) {
                that.buyModel = false;
                that.getbuyList();
                this.getDetailInfo();
                that.$message({ message: '操作成功', type: 'success' })
              }
            })
          })
        }
      });
    },
    getbuyList() {
      let params = {
        patientId: this.item.id,
        pageParams: {
          pageNum: this.pageParams.pageNum,
          pageSize: this.pageParams.pageSize
        }
      }
      ApiServer.manager.getbuyList(params).then(res => {
        if (res.code == 200) {
          this.tableData = res.data.list
        }
      })
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.pageParams.pageNum = val
      this.getbuyList()
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pageParams.pageSize = val
      if (this.pageParams.pageNum * val > this.tableTotals) return
      this.getbuyList()
    },
    getDetailInfo() {
      let params = {
        id: this.id
      }
      ApiServer.manager.detail(params).then(res => {
        if (res.code == 200) {
          this.item = res.data
          this.phone = this.item.phone
        }
      })
    }
    // tabaleHeaderStyle ({ row, column, rowIndex, columnIndex }) {
    //   if (rowIndex == 0) {
    //     return 'background:#b8e4fb'
    //   }
    // }
  },
  mounted() {
    this.id = this.$route.query.id;
    if (!this.item.healthRecord) {
      this.userArchives = {
        eyesight: {
          leftUcva: "",
          leftCva: "",
          rightUcva: "",
          rightCva: ""
        },
        dioptric: {
          leftSphere: "",
          leftCylinder: "",
          leftAxial: "",
          rightSphere: "",
          rightCylinder: "",
          rightAxial: ""
        }
      };
    } else {
      this.userArchives = JSON.parse(this.item.healthRecord)
    }
    this.getbuyList();
    var date = new Date();
    this.newYear = date.getFullYear();
    this.getDetailInfo()
  },
}
</script>

<style scoped>
.title {
  padding: 20px 10px;
  color: rgb(27, 139, 214);
}

.grid-content {
  padding: 10px 0;
  color: #333;
  line-height: 32px;
}

.userForm {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 150px;
}

/* .userForm::after{
    content:'';
    flex: auto;
} */
/deep/ .el-form-item__label {
  color: #000000;
}

/deep/ .el-dialog__header {
  text-align: center;
}

/deep/ .el-dialog {
  border-radius: 10px;
}

/deep/ .el-dialog__title {
  font-weight: 600;
}
</style>