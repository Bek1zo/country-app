<script setup lang="ts">

const emit = defineEmits(['clearFilter'])

</script>

<template>
  <button class="filter" style="cursor: pointer" @click="emit('clearFilter')">
    Clear filter
  </button>
</template>

<style scoped lang="scss">

</style>