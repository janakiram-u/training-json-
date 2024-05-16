import { useEffect, useState } from 'react'
import './Menucomponent.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom';
import store from '../../Services/storages/redux.storage';
import { removeLocalStorageItem } from '../../Services/storages/localstorage';

export function Menucomponent() {
    const [showMenu,setshowMenu]=useState();
    const navigate=useNavigate();
    const [userLoggedIn,setUserloggedIn]=useState(false);
    useEffect(()=>{store.subscribe(()=>{
        let loginData=store?.getState()?.userData;
        let isUserLoggedIn=loginData ? true : false;
        setUserloggedIn(isUserLoggedIn)
         })})
        
         function logoutUser(){
            store.dispatch( {type:"userData", data:null})
            removeLocalStorageItem("user");
            navigate("/log")
         }
    function menuClick(){
        setshowMenu(!showMenu)
    }
    return(
        <div>
            <ol className="menu">
                <li className='menu-list'>Home</li>
                <li className='menu-list'>About Us</li>
                <li className='menu-list'>Home Appliances</li>
                <li className='menu-list'>Mobiles</li>
                <li className='menu-list'>Groceries</li>
                 {/* <a href="/registration" style={{color: 'white'}}>
                 <li className='menu-list menu'>Registration</li>
                 </a> */}
                {
                    !userLoggedIn &&
                    <>
                 <Link to="/registration" style={{color:'white'}}> <li className='menu-list menu'>Registration</li></Link>
                <Link to="/log" style={{color:'white'}}> <li className='menu-list menu'>Login</li></Link>
                </>
                }
                {
                    userLoggedIn &&
                    <>
                <Link to="#" style={{color:'white'}}> <li className='menu-list menu'>Admin</li></Link>
                <button onClick={()=>{logoutUser()}}>Logout</button>
                </>
                }
                {/* <ul className='sub-menu'>
                    <li>fridge </li>
                    <li>Ac</li>
                    <li>cooler</li>
                    <li>Tv</li>
                </ul> */}
            </ol>
            {/* <div className='button-menu'>
                <ul >
                    <li>
                        <input type="button" value="Home"  className='w-100 btn btn-primary'/>
                    </li>
                    <li>
                        <input type="button" value="About Us"  className='w-100 btn btn-sucess'/>
                    </li>
                    <li>
                        <input type="button" value="Shoes" className='w-100 btn btn-danger' />
                    </li>
                    <li>
                        <input type="button" value="Mobiles"  className='w-100 btn btn-warning'/>
                    </li>
                    <li>
                        <input type="button" value="Groceries" className='w-100 btn btn-info' />
                    </li>
                </ul>
            </div> */}
        </div>
    )
}