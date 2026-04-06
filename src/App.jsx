import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import UserLayout from './pages/UserLayout'





function App() {

  return(
    <div className="">
      
      <Routes>
        <Route path='/' element={<UserLayout/>} />
        <Route index element={<Dashboard/>}/>
        <Route />
        <Route/>
      </Routes>
    </div>
  )
}

export default App
