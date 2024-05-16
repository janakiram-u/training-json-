import './App.css';
import { Registrationcomponent } from './Components/Registration/Registrationcomponent';
import { Grid2component } from './Components/grid/grid2component';
import { Menucomponent } from './Components/Menu/Menucomponent';
import { Flexcomponent} from './Components/Flex/Flexcomponent';
import { Popupcomponent } from './Components/Popup/Popupcomponent';
import { Crud } from './Components/Crud';
import {Sharedcomponent} from './Components/Sharedcomponent/Sharedcomponent'
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './app.router';
import { AdminLayout } from './Components/admin/layout/admin-layout/admin-layout.component';

import { Test } from './Components/Test/Test';
import Calendar from './Components/Calender/Calendar';
import { PropertyType } from './Components/admin/property/Property-type/property-type.component';




function App() {
  return (
    <div className='App'>
      {/* <BrowserRouter>
     
      <Menucomponent></Menucomponent>
     
      <AppRouter></AppRouter>
      
     </BrowserRouter> */}
    <PropertyType></PropertyType>
     

    </div>
  );
}

export default App;
