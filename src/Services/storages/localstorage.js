// set 

export function setLocalStorageItem(key,value){
    if(typeof(value)==="object")
    value=JSON.stringify(value);
    return localStorage.setItem(key,value);
}

//get
export function getLocalStorageItem(key){
    return localStorage.getItem(key);
}

//remove
export function removeLocalStorageItem(key){
    return localStorage.removeItem(key)
}