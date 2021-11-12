import {MenuItem} from "./menu-item";

export interface MenuItemEvent {
  onClick(item: MenuItem): void;
}
