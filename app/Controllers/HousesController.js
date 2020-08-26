import housesService from "../Services/HousesService.js";
import STORE from "../store.js";


// private
function _drawHouses() {
  
  let houses = STORE.State.houses
  let template = ''
  houses.forEach(h => template += h.Template)
  document.getElementById('body').innerHTML = template
}

function _drawHousesForm(){
  let template = `<div class="col">
  <form onsubmit="app.housesController.createHouse()" class="form-inline">
      <div class="form-group p-1">
          <label class="mr-1" for="SqFt">SqFt</label>
          <input type="text" name="sqft" id="sqft" class="form-control" placeholder="SqFt...">
      </div>
      <div class="form-group p-1">
          <label class="mr-1" for="bedroom">Bedroom</label>
          <input type="text" name="bedroom" id="bedroom" class="form-control" placeholder="Bedroom...">
      </div>
      <div class="form-group p-1">
          <label class="mr-1" for="bath">Bathroom</label>
          <input type="text" name="bath" id="bath" class="form-control" placeholder="Bath...">
      </div>
      <div class="form-group p-1">
          <label class="mr-1" for="year">Year</label>
          <input type="number" name="year" id="year" class="form-control" placeholder="Year..." min="1900"
              max="2021">
      </div>
      <div class="form-group p-1">
          <label class="mr-1" for="price">Price</label>
          <input type="number" name="price" id="price" class="form-control" placeholder="Price...">
      </div>
      <div class="form-group p-1">
          <label class="mr-1" for="description">Description</label>
          <input type="text" name="description" id="description" class="form-control"
              placeholder="Description...">
      </div>
      <div class="form-group p-1">
          <label class="mr-1" for="img">Image Url</label>
          <input type="url" name="img" id="img" class="form-control" placeholder="Image Url...">
      </div>
      <button type="submit" class="btn btn-outline-success">Add House</button>
  </form>
</div>`
document.getElementById('form').innerHTML = template
}

//Public
export default class HousesController {
  constructor() {
  }

drawHouses(){
  _drawHouses();
  _drawHousesForm();
}
createHouse() {
  event.preventDefault();
  let form = event.target
  let rawHouse = {
    // @ts-ignore
    sqft: form.sqft.value,
    // @ts-ignore
    bedroom: form.bedroom.value,
    // @ts-ignore
    bath: form.bath.value,
    // @ts-ignore
    year: form.year.value,
    // @ts-ignore
    price: parseInt(form.price.value),
    // @ts-ignore
    description: form.description.value,
    // @ts-ignore
    img: form.img.value
  }
  housesService.createHouse(rawHouse)
  _drawHouses();
}

  removeHouse(id) {
    housesService.removeHouse(id);
    _drawHouses();
  }

  bid(id) {
    housesService.bid(id);
    _drawHouses();
  }
}
