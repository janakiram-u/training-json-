import { Routes , Route } from "react-router-dom";
import { Registrationcomponent } from "./Components/Registration/Registrationcomponent";
import { LoginComponent } from "./Components/Login/Logincomponent";
import { AdminMenu } from "./Components/admin/layout/admin-menu/admin-menu.component";
import { PropertyType } from "./Components/admin/property/Property-type/property-type.component";
import { AddProperty } from "./Components/admin/property/Property-type/add-property/add property.component";
import { AuthRoute } from "./Services/auth-route";
import { ViewProperty } from "./Components/admin/property/viewproperty/viewproperty.component";

export function AppRouter() {
    return(
<Routes>
    <Route path="/registration" element={<Registrationcomponent></Registrationcomponent>}>
    </Route>
    <Route path="/log" element={<LoginComponent></LoginComponent>}></Route>
    <Route path="/admin/property" element={<NavigatePropertyType></NavigatePropertyType>}></Route>
    <Route path="/admin/AddProperty" element={<NavigateAddProperty></NavigateAddProperty>}></Route>
    <Route path="/admin/viewProperty" element={<NavigateViewProperty></NavigateViewProperty>}></Route>
</Routes>

    )
}
function NavigatePropertyType(){
    return(
        <AuthRoute>
            <div className="row">
            <div className="col-2">
                <AdminMenu></AdminMenu>
            </div>
            <div className="col-9">
                <PropertyType></PropertyType>
            </div>
        </div>
        </AuthRoute>
        
    )
}
function NavigateAddProperty(){
    return(
        <AuthRoute>
        <div className="row">
            <div className="col-2">
                <AdminMenu></AdminMenu>
            </div>
            <div className="col-9">
                <AddProperty></AddProperty>
            </div>
        </div>
        </AuthRoute>
    )
}
function NavigateViewProperty(){
    return(
        <AuthRoute>
        <div className="row">
            <div className="col-2">
                <AdminMenu></AdminMenu>
            </div>
            <div className="col-9">
                <ViewProperty></ViewProperty>
            </div>
        </div>
        </AuthRoute>
    )
}