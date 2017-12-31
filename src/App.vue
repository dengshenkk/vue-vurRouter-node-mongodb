<template>
  <div id="app">
    <nav class="nav">
      <ul class="nav-main">
        <li class="nav-item">
          <router-link to="/User">用户中心</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/MySetting">我的选项</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/MyOrder">我的订单</router-link>
        </li>

      </ul>
    </nav>

    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    color: #666;
  }

  html, body {
    width: 100%;
    height: 100%;

  }

  #app {
    height: 100%;
    nav {
      border-bottom: 1px solid #e0e0e0;
      .nav-main {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .nav-item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 200px;
          height: 60px;
          list-style: none;
          a {
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .main {
      padding: 24px;
    }

    /*a {*/
    /*text-decoration: none;*/
    /*display: inline-block;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*}*/

    .router-link-active {
      color: deepskyblue;
      /*border-bottom: 1px solid deepskyblue;*/
      box-sizing: border-box;
    }
  }

</style>
