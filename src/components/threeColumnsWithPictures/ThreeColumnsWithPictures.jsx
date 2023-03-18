const pictureClass = 'max-h-[55vh] h-2/3 sm:h-96 md:h-fit my-10 lg:px-16 px-3 hover:scale-110 transition duration-700'

const ThreeColumnsWithPictures = (props) => {

  return(
    <div className={`grid ${props.breakpoint ? props.breakpoint : 'sm:grid-cols-3'} grid-cols-1 mx-5 text-center place-items-center mb-auto font-vollkorn`}>

      <img 
        className={pictureClass} 
        src={props.picture1.pic} 
        alt={props.picture1.alt} 
      />

      {props.children}

      <img 
        className={pictureClass}
        src={props.picture2.pic} 
        alt={props.picture1.alt} 
      />
    </div>
  )
}

export default ThreeColumnsWithPictures