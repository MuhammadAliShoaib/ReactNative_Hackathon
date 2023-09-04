const { default: UserContext } = require("./userContext");
import { useState, useEffect } from 'react';



function UserProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState({})


  let loginTrue = (item) => {
    setIsLoggedIn(true);
    if (item) {
      setData(item)
      console.log(item)
    }
  };

  let loginFalse = () => {
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{
      info: data,
      Login: isLoggedIn,
      userLogin: loginTrue,
      userLogut: loginFalse
    }}>
      {props.children}
    </UserContext.Provider>
  )
}


export default UserProvider;  