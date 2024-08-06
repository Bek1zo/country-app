<script setup>
import {inject, ref} from 'vue';
import router from "../router/router.js";

const username = ref('');
const password = ref('');

const loading = inject('loading')

const handleSubmit = () => {
  loading.value = true
  // Например, имитация отправки данных
  setTimeout(() => {
    loading.value = false
    localStorage.setItem('isLogin', true)
    console.log(localStorage.getItem('isLogin'))
    router.push('/')
  }, 1000);
};
</script>

<template>
  <div class="login-form">
    <h2>Authorization</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button class="button-success" type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
.login-form {
  width: 450px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>