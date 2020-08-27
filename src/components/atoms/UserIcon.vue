<template>
  <div
    :style="userIconStyle"
  />
</template>
<script>
export default {
  name: 'UserIcon',
  props: {
    userPhotoUrl: {
      type: String,
      required: false,
      default: null
    },
    imageWidth: {
      type: String,
      required: false,
      default: '36px'
    },
    imageHeight: {
      type: String,
      required: false,
      default: '36px'
    }
  },
  computed: {
    userIconStyle () {
      const style = {
        width: this.imageWidth,
        height: this.imageHeight
      }
      if (this.userPhotoUrl) {
        style.backgroundImage = `url(${this.userPhotoUrl})`
      }
      return style
    }
  }
}
</script>
<style scoped lang="scss">
div {
  background-color: $bg-color;
  background-image: url('../../assets/user.svg');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
}
</style>
