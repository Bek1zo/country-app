<script setup>

import {watch} from "vue";

const props = defineProps({
  modelValue: String,
  placehlolder: String
})

const emit = defineEmits(['update:modelValue']);

const updateValue = (value) => {
  emit('update:modelValue', value);
};

</script>

<template>
  <div class="search-box">
    <input type="text" placeholder="Entry country name to search..." @input="updateValue($event.target.value)">
  </div>
</template>

<style lang="scss">

@use '../../assets/style/mixins' as *;

.search-box {
  display: flex;
  justify-content: center;

  input {
    width: 1200px;

    border-radius: 5px;
    padding: 15px;
    font-size: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    height: 60px;

    @include xs {
      width: 90%;
    }
  }
}
</style>