import './Flexcomponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import moon from '../../assets/images/moon.jpg'
export function Flexcomponent(){
    return(
        
        <div className='image-flex'>
            <div className='flex-item'>
                <img src={moon}  />
            </div>
            <div className='flex-item'>
                <img src={moon}  />
            </div>
            <div className='flex-item'>
                <img src={moon}  />
            </div>
            <div className='flex-item'>
                <img src={moon}  />
            </div>
            <div className='flex-item'>
                <img src={moon}  />
            </div>
            <div className='flex-item'>
                <img src={moon}  />
            </div>
            <div className='flex-item'>
                <img src={moon}  />
            </div>
            <div className='flex-item'>
                <img src={moon}  />
            </div>
            <div className='flex-item'>
                <img src={moon}  />
            </div>
            <div className='flex-item'>
                <img src={moon}  />
            </div>
            <div className='flex-item'>
                <img src={moon}  />
            </div>
        </div>
    )
}