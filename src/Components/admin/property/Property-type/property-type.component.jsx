import { useEffect, useRef, useState } from "react"
import './property-type.component.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { getPropertyType, savepropertytype, updatePropertyType } from '../../../../Services/property.service'
import Sharedcomponent from "../../../Sharedcomponent/Sharedcomponent";

export function PropertyType(){


    //ref variables
    const propertyName = useRef();
    const propertyDesc = useRef();
    const propertyfacilities = useRef();

    //state variables for alert message

    const [showMessage,setShowMessage] =useState(false);
// creating variables for property type headers

const [propertyGridHeader, setPropertyGridHeader]=useState
(['ID','propertyname','description','facility','Actions'])

// creating variables for body
const [propertyGridData,setPropertyGridData]=useState([]);

useEffect(()=>{
    getPropertyType()
    .then((res)=>{setPropertyGridData(res.data.filter((item)=>item.isActive===true))})
},[])

// create variable for change button text
const [saveBtnText,setSaveBtnText]=useState("save")

//function for property ID

const [propertyId,setPropertyId]=useState(0);

    function savepropertytypeData  (){
        let data =  {
            id : propertyId,
            propertyName : propertyName.current.value,
            propertyDesc : propertyDesc.current.value,
            propertyfacilities : propertyfacilities.current.value,
            isActive :true
        }
        if(propertyId === 0){
            savepropertytype(data)
            .then((res)=>{
                setShowMessage(true);
                hideSuccess();
                clearData();
                alert("data saved successfully")
    
            })
            .catch(()=>{
                alert("Data saved Failed ")
            })

        }
        else{
            updatePropertyType(data)
            .then((res)=>{
                alert("data update")
                clearData();
            })
            .catch(()=>{
                alert("data update failed")
            })

        }

        // function to set time
        function hideSuccess()
        {
        setTimeout(()=>{setShowMessage(false);}, 2000)
        }

       
    }


    function clearData(){
        propertyName.current.value = "";
        propertyDesc.current.value = "";
        propertyfacilities.current.value = "";
        setSaveBtnText("save")
    }
    //function to udate data

    function EditPropertyTypeData(item){
        propertyName.current.value = item.propertyName;
        propertyDesc.current.value = item.propertyDesc;
        propertyfacilities.current.value = item.propertyfacilities;
        setSaveBtnText("update");
        setPropertyId(item.id);
        
    }
    // function for delete
    function deletePropertyTypeData(item){
        let confirmDelete=window.confirm("Are you sure? you want to delete.")
        if (confirmDelete===true){
            let data= {
                id: item.id,
                propertyName:item.propertyName,
                propertyDesc:item.propertyDesc,
                propertyfacilities:item.propertyfacilities,
                isActive:false
     
             }
             updatePropertyType(data)
                 .then((res)=>{
                     alert("data update")
                     clearData();
                 })
                 .catch(()=>{
                     alert("data update failed")
                 })

        }
        
    }




    return(
        <div>
            <div className="form-group">
                <label>Property Name</label>
                <input type="text" className="form-control" ref={propertyName}></input>
            </div>
            <div className="form-group">
                <label>Property Description</label>
                <input type="text" className="form-control" ref={propertyDesc}></input>
            </div>
            <div className="form-group">
                <label>Property facilities</label>
                <input type="text" className="form-control" ref={propertyfacilities}></input>
            </div>
           <div className="m-2">
           <button className="btn btn-success" onClick={()=>{savepropertytypeData()}}>{saveBtnText}</button> &nbsp;
            <button  className="btn btn-danger" onClick={()=>{clearData()}}> Cancel</button>
           </div>
           {
            showMessage &&

           
           <div className="success">Property data saved sucessfully</div>
}
<div className="mt-5 tab"> 
<Sharedcomponent title={"Property types"} headers={propertyGridHeader} body={propertyGridData}

editItemFromGrid={(item)=>{EditPropertyTypeData(item)}}
deleteItemFromGrid={(item)=>{deletePropertyTypeData(item)}}></Sharedcomponent>
</div>
        </div>
    )
}