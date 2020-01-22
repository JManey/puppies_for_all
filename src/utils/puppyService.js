import tokenService from "./tokenService";
const BASE_URL = "/api/puppy/";

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
    return fetch(BASE_URL, options)
      .then(res => res.json())
      .then(getPuppies());
  } catch (err) {
    console.log("error from addPuppy function in puppyservice", err);
  }
}

function getPuppies() {
  return fetch(BASE_URL).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}${id}`, {
    method: "DELETE"
  }).then(res => res.json());
}

export function getPuppy(puppy) {
  return fetch(`${BASE_URL}${puppy._id}`).then(res => res.json());
}

export function updatePuppy(puppy) {
  return fetch(`${BASE_URL}${puppy._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(puppy)
  }).then(res => res.json());
}

export default {
  create,
  getPuppies,
  getPuppy,
  updatePuppy,
  deleteOne
};
