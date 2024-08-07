<script setup>

import {inject} from "vue";

const props = defineProps({
  text: String,
  popUp: Boolean
})

const loading = inject('loading')
const selectedCountries = inject('selectedCountries')

const visibleCountries = inject('visibleCountries')

const emit = defineEmits(['close'])

const deleteCountries = () => {
  loading.value = true
  emit('close')

  setTimeout(() => {
    visibleCountries.value = visibleCountries.value.filter(country => !selectedCountries.value.includes(country));
    loading.value = false
    selectedCountries.value = []
  }, 1000)
}

</script>

<template>
  <div class="delete-popup">
    <div class="block">
      <div class="header">
        Confirm you action
        <hr>
      </div>
      <div class="text">
        {{ text }}
      </div>
      <div class="footer">
        <div class="button-success" @click="deleteCountries()">
          Yes
        </div>

        <div class="button-error" @click="emit('close')">
          Cancel
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>