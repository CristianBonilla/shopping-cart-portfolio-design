<template>
  <nav class="navbar" ref="navbar">
    <router-link :to="ROUTES.MAIN" id="home-navbar" class="navbar__title">
      <figure class="navbar__image">
        <img :src="require('@images/logo.png')" alt="">
      </figure>
      <strong>Shopping</strong>
    </router-link>
    <div class="navbar__toggle__content">
      <button type="button" id="navbar-menu-toggle" class="navbar__toggle__menu"
        @click.prevent="menuToggle()">
        <font-icon :icon="[ 'fas', 'ellipsis-v' ]"></font-icon>
      </button>
      <button type="button" id="navbar-toggle" class="navbar__toggle">
        <font-icon :icon="[ 'fas', 'bars' ]" size="lg"></font-icon>
      </button>
    </div>
    <ul class="navbar__menu" ref="menu">
      <li class="navbar__menu__item navbar__menu__search">
        <a id="search" href="" @click.prevent="searchToggle()">
          <font-icon :icon="[ 'fas', 'search' ]" size="lg"></font-icon>
        </a>
      </li>
      <li class="navbar__menu__item">
        <a id="favorite" href="" @click.prevent="favorite = !favorite">
          <font-icon :icon="favorite ? [ 'fas', 'heart' ] : [ 'far', 'heart' ]" size="lg"></font-icon>
        </a>
      </li>
      <li class="navbar__menu__item">
        <a id="shopping" href="" @click.prevent>
          <div class="shopping">
            <font-icon :icon="[ 'fas', 'shopping-bag' ]" size="lg"></font-icon>
            <div class="shopping__bell">
              <small>{{ pending }}</small>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <div class="navbar__search__content" ref="search">
      <form autocomplete="off" spellcheck="false" class="navbar__search" @submit.prevent="searchFocus">
        <div class="navbar__search__group" :class="{ active: searchFocused }">
          <button type="submit" id="navbar-search">
            <font-icon :icon="[ 'fas', 'search' ]" size="lg"></font-icon>
          </button>
          <input type="text" id="navbar-search-field" placeholder="Search..." ref="searchInput"
            @focus="searchFocused = true"
            @blur="searchFocused = false">
        </div>
      </form>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { APP_ROUTES } from '@models/routes';
import { NavbarToggle } from '@mixins/navbar-toggle';

const { HOME: ROUTES } = APP_ROUTES;

@Component
export default class Navbar extends mixins(NavbarToggle) {
  readonly ROUTES = ROUTES;
  favorite = false;
  searchFocused = false;
  pending = '99+';

  mounted() {
    const $html = document.documentElement;
    $html.addEventListener('click', ({ target }) => {
      if (!this.navbarContains(target as HTMLElement)) {
        this.removeActiveItemClass();
      }
      this.navbarScope(target as HTMLElement);
    });
    this.activeItem();
  }

  searchFocus() {
    this.search.$input.focus();
    this.searchFocused = true;
  }

  private activeItem() {
    for (const $item of this.menu.$items) {
      $item.addEventListener('click', _ => {
        this.removeActiveItemClass();
        $item.classList.add('active');
      });
    }
  }

  private removeActiveItemClass() {
    this.menu.$items.filter($item => $item.classList.remove('active'));
  }
}
</script>

<style lang="less">
.slide {

  &__vertical-enter-active {
    .animation({ animation-name: slideOutDown; });
  }

  &__vertical-leave-active {
    .animation({ animation-name: slideOutUp; });
  }

  &__horizontal-enter-active {
    .animation({ animation-name: slideOutRight; });
  }

  &__horizontal-leave-active {
    .animation({ animation-name: slideOutLeft; });
  }
}
</style>
