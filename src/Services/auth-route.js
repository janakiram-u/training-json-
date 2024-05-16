import { Navigate } from "react-router-dom";
import { getLocalStorageItem } from "./storages/localstorage";


export function AuthRoute(props){
    let userValid=false;
    userValid=getLocalStorageItem("user")
    if(userValid ){
        return props.children;
    }
    else{
        return<Navigate to="/log" ></Navigate>
    }
}