
const ThreeColumnsWithPictures = (props) => {

  return(
    <div className="grid lg:grid-cols-3 grid-cols-1 mx-5 text-center place-items-center mb-auto">

      <img className="max-h-96 md:h-fit sm:h-96 h-2/3 my-10 lg:px-16 px-3 hover:scale-110 transition duration-700" src={props.picture1.pic} alt={props.picture1.alt} />

      {props.children}

      <img className="max-h-96 md:h-fit sm:h-96 h-2/3 my-10 lg:px-16 px-3 hover:scale-110 transition duration-700" src={props.picture2.pic} alt={props.picture1.alt} />
    </div>
  )
}

export default ThreeColumnsWithPictures