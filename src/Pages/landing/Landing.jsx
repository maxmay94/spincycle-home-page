import MainHeader from "../../components/mainHeader/MainHeader"
import SectionOne from "../../components/sectionOne/SectionOne"
import SectionTwo from "../../components/sectionTwo/SectionTwo"

const Landing = () => {

  return(
    <div className="absolute top-0">
      <MainHeader />
      <SectionOne />
      <SectionTwo />
    </div>
  )
}

export default Landing