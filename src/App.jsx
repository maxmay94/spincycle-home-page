import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { ModalContainer } from 'reoverlay'
import Landing from "./Pages/landing/Landing"
import FAQ from './Pages/FAQ/FAQ'

function App() {

  return (
    <div className="">
      <Routes> 
        <Route path="/" element={<Landing />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
      <ModalContainer />
      {/* <Landing /> */}
    </div>
  )
}

export default App
