<template>
  <div>
    <p>残高 {{remainder.toLocaleString()}}</p>
  </div>
</template>
<script>
export default {
  name:'Remainder',
  props:{
    remainder:{
      type:Number,
    }
  }
}
</script>
