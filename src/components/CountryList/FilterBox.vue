<script setup>

import FilterBoxInput from "./FilterBox/FilterBoxInput.vue";
import {inject} from "vue";
import FilterBoxButton from "./FilterBox/FilterBoxButton.vue";


const squareFilter = inject('squareFilter')
const populationFilter = inject('populationFilter')

const emit = defineEmits(['searchItems', 'clearFilter']);

</script>

<template>
  <div class="filter-box">

    <FilterBoxInput v-model="squareFilter" @update:modelValue="emit('searchItems')" name="Min. Square"/>
    <FilterBoxInput v-model="populationFilter" @update:modelValue="emit('searchItems')" name="Min. Population"/>

    <FilterBoxButton @clearFilter="emit('clearFilter')"/>
  </div>
</template>

<style lang="scss">
@use '../../assets/style/mixins' as *;

.filter-box {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;

  @include xs {
    flex-direction: column;
    height: 220px;
  }

  .filter {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    padding: 15px;

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 15px;
    min-width: 300px;
    height: 40px;
    font-size: 20px;

    input {
      font-size: 16px;
    }
  }

}
</style>