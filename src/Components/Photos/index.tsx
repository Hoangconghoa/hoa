import { useState } from "react";
const photos = [
    
        {id : 1, name:'Hình 1', link : 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/03/24/redminote12-black-2.png'},
        {id : 2, name:'Hình 2', link : 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/03/24/redminote12-green-7.png'},
        {id : 3, name:'Hình 3', link : 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/42/307245/xiaomi-redmi-12-xanh-duong-thumb-1-200x200.jpg'},
        {id : 4, name:'Hình 4', link : 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/42/307245/xiaomi-redmi-12-xanh-duong-thumb-1-200x200.jpg'},
];

const Photos = () => {
  const [id, setId] = useState(1);
  const next = () =>{
    let currenId = id
    if(currenId >= photos.length ){
      currenId = 1;
    }
    else{
      currenId+=1
    }
    console.log(currenId , " " , photos.length)
    setId(currenId);
  }
  return (
    <div>
      <div className="w-20 h-20"><img src={photos[id-1].link}  alt="" /></div>
      
      {/* {
        photos.map((photo)=> {
          return(

            <div>
              <img src={photo.link} alt="" />
            </div>
          )
        }) 
      } */}
      <button className="btn">prev</button>
      <button className="btn" onClick={next}>next</button>
    </div>
    
  )
}

export default Photos