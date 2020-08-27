<template>
  <div class="tag">
    {{ tagLabel }}
  </div>
</template>
<script>
export default {
  name: 'Tag',
  props: {
    tagLabel: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.tag {
  display: inline-block;
  width: 70px;
  height: 30px;
  padding: 0 10px;
  border-radius: 20px;
  color: #ffffff;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  background-color: inherit;
}

</style>
