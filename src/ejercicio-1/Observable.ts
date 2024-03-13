import { Event } from "./Event.js";
import { Observer } from "./Observer.js";

/**
 * Generic interface for observable classes
 */
export interface Observable<T> {
  suscribe(observer: Observer<T>): void;
  unsuscribe(observer: Observer<T>): void;
  notify(event: Event<T>): void;
}