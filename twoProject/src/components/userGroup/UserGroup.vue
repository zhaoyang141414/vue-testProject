<template>
  <div>
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-row type="flex" class="row-bg" justify="space-around">
              <el-col :span="8">
                  <el-form-item :label="$t('message.name')">
                      <el-input v-model="formLabelAlign.name" :placeholder="$t('message.name')"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="8">
                  <el-form-item :label="$t('message.activeZone')">
                      <el-input v-model="formLabelAlign.region" :placeholder="$t('message.activeZone')"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="8">
                  <el-form-item :label="$t('message.activeStyle')">
                      <el-input v-model="formLabelAlign.type" :placeholder="$t('message.activeStyle')"></el-input>
                  </el-form-item>
              </el-col>
          </el-row>
          <el-row class="row-bg">
            <el-col :span="8">
                <el-form-item :label="$t('message.activeAmount')">
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
              <el-button type="primary" @click.native.prevent="_submit">{{$t('message.submit')}}</el-button>
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
          label:this.$t('message.zoneOne')
        },
        {
          value:'beijing',
          label:this.$t('message.zoneTwo')
        }
      ]
    };
  },
   beforeCreate(){
    console.log('创建前状态'); 
   },
  methods: {
    // 点击提交
    _submit() {
      console.log(this.formLabelAlign);
      this.tools.$emit('tips',{show:true,title:'提交成功'})
    }
  }
};
</script>
