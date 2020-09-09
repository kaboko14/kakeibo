<template>
  <Card
    :card-title="'最近の入力'"
  >
    <ItemTable
      :items="recentlyItems"
    />
  </Card>
</template>
<script>
import Card from '@/components/atoms/Card.vue';
import ItemTable from '@/components/organisms/ItemTable.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'RecentlyHostory',
  components: {
    Card,
    ItemTable
  },
  computed: {
    ...mapGetters('items', ['recentlyItems'])
  }
};
</script>
