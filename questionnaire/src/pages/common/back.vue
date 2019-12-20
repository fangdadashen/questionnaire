<template>
  <div class="common-back">
    <router-link to='/'>
      <span>back</span>
    </router-link>
  </div>
</template>

<script>
export default {
    name:'CommonBack'
}
</script>

<style scoped>
.common-back{
  font-size: 1.2em;
  position: absolute;
  right:1.5em;
}
.common-back span{
  color:#fff;
}
</style>