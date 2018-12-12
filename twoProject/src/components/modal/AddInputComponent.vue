<template>
    <div>
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
            <el-row  type="flex" justify="start"> 
                <el-col :span="20">
                    <el-form-item
                            v-for="(domain, index) in dynamicValidateForm.domains"
                            :label="'域名' + index"
                            :key="domain.key"
                            :prop="'domains.' + index + '.value'"
                            :rules="{
                                required: true, message: '域名不能为空', trigger:['blur', 'change']
                            }"
                            style="text-align:left" 
                    >
                    <el-input v-model="domain.value" style="width:80%"></el-input>
                    <el-button @click.native.prevent="removeDomain(domain)">删除</el-button>
                </el-form-item>
                    <el-form-item>
                        <el-button @click="addDomain">新增</el-button>
                        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
                    </el-form-item>    
                </el-col>
            </el-row>
        </el-form> 
    </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            value: ""
          }
        ]
      }
    };
  },
  methods: {
    // 点击删除按钮
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        if( this.dynamicValidateForm.domains.length<2){
            this.$message({
                message:'只剩下一条数据,不能删除',
                type:'warning'
            });
            return
        }
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    // 点击添加按钮
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now()
      });
    },
    // 点击重置按钮
    resetForm(formName) {
      this.$refs[formName].resetFields();
    //   var resetArr = [{
    //         value: ""
    //   }]
    //   this.dynamicValidateForm.domains = resetArr;
    },
  }
};
</script>

