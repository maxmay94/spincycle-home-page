// const pictureClass = 'max-h-[750px] lg:max-h-1/2 h-3/4 sm:h-96 md:h-2/3 lg:h-1/2 lg:px-10 lg:py-10 hover:scale-110 transition duration-700'
const pictureClass = 'w-3/5 lg:w-[80%] py-20 lg:py-0 hover:scale-110 transition duration-700'

const ThreeColumnsWithPictures = ( props ) => {

  return(
    <div className={`grid ${props.breakpoint ? props.breakpoint : 'sm:grid-cols-3'} grid-cols-1 mx-5 text-center place-items-center mb-auto font-vollkorn h-fit`}>

      <img 
        className={pictureClass} 
        src={props.picture1.pic} 
        alt={props.picture1.alt} 
      />

        <div className="lg:mt-10">
          {props.children}
        </div>

      <img 
        className={`${pictureClass} mb-20 lg:mb-0`}
        src={props.picture2.pic} 
        alt={props.picture1.alt} 
      />
    </div>
  )
}

export default ThreeColumnsWithPictures