import { Link } from "react-router-dom"
import Footer from "../../components/footer/Footer"

const FAQ = () => {
  return (
    <div className="bg-slate-200 h-screen w-screen text-slate-900">
      <div className="absolute top-0 font-gloock">
        <div className="p-10 hover:skew-x-2 hover:skew-y-2 transition duration-700">
          <Link to="/" className="text-6xl text-inherit hover:text-slate-900 hover:bg-yellow-200 transition duration-700">SpinCycle</Link>
        </div>
        <p className="pl-10 text-2xl font-vollkorn">Frequently Asked Questions</p>
      </div>

      <div className="grid grid-cols-3 w-[100vw] h-[95vh]">

        <div className="bg-slate-200 w-full col-span-2">
          
        </div>
        <div className="bg-machine-on-grass bg-cover bg-center col-span-1">

        </div>

      </div>


      {/* <div className="absolute bottom-0"> */}
        <Footer />
      {/* </div> */}
    </div>
  )
}

export default FAQ