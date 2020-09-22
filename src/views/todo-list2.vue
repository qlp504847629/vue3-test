<template>
  <div>
    <div>
      <label>新建待办事项</label>
      <a-input v-model:value="value" placeholder="请输入待办事项名称" />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name:"Todolist2",
  setup(){
    const state = reactive({
      todolist = [
        {
          name: '写BUG',
          id: 1,
          done: false
        },{
          name: '改BUG',
          id: 1,
          done: false
        },{
          name: '提交BUG',
          id: 1,
          done: false
        },
      ],
      todo: ''
    })
  }
}
</script>

<style>

</style>