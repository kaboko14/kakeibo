<template>
  <div>
    <table>
      <tr v-for="(item,index) in items" :key="index">
        <td class="table-date">{{item.date.replace(/-/g,'/')}}</td>
        <td v-if="item.purpose ==='need'" class="table-purpose need">{{item.purpose}}</td>
        <td v-else class="table-purpose want">{{item.purpose}}</td>
        <td class="table-category">{{item.category}}</td>
        <td class="table-price">{{item.price.toLocaleString()}}</td>
        <td class="table-delete-button"><button @click="deleteItem(index)">×</button></td>
      </tr>
    </table>

  </div>
</template>
<script>
export default {
  name:'ItemTable',
  props:{
    items:{
      type:Array
    }
  },
  methods: {
    deleteItem(index){
      this.$emit('my-click',index)
      console.log(index);
    }
  },
}


</script>
<style scoped>
@import 'ItemTable.css';
</style>
