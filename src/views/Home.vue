<template>
  <div class="wrapper">
    <Navbar/>
    <Sidebar/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@layout/Navbar.vue';
import Footer from '@layout/Footer.vue';
import Sidebar from '@layout/Sidebar.vue';

@Component({
  components: {
    Navbar,
    Footer,
    Sidebar
  }
})
export default class Home extends Vue { }
</script>
