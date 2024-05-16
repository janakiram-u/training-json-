import './Sharedcomponent.css'
import "bootstrap/dist/css/bootstrap.min.css";
const Sharedcomponent=(props)=>{

    //create function for edit
    function editItem(row){
        props.editItemFromGrid(row)
    }
    //create function for delete
    function deleteItem(row){
    props.deleteItemFromGrid(row)
    }
    return(
        <div>
            <h3>{props.title}</h3>
            <table className='table table-bordred table-hover'>
                <thead className='table-danger'>
                    <tr>
                        {
                            props.headers.map((item)=><th>{item}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                
                        {
                            props.body.map((item)=><tr>
                                {Object.values(item).map((item)=><td>{item}</td>)}

                                <td>
                                    <button className='btn btn-success 'onClick={()=>{editItem(item)}}>Edit</button> &nbsp;
                                    <button className='btn btn-danger 'onClick={()=>{deleteItem(item)}}>delete</button>
                                </td>
                                
                                </tr>)
                        }
                </tbody>
            </table>
        </div>
    )
}
export default Sharedcomponent ;