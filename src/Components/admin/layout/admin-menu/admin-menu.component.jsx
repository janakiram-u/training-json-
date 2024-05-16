import './admin-menu.component.css';
import{Link} from 'react-router-dom'

export function AdminMenu(){
    return(
        <div className="admin-menu">
            <h4>Admin Menu</h4>
            <div>
                <h6 className="text-light">Properties</h6>
                <ul className="text-light"  >
                    <Link to="/admin/property">
                    <li>Property type</li>
                    </Link>
                    <Link to="/admin/AddProperty" ><li>Add property</li></Link>
                    <Link to="/admin/viewProperty" ><li>View property</li></Link>
                    
                </ul>
            </div>
            <div>
            <h6 className="text-light">Facilities</h6>
                <ul className="text-light"  >
                    <li>Facilities type</li>
                    <li>Add facilities</li>
                    <li>View facilities</li>
                </ul>
            </div>
        </div>
    )
}