import {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from './Components/Login';
import { UserContext } from './UserContext';
import {useAuthState} from 'react-firebase-hooks/auth';
import { userAuth } from './firebase-config';
import Landing from './Components/Landing';
import './styles/main.css';


const App:FC = () =>  {
  const [user, loading, error] = useAuthState(userAuth);
  return (
    <div className = 'page'>
      <UserContext.Provider value = {{user, loading, error}}>
        <Routes>
          <Route path = '/' element = {user? <Landing/> : <Login/>}/>
        </Routes>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
