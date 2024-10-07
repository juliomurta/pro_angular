/*let myFunc = function(name: string, weather: string = "raining", ...extraArgs: any) {
  console.log("Hello " + name);
  console.log("It's a " + weather + " today");
  for(var i = 0; i < extraArgs.length; i++) {
    console.log("Extra args: " + extraArgs[i]);
  }
}

console.log("Hello");
console.log("apples");
myFunc("Julio");
myFunc("Melissa", "sunny", "one", "two", "three", "four");*/

import { TempConverter } from "./tempConverter";

let myFunc = (nameFunction: any) => ("Hello " + nameFunction() + ".");
let printName = (nameFunction: any, printFunction: any) => printFunction(myFunc(nameFunction));
printName(function() { return "Julio" }, console.log);

let messageFunction = function(name: string, weather: string) {
  let message = "Hello, Adam";
  if(weather == "sunny") {
    let message = "It is a nice day";
    console.log(message);
  } else {
    let message = "It is " + weather + " today";
    console.log(message);    
  }
  console.log(message);
}

messageFunction("Adam", "raining");
messageFunction("Adam", "sunny");

/*let myData = new Object();
myData.name = "Julio";
myData.weather = "sunny";*/

let myData = {
  name: "Adam",
  weather: "sunny",
  printMessages: function() {
    console.log("Hello " + this.name);
    console.log("Today is " + this.weather);
  }
};

myData.printMessages();

class MyClass {

  constructor(private name: string, private weather: string) { }

  get weatherMessage(): string {
    return `Today is ${ this.weather }`;
  }

  get nameMessage(): string {
    return `Hello ${ this.name }`;
  }

  printMessages() {    
    console.log(this.nameMessage);
    console.log(this.weatherMessage);
  }
}

let myData2 = new MyClass("Julio", "rainy");
myData2.printMessages();

class MySubClass extends MyClass {

  constructor(name: string, weather: string, private city: string) {
    super(name, weather);
  }

  override printMessages(): void {
    super.printMessages();
    console.log(`You are in ${this.city}`);
  }
}

let myData3 = new MySubClass("Gumercindo", "sunny", "Tangamandapio");
myData3.printMessages();

let cTemp = TempConverter.convertFtoC(38);
console.log(`The temp is ${cTemp}C`);


let cTempStr = TempConverter.convertFtoC("45");
console.log(`The temp is ${cTempStr}C`);