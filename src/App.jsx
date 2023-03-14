import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { ModalContainer } from 'reoverlay'

import Landing from "./Pages/landing/Landing"
import FAQ from './Pages/FAQ/FAQ'
import WhereWeOperate from './Pages/whereWeOperate/WhereWeOperate'

function App() {

  return (
    <div className="">
      <Routes> 
        <Route path="/" element={<Landing />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/where_we_operate" element={<WhereWeOperate />} />
      </Routes>
      <ModalContainer />
      {/* <Landing /> */}
    </div>
  )
}

export default App
