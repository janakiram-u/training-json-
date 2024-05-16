import axios from "axios";

export function getData(url){ //getcall 
return axios.get(url);
}

export function saveData(url,data){
return axios.post(url,data);  // save post
}

export function updateData(url,data){
return axios.put(url+data.id,data);  //update-- put
}

export function deleteitem(url){
    return axios.delete(url);
}