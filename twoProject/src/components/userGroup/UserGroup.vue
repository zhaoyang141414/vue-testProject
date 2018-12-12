<template>
  <div>
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-row type="flex" class="row-bg" justify="space-around">
              <el-col :span="8">
                  <el-form-item label="名称">
                      <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="8">
                  <el-form-item label="活动区域">
                      <el-input v-model="formLabelAlign.region"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="8">
                  <el-form-item label="活动形式">
                      <el-input v-model="formLabelAlign.type"></el-input>
                  </el-form-item>
              </el-col>
          </el-row>
          <el-row class="row-bg">
            <el-col :span="8">
                <el-form-item label="活动范围1">
                  <el-select
                  v-model="formLabelAlign.regionZone"
                  placeholder="请选择活动区域"
                  style="width:100%" 
                    >
                    <el-option
                      v-for="item in activeZoneData"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                    <!-- <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option> -->
                  </el-select>
                </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-button type="primary" @click.native.prevent="_submit">提交</el-button>
            </el-col>
          </el-row>
      </el-form>
  </div>
</template>
<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
<script>
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
        regionZone:"shanghai",
      },
      activeZoneData:[
        {
          value:'shanghai',
          label:'区域一'
        },
        {
          value:'beijing',
          label:'区域二'
        }
      ]
    };
  },
  methods: {
    _submit() {
      console.log(this.formLabelAlign);
    }
  }
};
</script>
