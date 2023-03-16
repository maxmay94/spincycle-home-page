import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { ModalContainer } from 'reoverlay'

import Landing from "./Pages/landing/Landing"
import FAQ from './Pages/FAQ/FAQ'
import WhereWeOperate from './Pages/whereWeOperate/WhereWeOperate'
import ACareerWithUs from './Pages/aCareerWithUs/ACareerWithUs'
import BecomeADriver from './Pages/becomeADriver/BecomeADriver'

function App() {

  return (
    <div className="">
      <Routes> 
        <Route path="/" element={<Landing />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/where_we_operate" element={<WhereWeOperate />} />
        <Route path="/a_career_with_us" element={<ACareerWithUs />} />
        <Route path="/become_a_driver" element={<BecomeADriver />} />
      </Routes>
      <ModalContainer />
      {/* <Landing /> */}
    </div>
  )
}

export default App
