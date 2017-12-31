<template>
  <div class="my">
    <div class="problem">
      <el-input type="text" placeholder="请输入你的一个问题" v-model="problem" @input.native="response"
                v-loading="isLoading"></el-input>
      <h3>{{msg}}</h3>
    </div>

  </div>
</template>

<script>
  import {yesNo} from '../../api'

  export default {
    name: 'my',
    data() {
      return {
        msg: '^_^',
        problem: '',
        isLoading: false
      }
    },
    methods: {
      response() {
        if (!this.problem.includes('?')) {
          this.msg = '通常问题都带有一个"?"'
          return
        }
        this.msg = '你等会,我想想在告诉你...'
        this.isLoading = true
        let isInput = false
        let timer
        if (isInput) {
          clearTimeout(timer)
          return false
        }
        timer = setTimeout(() => {
          isInput = true
          yesNo().then(res => {
            isInput = false
            this.isLoading = false
            this.msg = res.data.result
          })
        }, 1000)
      }
    }
  }
</script>

<style scoped lang="scss">
  .my {
    .problem {
      width: 50%;
    }
  }
</style>
