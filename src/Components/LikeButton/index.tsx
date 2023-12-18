import React from 'react'
import  { AiFillLike , AiFillSmile } from "react-icons/ai";
const LikeButton = () => {
    const [isLike , setIsLike] = React.useState(false);
    const handleLike = ()=>{
        setIsLike(!isLike);
    }
    
    return (

        <div className='  mx-20 my-20'>
            <button onMouseEnter={handleLike} onMouseLeave={handleLike} className='btn flex '> <AiFillLike/>Thích</button>
            {
            isLike &&  
            <div className='nav flex gap-2'>
                <AiFillLike/> 
                <AiFillSmile/>
            </div>
            }
           
        </div>
        
    )
    
}

export default LikeButton