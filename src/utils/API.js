import axios from "axios";

export default {
  // Gets all users
  getUsernames: function() {
    return axios.get("/login");
  },
  // new user
  newUser: function(userData) {
    return axios.post("/api/signup", (userData.username, userData.email, userData.password, 0));
  },
  userComics: function(userData) {
    return axios.get("/api/usercomics/:id", userData);
  },
  userComic: function(userData) {
    return axios.get("/api/usercomics/:id")
  },
  deleteComic: function(userData) {
    return axios.delete("/api/usercomics/:id", userData);
  },
  
  createComic: function(userData) {
    return axios.post("/api/createcomic/", userData);
  },
  updateComic: function(userData) {
    return axios.put("/api/createcomic/:id", userData);
  },

  findPanel: function(userData) {
    return axios.get("/api/createcomic/:id" || "/api/createcomic", userData);
  },
  createPanel: function(userData) {
    return axios.post("/api/createcomic/:id" || "/api/createcomic", userData);
  },
  updatePanel: function(userData) {
    return axios.put("/api/createcomic/:id" || "/api/createcomic", userData);
  },
  deletePanel: function(userData) {
    return axios.delete("/api/createcomic/:id" || "/api/createcomic", userData);
  }
};
