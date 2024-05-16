import { saveData } from "./Context.service";
import { getData } from "./Context.service";
const registrationURL=" http://localhost:3000/registration/";
export function saveUserData(data){
    return saveData(registrationURL,data)
}
export function getUserData(){
    return getData(registrationURL)
}