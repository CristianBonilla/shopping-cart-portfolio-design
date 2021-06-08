<template>
  <transition name="footer-slide" enter-active-class="slide__up">
    <footer v-if="footerEntry" class="footer">
      <div class="footer__content">
        <p class="footer__description">
          <strong>&copy;&ensp;Copyright,</strong> {{ year }} All right reserverd
        </p>
      </div>
    </footer>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  readonly year = new Date().getFullYear();
  footerEntry = false;

  mounted() {
    this.footerEntry = true;
  }
}
</script>

<style lang="less">
.slide {

  &__up {
    .animation({ animation-name: slideInUp; });
  }
}
</style>
