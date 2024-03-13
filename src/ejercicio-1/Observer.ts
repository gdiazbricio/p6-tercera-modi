import { Event } from "./Event.js";


/**
 * Generic interface for observer classes.
 */
export interface Observer<T> {
  update(event: Event<T>): void;
}