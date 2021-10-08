<script setup>
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import { ref } from '@vue/reactivity';
  // import HelloWorld from '/@/components/HelloWorld.vue';
  import { Button } from 'ant-design-vue';
  const vite_port = ref(import.meta.env.VITE_PORT);
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <a-button type="primary">按钮</a-button>
  <a-input v-model:value="vite_port" />
  <div>vite_port: {{ vite_port }}</div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
