<template>
  <footer class="footer">
    <div class="footer__content">
      <p class="footer__description">
        <strong>&copy;&ensp;Copyright,</strong> {{ year }} All right reserverd
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  readonly year = new Date().getFullYear();
}
</script>
