import { Link } from "react-router-dom"
import Footer from "../../components/footer/Footer"

const WhereWeOperate = () => {

  return(
    <div className="flex flex-col h-screen w-screen text-slate-900 bg-slate-200 overflow-x-hidden">

      <div className="pt-10 text-center sm:mb-20">
        <h1 className="font-gloock text-6xl hover:skew-y-2 hover:skew-x-2 transition duration-700">
          <Link className="text-slate-900 hover:text-slate-900 hover:bg-yellow-200 " to="/">SpinCycle</Link>
        </h1>
        <p className="font-vollkorn mt-3">The smart way to manage your clothes.</p>
      </div>

      <div className="grid sm:grid-cols-3 grid-cols-1 mx-5 text-center place-items-center mb-auto">

        <img className="max-h-80 sm:h-80 h-2/3 my-10 hover:scale-110 transition duration-700" src="../images/machine-on-grass.jpg" alt="machine on grass" />

        <div className="font-vollkorn">
          <p className="text-xl mb-5">
            WHERE WE OPERATE
          </p>
          <ul>
            <li className="text-lg">Massachusetts:</li>
            <ul>
              <li className="text-sm">Boston</li>
              <li className="text-sm">Somerville</li>
              <li className="text-sm">Chelsea</li>
              <li className="text-sm">Everett</li>
              <li className="text-sm">Malden</li>
              <li className="text-sm">Medford</li>
              <li className="text-sm">Revere</li>
              <li className="text-sm">Cambridge</li>
            </ul>
          </ul>
        </div>

        <img className="max-h-80 sm:h-80 h-2/3 my-10 hover:scale-110 transition duration-700" src="../images/machine-by-ocean.jpg" alt="machine by ocean" />
      </div>

      <Footer />
    </div>
  )
}

export default WhereWeOperate