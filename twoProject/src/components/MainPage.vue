<template>
<el-container style="height:100%; border: 1px solid #eee">
   <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>admin</span>
    </el-header>
  
  <el-container>
    <el-aside width="200px" style="background-color:#545c64;">
      <el-menu :default-openeds="['1', '3']"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              router
              >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
            用户组
          </template>
          <el-menu-item index="/main/userInfo">
            用户详情
            <!-- <router-link to="/main/userInfo" tag="li">用户详情</router-link> -->
            </el-menu-item>
          <el-menu-item index="/main/userGroup">
              用户组
            </el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2"> -->
          <!-- <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group> -->
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
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