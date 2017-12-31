<template>
  <div class="user-table">
    <el-table
      v-loading="isLoading"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="created"
        label="注册日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="color"
        label="肤色">
      </el-table-column>
      <el-table-column
        prop="from"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {UserList} from '../../api/index'
  import {formatDate} from '../../utils/index'

  export default {
    name: 'user-list',
    data() {
      return {
        isLoading: true,
        tableData: []
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      /**
       * @description 数据格式化
       * @param res
       * @return {*}
       */
      format(res) {
        if (res.data.code !== 0) {
          return new Error('参数有误')
        }
        res.data.data.map(item => {
          item.created = formatDate(item.created)
        })
        return res
      },
      init() {
        UserList().then(res => {
          this.isLoading = false
          this.tableData = this.format(res).data.data
        })
      }
    }
  }
</script>

<style scoped>

</style>
