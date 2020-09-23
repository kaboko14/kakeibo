<template>
  <div class="add-item__container">
    <CategoryButtons
      class="add-item__category-buttons"
      :new-item="newItem"
      :button-properties="addItemProperties.categoryButtonProperties"
      @category-button-click="onChange"
    />
    <transition name="fade">
      <Button
        v-if="!formsView"
        class="add-item__form-open-button"
        :button-color="'color-main'"
        @click="openForms()"
      >
        <p>
          フォーム入力
        </p>
      </Button>
      <div v-else>
        <Forms
          class="add-item__forms"
          :text-form-placeholder="addItemProperties.initialCategory"
          :new-item="newItem"
          @form-input="onChange"
        />
        <IncrementButtons
          class="add-item__increment-buttons"
          :new-item="newItem"
          :button-numbers="addItemProperties.incrementButtonNumbers"
          @increment-button-click="onChange"
        />
        <Button
          v-if="!newItem.price"
          class="add-item__add-item-button"
          :button-color="'color-disable'"
        >
          <p>
            {{ addItemProperties.addItemButtonLabel }}
          </p>
        </Button>
        <Button
          v-else
          class="add-item__add-item-button"
          :button-color="'color-sub'"
          @click="addNewItem"
        >
          <p>
            {{ addItemProperties.addItemButtonLabel }}
          </p>
        </Button>
      </div>
    </transition>
  </div>
</template>
<script>
import Button from '@/components/atoms/Button.vue';
import CategoryButtons from '@/components/molecules/CategoryButtons.vue';
import Forms from '@/components/organisms/Forms.vue';
import IncrementButtons from '@/components/molecules/IncrementButtons.vue';
import { getDate } from '@/utils';

export default {
  name: 'AddItem',
  components: {
    Button,
    CategoryButtons,
    Forms,
    IncrementButtons
  },
  props: {
    addItemProperties: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      item: {
        date: getDate(),
        category: '',
        price: '',
        type: '',
        createdAt: ''
      },
      formsView: false
    };
  },
  computed: {
    newItem () {
      return {
        date: this.item.date,
        category: !this.item.category ? '' : this.item.category,
        price:
          !this.item.price || this.item.price <= 0 ? '' : this.item.price * 1
      };
    }
  },
  methods: {
    onChange (item) {
      this.item = item;
      this.openForms();
    },
    openForms () {
      this.formsView = true;
    },
    closeForms () {
      this.formsView = false;
    },
    addNewItem () {
      this.newItem.type = this.addItemProperties.itemType;
      if (!this.newItem.category) {
        this.newItem.category = this.addItemProperties.initialCategory;
      }
      this.$emit('add-item-button-click', this.newItem);
      this.closeForms();
      this.itemInit();
    },
    itemInit () {
      this.item.date = getDate();
      this.item.category = '';
      this.item.price = '';
    }
  }
};
</script>
<style scoped lang="scss">
.fade-enter-active {
  animation: fade-in 0.4s;
}
.add-item {
  &__container {
    text-align: center;
  }
  &__category-buttons {
    margin-bottom: 10px;
  }
  &__form-open-button {
    width: 100%;
    padding: 10px;
  }
  &__forms {
    opacity: 1;
    margin: 20px 0px;
  }
  &__increment-buttons {
    margin-bottom: 20px;
  }
  &__add-item-button {
    width: 100%;
    font-weight: bold;
    padding: 10px;
  }
}
</style>
