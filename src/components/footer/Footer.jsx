import Collapsible from "react-collapsible"

const Footer = () => {


  return (
    <div className="w-screen bg-slate-300 h-fit text-slate-900 font-light p-5">
      <div className="grid sm:grid-cols-5 grid-cols-2 gap-4 text-center">

        <Collapsible trigger="About SpinCycle" className="hover:underline">
          <div className="text-xs">
            <p className="hover:underline">Our Mission and Impact</p>
            <p className="hover:underline">A Career With Us</p>
            <p className="hover:underline">Our Terms</p>
            <p className="hover:underline">Privacy</p>
          </div>
        </Collapsible>

        <Collapsible trigger="Our Solutions" className="hover:underline">
          <div className="text-xs">
            <p className="hover:underline">What We Do</p>
            <p className="hover:underline">Where We Operate</p>
            <p className="hover:underline">Refer A Friend Or Family</p>
          </div>
        </Collapsible>

        <Collapsible trigger="Join Us" className="hover:underline">
          <div className="text-xs">
            <p className="hover:underline">A Career With Us</p>
            <p className="hover:underline">Become A Driver</p>
            <p className="hover:underline">Become A Service Provider</p>
          </div>
        </Collapsible>

        <Collapsible trigger="Questions?" className="hover:underline">
          <div className="text-xs">
            <p className="hover:underline">Our FAQ</p>
            <p className="hover:underline">Contact Us</p>
          </div>
        </Collapsible>

        <Collapsible trigger="Contact Us" className="hover:underline">
          <div className="text-xs">
            <p className="hover:underline">FaceBook</p>
            <p className="hover:underline">Instagram</p>
            <p className="hover:underline">LinkedIn</p>
            <p className="hover:underline">Twitter</p>
          </div>
        </Collapsible>

      </div>

    </div>
  )
}

export default Footer