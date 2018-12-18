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
               <el-button type="primary" @click.native.prevent="_getData">{{$t('message.getDataBtn')}}</el-button>
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
        regionZone: "shanghai"
      },
      activeZoneData: [
        {
          value: "shanghai",
          label: this.$t("message.zoneOne")
        },
        {
          value: "beijing",
          label: this.$t("message.zoneTwo")
        }
      ]
    };
  },
  beforeCreate() {
    console.log("创建前状态");
  },
  methods: {
    // 点击提交
    _submit() {
      console.log(this.formLabelAlign);
      this.tools.$emit("tips", { show: true, title: "提交成功" });
    },
    // axious 测试获取数据
    // 如果想要发送带json格式参数的请求，则需要使用qs模块来处理参数
    // 若跨域的话，webpack添加proxyTable
    //  proxyTable: {
    //   '/api': {
    //     target: 'http://40.00.100.100:3002/',//设置你调用的接口域名和端口号 别忘了加http
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/'//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
    //     }
    //   }
    // },
    _getData() {
      console.log("获取接口数据");
      // var _this = this;//两种this处理axios作用域问题，此为1,还有就是.bind,如下
      this.$ajax({
        method: "get",
        url: "https://www.apiopen.top/journalismApi"
      })
        .then(function(response) {
          console.log(response);
          if (response.data.code === 200) {
            this.$message({
              message: "查询成功",
              type: "success"
            });
            // _this.tools.$emit("tips", { show: true, title: "查询成功" });
          }
        }.bind(this))
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
