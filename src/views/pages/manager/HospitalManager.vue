<template>
  <div>
    <el-card>
      <el-form :inline="true" :model="queryForm" class="demo-form-inline" label-width="100px">
        <el-row :gutter="20">
          <el-col :span="20">
            <el-form-item prop="name" label='用户名'>
              <el-input type="text" placeholder="请输入用户名" v-model="queryForm.name" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item prop="type" label='机构属性'>
              <el-select v-model="queryForm.type" style="width:200px">
                <el-option v-for="item in typeList" :key="item.id" :label="item.name" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="areaCode" label='分布区域'>
              <el-cascader style="width:200px" :options="options" ref="currentAddr" v-model="queryForm.areaCode"
                @change="handleChange"></el-cascader>
            </el-form-item>
            <el-form-item prop="business" label='商业模式'>
              <el-select v-model="queryForm.business" style="width:200px">
                <el-option v-for="item in businessList" :key="item.id" :label="item.name" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="时间" prop="date">
              <!-- <el-date-picker style="width:200px" v-model="queryForm.date" type="datetime" placeholder="选择日期时间"
                value-format="yyyy-MM-dd HH:mm:ss">
              </el-date-picker> -->
              <el-date-picker v-model="date" type="daterange" value-format="yyyy-MM-dd" range-separator="至"
                start-placeholder="开始日期" end-placeholder="结束日期" style="width:200px">
              </el-date-picker>
            </el-form-item>
            <el-form-item prop="device" label='设备状态'>
              <el-select v-model="queryForm.device" style="width:200px">
                <el-option v-for="item in deviceList" :key="item.id" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item>
              <el-button @click="getTableData()" icon="el-icon-search" style="color: #409EFF" round>查询</el-button>
              <el-button @click="addHandle()" icon="el-icon-circle-plus-outline" style="color: #409EFF"
                round>新增</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card>
      <el-table :data="tableData" style="width: 100%" v-loading="loading" ref="multipleTable">
        <el-table-column fixed type="index" label="序号" width="50">
        </el-table-column>
        <el-table-column fixed prop="name" label="用户名" >
        </el-table-column>
        <el-table-column prop="code" label="机构编号" width="150" >
          <template slot-scope="scope">
            <span>{{scope.row.code}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="总设备数(台)" width="100">
          <template slot-scope="scope">
            <span>-</span>
          </template>
        </el-table-column>
        <el-table-column prop="doctors" label="总用户数(名)" width="100">
          <template slot-scope="scope">
            <span>{{scope.row.totalUserCount}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="users" label="次卡用户" width="100">
          <template slot-scope="scope">
            <span>{{scope.row.timesUserCount === null ? 0 : scope.row.timesUserCount}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="subCardUsers" label="月卡用户" width="100">
          <template slot-scope="scope">
            <span>{{scope.row.daysUserCount === null ? 0 : scope.row.daysUserCount}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="monthlyCardUsers" label="一人一机(台)" width="100">
          <template slot-scope="scope">
            <span>-</span>
          </template>
        </el-table-column>
        <el-table-column prop="activeUsers" label="多人一机(台)" width="100">
          <template slot-scope="scope">
            <span>-</span>
          </template>
        </el-table-column>
        <el-table-column prop="expiredUsers" label="租赁设备" width="100">
          <template slot-scope="scope">
            <span>-</span>
          </template>
        </el-table-column>
        <el-table-column prop="equipment" label="购买设备" width="100">
          <template slot-scope="scope">
            <span>-</span>
          </template>
        </el-table-column>
        <el-table-column prop="damagedEquipment" label="坏损设备" width="100">
          <template slot-scope="scope">
            <span>-</span>
          </template>
        </el-table-column>
        <el-table-column prop="damagedPurchasedEquipment" label="活跃设备" width="100">
          <template slot-scope="scope">
            <span>-</span>
          </template>
        </el-table-column>
        <el-table-column prop="damagedLeasedEquipment" label="到期设备" width="100">
          <template slot-scope="scope">
            <span>-</span>
          </template>
        </el-table-column>
        <el-table-column prop="regionalDistribution" label="机构属性" width="100">
          <template slot-scope="scope">
            <span>{{scope.row.type === '0' ? '视光中心' : scope.row.type === '1' ? '医院' : '门诊'}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="regionalDistribution" label="地区分布" width="200">
          <template slot-scope="scope">
            <span >{{scope.row.areaStr}}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="180">
          <template slot-scope="scope">
            <!-- <el-button @click="editHandle(scope.row)"
                       type="primary"
                       size="small"
                       icon="el-icon-edit-outline">
                       </el-button> -->
            <el-button @click="enableHandle(scope.row)" :type="scope.row.status == 1 ? 'danger' : 'success'" plain
                       size="small" :icon="scope.row.status == '1' ? 'el-icon-video-pause' : 'el-icon-video-play'">{{
                scope.row.status == '1' ?
                  '禁用' : '启用'
              }}</el-button>
            <el-button @click="editHandle(scope.row)"
                       size="small"
                       icon="el-icon-edit"
                       style="color:#409eff">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="queryForm.pageNum" :page-sizes="[10, 50, 100, 250]" :page-size="queryForm.pageSize"
          layout="total, sizes, prev, pager, next, jumper" :total="tableTotals">
        </el-pagination>
      </div>
    </el-card>
    <div>
      <el-dialog :title="this.editTitle" :visible.sync="hospitalInfoDialog" @close="cancel('hospitalForm')">
        <el-row :gutter="10">
          <el-form ref="hospitalForm" :model="hospitalForm" :rules="rules" label-width="140px"
            style="margin-right: 50px;">
            <el-col :span="12">
              <el-form-item label="负责人" prop="principal">
                <el-input type="text" placeholder="请输入名称" v-model="hospitalForm.principal"
                  style="width:250px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label='公司名称' prop="name">
                <el-input type="text" placeholder="请输入公司名称" v-model="hospitalForm.name" style="width:250px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="code" label='机构编号'>
                <el-input disabled type="text" placeholder="自动生成" v-model="hospitalForm.code" style="width:250px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="dutyParagraph" label='税号'>
                <el-input type="text" placeholder="请输入税号" v-model="hospitalForm.dutyParagraph"
                  style="width:250px"></el-input>
                <!-- <el-cascader :options="options" v-model="hospitalForm.selectedOptions" @change="handleChange"></el-cascader> -->
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label='机构属性' prop="type">
                <el-select v-model="hospitalForm.type" style="width:250px" placeholder="请选择机构属性">
                  <el-option v-for="item in typeList" :key="item.id" :label="item.name" :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label='手机号' prop="phone">
                <el-input type="text" placeholder="请输入手机号" v-model="hospitalForm.phone" style="width:250px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label='营业执照' prop="documentId">
                <div v-if="fileList.length>0" style="width: 200px;height: 150px;">
                  <img style="width:100%;height:100%" v-for="item in fileList" :src="item.url" alt="">
                </div>
                <!-- <el-input type="text" placeholder="请输入编码" v-model="hospitalForm.code" style="width=250px"></el-input> -->
                <el-upload v-else v-model="hospitalForm.documentId"
                           :class="{'hide-upload-btn': photoHide}"
                           disabled: none
                           :action="uploadUrl"
                           :limit="1" list-type="picture-card"
                           :on-preview="handlePictureCardPreview"
                           :on-exceed="handleExceed"
                           :on-remove="handleRemove"
                           :on-success="handleSuccess"
                           :headers="myHeaders" name='multipartFile'
                           :file-list="fileList">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label='地址' prop="areaCode">
                <!-- <el-input type="text" placeholder="请输入编码" v-model="hospitalForm.area_code" style="width:250px"></el-input> -->
                <div style="display:flex">
                <el-cascader v-model="hospitalForm.areaCode" :options="options1" ref="currentAddr" @change="handleChange" style="width:250px"></el-cascader>
                  <el-input v-model="hospitalForm.address" style="width: 500px;" />
                </div>
              </el-form-item>
            </el-col>
          </el-form>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel('hospitalForm')">取 消</el-button>
          <el-button type="primary" @click="submitHospitalInfo('hospitalForm')">确
            定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import ApiServer from '@/api/apiServer'
import { getToken } from '@/utils/auth'
import citys from '@/utils/data'
import { regionData } from 'element-china-area-data'
export default {
  data() {
    return {
      myHeaders: { accessToken: getToken() },
      dialogImageUrl: '',
      fileList: [],
      dialogVisible: false,
      downloadUrl: process.env.API_ROOT,
      uploadUrl: process.env.API_ROOT + 'file/upload',
      options: regionData,
      options1: regionData,
      buttonDisabled: false,
      loading: false,
      editTitle: '',
      isAdd: false,
      changePwdDialog: false,
      hospitalInfoDialog: false,
      tableData: [],
      date: '',
      currentAddr: '',
      queryForm: {
        type: null,
        areaCode: [],
        startDate: '',
        endDate: '',
        pageParams: {
          pageNum: 1,
          pageSize: 10
        }
      },
      hospitalForm: {
        name: '',
        code: '',
        principal: '',
        dutyParagraph: '',
        type: '',
        phone: '',
        address: '',
        documentId: '',
        areaCode:[],
        areaStr: ''
      },
      roleList: [],
      rules: {
        name: [{ required: true, message: '请输入医院名', trigger: 'blur' }],
        phone: [
          {
            required: true,
            message: '电话号码格式有误',
            validator: this.commonJS.checkPhone,
            trigger: 'blur'
          }
        ]
      },
      tableTotals: 1,
      licenseDList: [6, 12, 36, 60],
      typeList: [
        {
          name: '视光中心',
          id: '0'
        },
        {
          name: '医院',
          id: '1'
        },
        {
          name: '门诊',
          id: '2'
        }
      ],
      businessList: [
        {
          name: '购买',
          id: '0'
        },
        {
          name: '租赁',
          id: '1'
        }
      ],
      deviceList: [
        {
          name: '到期',
          id: '0'
        },
        {
          name: '活跃',
          id: '1'
        }
      ],
      photoHide: false
    }
  },
  components: {},
  created() {
    console.log(citys)
    this.getTableData()
  },
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
    editHandle(row) {
      let list = []
      this.isAdd = false
      let url = this.downloadUrl
      this.buttonDisabled = false
      this.hospitalInfoDialog = true
      row.status = Number(row.status)
      this.editTitle = '机构信息'
      let d = {
        url: url + row.documentUrl
      }
      list.push(d)
      if(row.documentUrl){
        this.fileList = list
      }else{
        this.photoHide = false
        this.fileList = []
      }
      this.$nextTick(() => {
        this.hospitalForm = JSON.parse(JSON.stringify(row))
        this.hospitalForm.areaCode = row.areaCode.split(',')
        this.currentAddr = row.areaStr
      })
    },
    addHandle() {
      this.isAdd = true
      this.fileList = []
      this.buttonDisabled = false
      this.hospitalInfoDialog = true
      this.editTitle = '机构信息'
      this.photoHide = false
      this.currentAddr = ''
      ApiServer.select.selectRoleList().then(res => {
        if (res.code == 250) {
          this.roleList = res.data
        }
      })
    },
    enableHandle(row) {
      this.$confirm(
        row.status == '1' ? '确定要停用？' : '确认要启用？',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      )
        .then(() => {
          row.status = row.status == '1' ? '0' : '1'
          ApiServer.manager.updateHospitalInfo(row).then((res) => {
            if (res.code == 200) {
              this.$message({
                type: 'success',
                message: row.status == '1' ? '启用成功' : '停用成功',
              })
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作',
          })
        })
    },
    delHandle(row) {
      this.$confirm('此操作将永久删除该医院, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          ApiServer.manager.delHospital({ id: row.id }).then(res => {
            if (res.code == 250) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.getTableData()
            } else {
              this.$message({
                type: 'info',
                message: '删除失败，请联系管理员！'
              })
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    cancel(form) {
      this.$refs[form].resetFields()
      this.hospitalInfoDialog = false
    },
    submitHospitalInfo(form) {
      if(this.hospitalForm.areaCode){
        this.hospitalForm.areaCode = this.hospitalForm.areaCode.join(',')
        this.hospitalForm.areaStr = this.currentAddr.replaceAll(',', ' ')
      }
      this.buttonDisabled = true
      this.$refs.hospitalForm.validate(valid => {
        if (valid) {
          var requestAddr = this.isAdd == false ? 'updateHospitalInfo' : 'addHospital'
          ApiServer.manager[requestAddr](this.hospitalForm).then(res => {
            if (res.code == 200) {
              this.hospitalInfoDialog = false
              this.$refs[form].resetFields()
              this.hospitalForm.roleIds = []
              this.getTableData()
            }
          })
        }
      })
    },
    batchDel() {
      this.DelIdList = []
      if (this.$refs.multipleTable.selection.length > 0) {
        this.$confirm('此操作将永久删除该医院, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$refs.multipleTable.selection.forEach(item => {
              this.DelIdList.push(item.id)
            })
            console.log(this.DelIdList)
            ApiServer.manager.batchDelHospital(this.DelIdList).then(res => {
              if (res.code == 250) {
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                })
              } else {
                this.$message({
                  type: 'info',
                  message: '删除失败，请联系管理员！'
                })
              }
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
      }
    },
    getTableData() {
      this.loading = true
      if (this.date) {
        this.queryForm.startDate = this.date[0]
        this.queryForm.endDate = this.date[1]
      } else {
        this.queryForm.startDate = ''
        this.queryForm.endDate = ''
      }
      if(this.queryForm.areaCode){
        this.queryForm.areaCode = this.queryForm.areaCode.join(',')
      }else{
        this.queryForm.areaCode = null;
      }
      ApiServer.manager.getHospitalList(this.queryForm).then(res => {
        if (res.code == 200) {
          this.tableData = res.data.list
          console.log(res)
          this.tableTotals = Number(res.data.total)
        }
        this.loading = false
      })
    },
    handleChange(value) {
      const addr = this.$refs["currentAddr"].getCheckedNodes();
      this.currentAddr = addr[0].pathLabels + '';
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
      this.fileList = fileList
      this.photoHide = false
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleSuccess(file, fileList) {
      this.hospitalForm.documentId = file.data.id
      this.photoHide = true;
    }
  },
  mounted() { }
}
</script>
<style scoped>

/deep/ .el-dialog {
  border-radius: 10px;
}

/deep/ .el-dialog__title {
  font-weight: 600;
}

/deep/ .el-form-item__label {
  color: #000000;
}

/deep/ .el-dialog__header {
  text-align: center;
}

.userForm {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px;
}

.hide-upload-btn /deep/ .el-upload--picture-card {
    display: none;
}
span {
  white-space: nowrap;
}
</style>
