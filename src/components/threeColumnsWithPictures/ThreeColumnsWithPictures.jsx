const pictureClass = 'w-3/5 lg:w-[80%] py-20 lg:py-0 hover:scale-110 transition duration-700'

const ThreeColumnsWithPictures = ( props ) => {

  return(
    <div className={`grid ${props.breakpoint ? props.breakpoint : 'sm:grid-cols-3'} grid-cols-1 mx-5 text-center place-items-center mb-auto font-vollkorn h-fit lg:mt-10`}>

      <img 
        className={pictureClass} 
        src={props.picture1.pic} 
        alt={props.picture1.alt} 
      />

        <div className="lg:mt-10">
          {props.children}
        </div>

      <img 
        className={`${pictureClass}`}
        src={props.picture2.pic} 
        alt={props.picture1.alt} 
      />
    </div>
  )
}

export default ThreeColumnsWithPictures