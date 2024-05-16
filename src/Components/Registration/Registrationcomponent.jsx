import { useForm } from 'react-hook-form';
import { saveUserData } from '../../Services/user.service';
import './Registrationcomponent.css';
import "bootstrap/dist/css/bootstrap.min.css";
export function Registrationcomponent() {
//creating variable for react hook form
const {
    register,
    handleSubmit,
    formState:{errors}
}=useForm();

//function to save registration form
    function saveRegistrationData(event){
        
        let data={
            id : 0,
            firstName :document.getElementById('firstName').value,
            lastName : document.getElementById('lastName').value,
            company : document.getElementById('company').value,
            email : document.getElementById('email').value,
            password :document.getElementById('password').value,
            state: document.getElementById('state').value,
            dob: document.getElementById('dob').value

        }
        saveUserData(data)
        .then((res)=>{ alert('data saved sucessfully')})
        .catch(()=>{alert('unable to save data')})
          
    }
    return(
        
        <form className='Registration' onSubmit={handleSubmit((event)=>{saveRegistrationData(event)})} >
            
            <h2>REGISTRATION FORM</h2>
            <div className='row m-2'> 
            <div className='col-2'>
           <label> Name</label></div> 
           <div className='col-4'> 
           <input type="text" className="form-control" 
           {...register('firstName',{required:true, minLength:3, maxLength: 25})}
           placeholder="firstName" id='firstName' ></input>
          {errors.firstName && errors.firstName.type==="required"?<span className='text-danger'>Enter your first name</span>: 
                errors.firstName && errors.firstName.type==="minLength"?<span className='text-danger'>minimum 3 charecters req.</span>:
                errors.firstName && errors.firstName.type==="maxLength"?<span className='text-danger'>max 25 charecters only</span>: ''}
            </div>
            <div className='col-4'>
            <input type="text" className="form-control"
            {...register('lastName',{required:true})} 
            placeholder="lastName" id='lastName' ></input>
            {errors && errors.lastName? <alert className="text-danger">Enter your last name </alert>:''}
            </div>
            </div>
            <div className='m-2'>
            <input type="text" className="form-control"
            {...register('company',{required:true})}
             placeholder="companyName" id='company'></input>
             {errors && errors.company? <alert className="text-danger">Enter your company name</alert>: ""}

            </div>
            <div className='m-2'>
            <input type="text" className="form-control"
            {...register('email',{required:true, 
                pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Please enter a valid email'
                }
            })}
            placeholder="EmailAddress" id='email'></input>
            {errors.email && errors.email.type==="required" ? <label className='text-danger'>please enter your email</label>:
            errors.email && errors.email.message? <label className='text-danger'>{errors.email.message}</label> :" " }

            </div>
            <div className='m-2'>
             <input type="password" className="form-control"
             {...register('password',{required:true})}
             placeholder="password" id='password'></input>
              {errors && errors.password? <alert className="text-danger">Enter your password</alert>: ""}

            </div>
            <div className='m-2 row'>
            <div className='col-4'>
            <label>select State</label>
            <select className='form-control m-2' id='state'
             {...register('state',{required:true})}>
            <option> choose a location</option>
            <option>Andhra pradesh</option>
            <option> Telangana</option>
            <option> Madhya pradesh</option>
            <option> Tamil nadu</option>
           </select>
           {errors && errors.state? <alert className="text-danger">Enter your state</alert>: ""}

            </div>
           
            </div>
            <div className='m-1 row'>
               <div className='col-1 ' {...register('gender',{required:true})}>Gender:</div> 
                
                <div className='col-1'>
                    <br></br>
              <label>male</label>   <input type="radio" name="gender" ></input></div>
              <div className='col-1'> <br></br> <lable>female</lable>   <input type="radio" name="gender" ></input> </div>
            

            </div>
            <div className='col-1 m-2'>
                D.O.B </div>
                <div className='m-1'>
                <input type="date" className="form-controls" 
                {...register('dob',{required:true})}
                id='dob' ></input>
                {errors && errors.dob? <alert className="text-danger">Enter your dob </alert>:""}
                </div>
                <div className='m-2'>
            
            <div className='col-2'><input type="submit" value="submit" className='submit-button' onClick={saveRegistrationData}  /></div>

            <div className='col-4'>
                <label>Already existing user ?</label>
                <button className='btn btn-success'>Login</button>
            </div>
            <div className='col-4'>
                <input type="file" className='file'/>
            </div>
            </div> 

        </form>
    )
}