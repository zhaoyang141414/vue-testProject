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
import store from '../store/Store';
export default {
  name: "UserForm",
  components: {
    userForm: userForm
  },
  methods: {
    _submit() {
      console.log("点击获取vuex的值",store.state.user,'子组件传过来的值',this.data);
      var sendData = 456;
      // store.commit('changeData',this.data); // 调用VueX的mutations方法
       store.dispatch('changeData',sendData);
    },
    // 监听获取子组件传过来的值
    childClose(childValue){
        console.log(childValue,'子组件传过来');
        this.data = childValue
    }
  }
};
</script>
