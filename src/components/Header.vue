<script setup lang="ts">

</script>

<template>
  <div class="header">
    <router-link to="/"><img src="/bg.png" alt="Earth image"></router-link>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 250px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 28px;

  img {
    width: 250px;
    height: 250px;
  }
}

</style>