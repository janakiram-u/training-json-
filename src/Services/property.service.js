import { getData, saveData, updateData } from "./Context.service";

const propertytypeURL="http://localhost:3000/property-type/"

// url to add property type
const propertyUrl="http://localhost:3000/add-property"

//function to save property type
export function savepropertytype(data){
    return saveData(propertytypeURL,data)
}
//function to get property type
export function getPropertyType(){
    return getData(propertytypeURL);
}
//function to update property type
export function updatePropertyType(data){
    return updateData(propertytypeURL, data)
}

//function to save add property data
export function saveAddProperty(data){
    return saveData(propertyUrl,data)
}
// function to get add-type-data
export function getAddProperty(){
    return getData(propertyUrl);
}