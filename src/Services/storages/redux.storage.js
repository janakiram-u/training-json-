import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux"; 
const reducer=(state,action)=>{
    switch(action.type){
        case "userData":
        return{
        ...state,userData:action.data
    }

    }
}
const store=configureStore({reducer : reducer});
export default store;