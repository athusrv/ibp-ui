import {MenuItemEvent} from "./menu-item-event";

export class MenuItem {
  label: string
  onEvent: MenuItemEvent | null
  children: MenuItem[]

  constructor(label: string, onEvent: MenuItemEvent | null = null, children: MenuItem[] = []) {
    this.label = label
    this.onEvent = onEvent
    this.children = children
  }
}
