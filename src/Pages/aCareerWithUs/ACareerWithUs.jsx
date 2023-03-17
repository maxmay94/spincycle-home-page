import { Link } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import BigHeader from "../../components/bigHeader/BigHeader"

const ACareerWithUs = () => { 

  return (
    <div className="flex flex-col h-screen text-slate-900 text-center font-vollkorn bg-slate-200 overflow-x-hidden">

      <BigHeader background={'bg-black-white-machine'} />


      <div className="text-3xl pt-20 pb-10">A Career With Us</div>

      <div className="mb-auto text-justify bg-slate-200">
        <div className="grid lg:grid-cols-1 grid-cols-1 gap-8 pb-2 place-items-center">


          <div className="mx-10 md:mx-40 lg:mx-80">
            <p className=""><span className="text-4xl">Our Mission</span>: SpinCycle is here to ensure that every step of the laundry process is easy and efficient. We do this by connecting people with local businesses that provide laundry services in their area in the most convenient way possible.
            </p>
            <br />
            <p>We are here to create an ecosystem that revolves around the laundry care industry. When you work with us, you know that we have dedicated our time and energy to help local businesses do their part to contribute to their communities. We do this by helping them manage their networks through innovation and sustainability in a way that allows them to better provide their services to their customers.
            </p>
          </div>

          
          <div className="w-screen pb-10">
            <div className="mx-16 sm:mx-24">
              <div className="text-center grid sm:grid-cols-2 grid-cols-1 mb-10">
                <div className="sm:pb-0 pb-10">
                  <h2 className="text-2xl">What you bring to the table?</h2>
                  <div className="text-left sm:text-center mt-2">
                    <li>A dedication to the work you do</li>
                    <li>Innovation to our systems and processes</li>
                    <li>Leadership qualities to help us</li>
                    <li>A good aditude and a thirst for knowledge</li>
                  </div>
                </div>

                <div className="">
                  <h2 className="text-2xl">What we bring to the table?</h2>
                  <div className="text-left sm:text-center mt-2">
                    <li>A competitive compensation package for your hard work</li>
                    <li>Support to help you succeed</li>
                    <li>A pathway to grow with us</li>
                    <li>A community</li>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className="m-0">
        <Footer />
      </div>
      
    </div>
  )
}

export default ACareerWithUs