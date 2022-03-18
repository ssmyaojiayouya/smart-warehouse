<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'App',
  setup() {

  }
}
</script>

<style>
  body, html{
    padding: 0px;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  #app{
    height: 100%;
  }
</style>
