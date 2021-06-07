import Vue from 'vue';
import Component from 'vue-class-component';
import {
  AnyElementRef,
  MenuElementRef,
  SearchElementRef
} from '@models/navbar-elements-ref';

@Component
export class NavbarToggle extends Vue {
  get $navbar() {
    return this.$refs.navbar as HTMLElement;
  }

  get menu(): MenuElementRef {
    return {
      show: false,
      height: 0,
      $el: this.$refs.menu as HTMLUListElement,
      $items: []
    };
  }

  get search(): SearchElementRef {
    return {
      show: false,
      height: 0,
      $el: this.$refs.search as HTMLDivElement,
      $input: this.$refs.searchInput as HTMLInputElement
    };
  }

  mounted() {
    this.menu.$items = [ ...this.menu.$el.querySelectorAll('li') ] as HTMLLIElement[];
  }

  navbarContains($el: HTMLElement) {
    return this.$navbar.contains($el);
  }

  navbarScope($el: HTMLElement) {
    if (this.navbarContains($el)) {
      return;
    }
    if (this.hasToggleClasses(this.menu.$el)) {
      this.hide(this.menu);
    }
    if (this.hasToggleClasses(this.search.$el)) {
      this.hide(this.search);
    }
  }

  menuToggle() {
    this.toggle(this.menu);
    if (!this.menu.show && this.search.show) {
      if (this.hasToggleClasses(this.search.$el)) {
        this.hide(this.search);
      }
    }
  }

  searchToggle() {
    this.toggle(this.search);
  }

  private toggle(ref: AnyElementRef) {
    if (this.hasToggleClasses(ref.$el)) {
      this.hide(ref);
    } else {
      this.show(ref);
    }
  }

  private show(ref: AnyElementRef) {
    const { $el } = ref;
    $el.classList.add('show');
    ref.show = true;
    ref.height = $el.offsetHeight;
    $el.classList.add('toggle');
    setTimeout(() => $el.style.height = `${ ref.height }px`, 10);
  }

  private hide(ref: AnyElementRef) {
    const { $el } = ref;
    ref.show = false;
    ref.height = 0;
    $el.style.height = '';
    $el.addEventListener('transitionend', _ => {
      $el.classList.remove('toggle', 'show');
    }, { once: true });
  }

  private hasToggleClasses($el: HTMLElement) {
    return [ 'toggle', 'show' ].every(hasClass => $el.classList.contains(hasClass));
  }
}
