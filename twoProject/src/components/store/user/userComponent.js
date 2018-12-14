
// user模块的store
export default {
    state:{
       testData:123
    },
    // 多个state的操作，用mutations比较方便;
    // 组件使用state.commit('changeData')来调用
    // mutations里面不适合做异步,此操作必须是同步,且不能处理分模块的同名处理,即若其他文件也有
    // changeDatahan函数方法，此次调用会调用所有的changeData方法;
    // 多人开发避免变量污染，可使用使用常量替代 Mutation 事件类型：例:

    // export const SOME_MUTATION = 'SOME_MUTATION'
    // const store = new Vuex.Store({
    //     state: { ... },
    //     mutations: {
    //       // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    //       [SOME_MUTATION] (state) {
    //         // mutate state
    //       }
    //     }
    //   })

    mutations:{
        changeData(state,value){
            state.testData = value;
            alert(state,'测试VueXmutations',value)
            console.log(state,'测试VueXmutations',value)
        }
    },
    // 异步方式可在此处使用
    actions:{
        changeData(context,value){
            context.commit('changeData',value);
            // 子组件使用state.dispatch('changeData')来调用
            // context拥有state一样的对象方法；
            // 即可以统一多个mutations；
        }
    }
    // 处理异步回调例子:
    // actions: {
    //     actionA ({ commit }) {
    //       return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //           commit('someMutation')
    //           resolve()
    //         }, 1000)
    //       })
    //     }
    //   }
    // 通过Promise
    // store.dispatch('actionA').then(() => {
    //     // ...
    //   })
    // actions: {
    //     // ...
    //     actionB ({ dispatch, commit }) {
    //       return dispatch('actionA').then(() => {
    //         commit('someOtherMutation')
    //       })
    //     }
    //   }
    // 如果使用了es7的 async,和await,则可以这样写:
    // actions: {
    //     async actionA ({ commit }) {
    //       commit('gotData', await getData())
    //     },
    //     async actionB ({ dispatch, commit }) {
    //       await dispatch('actionA') // 等待 actionA 完成
    //       commit('gotOtherData', await getOtherData())
    //     }
    //   }

}