import Car from "./Models/Car.js";
import House from "./Models/House.js";
import Job from "./Models/Jobs.js";
console.log(1);

let _state = {
  /** @type {Car[]} */
  cars: [
    new Car({ make: "Tesla", model: "Cybertruck", year: 2020, price: 100000, img: "/assets/warthog.png", description: "It's like living in the future, with 1 broken window." }),
    new Car({ make: "Nissan", model: "Skyline GTR", year: 1998, price: 90000, img: "/assets/skyline.jpg", description: "Godzilla of the streets!" }),
    new Car({ make: "Toyota", model: "LandCruiser", year: 1990, price: 30000, img: "/assets/fj80.jpg", description: "Takes a lickin Keeps on Ticking" })
  ],
  houses: [
    new House({ bedroom: 2, sqft: 300, bath: 1, year: 1983, price: 10000, description: "Tends to draw like trailers towards it.", img: "/assets/trailer.jpeg" }),
    new House({ bedroom: 5, sqft: 2000, bath: 3, year: 1964, price: 450000, description: "Take a second to smell the flowers every morning", img: "/assets/cabin.jpg" }),
    new House({ bedroom: 7, sqft: 5000, bath: 4, year: 835, price: 1000000, description: "Fits anywhere, tends to draw like houses towards it.", img: "/assets/Xhorhas.jpg" })
  ],
  jobs: [
    new Job({position: "Welder", description: "Be able to stack beads like a mad man!", wage: 30, img: "/assets "}), new Job({position: "Welder", description: "Be able to stack beads like a mad man!", wage: 30, img: "/assets/ "})
  ]

};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
