import House from "../Models/House.js";
import STORE from "../store.js";

//Public
class HousesService {
  
  removeHouse(id) {
    let houseIndex = STORE.State.houses.findIndex(h => h.id === id)
    if (houseIndex === -1) {
      console.error("invalid id")
      return
    }
    STORE.State.houses.splice(houseIndex, 1)
  }

  bid(id) {
    let house = STORE.State.houses.find(h => h.id === id)
    house.price += 100;
  }

  createHouse(rawHouse) {
    let house = new House(rawHouse)
    STORE.State.houses.push(house)
  }
}


const SERVICE = new HousesService();
export default SERVICE;
