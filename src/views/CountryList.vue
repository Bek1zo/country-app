<script setup>

import axios from "axios";
import {inject, onBeforeUnmount, onMounted, provide, ref, watch} from "vue";
import Card from "../components/CountryList/Card.vue";


const loading = inject("loading");

const visibleCountries = ref([]);
const countries = inject("countries");

const page = ref(1);
const perPage = 25;



// Подгрузка первых данных + эвент
onMounted(async () => {
  loadItems();
  window.addEventListener('scroll', onScroll);
});

// Удаление слушателя при уничтожение компонента.
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});

// Поиск стран по фильтрам
const searchItems = () => {

  if (squareFilter.value === 0 && populationFilter.value === 0 && searchInput.value.length === 0) {
    searchInput.value.length
    loadItems()
  } else {
    visibleCountries.value = countries.value.filter(country =>
        country.name.toLowerCase().includes(searchInput.value.toLowerCase())
        && country.land_area > squareFilter.value
        && country.population > populationFilter.value).slice(0, perPage)
  }
}

// Ленивая загрузка
const loadItems = () => {
  if (loading.value) return;

  loading.value = true;

  setTimeout(() => {
    const start = (page.value - 1) * perPage;
    const end = page.value * perPage;
    visibleCountries.value = [...visibleCountries.value, ...countries.value.slice(start, end)];
    page.value++;
    loading.value = false;
  }, 500); // имитация задержки для демонстрации
};

// Выполняется при скролле страницы
const onScroll = () => {
  const bottomOfWindow = window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 10;
  if (bottomOfWindow) {
    if (squareFilter.value > 0 || populationFilter.value > 0 || searchInput.value.length > 0) {
      searchItems()
    } else {
      loadItems();
    }
  }
};

// Фильтрация и поиск по имени

import SearchBox from "../components/CountryList/SearchBoxInput.vue";
import FilterBox from "../components/CountryList/FilterBox.vue";
import Crud from "../components/CountryList/Crud.vue";

const clearFilter = () => {
  squareFilter.value = 0
  populationFilter.value = 0
  searchInput.value = ''
  loadItems()
}

const searchInput = ref('');
watch(searchInput, () => { searchItems() })

const squareFilter = ref(0)
provide('squareFilter', squareFilter)

const populationFilter = ref(0)
provide('populationFilter', populationFilter)

// Выбор страны
const selectedCountries = ref([]);
provide('selectedCountries', selectedCountries)



// Drag n drop

let draggedItem = null;

const onDragStart = (event, item) => {
  draggedItem = item;
  event.dataTransfer.effectAllowed = 'move';
};

const onDrop = (event, targetItem) => {

  const draggedIndex = visibleCountries.value.indexOf(draggedItem);
  const targetIndex = visibleCountries.value.indexOf(targetItem);

  visibleCountries.value.splice(draggedIndex, 1);
  visibleCountries.value.splice(targetIndex, 0, draggedItem);
};

</script>

<template>

  <SearchBox v-model="searchInput"/>

  <FilterBox :square-filter="squareFilter" :population-filter="populationFilter" @searchItems="searchItems()" @clearFilter="clearFilter()"/>

  <div class="country-list">
    <Card :country="country" :id="country.id" v-for="country in visibleCountries"
          draggable="true"
          @dragstart="onDragStart($event, country)"
          @dragover.prevent
          @drop="onDrop($event, country)"/>
    <Crud v-if="selectedCountries.length > 0"/>
  </div>
</template>

<style lang="scss">
@use '../assets/style/mixins' as *;


.country-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  @include xs {
    flex-direction: column;
    align-items: center;
  }

  @include xl {
    flex-direction: row;
  }

  .card {

    background: #fff;
    cursor: pointer;
    display: flex;
    height: 110px;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px;
    }

    @include xs {
      width: 280px;
    }

    @include xl {
      width: 400px;
    }

    img {
      width: 64px;
      height: 64px;
    }

    input {
      width: 40px;
      height: 40px;
    }

    a {
      text-decoration: none;
      color: black;
    }

  }



}

</style>