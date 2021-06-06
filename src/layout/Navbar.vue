<template>
  <nav class="navbar" ref="navbar">
    <router-link :to="ROUTES.MAIN" id="home-navbar" class="navbar__title">
      <figure class="navbar__image">
        <img :src="require('@images/logo.png')" alt="">
      </figure>
      <strong>Shopping</strong>
    </router-link>
    <div class="navbar__toggle__content">
      <button type="button" id="navbar-menu-toggle" class="navbar__toggle__search">
        <font-icon :icon="[ 'fas', 'ellipsis-v' ]"></font-icon>
      </button>
      <button type="button" id="navbar-toggle" class="navbar__toggle">
        <font-icon :icon="[ 'fas', 'bars' ]" size="lg"></font-icon>
      </button>
    </div>
    <ul class="navbar__menu" ref="menu">
      <li class="navbar__menu__item navbar__menu__search">
        <a id="search" href="" @click.prevent>
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
          <font-icon :icon="[ 'fas', 'shopping-bag' ]" size="lg"></font-icon>
        </a>
      </li>
    </ul>
    <div class="navbar__search__content">
      <form autocomplete="off" spellcheck="false" class="navbar__search" @submit.prevent>
        <div class="navbar__search__group" :class="{ active: searchFocused }">
          <button type="submit" id="navbar-search"
            @click="searchFocused = !searchFocused"
            @blur="searchFocused = false">
            <font-icon :icon="[ 'fas', 'search' ]" size="lg"></font-icon>
          </button>
          <input type="text" id="navbar-search-field" placeholder="Search..."
            @focus="searchFocused = true"
            @blur="searchFocused = false">
        </div>
      </form>
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
  searchFocused = false;

  get $html() {
    return document.documentElement;
  }

  mounted() {
    const $navbar = this.$refs.navbar as HTMLElement;
    const $menu = this.$refs.menu as HTMLUListElement;
    const $items = [ ...$menu.querySelectorAll('li') ] as HTMLLIElement[];
    this.activeItem($items);
    this.scopeActiveItem($navbar, $items);
  }

  private scopeActiveItem($navbar: HTMLElement, $items: HTMLLIElement[]) {
    this.$html.addEventListener('click', ({ target }) => {
      if (!$navbar.contains(target as HTMLElement)) {
        this.removeActiveItemClass($items);
      }
    });
  }

  private activeItem($items: HTMLLIElement[]) {
    for (const $item of $items) {
      $item.addEventListener('click', _ => {
        this.removeActiveItemClass($items);
        $item.classList.add('active');
      });
    }
  }

  private removeActiveItemClass($items: HTMLLIElement[]) {
    $items.filter($item => $item.classList.remove('active'));
  }
}
</script>
