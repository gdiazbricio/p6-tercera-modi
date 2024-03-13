import "mocha";
import { expect } from "chai"; 
import { Button } from "../dist/ejercicio-1/Button.js";
import { ButtonObserver } from "../dist/ejercicio-1/ButtonObserver.js";

const myButton = new Button("0", "myButton");
myButton.click("Click en el botón");
const myfirstButtonObserver = new ButtonObserver("0", "firstObserver");
const mySecondObserver = new ButtonObserver("0", "secondObserver");

describe("exercise 1 tests", () => {
  let consoleOutput: string[] = [];

  // beforeEach(() => {
  //   // Redirigir console.log a un buffer temporal
  //   consoleOutput = [];
  //   console.log = (message: string) => {
  //     consoleOutput.push(message);
  //   };
  // });


  it("Class Button must create buttons correctly", () => {
    expect(myButton.getName()).to.be.equal("myButton");
  });

  it("Class Button must create buttons correctly", () => {
    expect(myButton.getId()).to.be.equal("0");
  });

  it("Class Button click() must change its event", () => {
    expect(myButton.getEvent().data).to.be.equal("Click en el botón");
  });

  // it("Class Button must suscribe observers", () => {
  //   myButton.suscribe(myfirstButtonObserver);
  //   myButton.click("Click en el botón");
  //   expect(consoleOutput).to.include("Soy el observador firstObserver:");
  // });

  // it("Class Button must unsiscribe observers", () => {
  //   myButton.unsuscribe(myfirstButtonObserver);
  //   myButton.suscribe(mySecondObserver);
  //   myButton.click("Click en el botón");
  //   expect(consoleOutput).to.include("Soy el observador secondObserver:");
  // });
})