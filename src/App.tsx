import {FC} from 'react';
import {Route, Routes, useLocation, Navigate} from 'react-router-dom';
import Login from './Components/Login';
import { UserContext } from './UserContext';
import {useAuthState} from 'react-firebase-hooks/auth';
import { userAuth } from './firebase-config';
import { AnimatePresence } from 'framer-motion';
import Landing from './Components/Landing';
import './styles/main.css';


const App:FC = () =>  {
  const location = useLocation();
  const [user, loading, error] = useAuthState(userAuth);
  return (
    <div className = 'page'>
      <UserContext.Provider value = {{user, loading, error}}>
        <AnimatePresence exitBeforeEnter>
          <Routes location = {location} key = {location.pathname} >
            <Route path = '/login' element = {(user)? <Navigate to='/home'/> : <Login/>}/>
            <Route path = '/home' element = {(user)? <Landing/> : <Navigate to = '/login'/>}/>
            <Route path = '*' element = {<Navigate to = '/home'/>}/>
          </Routes>
        </AnimatePresence>
      </UserContext.Provider>
    </div>
  );
}

export default App;
