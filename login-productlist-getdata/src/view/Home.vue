<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>商品管理</template>
            <el-menu-item index="1-1">商品列表</el-menu-item>
            <el-menu-item index="1-2">商品信息</el-menu-item>
            </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <el-table :data="users">
            <el-table-column prop="userid" label="UID" width="140">
            </el-table-column>
            <el-table-column prop="username" label="NAME" width="120">
            </el-table-column>
            <el-table-column prop="userage" label="AGE">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return{
        users:[]
      }
    },
    created() {
      var vm = this;
      this.axios({
        method:'get',
        url:'http://127.0.0.1:8000/api/mock_userdata'
      }).then(function (resp) {
        vm.users = resp.data.users
      })
    }
  }
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
