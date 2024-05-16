import { AddProperty } from "../../property/Property-type/add-property/add property.component";
import { PropertyType } from "../../property/Property-type/property-type.component";
import { AdminMenu } from "../admin-menu/admin-menu.component";
import "./admin-layout.component.css"


export function AdminLayout() {
    return(
        <div className="row layout" >
            <div className="col-2">
              <AdminMenu></AdminMenu>
            </div>

            <div className="col-6">
                {/* <PropertyType></PropertyType> */}
                {/* <AddProperty></AddProperty> */}
            </div>

        </div>




    )
}