import DataService from "./ApiService.js";

const dataService = new DataService();

const controller = {

  async cargarSectores() {
    const sectores = await dataService.getSectores();
    console.log(sectores);
  },

  async cargarCrypto() {
    const precios = await dataService.getCrypto();
    console.log(precios);
  }

};

export default controller;