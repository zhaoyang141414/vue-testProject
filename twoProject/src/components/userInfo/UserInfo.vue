<template>
    <!-- <el-container direction="vertical"> -->
      <el-table :data="tableData">
        <el-table-column prop="date" :label="$t('message.date')" width="140">
        </el-table-column>
        <el-table-column prop="name" :label="$t('message.name')" width="120">
        </el-table-column>
        <el-table-column prop="address" :label="$t('message.address')">
        </el-table-column>
      </el-table>
      <!-- </el-container> -->
</template>
<script>
export default {
  name: "UserInfo",
  data() {
    const item = {
      date: "2016-05-02",
      name: "admin",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>