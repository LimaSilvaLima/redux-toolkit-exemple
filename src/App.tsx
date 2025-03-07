import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import { User } from './store/ducks/users/types'

function App() {
  
  return (
    <>
      <Provider store={store}>
        <Users/>
      </Provider>
      
    </>
  )
}

const Users = () => {
  
  return (
    <div>
      <NewUserForm />
      <UserList />
      
    </div>  
  )
};

const UserList = () => {
  return (
    <div>
      <p>User Name</p>
    </div>
    
  )
};

const NewUserForm = () => {
  return (
    <div>
      <p>User name</p>
      <input type="text" />
      <p>User age</p>
      <input type="text" />
    </div>    
  )
};  



export default App
