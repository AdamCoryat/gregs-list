import carsService from "../Services/CarsService.js";
import STORE from "../store.js";
console.log(3)
// private
function _drawCars() {
  console.log(6)
  let cars = STORE.State.cars
  let template = ''
  // NOTE when you have a collection of items, they will need to be added to the template in a loop
  cars.forEach(c => template += c.Template)
  document.getElementById('cars').innerHTML = template
}


//Public
export default class CarsController {
  constructor() {
    console.log(5)
    _drawCars();
  }

  createCar() {
    event.preventDefault();
    let form = event.target
    let rawCar = {
      // @ts-ignore
      make: form.make.value,
      // @ts-ignore
      model: form.model.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      price: parseInt(form.price.value),
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      img: form.img.value
    }
    debugger
    carsService.createCar(rawCar)
    _drawCars();
  }

  removeCar(id) {
    debugger
    console.log('hornk', id)
    carsService.removeCar(id);
    _drawCars();
  }

  bid(id) {
    carsService.bid(id);
    _drawCars();
  }
}
