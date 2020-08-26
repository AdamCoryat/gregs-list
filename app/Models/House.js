import { generateId } from "../utils.js";

export default class House {
  
  constructor({bedroom, sqft, bath, year, price, description, img}) {
    this.id = generateId()
    this.bedroom = bedroom
    this.sqft = sqft
    this.bath = bath
    this.year = year
    this.price = price
    this.img = img || "//placehold.it/200x200/"
    this.description = description || "no description"
  }

  get Template() {
    return `            
    <div class="col-4">
      <div class="card">
          <img class="card-img-top" src="${this.img}" alt="">
          <div class="card-body">
              <h4 class="card-title">SqFt:${this.sqft} - Bedroom: ${this.bedroom} / Bath: ${this.bath} - Manufactured: ${this.year}</h4>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.housesController.removeHouse('${this.id}')">Delete</button>
                  <button class="btn btn-outline-info" onclick="app.housesController.bid('${this.id}')">+ $100</button>
                  <p>$${this.price.toFixed(2)}</p>
              </div>
          </div>
      </div>
    </div>`
  }
}