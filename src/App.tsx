import './App.css'
import { Provider } from 'react-redux'
import { Users } from './Users'
import { store } from './store'


function App() {
  
  return (
    <>
      <Provider store={store}>
        <h1>Lista de Usuarios</h1>
        <Users/>
      </Provider>
      
    </>
  )
}

export default App
