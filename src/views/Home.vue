<template>
  <div class="wrapper">
    <Navbar/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@layout/Navbar.vue';
import Footer from '@layout/Footer.vue';

@Component({
  components: {
    Navbar,
    Footer
  }
})
export default class Home extends Vue { }
</script>
