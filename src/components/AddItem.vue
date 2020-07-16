<template>
  <div class="container">

    <div class="button-container-3cl">
      <button v-for="(category,index) in categorys" :key="index" @click="changeItem(category.name,category.price)" class="button button-category">
        {{category.name}}<br>
        ￥{{category.price.toLocaleString()}}
      </button>
    </div>

    <div class="preview-container">
      <div class="preview-wrapper">
        <p class="preview-date">{{item.date.replace(/-/g,'/')}}</p>
        <p class="preview">
          {{item.category}} ￥{{item.price.toLocaleString()}}
        </p>
      </div>
      <button @click="formViewToggle()" class="button edit-button">フォーム入力</button>
    </div>

    <div class="form-container" :class="{view:formView}">
      <div class="form-wrapper form-date">
        <label class="label">日付:</label>
        <input type="date" name="date" id="date" v-model="item.date" class="form">
      </div>
      <div class="form-wrapper form-category" >
        <label class="label">摘要:</label>
        <input type="text" name="category" v-model="categoryForm" placeholder="その他" class="form">
        <button @click="clearCategoryForm()" class="clear-button">×</button>
      </div>
      <div class="form-wrapper form-price">
        <label class="label">金額:</label>
        <input type="number" name="price" v-model.number="priceForm" placeholder="0" class="form">
        <button @click="clearPriceForm()" class="clear-button">×</button>
      </div>
    </div>

    <div class="button-container-3cl">
      <button @click="increment(1000)" class="button button-plus">+￥1,000</button>
      <button @click="increment(100)" class="button button-plus">+￥100</button>
      <button @click="increment(10)" class="button button-plus">+￥10</button>
      <button @click="increment(-1000)" class="button button-minus">-￥1,000</button>
      <button @click="increment(-100)" class="button button-minus">-￥100</button>
      <button @click="increment(-10)" class="button button-minus">-￥10</button>
    </div>
    <div class="button-container-2cl">
      <button @click="sendItem('need')" class="button button-need">NEED</button>
      <button @click="sendItem('want')" class="button button-want">WANT</button>
    </div>




  </div>
</template>

<script>
export default {
  name:'AddItem',
  data(){
    return{
      item:{
        date:this.getDate(),
        category:'その他',
        price:0,
        purpose:'',
      },
      itemLists:[],
      priceForm:null,
      categoryForm:'',

      //仮のカテゴリ
      categorys:[{name:'コンビニ',price:150},{name:'スーパー',price:2000},{name:'外食',price:1000},{name:'自販機',price:130},{name:'消耗品',price:200}],

      formView:false,
    }
  },
  methods: {
    increment(digit){
      this.priceForm+=1*digit;
    },
    formViewToggle(){
      this.formView = !this.formView;
      console.log(this.formView);
    },
    clearPriceForm(){
      this.priceForm=null;
    },
    clearCategoryForm(){
      this.categoryForm='';
    },
    changeItem(str,num){
      this.categoryForm = str;
      this.priceForm =num;
    },
    sendItem(str){
      this.item.purpose = str;
      this.$emit('my-click',this.item)
      this.clearPriceForm();
      this.clearCategoryForm();
      this.item.date = this.getDate();
      this.formView=false;
    },
    getDate(){
      let today =  new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      function getNumber(num,digit){
        num = String(num);
        if(num.length < digit){
          num = '0' + num;
        }
        return num
      }
      let yyyy = getNumber(year,4);
      let mm = getNumber(month,2);
      let dd= getNumber(day,2);
      return `${yyyy}-${mm}-${dd}`;
    },

  },
  watch: {
    priceForm(){
      if (!this.priceForm) {
        this.item.price = 0;
      }else{
        this.item.price = this.priceForm;
      }
    },
    categoryForm(){
      if (!this.categoryForm) {
        this.item.category = 'その他';
      }else{
        this.item.category = this.categoryForm;
      }
    },
  },
}
</script>

<style scoped>
@import 'AddItem.css';
</style>
