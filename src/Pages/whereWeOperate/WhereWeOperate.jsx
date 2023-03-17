import { Link } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import SmallHeader from "../../components/smallHeader/SmallHeader"
import ThreeColumnsWithPictures from "../../components/threeColumnsWithPictures/ThreeColumnsWithPictures"

const WhereWeOperate = () => {

  return(
    <div className="flex flex-col h-screen w-screen text-slate-900 bg-slate-200 overflow-x-hidden">

      <SmallHeader />

      <ThreeColumnsWithPictures 
        picture1={{pic: '../images/machine-on-grass.jpg', alt: 'machine on grass'}} 
        picture2={{pic: '../images/machine-by-ocean.jpg', alt: 'machine by ocean'}}
      >
        
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

      </ThreeColumnsWithPictures>
      
      <Footer />
    </div>
  )
}

export default WhereWeOperate