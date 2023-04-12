const NavBar = () => {

  return(
    <div className="fixed top-0 w-screen bg-slate-200/90 drop-shadow-lg backdrop-blur-md h-[4vh] flex text-slate-900 font-quicksand z-10 overflow-x-hidden">
      <p className="pl-10 font-gloock my-auto flex-1">SpinCycle</p>
      <p className="my-auto flex-1">About</p>
      <p className="my-auto flex-1">Careers</p>
      <p className="my-auto pr-10">Contact</p>
    </div>
  )
}

export default NavBar