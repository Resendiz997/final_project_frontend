import { API_KEY } from "./constants";


export function checkResponse(res){
    if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
  };
  

export const searchArticles = ({keyword}) =>{
    return fetch (`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}`)
    .then(checkResponse)
};
  
  