import {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from './Components/Login';
import { UserContext } from './UserContext';
import {useAuthState} from 'react-firebase-hooks/auth';
import { userAuth } from './firebase-config';
import Landing from './Components/Landing';


const App:FC = () =>  {
  const [user, loading, error] = useAuthState(userAuth);
  return (
    <>
      <UserContext.Provider value = {{user, loading, error}}>
        <Routes>
          <Route path = '/' element = {user? <Landing/> : <Login/>}/>
        </Routes>
      </UserContext.Provider>
      
    </>
  );
}

export default App;
