import tokenService from "./tokenService";
// import userService from "./userService";
const BASE_URL = "/api/puppy/";
const fs = require("fs");

function create(puppy) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken()
      },
      body: JSON.stringify(puppy)
    };
    return fetch(BASE_URL, options).then(res => res.json(puppy));
    // .then(() => getPuppies());
    // .then(() => userService.getUser());
  } catch (err) {
    console.log("error from addPuppy function in puppyservice", err);
  }
}
export function deleteOne(id) {
  return fetch(`${BASE_URL}${id}`, {
    method: "DELETE"
  }).then(res => res.json());
}

function getPuppies() {
  return fetch(BASE_URL).then(res => res.json());
}

export function getPuppy(puppy) {
  return fetch(`${BASE_URL}${puppy._id}`).then(res => res.json());
}

function addPhoto(data, puppy) {
  let photo = data.getAll("file");
  // const fileContent = fs.readFileSync(photo);
  // console.log("photo%%%%%%%%%%%%%%%", fileContent);
  console.log("photo%%%%%%%%%%%%%%%", photo);
  // console.log(JSON.stringify(getBase64Image(photo.name)));
  return fetch(`${BASE_URL}photo/${puppy._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: { image: JSON.stringify(photo) }
  }).then(res => res.json());
}

export function updatePuppy(puppy) {
  return fetch(`${BASE_URL}${puppy._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(puppy)
  }).then(res => res.json());
}

function getBase64Image(imgElem) {
  // imgElem must be on the same server otherwise a cross-origin error will be thrown "SECURITY_ERR: DOM Exception 18"
  var canvas = document.createElement("canvas");
  canvas.width = imgElem.clientWidth;
  canvas.height = imgElem.clientHeight;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(imgElem, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

export default {
  create,
  getPuppies,
  getPuppy,
  updatePuppy,
  deleteOne,
  addPhoto
};
