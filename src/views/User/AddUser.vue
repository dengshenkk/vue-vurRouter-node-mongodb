<template>
  <div class="add-user" v-loading="isLoading">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">

      <el-form-item label="姓名" prop="name">
        <el-input type="text" v-model="ruleForm2.name" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label=年龄 prop="age">
        <el-input type="text" v-model="ruleForm2.age" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="性别" prop="sex">
        <!--<el-input type="text" v-model="ruleForm2.sex" auto-complete="off"></el-input>-->
        <el-select v-model="ruleForm2.sex" placeholder="请选择">
          <el-option
            v-for="(item,index) in options"
            :key="index"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="颜色" prop="color">
        <el-input type="text" v-model="ruleForm2.color" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="地址" prop="address">
        <el-input type="text" v-model="ruleForm2.address" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {AddUser} from '../../api/index'

  export default {
    name: 'user-list',
    data() {
      let checkNull = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('必填项不能为空'))
        } else {
          callback()
        }
      }
      return {
        options: [{
          value: '汉子',
          label: '汉子'
        }, {
          value: '妹子',
          label: '妹子'
        }, {
          value: '保密',
          label: '保密'
        }],
        value: '',
        isLoading: false,
        ruleForm2: {
          name: '',
          sex: this.value,
          color: '',
          address: '',
          age: ''
        },
        rules2: {
          age: [
            {validator: checkNull, trigger: 'blur'}
          ],
          name: [
            {validator: checkNull, trigger: 'blur'}
          ],
          sex: [
            {validator: checkNull, trigger: 'blur'}
          ],
          color: [
            {validator: checkNull, trigger: 'blur'}
          ],
          address: [
            {validator: checkNull, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.isLoading = true
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = {
              name: this.ruleForm2.name,
              age: this.ruleForm2.age,
              color: this.ruleForm2.color,
              sex: this.ruleForm2.sex,
              from: this.ruleForm2.address
            }
            AddUser(params).then(res => {
              console.log(res.data.msg)
              this.isLoading = false
              if (res.data.code === 0) {
                this.ruleForm2 = {}
                this.$message({
                  type: 'success',
                  message: res.data.msg
                })
                this.$router.push({name: 'UserList'})
              } else {
                this.isLoading = false
                this.$message({
                  type: 'error',
                  message: res.data.msg
                })
              }
            })
          } else {
            this.isLoading = false
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style scoped>

</style>
