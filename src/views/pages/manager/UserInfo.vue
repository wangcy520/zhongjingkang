<template>
  <div>
    <el-card>
      <el-form :inline="true" :model="queryForm" class="demo-form-inline" label-width="80px">
        <el-row :gutter="20">
          <el-col :span="20">
            <el-form-item prop="name" label="用户名">
              <el-input type="text" placeholder="请输入用户名名称" v-model="queryForm.name"></el-input>
            </el-form-item>
            <el-form-item prop="type" label="次/月卡">
              <el-select v-model="queryForm.cardType" placeholder="请选择全部/次卡/月卡">
                <el-option label="全部"></el-option>
                <el-option label="次卡" :value="0"></el-option>
                <el-option label="月卡" :value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="name" label="手机号">
              <el-input type="text" placeholder="请输入手机号码" v-model="queryForm.phone"></el-input>
            </el-form-item>
            <el-form-item prop="status" label="患者类型">
              <el-select v-model="queryForm.type" placeholder="请选择患者类型">
                <el-option v-for="item in statusList" :key="item.code" :label="item.name" :value="item.code">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="status" label="即将到期">
              <el-select v-model="expiresType" placeholder="请选择到期类型卡" >
                <el-option v-for="item in expiresTypeList" :key="item.code" :label="item.name" :value="item.code">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button @click="addHandle()" icon="el-icon-circle-plus-outline" style="color: #409EFF" round>新增
            </el-button>
            <el-button @click="getTableData()" icon="el-icon-search" style="color: #409EFF" round>查询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card>
      <el-table :data="tableData" style="width: 100%" v-loading="loading" ref="multipleTable">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="name" label="用户名" width="120" fixed="left">
        </el-table-column>
        <el-table-column prop="residueCount" width="120" align="center">
          <template slot="header">
            <div>月卡(天)</div>
            <div>全部/已用/剩余</div>
          </template>
          <template slot-scope="scope">
            <span>{{ scope.row.days }}/{{ scope.row.days - scope.row.residueDays }}/{{ scope.row.residueDays }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="" align="center">
          <template slot="header">
            <div>次卡(次)</div>
            <div>全部/已用/剩余</div>
          </template>
          <template slot-scope="scope">
            <span>{{ scope.row.count }}/{{ scope.row.count - scope.row.residueCount }}/{{
                scope.row.residueCount
            }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="residueDays" label="疗程(天)" align="center">
          <template slot="header">
            <div>疗程(天)</div>
            <div>全部/剩余</div>
          </template>
          <template slot-scope="scope">
            <span v-if="scope.row.zjkOrder ? scope.row.zjkOrder.treatmentType == 0 : ''">-/-</span>
            <span v-else>{{ scope.row.zjkOrder ? scope.row.zjkOrder.treatmentDays : 0 }}/{{
                scope.row.zjkOrder ? scope.row.zjkOrder.treatmentDays - scope.row.zjkOrder.currentNum : 0
            }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="residueCount" label="疗程(次)" align="center">
          <template slot="header">
            <div>疗程(次)</div>
            <div>全部/剩余</div>
          </template>
          <template slot-scope="scope">
            <span v-if="scope.row.zjkOrder ? scope.row.zjkOrder.treatmentType == 1 : ''"> -/- </span>
            <span v-else>{{ scope.row.zjkOrder ? scope.row.zjkOrder.treatmentCount : 0 }}/{{
                scope.row.zjkOrder ? scope.row.zjkOrder.treatmentCount - scope.row.zjkOrder.currentNum : 0
            }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="code" label="编号" width="120">
        </el-table-column>
        <el-table-column prop="type" label="类型">
          <template slot-scope="scope">
            <span>{{
                scope.row.type == 0
                  ? "近视"
                  : scope.row.type == 1
                    ? "弱视"
                    : scope.row.type == 2
                      ? "弱视"
                      : ''
            }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="sex" label="性别">
          <template slot-scope="scope">
            {{ scope.row.sex == "1" ? "女" : "男" }}
          </template>
        </el-table-column>
        <el-table-column prop="birthday" label="出生年月">
        </el-table-column>
        <el-table-column prop="" label="年龄">
          <template slot-scope="scope">
            <p v-if="scope.row.birthday != null">
              {{ newYear - scope.row.birthday.split("-")[0] }}岁
            </p>
            <p v-else></p>
          </template>
        </el-table-column>
        <el-table-column prop="phone" label="手机">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="280">
          <template slot-scope="scope">
            <!-- <el-button @click="open(scope.row)" icon="el-icon-search" size="small">启用/关闭</el-button> -->
            <el-button @click="open(scope.row)" :type="scope.row.status == 1 ? 'success' : 'danger'" plain size="small"
              :icon="scope.row.status == '1' ?'el-icon-video-play':'el-icon-video-pause' ">{{ scope.row.status == 1 ?
                  '启用' : '禁用'
              }}</el-button>
            <el-button @click="edit(scope.row)" type="primary" size="small" icon="el-icon-edit" plain>编辑</el-button>
            <el-button @click="editHandle(scope.row)" type="primary" size="small" icon="el-icon-s-order" plain>档案
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="queryForm.pageNum" :page-sizes="[10, 50, 100, 200]" :page-size="queryForm.pageSize"
          layout="total, sizes, prev, pager, next, jumper" :total="tableTotals">
        </el-pagination>
      </div>
    </el-card>
    <div>
      <el-dialog width="60%" :title="this.editTitle" :visible.sync="userInfoDialog" @close="cancel('userInfoForm')">
        <el-steps :active="active" :space="300" align-center style="display: flex;justify-content: center;">
          <el-step title="基础信息" icon="el-icon-success"></el-step>
          <el-step title="健康档案"></el-step>
        </el-steps>
        <el-form :model="userInfoForm" ref="userInfoForm" label-width="80px" :inline="true" class="userForm"
          label-position="left" v-if="diolog == 1" :rules="userRules">
          <el-row>
            <el-col :span="8">
              <el-form-item label="用户名" prop="name">
                <el-input style="width:100%" v-model="userInfoForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="用户编号" prop="code">
                <el-input style="width:100%" disabled v-model="userInfoForm.code"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="出生年月" prop="birthday">
                <el-date-picker style="width:200px" v-model="userInfoForm.birthday" type="month" format="yyyy-MM"
                  value-format="yyyy-MM-dd" placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="性别" prop="sex">
                <el-select v-model="userInfoForm.sex" placeholder="请选择" style="width:200px">
                  <el-option v-for="item in sexList" :key="item.code" :label="item.name" :value="item.code">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="身份证号" prop="idCard">
                <el-input style="width:100%" v-model="userInfoForm.idCard"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="地址" prop="area">
                <el-input style="width:100%" v-model="userInfoForm.area"></el-input>
              </el-form-item>
            </el-col>
            <div v-for="(domain, index) in userInfoForm.relationList">
              <el-col :span="8">
                <el-form-item :label="'手机号' + (index+1)" :key="domain.index" :prop="'relationList.' + index + '.phone'"
                  :rules="{
                    required: true, message: '手机号不能为空', trigger: 'change'
                  }">
                  <el-input style="width:90%" v-model="domain.phone"></el-input>
                  <i class="el-icon-circle-plus-outline"  @click.prevent="addRelationList(domain)"
                     v-if="userInfoForm.relationList.length >= 3 ? false : index === 0"></i>
                  <i class=" el-icon-remove-outline"  @click.prevent="delRelationList(domain)" v-show="userInfoForm.relationList.length >= 3 && index!=0"></i>
                  <i class=" el-icon-remove-outline"  @click.prevent="delRelationList(domain)" v-show="userInfoForm.relationList.length < 3 && index!=0"></i>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item :label="'家长' + (index+1)" :key="domain.index" :prop="'relationList.' + index + '.name'"
                  :rules="{
                    required: true, message: '家长不能为空', trigger: 'change'
                  }">
                  <el-input style="width:100%" v-model="domain.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item :label="'关系' + (index+1)" :key="domain.index" :prop="'relationList.' + index + '.relation'"
                  :rules="{
                    required: true, message: '关系不能为空', trigger: 'change'
                  }">
                  <el-input style="width:100%" v-model="domain.relation"></el-input>
                </el-form-item>
              </el-col>
            </div>

            <el-form-item label="状态" prop="status">
              <el-select v-model="userInfoForm.status" placeholder="请选择" style="width:200px">
                <el-option label="禁用" :value="1"></el-option>
                <el-option label="启用" :value="0"></el-option>
              </el-select>
            </el-form-item>
          </el-row>
        </el-form>
        <el-form style="margin: 50px;" v-if="diolog == 2">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-row :gutter="20">
                <el-col :span="24">
                  <div class="grid-content bg-purple">*视力</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple" style="line-height:33px">
                    裸眼视力
                  </div>
                  <div class="grid-content bg-purple" style="line-height:33px">
                    矫正视力
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    左眼
                    <el-input v-model="archivesInfo.eyesight.leftUcva" style="width:50px"></el-input>
                  </div>
                  <div class="grid-content bg-purple">
                    左眼
                    <el-input v-model="archivesInfo.eyesight.leftCva" style="width:50px"></el-input>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    右眼
                    <el-input v-model="archivesInfo.eyesight.rightUcva" style="width:50px"></el-input>
                  </div>
                  <div class="grid-content bg-purple">
                    右眼
                    <el-input v-model="archivesInfo.eyesight.rightCva" style="width:50px"></el-input>
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
                  <div class="grid-content bg-purple" style="line-height:25px;opacity: 0;">
                    1
                  </div>
                  <div class="grid-content bg-purple" style="line-height:25px">
                    左眼
                  </div>
                  <div class="grid-content bg-purple" style="line-height:25px">
                    右眼
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">球镜</div>
                  <div class="grid-content bg-purple">
                    <el-input v-model="archivesInfo.dioptric.leftSphere" style="width:80px"></el-input>
                  </div>
                  <div class="grid-content bg-purple">
                    <el-input v-model="archivesInfo.dioptric.rightSphere" style="width:80px"></el-input>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">柱镜</div>
                  <div class="grid-content bg-purple">
                    <el-input v-model="archivesInfo.dioptric.leftCylinder" style="width:80px"></el-input>
                  </div>
                  <div class="grid-content bg-purple">
                    <el-input v-model="archivesInfo.dioptric.rightCylinder" style="width:80px"></el-input>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">轴位</div>
                  <div class="grid-content bg-purple">
                    <el-input v-model="archivesInfo.dioptric.leftAxial" style="width:80px"></el-input>
                  </div>
                  <div class="grid-content bg-purple">
                    <el-input v-model="archivesInfo.dioptric.rightAxial" style="width:80px"></el-input>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel('userInfoForm')">取 消</el-button>
          <el-button type="primary" @click="submit" v-if="diolog == 1" plain>下一步</el-button>
          <el-button type="primary" @click="(diolog = 1), (active = 1)" v-if="diolog == 2" plain>上一步</el-button>
          <el-button type="primary" @click="submitUserInfo('userInfoForm')"  plain
            v-if="diolog == 2">
            提交</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import ApiServer from "@/api/apiServer";
export default {
  data() {
    return {
      expiresType: '',
      diolog: 1,
      active: 1,
      newYear: "",
      nameList: [],
      statusList: [
        {
          name: "全部",
          code: null
        },
        {
          name: "近视",
          code: 0
        },
        {
          name: "弱视",
          code: 1
        },
        {
          name: "双眼视",
          code: 2
        },
      ],
      cardTypeList: [
        {
          name: "次卡",
          id: "0"
        },
        {
          name: "月卡",
          id: "1"
        }
      ],
      expiresTypeList: [
        {
          name: "全部",
          code: "0"
        },
        {
          name: "次卡",
          code: "1"
        },
        {
          name: "月卡",
          code: "2"
        },
        {
          name: "疗程",
          code: "3"
        },
        {
          name: "会员卡",
          code: "4"
        }
      ],
      userInfoForm: {
        name:'',
        relationList: [{ phone: '', name: '', relation: '' }],
        code: "",
        birthday: "",
        sex: "",
        area: "",
        parentsName: "",
        idCard: "",
        status: "",
      },
      archivesInfo: {
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
      },
      sexList: [
        {
          code: 0,
          name: "男"
        },
        {
          code: 1,
          name: "女"
        }
      ],
      userRules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        birthday: [
          { required: true, message: "请输入出生年月", trigger: "blur" }
        ],
        parentsName: [
          { required: true, message: "请输入家长", trigger: "blur" }
        ],
        phone: [
          {
            required: true,
            message: "手机号格式错误",
            validator: this.commonJS.checkPhone,
            trigger: "blur"
          }
        ],
        sex: [{ required: true, message: "请输入性别", trigger: "blur" }]
      },
      doctorList: [],
      date: "",
      buttonDisabled: false,
      loading: false,
      editTitle: "",
      isAdd: false,
      userInfoDialog: false,
      tableData: [],
      queryForm: {
        phone: null,
        name: null,
        doctorId: null,
        parentsName: null,
        type: '',
        cardType: null,
        startDate: "",
        endDate: "",
        pageParams: {
          pageNum: 1,
          pageSize: 10
        }
      },
      tableTotals: 1
    };
  },
  components: {},
  created() {
    this.queryForm.doctorId = this.$route.query.doctorId
    this.getTableData();
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.queryForm.pageSize = val;
      //   let pageMax = Math.ceil(this.tableTotals / val)
      console.log(this.queryForm.pageParams.pageNum, this.tableTotals);
      if (this.queryForm.pageParams.pageNum * val > this.tableTotals) return;
      this.getTableData();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.queryForm.pageParams.pageNum = val;
      this.getTableData();
    },
    editHandle(row) {
      console.log(row)
      this.$router.push({ name: "userDetails", query: { id: row.id } });
    },
    edit(row) {
      this.diolog = 1;
      this.editTitle = "编辑基础信息";
      this.isAdd = false;
      this.buttonDisabled = false;
      this.userInfoDialog = true;
      this.userInfoForm.name =row.name;
      this.userInfoForm.code = row.code;
      this.userInfoForm.birthday = row.birthday;
      this.userInfoForm.area = row.area;
      this.userInfoForm.parentsName = row.parentsName;
      this.userInfoForm.idCard = row.idCard;
      this.userInfoForm.status = Number(row.status);
      this.userInfoForm.sex = Number(row.sex);
      this.userInfoForm.id = row.id;
      if(row.patientRelationList.length>0){
        this.userInfoForm.relationList = row.patientRelationList
      }else{
        let arr = [{ phone: '', name: '', relation: '' }]
        this.userInfoForm.relationList = arr
      }
      if (!row.healthRecord) {
        this.archivesInfo = {
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
        this.archivesInfo = JSON.parse(row.healthRecord);
      }
    },
    addHandle() {
      this.isAdd = true;
      this.buttonDisabled = false;
      this.userInfoDialog = true;
      this.userInfoForm = {
        name:'',
        code: "自动生成",
        birthday: "",
        sex: "",
        area: "",
        parentsName: "",
        idCard: "",
        status: "",
        relationList: [{ phone: '', name: '', relation: '' }],
      };
      this.archivesInfo = {
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
      this.editTitle = "用户基础信息";
    },
    delHandle(row) {
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          ApiServer.manager.delUser({ id: row.id }).then(res => {
            if (res.code == 200) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.getTableData();
            } else {
              this.$message({
                type: "info",
                message: "删除失败，请联系管理员！"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    cancel(form) {
      // this.$refs[form].resetFields()
      this.userInfoDialog = false
    },
    addRelationList() {
      this.userInfoForm.relationList.push({
        phone: '',
        name: '',
        relation: ''
      });
    },
    delRelationList(item) {
      var index = this.userInfoForm.relationList.indexOf(item)
      if (index !== -1) {
        this.userInfoForm.relationList.splice(index, 1)
      }
    },
    submit() {
      this.userInfoForm.healthRecord = JSON.stringify(this.archivesInfo);
      this.$refs.userInfoForm.validate(valid => {
        if (valid) {
          this.diolog = 2;
          this.active = 2;
        }
      });
    },
    submitUserInfo(form) {
      this.userInfoForm.healthRecord = JSON.stringify(this.archivesInfo);
      this.buttonDisabled = true;
      var requestAddr = this.isAdd == false ? "postModify" : "saveUser";
      ApiServer.manager[requestAddr](this.userInfoForm).then(res => {
        if (res.code == 200) {
          this.userInfoDialog = false;
          if (this.$refs.form !== undefined) {
            this.$nextTick(() => {
              this.$refs[form].resetFields();
            });
          }
          this.userInfoForm.roleIds = [];
          this.getTableData();
          this.$message({ message: "操作成功", type: "success" });
        }
      });
    },
    batchDel() {
      this.DelIdList = [];
      if (this.$refs.multipleTable.selection.length > 0) {
        this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$refs.multipleTable.selection.forEach(item => {
              this.DelIdList.push(item.id);
            });
            console.log(this.DelIdList);
            ApiServer.manager.batchDelUser(this.DelIdList).then(res => {
              if (res.code == 200) {
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
              } else {
                this.$message({
                  type: "info",
                  message: "删除失败，请联系管理员！"
                });
              }
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      }
    },
    getTableData() {
      this.loading = true;
      if (this.date) {
        this.queryForm.startDate = this.date[0];
        this.queryForm.endDate = this.date[1];
      }else{
        this.queryForm.startDate ="";
        this.queryForm.endDate = "";
      }
      ApiServer.manager.getUserInfoList(this.queryForm).then(res => {
        if (res.code === 200) {
          res.data.list.forEach(function (val) {
            if (val.birthday) {
              let splitBirthday = val.birthday.split("-");
              val.birthday = splitBirthday[0] + '-' + splitBirthday[1]
            }
          })
          this.tableData = res.data.list;
          this.tableTotals = Number(res.data.total);
        }
        this.loading = false;
      });
    },
    addressInfo(row) {
      this.$alert(row.area, "地址", {
        center: true,
        showConfirmButton: false
      }).catch(err => {
        console.log(err);
      });
    },
    purchaseInfo(row) {
      this.$router.push({ name: "visionInfo", params: row });
    },
    trainInfo() { },
    visionInfo() { },
    purchaseManagement(row) {
      this.$router.push({ name: "purchaseManager", params: row });
    },
    getNameList() {
      ApiServer.manager.getHospitalList().then(res => {
        if (res.code == 200) {
          this.nameList = res.data.list;
        }
      });
    },
    open(row) {
      let status = row.status == 1 ? '启用' : '禁用';
      let params = {
        status: row.status == 1 ? 0 : 1,
        id: row.id
      }
      this.$confirm(
        `确定${status}吗？`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).then(() => {
        ApiServer.manager.postModify(params).then(res => {
          if (res.code == 200) {
            this.getTableData();
            this.$message({ message: "已" + status, type: "success" });
          }
        });
      })
    }
  },
  mounted() {
    var date = new Date();
    this.newYear = date.getFullYear();
    console.log(this.newYear)
    //   this.getNameList();
  }
};
</script>

<style scoped>
.textLink {
  cursor: pointer;
  color: blue;
}

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

.title {
  padding: 20px 10px;
  color: rgb(27, 139, 214);
}

.grid-content {
  padding: 10px 0;
  color: #000000;
  font-size: 14px;
}

.userForm {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 20px 20px 50px;
}
</style>
