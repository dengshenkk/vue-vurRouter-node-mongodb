<template>
  <div class="user">
    <ul>
      <li>
        <router-link :to="{name:'UserList'}">用户列表</router-link>
      </li>

      <li>
        <router-link :to="{name:'AddUser'}">添加用户</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'user-list'
  }
</script>

<style scoped lang="scss">

  .user {
    height: 100%;
    /*margin-top: 40px;*/
    display: flex;
    justify-content: flex-start;
    ul {
      width: 200px;
      height: 100%;
      li {
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
</style>
