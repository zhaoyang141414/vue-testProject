<template>
 <!-- 提示弹层 -->
 <div class="tips" v-show="tips.show">
 <h3>{{tips.title}}</h3> 
 </div>
</template>
<script>
// 测试全局组件引用以及使用
export default {
  name: "tips",
  data() {
    return {
      // 可以根据实际情况写更复杂的弹层，根据情况扩充tips即可
      tips: {
        show: false,
        title: ""
      }
    };
  },
  created() {
    this.tools.$on("tips", data => {
      this.tips = data;
    });
  },
  watch: {
    // 检测tips变化，显示提示1.5s之后自动关闭，可根据实际情况自动修改时间
    tips: function() {
      if (this.tips.show) {
        setTimeout(() => {
          this.tips.show = false;
        }, 1500);
      }
    }
  }
};
</script>
<style scoped lang="scss">
.tips {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  color: #fff;
  h3 {
    // padding: 0.1rem 0.2rem;
    font-size: 20px;
    line-height: 20px;
    background-color: rgba(27, 117, 168, 0.8);
    border-radius: 4px;
    padding:10px 10px;
  }
}
</style>