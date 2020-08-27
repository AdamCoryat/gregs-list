import { generateId } from "../utils.js";

export default class Job {
  
  constructor({position, description, wage, img,}) {
    this.id = generateId()
    this.position = position
    this.wage = wage
    this.img = img || "//placehold.it/200x200/"
    this.description = description || "no description"
  }

  get Template() {
    return `            
    <div class="col-4">
      <div class="card">
          <img class="card-img-top" src="${this.img}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.position}</h4>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.jobsController.removeJob('${this.id}')">Delete</button>
                  <button class="btn btn-outline-primary" onclick="app.jobsController.drawApplication()">Apply</button>
                  <p>Hourly $${this.wage.toFixed(2)}</p>
              </div>
          </div>
      </div>
    </div>`
  }
}