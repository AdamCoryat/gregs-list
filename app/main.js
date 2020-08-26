import CarsController from "./Controllers/CarsController.js";
console.log(4)
class App {
  carsController = new CarsController();
}

window["app"] = new App();
