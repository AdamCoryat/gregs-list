
import STORE from "../store.js";
import jobsService from "../Services/JobsSerivice.js";



// private
function _drawJobs() {
  let jobs = STORE.State.jobs
  let template = ''
  jobs.forEach(j => template += j.Template)
  document.getElementById('body').innerHTML = template
}

function _drawApplication(){
let template = `
<form>
    <div class="form-row p-2 m-2">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Email</label>
        <input type="email" class="form-control" id="inputEmail4">
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">Full Name</label>
        <input type="name" class="form-control" id="inputPassword4">
      </div>
    </div>
    <div class="form-group">
      <label for="inputAddress">Address</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
    </div>
    <div class="form-group">
      <label for="inputAddress2">Address 2</label>
      <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputCity">City</label>
        <input type="text" class="form-control" id="inputCity">
      </div>
      <div class="form-group col-md-4">
        <label for="inputState">State</label>
        <select id="inputState" class="form-control">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div class="form-group col-md-2">
        <label for="inputZip">Zip</label>
        <input type="text" class="form-control" id="inputZip">
      </div>
    </div>
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck">
        <label class="form-check-label" for="gridCheck">
          Work Hard?
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary" onclick="app.jobsController.drawJobs()">Submit</button>
  </form>`
  document.getElementById('application').innerHTML = template
}

function _drawJobsForm(){
  let template = `<div class="col">
  <form onsubmit="app.jobsController.createJob()" class="form-inline">
      <div class="form-group p-1">
          <label class="mr-1" for="position">Position</label>
          <input type="text" name="position" id="position" class="form-control" placeholder="Postition...">
      </div>
      <div class="form-group p-1">
          <label class="mr-1" for="description">Description</label>
          <input type="text" name="description" id="description" class="form-control" placeholder="Descritption...">
      </div>
      <div class="form-group p-1">
          <label class="mr-1" for="wage">Wage</label>
          <input type="number" name="wage" id="wage" class="form-control" placeholder="Wage...">
      </div>
      <div class="form-group p-1">
          <label class="mr-1" for="img">Image Url</label>
          <input type="url" name="img" id="img" class="form-control" placeholder="Image Url...">
      </div>
      <button type="submit" class="btn btn-outline-success">Add Job</button>
  </form>
</div>`
document.getElementById('form').innerHTML = template
}

//Public
export default class JobsController {
  constructor() {
  }

  drawApplication(){
    _drawApplication()
  }

drawJobs(){
  _drawJobs();
  _drawJobsForm();
}
createJob() {
  event.preventDefault();
  let form = event.target
  let rawJob = {
    // @ts-ignore
    position: form.position.value,
    // @ts-ignore
    description: form.description.value,
    // @ts-ignore
    wage: parseInt(form.wage.value),
    // @ts-ignore
    img: form.img.value
  }
  jobsService.createJob(rawJob)
  _drawJobs();
}

  removeJob(id) {
    jobsService.removeJob(id);
    _drawJobs();
  }

}
