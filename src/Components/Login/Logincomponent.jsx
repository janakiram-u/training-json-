import React, { useEffect } from "react";
import "./Logincomponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getUserData } from '../../Services/user.service';
import { setLocalStorageItem } from "../../Services/storages/localstorage";
import store from "../../Services/storages/redux.storage";
import { useNavigate } from "react-router-dom";
 
export function LoginComponent() {
    useEffect(()=>{
        store.dispatch( {type:"userData", data:null})
    },[])
    const navigate=useNavigate();

    function getRegisteredUsers() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        getUserData()
            .then((res) => {
                let filterData = res.data.filter((item, index, arr) => item.email === email && item.password === password)

                if (filterData.length > 0) {
                    alert('User exist')
                    setLocalStorageItem("user", filterData)
                    store.dispatch({ type: "userData", data: filterData })
                   navigate("/admin/property");
                }
                else {
                    alert('User not exist')
                }

            })
            .catch((ex) => {
                alert(ex.message)

            })

    }

    return (
        <div className='login-form container'>
            <h4>Login Form</h4>
            <div >
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="Email" className="form-control" id="email" placeholder="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="text" className="form-control" id="password" placeholder="password" />
                </div>
                <div className="row m-3">
                    <div className="col-4">
                        <button className="btn btn-primary " id="idlogin" onClick={() => {getRegisteredUsers() }}>Login</button>
                    </div>   &nbsp;
                    <div className="col-4">
                        <button className="btn btn-secondary " id="idcancel">cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

