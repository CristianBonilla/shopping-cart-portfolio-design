import Vue from 'vue';
import Component from 'vue-class-component';
import {
  AnyElementRef,
  MenuElementRef,
  SearchElementRef
} from '@models/navbar-elements-ref';

@Component
export class NavbarExtend extends Vue {
  get $navbar() {
    return this.$refs.navbar as HTMLElement;
  }

  get menu(): MenuElementRef {
    return {
      show: false,
      height: 0,
      $el: this.$refs.menu as HTMLUListElement,
      $items: [],
      removeActiveItemClass() {
        this.$items.filter($item => $item.classList.remove('active'));
      }
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

  menuToggle() {
    this.toggle(this.menu);
    if (!this.menu.show && this.search.show) {
      this.hideSearch();
    }
  }

  searchToggle() {
    this.toggle(this.search);
  }

  updateMenuItems() {
    this.menu.$items = [ ...this.menu.$el.querySelectorAll('li') ] as HTMLLIElement[];
  }

  mediaQueryChangeEvents() {
    const hideSearchMQ = window.matchMedia('(max-width: 320px)');
    const resetMenuMQ = window.matchMedia('(min-width: 321px)');
    const resetSearchMQ = window.matchMedia('(min-width: 576px)');
    hideSearchMQ.addEventListener('change', ({ matches }) => {
      if (matches) {
        this.hideSearch();
      }
    });
    resetMenuMQ.addEventListener('change', ({ matches }) => {
      if (matches) {
        this.reset(this.menu);
      }
    });
    resetSearchMQ.addEventListener('change', ({ matches }) => {
      if (matches) {
        this.reset(this.search);
      }
    });
  }

  navbarScope() {
    const $html = document.documentElement;
    $html.addEventListener('click', ({ target }) => {
      if (!this.$navbar.contains(target as HTMLElement)) {
        this.menu.removeActiveItemClass();
        this.hideMenu();
        this.hideSearch();
      }
    });
    this.activeItem();
  }

  private activeItem() {
    for (const $item of this.menu.$items) {
      $item.addEventListener('click', _ => {
        this.menu.removeActiveItemClass();
        $item.classList.add('active');
      });
    }
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

  private hideMenu() {
    if (this.hasToggleClasses(this.menu.$el)) {
      this.hide(this.menu);
    }
  }

  private hideSearch() {
    if (this.hasToggleClasses(this.search.$el)) {
      this.hide(this.search);
    }
  }

  private hide(ref: AnyElementRef) {
    const { $el } = ref;
    ref.show = false;
    ref.height = 0;
    $el.style.height = '';
    $el.addEventListener('transitionend', _ => {
      this.menu.removeActiveItemClass();
      $el.classList.remove('toggle', 'show');
    }, { once: true });
  }

  private reset(ref: AnyElementRef) {
    const { $el } = ref;
    ref.height = 0;
    $el.style.height = '';
    $el.classList.remove('toggle', 'show');
  }

  private hasToggleClasses($el: HTMLElement) {
    return [ 'toggle', 'show' ].every(hasClass => $el.classList.contains(hasClass));
  }
}
