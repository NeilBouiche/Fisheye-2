/* eslint-disable eqeqeq */
// class qui se charge d'effectuer une requete fetch
class Api {
  constructor(url) {
    this._url = url;
  }

  async getPhotographers() {
    return fetch(this._url)
      .then((response) => response.json())
      .then((response) => response.photographers)
      .catch((err) => {
        throw new Error("La requete api getPhotographer a échoué : ", err);
      });
  }

  async getPhotographerById(userId) {
    return fetch(this._url)
      .then((response) => response.json())
      .then(
        (response) =>
          response.photographers.filter(
            (photographer) => photographer.id == userId
          )[0]
      )
      .catch((err) => {
        throw new Error("La requete api getPhotographer a échoué : ", err);
      });
  }

  async getPortfolioByUserId(userId) {
    return fetch(this._url)
      .then((response) => response.json())
      .then((response) =>
        response.media.filter((media) => media.photographerId == userId)
      )
      .catch((err) => {
        throw new Error("La requete api getPhotographer a échoué : ", err);
      });
  }

  async getAllMedias() {
    return fetch(this._url)
      .then((response) => response.json())
      .then((response) => response.media)
      .catch((err) => {
        throw new Error("La requete api getPhotographer a échoué : ", err);
      });
  }
}
