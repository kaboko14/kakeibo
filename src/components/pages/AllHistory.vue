<template>
  <div>
    <ItemTable
      :items="items"
    />
  </div>
</template>
<script>
import ItemTable from '@/components/organisms/ItemTable.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'AllHistory',
  components: {
    ItemTable
  },
  computed: {
    ...mapGetters('items', ['items'])
  }
};
</script>
