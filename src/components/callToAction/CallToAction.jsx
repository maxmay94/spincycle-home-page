import { Link } from "react-router-dom"
const CallToAction = () => {

  return (
    <div className="h-fit py-10 bg-slate-200 md:text-lg text-slate-900 text-center font-quicksand grid grid-cols-3">
      <div className="w-2/3 md:col-span-2 col-span-3 mx-auto my-auto">

        <h1 className="text-3xl">We are hiring!</h1>
        <br />
        Are you or somone you know looking to make some extra cash? <br />
        <br />
        SpinCycle is hiring Drivers and Service Providers. Join today!<br />
        <br />

        <div className="flex-col">

          <div className="flex-1">
            <Link to="/a_career_with_us" className="text-slate-900 hover:text-blue-900">A Career With Us</Link>
          </div>

          <div className="flex-1">
            <Link to="/become_a_driver" className="text-slate-900 hover:text-blue-900">Become A Driver</Link>
          </div>

          <div className="flex-1">
            <Link to="/become_a_service_provider" className="text-slate-900 hover:text-blue-900">Become A Service Provider</Link>
          </div>

        </div>
        
      </div>

      <div className="md:col-span-1 col-span-3 mx-10 md:my-auto my-10">
        <img src="public/images/laundromat-pastel.png" alt="" />
      </div>
    </div>
  )
}

export default CallToAction