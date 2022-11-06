<template>
    <div>
        <div class="title">用户信息基础</div>
        <el-card>
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">用户名:A</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">性别:男</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">年龄:8</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">手机号:1222</div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">用户编号:A</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">视训师:男</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">月卡剩余(天):8</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">次卡剩余(次):1222</div>
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
                            <div class="grid-content bg-purple">左眼</div>
                            <div class="grid-content bg-purple">左眼</div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple">右眼</div>
                            <div class="grid-content bg-purple">右眼</div>
                        </el-col>
                    </el-row>
                </el-col>
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
                            <div class="grid-content bg-purple">左眼</div>
                            <div class="grid-content bg-purple">左眼</div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple">右眼</div>
                            <div class="grid-content bg-purple">右眼</div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-button icon="el-icon-plus" type="success" style="margin-top:30px;" @click="buy">购买</el-button>
        </el-card>
        <div class="title">购买记录</div>
        <el-card>
            <el-table :data="tableData" style="width: 100%" v-loading="loading" ref="multipleTable">
                <el-table-column prop="name" label="用户名">
                </el-table-column>
                <el-table-column prop="name" label="类型">
                </el-table-column>
                <el-table-column prop="name" label="购买数量">
                </el-table-column>
                <el-table-column prop="name" label="剩余数量">
                </el-table-column>
                <el-table-column prop="name" label="购买时间">
                </el-table-column>
                <el-table-column prop="name" label="有效期">
                </el-table-column>
            </el-table>
        </el-card>

        <el-dialog title="购买信息" :visible.sync="buyModel" width="50%">
            <el-form ref="form" :model="buyForm" label-width="80px" :inline="true" class="userForm">
                <el-form-item style="width:100%;margin-left: 80px;">
                    <el-radio v-model="radio" label="1">次卡</el-radio>
                    <el-radio v-model="radio" label="2">月卡</el-radio>
                </el-form-item>
                <el-form-item label="数量">
                    <el-input style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="价格">
                    <el-input style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="有效期">
                    <el-input style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="卡号">
                    <el-input style="width:300px"></el-input>
                </el-form-item>
                <el-form-item style="width:100%;margin-left: 25px;">
                    <span>总购买记录：月卡：60次 次卡：10次</span>
                </el-form-item>
                <el-form-item style="width:100%;margin-left: 25px;">
                    <span>总剩余次数：月卡：60次 次卡：10次</span>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="buyModel = false">取 消</el-button>
                <el-button type="primary" @click="confirm">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog title="用户基础信息" :visible.sync="userModel" width="50%">
            <el-form :model="buyForm" label-width="80px" :inline="true" class="userForm">
                <el-form-item label="用户名">
                    <el-input style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="用户编号">
                    <el-input style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="出生年月">
                    <el-input style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-input style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="身份证号">
                    <el-input style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="手机号1">
                    <el-input style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="家长1">
                    <el-input style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="关系1">
                    <el-input style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-input style="width:200px"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="userModel = false">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>


<script>
export default {
    data() {
        return {
            tableData: [],
            buyForm: {},
            loading: false,
            buyModel: true,
            userModel: false,
            radio: '1',
        }
    },
    created() { },
    methods: {
        buy() {
            this.buyModel = true
        },
        confirm() {
            let that = this;
            that.buyModel = false;
            this.$confirm('确定购买月卡嘛?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                that.userModel = true
                this.$message({
                    type: 'success',
                    message: '选择确认啦'
                });

            })
        },
        submit() {

        },
    },
    mounted() { },
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
}

.userForm {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 50px 150px;
}

/* .userForm::after{
    content:'';
    flex: auto;
} */
</style>