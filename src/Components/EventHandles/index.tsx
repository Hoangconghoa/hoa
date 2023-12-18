import  { useState} from "react";


const EventHandles = () => {
    // function handleClick(){
    //     console.log("Bạn đã click vào tôi")
    // }
  const [isModel, setIsModel] = useState(false)
  const handleModel = ()=>{
    setIsModel(!isModel)
  }
  return (
    <div>
        <div>
          <button className="btn" onClick={handleModel}>Mua Ngay</button>
        </div>
        {
        isModel &&
            <div className="model">
            <div className="w-screen h-screen flex justify-center items-center bg-slate-500">
              <div className="bg-white h-[50px]" >Hi model</div>
            </div>
          </div>
          
        }
            
          
        
       
    </div>
  )
}

export default EventHandles