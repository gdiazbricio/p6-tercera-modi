import { Event } from "./Event.js";
import { Observer } from "./Observer.js";


/**
 * Class ButtonObserver to observe buttons.
 */
export class ButtonObserver implements Observer<string> {
  constructor(private id: string, private name: string){}
  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  update(event: Event<string>): void {
    console.log(`Soy el observador ${this.name}: ${event.data}`);
  }
}

//client code
// const myButton = new Button("0", "myButton");
// const myFirstObvserver = new ButtonObserver("0", "firstButtonObserver");
// const mySecondObvserver = new ButtonObserver("0", "secondButtonObserver");

// myButton.suscribe(myFirstObvserver);
// myButton.suscribe(mySecondObvserver);

// myButton.click("Click en el botón");