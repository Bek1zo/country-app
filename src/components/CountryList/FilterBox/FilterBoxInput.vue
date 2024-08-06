<script setup lang="ts">

const props = defineProps({
  'name': String,
  'modelValue': Number
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (value) => {
  emit('update:modelValue', value);
};

</script>

<template>
  <div class="filter">
    <div class="name">
      {{ name }}
    </div>
    <div class="buttons">
      <input :value="modelValue" @input="updateValue($event.target.value)" type="number">
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>