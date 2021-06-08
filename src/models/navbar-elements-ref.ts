interface NavbarElementRef<T extends HTMLElement> {
  show: boolean;
  height: number;
  $el: T;
}

export type AnyElementRef = NavbarElementRef<HTMLElement>;

export interface MenuElementRef extends NavbarElementRef<HTMLUListElement> {
  $items: HTMLLIElement[];
  removeActiveItemClass: () => void;
}

export interface SearchElementRef extends NavbarElementRef<HTMLDivElement> {
  $input: HTMLInputElement;
}
