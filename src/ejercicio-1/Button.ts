import { Event } from "./Event.js";
import { Observable } from "./Observable.js";
import { Observer } from "./Observer.js";

/**
 * Generic class representing a button to be observed.
 */
export class Button<T> implements Observable<T> {
  private observers: Observer<T>[] = [];
  private event: Event<T>;
  constructor(private id: string, private name: string) {}

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getEvent(): Event<T> {
    return this.event;
  }

  click(newData: T): void {
    this.event = {
      data: newData
    }
    this.notify(this.event);
  }

  suscribe(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  unsuscribe(observer: Observer<T>): void {
    this.observers = this.observers.filter((element) => {
      element !== observer;
    })
  }

  notify(event: Event<T>): void {
    this.observers.forEach((element) => {
      element.update(event);
    })
  }
}