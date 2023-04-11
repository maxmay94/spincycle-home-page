import MainHeader from "../../components/mainHeader/MainHeader"
import SectionOne from "../../components/sectionOne/SectionOne"
import CallToAction from "../../components/callToAction/CallToAction"
// import SectionTwo from "../../components/sectionTwo/SectionTwo"
import Footer from "../../components/footer/Footer"

const Landing = () => {

  return(
    <div className="absolute top-0">
      <MainHeader />
      <CallToAction />
      <SectionOne />
      {/* <SectionTwo /> */}

      <Footer />
    </div>
  )
}

export default Landing