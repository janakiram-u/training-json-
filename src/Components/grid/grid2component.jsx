import './gridcomponent.css'
import Sharedcomponent from '../Sharedcomponent/Sharedcomponent';
import { useState } from 'react';

export function Grid2component() {
    const [employeeHeaders, setEmployeeHeaders]=useState(["Id" , "Name" ,"Email" ]);
    let empdata=[{
        sno: 1,
        name :"ram",
        email : "ram@gmail.com"
    }]
    return(
        
        <div className='background'>
            <Sharedcomponent title={"employeetable"} headers={employeeHeaders} body={empdata}></Sharedcomponent>
        </div>
    )
    }