import {MenuItemEvent} from "./menu-item-event";
import {v4 as uuid} from 'uuid'

export class MenuItem {
  id = uuid()
  label: string
  onEvent: MenuItemEvent | null
  children: MenuItem[]

  constructor(label: string, onEvent: MenuItemEvent | null = null, children: MenuItem[] = []) {
    this.label = label
    this.onEvent = onEvent
    this.children = children
  }
}
