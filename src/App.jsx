import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Landing from "./Pages/landing/Landing"
import FAQ from './Pages/FAQ/FAQ'

function App() {

  return (
    <div className="">
      <Routes> 
        <Route path="/" element={<Landing />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      {/* <Landing /> */}
    </div>
  )
}

export default App
