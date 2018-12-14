<template>
    <div>
        <userForm message="hello" @childClose="childClose"></userForm>
         <el-row>
            <el-col :span="6">
                 <el-button type="primary" @click.native.prevent="_submit">获取数据</el-button>
         </el-col>
          </el-row>
    </div>
</template>
<script>
import userForm from "../modal/AddInputComponent";
export default {
  name: "UserForm",
  components: {
    userForm: userForm
  },
  methods: {
    _submit() {
      console.log("点击了", this.data);
    },
    // 监听获取子组件传过来的值
    childClose(childValue){
        console.log(childValue,'子组件传过来');
        this.data = childValue
    }
  }
};
</script>
