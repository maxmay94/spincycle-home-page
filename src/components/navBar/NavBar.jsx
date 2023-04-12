import { Link } from "react-router-dom"

const NavBar = () => {

  const linkStyle = "text-slate-900 hover:text-slate-900 hover:bg-yellow-200 transition duration-700"

  return(
    <div className="fixed top-0 w-screen bg-slate-200/90 drop-shadow-lg backdrop-blur-md h-[4vh] flex text-slate-900 font-quicksand z-10 overflow-x-hidden">

      <div className="pl-3 sm:pl-10 font-gloock my-auto flex-1">
        <Link 
          to='/'
          className={linkStyle}
        >
          SpinCycle
        </Link>
      </div>

      <div className="my-auto flex-1">
        About
      </div>

      <div className="my-auto flex-1">
        Careers
      </div>

      <div className="my-auto pr-3 sm:pr-14">
        Contact
      </div>

    </div>
  )
}

export default NavBar