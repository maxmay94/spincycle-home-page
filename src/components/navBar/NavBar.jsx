import { Link } from "react-router-dom"
import { Reoverlay } from "reoverlay"
import MessageModal from "../modals/messageModal/MessageModal"

const NavBar = () => {

  const showMessage = () => {
    Reoverlay.showModal(MessageModal, {
      text: "Oops, this page is still under construction!"
    })
  }

  const linkStyle = "text-slate-900 hover:text-slate-900 hover:bg-yellow-200 transition duration-700"

  return(
    <div className="fixed top-0 w-screen bg-slate-200/90 drop-shadow-lg backdrop-blur-md h-[4vh] flex text-slate-900 font-quicksand z-10 overflow-x-hidden">

      <div className="my-auto pl-5 sm:pl-10 font-gloock flex-1">
        <Link 
          to='/'
          className={linkStyle}
        >
          SpinCycle
        </Link>
      </div>

      <div 
        className="my-auto flex-1 hover:cursor-pointer"
        onClick={showMessage}
      >
        About
      </div>

      <div 
        className="my-auto flex-1 hover:cursor-pointer"
        onClick={showMessage}
      >
        Careers
      </div>

      <div 
        className="my-auto pr-5 sm:pr-14 hover:cursor-pointer"
        onClick={showMessage}
      >
        Contact
      </div>

    </div>
  )
}

export default NavBar