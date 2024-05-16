import './gridcomponent.css'
import "bootstrap/dist/css/bootstrap.min.css";
export function Gridcomponent() {
    return(
        
        <div className='background'>
            <h1>Employee data</h1>
            <table className="table table-borderd table-hover ">
                <thead className='table-primary'>
                    <tr>
                    <th >S.No</th>
                    <th >Emp name</th>
                    <th>Emp mail</th>
                    <th >Emp Number</th>
                    </tr>
                </thead>
                <tbody className='table-warning'>
                    <tr>
                        <td >1</td>
                        <td>janakiram</td>
                        <td>jrjr@gmail.com</td>
                        <td>7661839161</td>
                    </tr>
                    <tr className='table-secondary'>
                        <td >2</td>
                        <td>chandru</td>
                        <td>chandru@gmail.com</td>
                        <td>7569048290</td>
                    </tr>
                    <tr className='table-info'>
                        <td >3</td>
                        <td>srinu</td>
                        <td>srinu@gmail.com</td>
                        <td>9010533196</td>
                    </tr>
                    <tr>
                        <td >4</td>
                        <td>venkatesh</td>
                        <td>venkatesh@gmail.com</td>
                        <td>6303015470</td>
                    </tr>
                    

                </tbody>
            </table>
        </div>
    )
}