import axios from "axios";

//Criar uma constante com a url
//url completa: https://sujeitoprogramador.com/r-api/?api=filmes

const timeStamp = "1681411983";
const apiKey = "c36ffe65080ff65bee37c51bb12b91cc";
const md5 = "9c19027d3adbe716fd172eb230c5a63e";

const api = axios.create({
  baseURL: `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=6`,
});

export default api;
