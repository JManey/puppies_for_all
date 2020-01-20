import tokenService from "./tokenService";
// const tokenService = require("./tokenService");

const BASE_URL = "/api/users/";

function signup(user) {
  return (
    fetch(BASE_URL + "signup", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) return res.json();
        // Probably a duplicate email
        throw new Error("Email already exists.");
      })
      // Parameter destructuring!
      .then(({ token }) => tokenService.setToken(token))
  );
  // The above could have been written as
  //.then((token) => token.token);
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
  localStorage.removeItem("token");
}

function login(creds) {
  return fetch(BASE_URL + "login", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(creds)
  })
    .then(res => {
      // Valid login if we have a status of 2xx (res.ok)
      if (res.ok) return res.json();
      throw new Error("Invalid Login Attempt");
    })
    .then(({ token }) => tokenService.setToken(token));
}

function addPup(puppy) {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(puppy)
  };
  return fetch("/api/puppy/", options).then(res => res.json());
}

export default {
  signup,
  getUser,
  logout,
  login,
  addPup
};
