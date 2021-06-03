<template>
  <nav class="navigation">
    <router-link :to="ROUTES.MAIN" id="home-navigation" class="navigation__title">
      <figure class="navigation__image">
        <img :src="require('@images/logo.png')" alt="">
      </figure>
    </router-link>
    <button type="button" id="navigation-toggle" class="navigation__toggle">
      <font-awesome :icon="[ 'fas', 'align-right' ]" size="2x"></font-awesome>
    </button>
    <div class="navigation__content">
      <ul class="navigation__menu">
        <li class="navigation__menu__item">
          <a id="search" href="" @click.prevent>
            <font-awesome :icon="[ 'fas', 'search' ]"></font-awesome>
          </a>
        </li>
        <li id="favorite" class="navigation__menu__item">
          <a href="" @click.prevent="favorite = !favorite">
            <font-awesome :icon="favorite ? [ 'fas', 'heart' ] : [ 'far', 'heart' ]"></font-awesome>
          </a>
        </li>
        <div class="navigation__menu__item">
          <a id="shopping" href="" @click.prevent>
            <font-awesome :icon="[ 'fas', 'shopping-bag' ]"></font-awesome>
          </a>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { APP_ROUTES } from '@models/routes';

const { HOME: ROUTES } = APP_ROUTES;

@Component
export default class Navbar extends Vue {
  readonly ROUTES = ROUTES;
  favorite = false;
}
</script>
