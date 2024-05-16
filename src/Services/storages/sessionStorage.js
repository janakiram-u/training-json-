// set 

export function setSessionStorageItem(key,value){
    if(typeof(value)==="object")
    value=JSON.stringify(value);
    return sessionStorage.setItem(key,value);
}

//get
export function getSessionStorageItem(key){
    return sessionStorage.getItem(key);
}

//remove
export function removeSessionStorageItem(key){
    return sessionStorage.removeItem(key)
}