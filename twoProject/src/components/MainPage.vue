<template>
<el-container style="height:100%; border: 1px solid #eee">
   <el-header style="text-align: right; font-size: 12px">
      <el-dropdown @command ="selectEvent">
        <i class="el-icon-setting" style="margin-right: 15px;color:white">语言切换</i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="cn">中文</el-dropdown-item>
          <el-dropdown-item command="en">英文</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span style="color:white">admin</span>
    </el-header>
  
  <el-container>
    <el-aside width="200px" style="background-color:#545c64;">
      <el-menu 
              :default-openeds="['1', '2']"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              router
              >
      <el-submenu index="1">
          <template slot="title">
              <i class="el-icon-message"></i>
             {{$t('message.userOperate')}}
          </template>
              <el-menu-item index="/main/userInfo">
                  {{$t('message.userDetile')}}
                <!-- <router-link to="/main/userInfo" tag="li">用户详情</router-link> -->
                </el-menu-item>
              <el-menu-item index="/main/userGroup">
                   {{$t('message.userGroupe')}}
                </el-menu-item>
              <el-menu-item index="/main/userForm">
                   {{$t('message.userSubmit')}}
            </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-setting"></i>导航二</template>
        <el-menu-item-group>
           <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="3-1">选项1</el-menu-item> 
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <!-- <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
    </el-menu>
  </el-aside>
    <el-main>
       <router-view></router-view>
    </el-main> 
  </el-container>
</el-container>
</template>
<style lang="scss" scoped>
.el-header {
  background-color: #409eff;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
a:-webkit-any-link {
  color: rgb(255, 208, 75);
  background-color: rgb(84, 92, 100);
  text-decoration: none;
}
// a {
//   padding-left: 40px;
//   color: rgb(255, 208, 75);
//   background-color: rgb(84, 92, 100);
//   text-decoration:none;
// }
</style>
<script>
export default {
  // 切换语言选择
  methods: {
    selectEvent(value) {
      value === "cn" ? (this.$i18n.locale = "cn") : (this.$i18n.locale = "en");
      console.log(value, 123, this.$i18n.locale);
    }
  }
};
</script>
