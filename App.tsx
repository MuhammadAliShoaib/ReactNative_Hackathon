import { useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserContext from './src/config/contextAPI/userContext';
import Signup from './src/screens/signup';
import FormNavigation from './src/config/navigation/formNavigation';
import StackNavigation from './src/config/navigation/stackNavigation';
import Splash from './src/screens/intro/splash';


function App() {
  const ctx = useContext(UserContext);

  return (
    <>
      {/* <FormNavigation/> */}
      {/* {!ctx.Login && <FormNavigation/>}
      {ctx.Login && <StackNavigation />} */}
      <StackNavigation />
    </>
  );
}

export default App;
