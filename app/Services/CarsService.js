import Car from "../Models/Car.js";
import STORE from "../store.js";

//Public
class CarsService {
  removeCar(id) {
    let carIndex = STORE.State.cars.findIndex(c => c.id === id)
    if (carIndex === -1) {
      console.error("invalid id")
      return
    }
    STORE.State.cars.splice(carIndex, 1)
  }

  bid(id) {
    let car = STORE.State.cars.find(c => c.id === id)
    car.price += 100;
  }

  createCar(rawCar) {
    let car = new Car(rawCar)
    STORE.State.cars.push(car)
  }
}

const SERVICE = new CarsService();
export default SERVICE;
