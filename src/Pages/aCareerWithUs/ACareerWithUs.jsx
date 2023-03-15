import { Link } from "react-router-dom"
import Footer from "../../components/footer/Footer"

const ACareerWithUs = () => { 

  return (
    <div className="flex flex-col h-screen text-slate-900 text-center font-vollkorn bg-slate-200">
      <div className="bg-black-white-machine h-2/3 bg-cover bg-center">

        <div className="w-fit sm:p-20 p-10">
          <div className="bg-slate-900/50 backdrop-blur-sm hover:backdrop-blur-none backdrop-hue-rotate-90 hover:hue-rotate-30 backdrop-contrast-150 backdrop-invert p-5 transition duration-700">
            <h1 className="font-gloock sm:text-7xl text-6xl bg-red-200/20 w-[100%] hover:bg-yellow-200 hover:skew-x-3 hover:skew-y-2 transition duration-700">
              <Link to="/" className="text-slate-900 hover:text-slate-900">SpinCycle</Link>
            </h1>
            <div className="pt-3 sm:text-base text-sm">The Smart way to manage your clothes.</div>
          </div>
        </div>
      </div>


      <div className="text-3xl pt-20 pb-10">A Career With Us</div>

      <div className="mb-auto  text-justify  bg-slate-200">
        <div className="grid grid-cols-1 gap-8 pb-20">

          <div className="col-span-2 mx-16 sm:mx-20">
            <p className=""><span className="text-4xl">Our Mission</span>: SpinCycle is here to ensure that every step of the laundry process is easy and efficient. We do this by connecting people with local businesses that provide laundry services in their area in the most convenient way possible.
            </p>
            <br />
            <p>We are here to create an ecosystem that revolves around the laundry care industry. When you work with us, you know that we have dedicated our time and energy to help local businesses do their part to contribute to their communities. We do this by helping them manage their networks through innovation and sustainability in a way that allows them to better provide their services to their customers.
            </p>
          </div>

          <div className="text-center grid sm:grid-cols-2 grid-cols-1 mx-8 sm:mx-20">
            <div className="sm:pb-0 pb-10">
              <h2 className="text-2xl">What you bring to the table?</h2>
              <div className="text-left sm:ml-10 ml-6">
                <li>A Dedication to the work you do</li>
                <li>Innovation to our systems and processes</li>
                <li>Leadership qualities to help us</li>
                <li>A good aditude and a thirst for knowledge</li>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl">What we bring to the table?</h2>
              <div className="text-left sm:ml-10 ml-6">
                <li>A competitive compensation package for your hard work</li>
                <li>Support to help you succeed</li>
                <li>A pathway to grow with us</li>
                <li>A community</li>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
      
    </div>
  )
}

export default ACareerWithUs