import './App.css';
import React, {useState, useEffect} from 'react'
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/Login';
import { auth } from './firebase';
import {useDispatch, useSelector} from "react-redux"
import { login, logout, selectUser } from "./features/userSlice";


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //console.log(authUser)

      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          email: authUser.email,
          name: authUser.displayName,
          photo: authUser.photoURL,
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className="App">

      {user ? (
        <div className="App-body">
        <Sidebar />
        <Chat />
      </div>
      ) : (
        <Login />
      )}
      
    </div>
  );
}

export default App;
