import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import UserLayout from './pages/UserLayout'
import Report from './pages/UserLayout'





function App() {

  return(
    <div className="">
      
      <Routes>
        <Route path='/' element={<UserLayout/>} />
        <Route index element={<Dashboard/>}/>
        <Route path='/report' element={<Report/>} />
        <Route/>
      </Routes>
    </div>
  )
}

export default App
