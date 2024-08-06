<script setup lang="ts">

import CrudButton from "./Crud/CrudButton.vue";
</script>

<template>
  <div class="crud-list">
    <CrudButton :name="'Delete selected'" :text="'Are you sure you want to delete this country?'"/>
  </div>
</template>

<style scoped lang="scss">
@use '../../assets/style/mixins' as *;


.crud-list {
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  right: 10px;
  bottom: 20px;
  width: 280px;
  height: 80px;

  z-index: 0;

  @include xs {
    right: auto;
  }
}

</style>