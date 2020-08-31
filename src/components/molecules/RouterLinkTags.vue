<template>
  <div class="router-link-tags__container">
    <template v-for="(routerLink, index) in routerLinks">
      <router-link
        :key="index"
        :to="routerLink.linkTo"
        class="router-link-tags__router-link"
        active-class="router-link-tags__router-link--active"
        exact
      >
        <Tag
          :tag-label="routerLink.tagLabel"
          class="router-link-tags__tag"
        />
      </router-link>
    </template>
  </div>
</template>
<script>
import Tag from '@/components/atoms/Tag.vue'
export default {
  nama: 'RouterLinkTags',
  components: {
    Tag
  },
  props: {
    routerLinks: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.router-link-tags {
  &__container {
    display: inline-block;
  }
  &__router-link {
    margin-right: 10px;
    &--active{
      & .router-link-tags__tag {
        background-color: $router-tag-color-active;
        @include button-decoration-active($button-thickness);
      }
    }
    &:last-child {
      margin-right: 0px;
    }
  }
  &__tag {
    background-color: $router-tag-color-inactive;
    @include button-decoration($router-tag-color-inactive);
  }
}
</style>
