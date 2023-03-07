import WashingMachineScene from "../washingMachine/WashingMachineScene"

const SectionOne = () => {

  return (
    <div className="w-screen font-gloock grid-cols-3">
      
      <h1 className=" col-1 mx-auto">THIS IS SECTION ONE</h1>

      <div className="col-span-2">
        <img src="../images/man-in-machine.jpg" alt="man-in-washing-machine" />
      </div>

    </div>
  )
}

export default SectionOne