
import { BiHeart } from "react-icons/bi";
interface IMusic {
    id : number,
    image : string,
    name : string,
    singer : string,
    second : string,
}
const Music = ( {id , image , name , singer , second} : IMusic) => {
    
  return (
    <div className='flex gap-2 bg-white justify-center items-center'>
        <div>{id}</div>
        <div className="rounded w-10 h-10"> <img src={image} width={40} height={40} alt={name} /> </div>
        <div>{name}</div>
        <div>{singer} </div>
        <div>{second}</div>
        <div><BiHeart/></div>
    </div>
  )
}

export default Music