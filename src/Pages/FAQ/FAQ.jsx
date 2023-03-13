import { Link } from "react-router-dom"
import Footer from "../../components/footer/Footer"

const FAQ = () => {
  return (
    <div className="bg-slate-200 h-screen w-screen text-slate-900">
      <div className="font-gloock">
        <div className="p-10 hover:skew-x-2 hover:skew-y-2 transition duration-700 text-center">
          <Link to="/" className="text-6xl text-inherit hover:text-slate-900 hover:bg-yellow-200 transition duration-700">SpinCycle</Link>
        </div>
      </div>

      <div className="grid grid-cols-7 w-[100vw] h-[85vh]">

        <div className="bg-slate-200 w-full col-span-4">
          <div className="px-10 text-center font-vollkorn">

            <p className="text-2xl ">Frequently Asked Questions</p>
            <br />

            <div className="text-xl">Who cleans my clothes?</div>
            <div className="">
            Great news! You decide yourself. We partner with a number of service providers who are dedicated to bringing you the best quality service. What that means is that you have the option to pick the best business that fits your needs.
            </div>

            <br />

            <div className="text-xl">How do I schedule my first order?</div>
            <div>You can schedule your first order right from our website.</div>

            <br />

            <div className="text-xl">What happens after I schedule my order?</div>
            <div>Delivery? We notify you when we pick up your order, when the service provider receives your order, and when your order is ready and on the way to you.</div>
            <div>Pickup and drop off? We notify the service provider of your order and you reserve your spot. All you have to do is to bring your clothes to them.</div>

            <br />

            <div className="text-xl">How soon can I get my clothes?</div>
            <div>That depends on the business you choose. Some providers have same day service while others take a bit longer. Rest assured, when they are done, we will be on our way to drop off your clothes immediately.</div>

            <br />
            <div className="text-xl">What if I’m not home?</div>
            <div>We are dedicated to working around your schedule. We typically follow your preferred pickup and delivery times, and we provide you updates on our progress. If for any reason you’re not home when we're scheduled to pick up or drop off your clothes, you can leave a special instruction, or extend your timeframe. We understand </div>


          </div>

          
        </div>

        <div className="bg-machine-on-grass bg-cover bg-center col-span-3">

        </div>

      </div>


      {/* <div className="absolute bottom-0"> */}
        <Footer />
      {/* </div> */}
    </div>
  )
}

export default FAQ