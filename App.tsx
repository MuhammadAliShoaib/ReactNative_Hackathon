import { useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserContext from './src/config/contextAPI/userContext';
import Signup from './src/screens/signup';
import FormNavigation from './src/config/navigation/formNavigation';
import StackNavigation from './src/config/navigation/stackNavigation';


function App() {
  const ctx = useContext(UserContext);

  return (
    <>
      
      {/* {!ctx.Login && <FormNavigation/>} */}
      {/* {ctx.Login && <StackNavigation />} */}
      <StackNavigation />
    </>
  );
}

export default App;
