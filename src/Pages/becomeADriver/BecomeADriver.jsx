import { Link } from "react-router-dom"
import Footer from "../../components/footer/Footer"

const BecomeADriver = () => { 

  return (
    <div className="flex flex-col h-screen w-screen text-slate-900 bg-slate-200 overflow-x-hidden">

      <div className="pt-10 text-center sm:mb-20">
        <h1 className="font-gloock text-6xl hover:skew-y-2 hover:skew-x-2 transition duration-700">
          <Link className="text-slate-900 hover:text-slate-900 hover:bg-yellow-200 " to="/">SpinCycle</Link>
        </h1>
        <p className="font-vollkorn mt-3">The smart way to manage your clothes.</p>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 mx-5 text-center place-items-center mb-auto">

        <img className="sm:max-h-[90%] max-h-96 sm:h-96 md:h-2/3 h-2/3 my-10 md:my-0 lg:px-16 px-3 hover:scale-110 transition duration-700" src="../images/suv-desert.jpg" alt="car in desert" />

        <div className="font-vollkorn">
          <p className="text-xl mb-5">
            Become a driver
          </p>

            <p className="text-lg">Why drive with SpinCycle?</p>
            <div className="text-sm mx-5">
              <p className="py-2">You’re working with local businesses to help them better help their communities</p>
              <p className="py-2">Our schedule revolves around your time, not the other way around</p>
              <p className="py-2">We have an extensive support network to help you if and when you need it</p>
            </div>

            <p className="text-lg mt-10">What's in it for you?</p>            
            <div className="text-sm mx-5">
              <p className="py-2">Base pay per order - no order is too small, your money is yours to keep</p>
              <p className="py-2">Your tips - belong to you, we are completely transparent and we will never take a share of the money you worked for</p>
              <p className="py-2">Bonus - lots of chances to earn on all the work you put in</p>
            </div>

            <p className="text-lg mt-10">How do I join?</p>            
            <div className="text-sm mx-5">
              <p className="py-2">Are you at least 18 and older?</p>
              <p className="py-2">Do you have a car or motorcycle?</p>
              <p className="py-2">Can you pass a background check</p>
              <p className="py-2">Check back soon...</p>
            </div>
          </div>

          <img className="col-span-1 sm:max-h-[90%] max-h-96 sm:h-96 md:h-2/3 h-2/3 my-10 md:my-0 lg:px-16 px-3 hover:scale-110 transition duration-700" src="../images/suv-dark.jpg" alt="suv at night" />
        </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  )
}

export default BecomeADriver