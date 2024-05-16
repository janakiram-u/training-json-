import "bootstrap/dist/css/bootstrap.min.css"
export function Crud(){
    let emp=[
        {
            sno : 1,
        name : "janakiram",
        email:"ram@gmail.com",
        phone:7661839161
    },{
        sno:2,
        name: "kumar",
        email:"kumar@gmail.com",
        phone:6303015768
    },{
        sno:3,
        name: "madhu",
        email:"madhu@gmail.com",
        phone:63034568
    },
    ]
    emp.push({sno:4,
        name:"rajesh",
        email:"rajesh@gmail.com",
        phone:8997776541
    })
    //unshift
    emp.unshift({sno:5,
        name:"ram",
        email:"ram@gmail.com",
        phone:8779532687

    })
    //update
    emp[3].sno=9
    emp[3].name= "krishna"
    emp[3].email="krishna@gmail.com"
    emp[3].phone=6303015768
    
//splice
    emp.splice(2,0,{sno:6,
    name:"varun",
email:"varun@gmail.com",
phone:7665657432})

    return(
        <div>
            <h1>Employee details</h1>
            <table className="table table-borderd table-hover ">
                <thead className='table-primary'>
                    <tr>
                        <th>sno</th>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                        
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>{emp[0].sno}</td>
                        <td>{emp[0].name}</td>
                        <td>{emp[0].email}</td>
                        <td>{emp[0].phone}</td>
                    </tr>
                    <tr>
                        <td>{emp[1].sno}</td>
                        <td>{emp[1].name}</td>
                        <td>{emp[1].email}</td>
                        <td>{emp[1].phone}</td>
                    </tr>
                    <tr>
                        <td>{emp[2].sno}</td>
                        <td>{emp[2].name}</td>
                        <td>{emp[2].email}</td>
                        <td>{emp[2].phone=7661839162}</td> 
                         
                    </tr>
                    <tr>
                        <td>{emp[3].sno}</td>
                        <td>{emp[3].name}</td>
                        <td>{emp[3].email}</td>
                        <td>{emp[3].phone}</td> 
                         
                    </tr>
                    <tr>
                        <td>{emp[4].sno}</td>
                        <td>{emp[4].name}</td>
                        <td>{emp[4].email}</td>
                        <td>{emp[4].phone}</td> 
                         
                    </tr>
                    

                </tbody>
            </table>

        </div>
    )

}