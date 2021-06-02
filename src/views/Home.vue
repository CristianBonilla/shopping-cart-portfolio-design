<template>
  <div class="wrapper">
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@layout/Footer.vue';

@Component({
  components: {
    Footer
  }
})
export default class Home extends Vue { }
</script>
