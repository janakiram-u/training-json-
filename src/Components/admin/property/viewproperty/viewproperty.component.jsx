import "./viewproperty.component.css";
import property1 from "../../../../assets/images/property1.jpg"
import { getSessionStorageItem, setSessionStorageItem } from "../../../../Services/storages/sessionStorage";
import { getAddProperty, getPropertyType } from "../../../../Services/property.service";
import { useEffect, useState } from "react";
export function ViewProperty(){
     const [propertyTypes,setPropertyTypes]=useState([])
        const [properties,setProperties]= useState([])
        useEffect(()=>{getPropertyTypeValues();
        },[])
    function getPropertyTypeValues(){
       
        let proTypes= getSessionStorageItem("propertyTypes")
        if(!proTypes){
            getPropertyType()
            .then((res)=>{
                setSessionStorageItem("propertyTypes",JSON.stringify(res.data));
                setPropertyTypes(res.data)
                getViewProperties(res.data)
            })

        }
        else{
            setPropertyTypes(JSON.parse(proTypes))
            getViewProperties(JSON.parse(proTypes))
        }

    }
    function getViewProperties(proTypes){
        getAddProperty().then((res)=>{
            res.data.forEach((item)=>item.propertytype=proTypes.find(type=>type.id===item.propertyType)?.propertyName);
            setProperties(res.data);
        })

    }

    return(
        <div className="view-flex">
            {
            properties && properties.map((item)=><div className="card m-3">
            <div className="card-header">
                 {item.propertyName}

            </div>
            <div className="card-body">
                <img src={property1} alt="" />
                <div>
                    <h5>PropertyType:{item.propertyType}</h5>
                    <h5>square Feet:{item.squarefeet}</h5>
                    <h5>Construction Date:{item.constructionDate}</h5>
                </div>

            </div>
            <div className="card-footer">
                <button className="btn btn-outline-success">Edit</button> &nbsp;
                <button className="btn btn-outline-secondary">Delete</button>


            </div>

        </div>
            )
            
}
            
            
        </div>
    )
}