<template>
  <div id="app">
    <v-button>Hello</v-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VButton from './components/VButton.vue';

@Component({
  components: {
    VButton,
  },
})
export default class App extends Vue {}
</script>

<style lang="css">
@import url(./assets/style.css);
</style>
