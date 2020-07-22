<template>
  <div class="add-item__container">
    <CategoryButtons
      @click="changeItem($event)"
      class="add-item__category-buttons"
    />
    <div class="add-item__preview-container">
      <ItemPreview class="add-item__item-preview" :item="newItem" />
      <Button
        :buttonLabel="['フォーム入力']"
        buttonClass="button-edit"
        @click="openForm()"
        class="add-item__form-open-button"
      />
    </div>
    <Forms
      :item-data="newItem"
      @inputDate="upDataDate($event)"
      @inputCategory="upDataCategory($event)"
      @inputPrice="upDataPrice($event)"
      class="add-item__forms"
      :class="{ formview: formView }"
    />
    <IncrementButtons
      @click="incrementPrice($event)"
      class="add-item__increment-buttons"
    />
    <AddItemButtons @click="sendItem($event)" />
  </div>
</template>
<script>
import CategoryButtons from "@/components/organisms/CategoryButtons.vue";
import ItemPreview from "@/components/atoms/ItemPreview.vue";
import Button from "@/components/atoms/Button.vue";
import Forms from "@/components/organisms/Forms.vue";
import IncrementButtons from "@/components/organisms/IncrementButtons.vue";
import AddItemButtons from "@/components/organisms/AddItemButtons.vue";

export default {
  components: {
    CategoryButtons,
    ItemPreview,
    Button,
    Forms,
    IncrementButtons,
    AddItemButtons,
  },
  data() {
    return {
      newItem: {
        id: 0,
        date: this.getDate(),
        category: "その他",
        price: "0",
        purpose: "",
      },
      formView: false,
    };
  },
  methods: {
    upDataDate(date) {
      this.newItem.date = date;
    },
    upDataCategory(category) {
      this.newItem.category = category;
    },
    upDataPrice(price) {
      this.newItem.price = price;
    },
    changeItem(item) {
      this.newItem.category = item.name;
      this.newItem.price = item.price;
    },
    incrementPrice(number) {
      this.newItem.price *= 1;
      this.newItem.price += number;
    },
    openForm() {
      this.formView = !this.formView;
    },
    sendItem(value) {
      this.newItem.purpose = value;
      this.$emit("click",this.newItem);
      this.newItem.id++;
      this.newItem.date = this.getDate();
      this.newItem.category = "その他";
      this.newItem.price = 0;
      this.newItem.purpose = "";
    },
    getDate() {
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      function getNumber(num, digit) {
        num = String(num);
        if (num.length < digit) {
          num = "0" + num;
        }
        return num;
      }
      let yyyy = getNumber(year, 4);
      let mm = getNumber(month, 2);
      let dd = getNumber(day, 2);
      return `${yyyy}-${mm}-${dd}`;
    },
  },
  watch: {
    "newItem.category"() {
      if (!this.newItem.category) {
        this.newItem.category = "その他";
      }
    },
    "newItem.price"() {
      if (!this.newItem.price) {
        this.newItem.price = 0;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.add-item {
  &__container {
    padding: 10px;
    text-align: center;
  }
  &__category-buttons {
    margin-bottom: 20px;
  }
  &__preview-container {
    display: flex;
    margin-bottom: 20px;
    align-items: flex-end;
  }

  &__item-preview {
    flex: 3;
  }

  &__form-open-button {
    margin-left: 10px;
    // margin-bottom: 0px;
    flex: 1;
  }

  &__forms {
    max-height: 0px;
    opacity: 0;
    overflow: hidden;
    transition: all 0.3s ease;

    &.formview {
      max-height: 400px;
      margin-bottom: 20px;
      opacity: 1;
    }
  }

  &__increment-buttons {
    margin-bottom: 20px;
  }
}
</style>
