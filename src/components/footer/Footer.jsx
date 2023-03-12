import Collapsible from "react-collapsible"

const Footer = () => {


  return (
    <div className="w-screen bg-slate-300 h-fit text-slate-900 font-light p-5">
      <div className="grid grid-cols-5 gap-4 text-base text-center">

        <Collapsible trigger="About SpinCycle" className="hover:underline">
          <div className="text-xs">
            <p>Our Mission and Impact</p>
            <p>A Career With Us</p>
            <p>Our Terms</p>
            <p>Privacy</p>
          </div>
        </Collapsible>

        <Collapsible trigger="Our Solutions" className="hover:underline">
          <div className="text-xs">
            <p>What We Do</p>
            <p>Where We Operate</p>
            <p>Refer A Friend Or Family</p>
          </div>
        </Collapsible>

        <Collapsible trigger="Join Us" className="hover:underline">
          <div className="text-xs">
            <p>A Career With Us</p>
            <p>Become A Driver</p>
            <p>Become A Service Provider</p>
          </div>
        </Collapsible>

        <Collapsible trigger="Questions?" className="hover:underline">
          <div className="text-xs">
            <p>Our FAQ</p>
            <p>Contact Us</p>
          </div>
        </Collapsible>

        <Collapsible trigger="Contact Us" className="hover:underline">
          <div className="text-xs">
            <p>FaceBook</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>Twitter</p>
            <p>TikTok</p>
            <p>YouTube</p>
          </div>
        </Collapsible>
      </div>

    </div>
  )
}

export default Footer